import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google"; // Fonts import
import "./globals.css";
import Navbar from "@/components/ui/Navbar"; // ✅ Navbar Import
import Footer from "@/components/ui/Footer"; // ✅ Footer Import
import ScrollToTop from "@/components/ui/ScrollToTop"; // ✅ NEW: Scroll Button Import

// --- FONT CONFIGURATION ---
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
  description: "Revolutionizing Transport Solutions | India's Leading Trailer Manufacturer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${oswald.variable} ${roboto.variable} bg-[#050505] text-white antialiased`}>
        
        {/* Top Navigation */}
        <Navbar />
        
        {/* Main Page Content */}
        {children}
        
        {/* Bottom Footer */}
        <Footer />
        
        {/* Floating Scroll to Top Button */}
        <ScrollToTop />
        
      </body>
    </html>
  );
}