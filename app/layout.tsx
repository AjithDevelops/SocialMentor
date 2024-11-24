import "@/styles/globals.css";
import ClientSessionProvider from './ClientProvider'
export const metadata = {
  title: "Social Mentor",
  description: "Social Mentor is an Digital Marketing Agency that helps you grow your business with Social Media Marketing",
};

const RootLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <html lang="en">
      <body>
        <ClientSessionProvider>
        {children}
        </ClientSessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
