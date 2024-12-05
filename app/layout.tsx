import type { Metadata } from "next";
import "./globals.css";
import { ibmPlexMono, raleway } from "./fonts/fonts";
import Navbar from "./_components/header/Navbar";
import Footer from "./_components/footer/Footer";

export const metadata: Metadata = {
  title: "Saurabh",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexMono.variable} ${raleway.variable} antialiased bg-black`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
