"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { name: "Tata Motors", logo: "/partners/tata-motors.png" },
  { name: "Ashok Leyland", logo: "/partners/ashok-leyland.png" },
  { name: "BharatBenz", logo: "/partners/bharatbenz.png" },
  { name: "VE Commercial Vehicles", logo: "/partners/ve-commercial-vehicles.png" }, // extension actual file jaisa hi rakho
  { name: "Mahindra", logo: "/partners/mahindra.png" },
];

const marqueeItems = [...partners, ...partners];

const TrustedPartners = () => {
  return (
    <section className="py-20 bg-[#111111] overflow-hidden border-t border-zinc-900">
      {/* Heading */}
      <div className="container mx-auto px-6 text-center mb-12">
        <h3 className="text-[#d11329] text-xs font-bold tracking-[0.2em] uppercase mb-2">
          Building Relationships
        </h3>
        <h2 className="text-3xl md:text-4xl font-oswald font-bold text-white uppercase tracking-wide">
          Our Trusted Partners
        </h2>
        <div className="h-1 w-20 bg-zinc-800 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Marquee */}
      <div className="relative w-full flex overflow-hidden">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center gap-16 md:gap-20 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 22,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="relative w-48 h-28 md:w-60 md:h-32 flex-shrink-0 flex items-center justify-center
                         cursor-pointer transition-transform duration-300 hover:scale-110"
            >
              <div className="relative w-full h-full border border-zinc-700 rounded-xl bg-zinc-900/70 flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] p-3 md:p-4">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedPartners;
