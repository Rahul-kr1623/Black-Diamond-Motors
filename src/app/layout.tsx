import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google"; // Fonts import
import "./globals.css";
import Navbar from "@/components/ui/Navbar"; // ✅ Navbar Import
import Footer from "@/components/ui/Footer"; // ✅ Footer Import

const oswald = Oswald({ 
  subsets: ["latin"], 
  variable: "--font-oswald",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const roboto = Roboto({ 
  subsets: ["latin"], 
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Black Diamond Motors",
  description: "Revolutionizing Transport Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${oswald.variable} ${roboto.variable} bg-black text-white antialiased`}>
        
        <Navbar /> {/* ✅ Navbar Top par */}
        
        {children} {/* Yahan beech mein pages (Home, About, etc.) aayenge */}
        
        <Footer /> {/* ✅ Footer Bottom par */}
        
      </body>
    </html>
  );
}