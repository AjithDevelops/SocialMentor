import "@/styles/globals.css";
import ClientSessionProvider from './ClientProvider'
export const metadata = {
  title: "Social Mentor",
  description: "Social Mentor is an Digital Marketing Agency that helps you grow your business with Social Media Marketing",
};

const RootLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/SM.jpg" />
        <meta property="og:title" content="Social Mentor" />
        <meta property="og:description" content="Social Mentor is a Digital Marketing Agency that helps you grow your business with Social Media Marketing" />
        <meta property="og:image" content="/assets/SM.jpg" />
        <meta property="og:url" content="https://socialmentor.co" />
        <meta property="og:type" content="website" />
      </head>
      <body>
        <ClientSessionProvider>
        {children}
        </ClientSessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
