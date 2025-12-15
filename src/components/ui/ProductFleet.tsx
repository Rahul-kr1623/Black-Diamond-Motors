"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// --- PRODUCT DATA (Synced with Navbar Links) ---
const products = [
  { 
    id: 1, 
    name: "Tipper", 
    desc: "A versatile material carrier container mounted on a truck chassis with the ability to tip the container and discharge materials efficiently.", 
    image: "/products/tipper.png", 
    link: "/products/tipper"  // Same as Navbar
  },
  { 
    id: 2, 
    name: "Tip Trailer", 
    desc: "A semi-trailer with hydraulic tipping, commonly known as a tip trailer. An integral part of commercial truck applications for bulk transport.", 
    image: "/products/tip-trailer.png", 
    link: "/products/tip-trailer" // Same as Navbar
  },
  { 
    id: 3, 
    name: "Side Wall Trailer", 
    desc: "A non-tippable semi-trailer featuring drop-down side walls and French doors, ideal for general cargo and palletized goods.", 
    image: "/products/sidewall-trailer.png", 
    link: "/products/sidewall" // Same as Navbar
  },
  { 
    id: 4, 
    name: "Flat Bed / Skeletal Trailer", 
    desc: "Designed for container logistics and steel transport. The robust skeletal structure ensures safety for heavy, concentrated loads.", 
    image: "/products/flatbed-trailer.png", 
    link: "/products/flatbed" // Same as Navbar
  },
  { 
    id: 5, 
    name: "Chassis & Car-Bike Carrier", 
    desc: "Specialized double-deck carriers designed for the safe and efficient transportation of automobiles and two-wheelers.", 
    image: "/products/car-carrier.png", 
    link: "/products/car-carrier" // Same as Navbar
  },
  { 
    id: 6, 
    name: "Special Application Trailer", 
    desc: "Custom-engineered solutions including Bulkers and Tankers for specific logistical challenges like cement and fly ash transport.", 
    image: "/products/special-application-trailer.png", 
    link: "/products/special" // Same as Navbar
  },
  { 
    id: 7, 
    name: "Curtain Sider Trailer", 
    desc: "Features flexible curtain sides for rapid side-loading while protecting cargo from weather. Perfect for FMCG logistics.", 
    image: "/products/curtain-sider.png", 
    link: "/products/curtain-sider" // Same as Navbar
  },
  { 
    id: 8, 
    name: "Rock Body", 
    desc: "Built with high-grade steel to withstand the extreme impact of heavy rocks and boulders in demanding mining environments.", 
    image: "/products/rock-body.png", 
    link: "/products/rock-body" // Same as Navbar
  },
];

// --- BOLT COMPONENT ---
const Bolt = ({ className }: { className: string }) => (
  <div className={`absolute w-3 h-3 rounded-full bg-zinc-800 border border-zinc-600 flex items-center justify-center shadow-inner ${className} z-20`}>
    <div className="w-1.5 h-0.5 bg-zinc-900 -rotate-45" />
  </div>
);

const ProductFleet = () => {
  return (
    // ID ADDED FOR HERO SCROLL TARGET
    <section id="products" className="py-24 bg-[#111111] text-white">
      
      <div className="container mx-auto px-6 md:px-12">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h3 className="text-red-600 font-bold text-xs tracking-[0.2em] uppercase mb-4">
            The Showroom
          </h3>
          <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase tracking-tight text-white mb-6">
            Our Product <span className="text-zinc-500">Fleet</span>
          </h2>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-8 rounded-full" />
          <p className="text-zinc-400 font-roboto text-sm md:text-base leading-relaxed">
            At Black Diamond Motors, our product line is characterized by its innovative, reliable, and viable nature. 
            Designed by our in-house industry experts with over 25 years of experience in the field, our products undergo 
            rigorous auditing and testing to ensure the highest quality standards.
          </p>
        </div>

        {/* --- PRODUCT GRID --- */}
        <div className="flex flex-wrap justify-center gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};

const ProductCard = ({ product }: { product: any }) => {
  return (
    <motion.div
      className="group relative w-full md:w-[350px] bg-[#1a1a1a] border border-zinc-700 rounded-sm overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <Bolt className="top-3 left-3" />
      <Bolt className="top-3 right-3" />
      <Bolt className="bottom-3 left-3" />
      <Bolt className="bottom-3 right-3" />

      {/* --- SCANNER EFFECT --- */}
      <motion.div
        className="absolute top-0 left-0 w-full h-2 bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.8)] z-20 hidden md:block opacity-0 pointer-events-none"
        variants={{
          rest: { top: "-10%", opacity: 0 },
          hover: { top: ["0%", "100%"], opacity: [0, 1, 1, 0], transition: { duration: 0.8, ease: "easeInOut" } }
        }}
      />
      <motion.div 
        className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-red-600/20 to-transparent z-10 hidden md:block opacity-0 pointer-events-none"
        variants={{
          rest: { top: "-20%", opacity: 0 },
          hover: { top: ["-10%", "100%"], opacity: [0, 1, 0], transition: { duration: 0.8, ease: "easeInOut" } }
        }}
      />

      {/* --- IMAGE AREA --- */}
      <div className="relative h-52 w-full bg-[#111] overflow-hidden border-b border-zinc-800 shrink-0">
        <motion.div
          className="w-full h-full relative"
          variants={{
            rest: { scale: 1, filter: "brightness(0.9)" },
            hover: { scale: 1.05, filter: "brightness(1.1)" }
          }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4"
          />
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="p-6 pt-6 text-center relative z-30 flex flex-col flex-grow">
        <h3 className="text-2xl font-oswald font-bold uppercase text-white mb-3 tracking-wide">
          {product.name}
        </h3>
        <p className="text-zinc-400 text-sm font-roboto mb-6 leading-relaxed flex-grow line-clamp-4">
          {product.desc}
        </p>

        <div className="mt-auto">
          {/* LINK MATCHED TO NAVBAR */}
          <Link href={product.link}>
            <button className="group/btn relative inline-flex items-center gap-2 px-6 py-2.5 border border-red-600 text-red-500 font-oswald text-sm uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300">
              <span>View Full Specs</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </button>
          </Link>
        </div>
      </div>

    </motion.div>
  );
};

export default ProductFleet;