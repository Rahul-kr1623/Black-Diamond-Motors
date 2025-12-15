"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* BACKGROUND IMAGE */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <Image 
          src="/hero-bg.png" 
          alt="Black Diamond Tipper"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
      </motion.div>

      {/* TEXT CONTENT */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="text-[#d11329] font-bold tracking-[0.3em] uppercase text-sm md:text-base">
            Welcome to Black Diamond Motors
          </span>
          
          <h1 className="text-5xl md:text-8xl font-oswald font-bold text-white mt-4 mb-6 leading-[0.9]">
            REVOLUTIONIZING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              TRANSPORT
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl tracking-wide max-w-xl mb-12 border-l-4 border-[#d11329] pl-6">
            Driven by Innovation and Quality. Manufacturing India's finest Tip-Trailers & Heavy Logistics Solutions since 2005.
          </p>

          {/* BUTTON COLUMNS (Transparent & Compact Stair Effect) */}
          <div className="flex flex-col sm:flex-row gap-8 max-w-3xl">
             
             {/* COLUMN 1: LEFT (Transparent Black) */}
             <div className="flex flex-col gap-4 flex-1 items-start">
                {/* 1. Our Story (Short) */}
                <button 
                   onClick={() => scrollToSection('about')}
                   className="w-56 flex items-center justify-start gap-4 bg-black/40 backdrop-blur-sm border border-white/50 text-white px-5 py-3.5 font-oswald font-bold uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
                >
                   <ArrowRight className="w-4 h-4 text-[#d11329] group-hover:text-black transition-colors" />
                   Our Story
                </button>

                {/* 2. Our Services (Long) */}
                <button 
                   onClick={() => scrollToSection('services')}
                   className="w-72 flex items-center justify-start gap-4 bg-black/40 backdrop-blur-sm border border-white/50 text-white px-5 py-3.5 font-oswald font-bold uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
                >
                   <ArrowRight className="w-4 h-4 text-[#d11329] group-hover:text-black transition-colors" />
                   Our Services
                </button>
             </div>

             {/* COLUMN 2: RIGHT (Transparent Red) */}
             <div className="flex flex-col gap-4 flex-1 items-start">
                {/* 3. Our Products (Short) */}
                <button 
                   onClick={() => scrollToSection('products')}
                   className="w-56 flex items-center justify-start gap-4 bg-[#d11329]/90 border border-[#d11329] text-white px-5 py-3.5 font-oswald font-bold uppercase tracking-widest hover:bg-white hover:text-[#d11329] hover:border-white transition-all duration-300 group"
                >
                   <ArrowRight className="w-4 h-4 text-white group-hover:text-[#d11329] transition-colors" />
                   Our Products
                </button>

                {/* 4. Our Advantage (Long) */}
                <button 
                   onClick={() => scrollToSection('advantage')}
                   className="w-72 flex items-center justify-start gap-4 bg-[#d11329]/90 border border-[#d11329] text-white px-5 py-3.5 font-oswald font-bold uppercase tracking-widest hover:bg-white hover:text-[#d11329] hover:border-white transition-all duration-300 group"
                >
                   <ArrowRight className="w-4 h-4 text-white group-hover:text-[#d11329] transition-colors" />
                   Our Advantage
                </button>
             </div>

          </div>

        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#d11329] to-transparent"></div>
      </motion.div>
    </section>
  );
}