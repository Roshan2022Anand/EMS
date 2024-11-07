import localFont from "next/font/local";
import "./globals.css";
import ReduxProvider from "@/components/ReduxProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Employee management",
  description: "This is the landing page for the employee management system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen`}
        >
          {children}
        </body>
      </ReduxProvider>
    </html>
  );
}
