"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// --- SERVICES DATA ---
const services = [
  { 
    id: 1, 
    title: "After Sales", 
    icon: "/services/after-sales.png", 
    desc: "Black Diamond Motors is renowned for providing reliable and viable products to its customers. We prioritize the consistent support of prompt and quality services.",
    link: "/services/after-sales" 
  },
  { 
    id: 2, 
    title: "Custom Designs", 
    icon: "/services/custom-designs.png", 
    desc: "At Black Diamond Motors, we take pride in offering a diverse selection of products that cater to our customers' specific requirements.",
    link: "/services/custom-designs" 
  },
  { 
    id: 3, 
    title: "Drivers / Training", 
    icon: "/services/drivers-training.png", 
    desc: "At Black Diamond Motors, we have established strong connections with fleet driver suppliers, enabling us to fulfill your staffing needs efficiently.",
    link: "/services/training" 
  },
  { 
    id: 4, 
    title: "Free Consultancy", 
    icon: "/services/free-consultancy.png", 
    desc: "At Black Diamond Motors, we believe in the importance of efficient project planning, and we are committed to assisting our customers every step of the way.",
    link: "/services/consultancy" 
  },
  { 
    id: 5, 
    title: "Onsite Services", 
    icon: "/services/onsite-services.png", 
    desc: "Our service camps, mobile service vans, and an extensive service network, are designed for minimizing disruptions and maximizing performance.",
    link: "/services/onsite" 
  },
  { 
    id: 6, 
    title: "Pickup / Delivery", 
    icon: "/services/pickup-delivery.png", 
    desc: "By utilizing our vehicle pickup and delivery service, you can save both time and money. Our dedicated drivers ensure a smooth and hassle-free transfer.",
    link: "/services/pickup" 
  },
];

// --- ADVANTAGE DATA (LINKS UPDATED: Removed '/about') ---
const advantages = [
  { 
    id: 1, 
    title: "Quality Assurance", 
    desc: "Ensuring Consistent Quality: Black Diamond Motors' Quality Assurance",
    link: "/advantage#quality"  // ✅ Corrected Link
  },
  { 
    id: 2, 
    title: "Highest Resale", 
    desc: "Unmatched Durability and Resale Value: Black Diamond Motors Sets the Standard",
    link: "/advantage#resale"   // ✅ Corrected Link
  },
  { 
    id: 3, 
    title: "Design Strength", 
    desc: "Unleashing Design Strength: Black Diamond Motors' Innovative Solutions",
    link: "/advantage#design"   // ✅ Corrected Link
  },
  { 
    id: 4, 
    title: "Express Delivery", 
    desc: "Swift and Efficient: Black Diamond Motors' Express Delivery Service",
    link: "/advantage#express"  // ✅ Corrected Link
  },
];

const ServicesAdvantage = () => {
  return (
    <section className="relative w-full bg-[#0f0f0f] py-24 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* ================= PART A: OUR SERVICES ================= */}
        <div id="services" className="mb-32 scroll-mt-24">
          <div className="text-center mb-16">
            <h3 className="text-red-600 font-bold text-xs tracking-[0.2em] uppercase mb-2">CONNECTING SERVICES, EVERYWHERE YOU GO</h3>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white uppercase">Our Services</h2>
            <div className="h-1 w-20 bg-zinc-700 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.id} href={service.link}>
                <ServiceCard service={service} />
              </Link>
            ))}
          </div>
        </div>

        {/* ================= PART B: OUR ADVANTAGE ================= */}
        <div id="advantage" className="scroll-mt-24">
          <div className="text-center mb-16">
            <h3 className="text-red-600 font-bold text-xs tracking-[0.2em] uppercase mb-2">BLACK DIAMOND MOTORS SETS THE STANDARD</h3>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white uppercase">Our Advantage</h2>
            <div className="h-1 w-20 bg-zinc-700 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv) => (
              <Link key={adv.id} href={adv.link}>
                <AdvantageCard adv={adv} />
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

// ... (ServiceCard aur AdvantageCard components same rahenge, unme koi change nahi) ...
const ServiceCard = ({ service }: { service: any }) => {
  return (
    <motion.div 
      className="group relative bg-[#111] border border-zinc-800 p-8 h-96 flex flex-col items-center text-center cursor-pointer overflow-hidden transition-all duration-300 hover:border-red-600 hover:bg-[#161616] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(220,38,38,0.1)]"
    >
      <div className="relative w-20 h-20 mb-6 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-zinc-200 group-hover:border-red-600 shrink-0">
        <Image src={service.icon} alt={service.title} width={40} height={40} className="object-contain" />
      </div>
      <h3 className="text-xl font-oswald font-bold text-white uppercase mb-3 tracking-wide group-hover:text-red-500 transition-colors">{service.title}</h3>
      <p className="text-zinc-500 text-xs font-roboto leading-relaxed px-2 mb-6 flex-grow">{service.desc}</p>
      <div className="text-red-600 text-xs font-bold uppercase tracking-widest border-b border-red-600/0 group-hover:border-red-600 transition-all pb-1">Read More</div>
    </motion.div>
  );
};

const AdvantageCard = ({ adv }: { adv: any }) => {
  return (
    <div className="group relative h-96 w-full bg-gradient-to-b from-zinc-800 to-[#0a0a0a] border-x border-zinc-700/50 flex flex-col justify-end p-6 overflow-hidden hover:shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-all duration-500 cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-30 group-hover:opacity-50 transition-opacity" />
      <span className="absolute top-4 right-4 text-7xl font-black font-oswald select-none transition-colors text-transparent bg-clip-text bg-gradient-to-b from-zinc-700 to-zinc-900 group-hover:from-red-900/50 group-hover:to-zinc-900">0{adv.id}</span>
      <div className="relative z-10 mb-10">
        <h3 className="text-2xl font-oswald font-bold text-white uppercase leading-tight mb-4 tracking-tight group-hover:text-red-500 transition-colors">{adv.title}</h3>
        <p className="text-zinc-400 text-sm font-roboto leading-relaxed opacity-80 group-hover:opacity-100 group-hover:text-white transition-all">{adv.desc}</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-700 group-hover:h-12 group-hover:bg-red-600 transition-all duration-300 flex items-center justify-center">
        <span className="text-white text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 flex gap-2">Read More <ArrowRight className="w-3 h-3" /></span>
      </div>
    </div>
  );
};

export default ServicesAdvantage;