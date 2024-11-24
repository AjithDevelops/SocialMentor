import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'openid profile email',
          prompt: 'consent',
          access_type: 'offline', // Required to get a refresh token
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: true, // Enable debug mode
  // Update the session configuration
  session: {
    strategy: "jwt",
    maxAge: 2 * 24 * 60 * 60, // 2 days in seconds
  },
  callbacks: {
    async jwt({ token, account }) {
      console.log('JWT Callback - Token before assignment:', token);
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.expiresAt = (account.expires_at || 0) * 1000; // Convert expires_at to milliseconds
      }

      
      // Refresh token logic
      if (token.expiresAt && Date.now() > token.expiresAt - 5 * 60 * 1000) {
        const data = await refreshAccessToken(token.refreshToken);
        token.accessToken = data.accessToken;
        token.refreshToken = data.refreshToken || token.refreshToken;
        token.expiresAt = Date.now() + (data.expiresIn * 1000);
      }

      console.log('JWT Callback - Token after assignment:', token);
      return token;
    },
    async session({ session, token }) {
      console.log('Session Callback - Token:', token); // Added logging
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.expires = new Date(token.expiresAt).toISOString();
      console.log('Session Callback - Session:', session);
      return session;
    },
  },
});


async function refreshAccessToken(refreshToken) {
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Failed to refresh access token: ${data.error}`);
  }

  return {
    accessToken: data.access_token,
    expiresIn: data.expires_in,
    refreshToken: data.refresh_token || refreshToken, // Google may or may not return a new refresh token
  };
}


export { handler as GET, handler as POST };

