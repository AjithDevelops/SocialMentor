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
        <link rel="icon" href="/assets/SM_crop.jpg" />
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
