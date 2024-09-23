import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../navbar";
import Footer from"../footer";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nidz Apparel",
  description: "This is the clothing band",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
       <div className="max-w-[90%] mx-auto">
        <Providers>
         <Navbar/>
        {children}
        <Footer/>
        </Providers>
        </div>
        </body>
    </html>
  );
}
