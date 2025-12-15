import Hero from "@/components/ui/Hero";
import About from "@/components/ui/About";
import Highlights from "@/components/ui/Highlights";
import Commitment from "@/components/ui/Commitment";
import TrustedPartners from "@/components/ui/TrustedPartners";
import ProductFleet from "@/components/ui/ProductFleet";
import ServicesAdvantage from "@/components/ui/ServicesAdvantage";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      {/* Navbar yahan se hata diya kyunki wo layout.tsx se aayega */}
      
      <Hero />
      <About />
      <Highlights />
      <Commitment />
      <TrustedPartners />
      <ProductFleet />
      <ServicesAdvantage />
      
      {/* Footer bhi yahan se hata diya kyunki wo layout.tsx se aayega */}
    </main>
  );
}