import "@/styles/globals.css";
export const metadata = {
  title: "Social Mentor",
  description: "Social Mentor is an Digital Marketing Agency that helps you grow your business with Social Media Marketing",
};

const RootLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
