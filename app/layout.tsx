import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "@/assets/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({subsets: ['latin']});
export const metadata: Metadata = {
  title: "Chef Jep",
  description: "Home of the Famous Lomi sa Palayok! Chef Jep is the new Dalig Republiq!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta property="og:image" content="<generated>" />
      <meta property="og:image:type" content="<generated>" />
      <meta property="og:image:width" content="<generated>" />
      <meta property="og:image:height" content="<generated>" />
      </head>
      <body
        className={`${inter.className}`} > 
          <Header />
          
          <main className="mx-auto max-auto ">
            {children}
          </main>
          <Footer/>
      </body>
    </html>
  );
}
