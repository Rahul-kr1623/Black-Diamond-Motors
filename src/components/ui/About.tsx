"use client";

import Image from 'next/image';
import Link from 'next/link'; // Added Link import
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#111111] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: TEXT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-[#d11329] font-bold tracking-widest uppercase text-sm">
            Our Story
          </span>
          <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white mt-2 mb-6">
            THE BACKBONE OF <br />
            <span className="text-zinc-500">INDIAN LOGISTICS</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Since 2005, Black Diamond Motors has been redefining heavy transport in India. 
            From the mines of Chhattisgarh to the highways of the South, our trailers are 
            engineered to withstand the toughest terrains. We don't just weld steel; 
            we forge trust.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {['ISO 9001:2015 Certified', '5 Lakh Sq.ft Manufacturing Hub', 'Advanced CNC Plasma Tech', 'Pan-India Service Network'].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="text-[#d11329] w-5 h-5" />
                <span className="text-gray-300 font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* LINK ADDED: Target same page as Navbar 'Our Story' */}
          <Link href="/about/story">
            <button className="border-b-2 border-[#d11329] text-white pb-1 hover:text-[#d11329] transition-colors font-bold uppercase tracking-widest text-sm">
              Read Full Journey
            </button>
          </Link>

        </motion.div>

        {/* RIGHT: IMAGE COMPOSITION */}
        <motion.div 
          className="relative h-[500px] w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Main Factory Image */}
          <div className="absolute inset-0 border-2 border-zinc-800 p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="relative w-full h-full bg-black overflow-hidden">
              <Image 
                src="/factory.jpg" 
                alt="Black Diamond Factory"
                fill
                className="object-cover opacity-80 hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Floating Stats Card */}
          <motion.div 
            className="absolute -bottom-6 -left-6 bg-[#d11329] p-6 shadow-2xl z-10 max-w-[200px]"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-4xl font-oswald font-bold text-white mb-1">18+</h3>
            <p className="text-white/90 text-sm font-medium uppercase tracking-wider">
              Years of Engineering Excellence
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}