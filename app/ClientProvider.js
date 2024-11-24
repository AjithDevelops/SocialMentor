'use client';
import { SessionProvider } from 'next-auth/react'; // Import GlobalProvider

export default function ClientSessionProvider({ children }) {
    return (
      <SessionProvider>
          {children}
      </SessionProvider>
    );
  }