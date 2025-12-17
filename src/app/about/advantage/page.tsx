"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, TrendingUp, PenTool, Truck } from "lucide-react";

export default function OurAdvantage() {
  return (
    <main className="bg-[#050505] text-white pt-20 overflow-hidden">
      
      {/* ================= HERO BANNER ================= */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
        >
          {/* IMAGE 1: Mining Hero (Cinematic Start) */}
          <Image
            src="/mining-hero.jpg" 
            alt="Black Diamond Advantage"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#050505]" />
        </motion.div>

        <div className="relative z-10 text-center px-4">
          <motion.h4 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-[#d11329] font-bold tracking-[0.3em] uppercase mb-4"
          >
            Why Choose Us?
          </motion.h4>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-oswald font-bold uppercase tracking-tight"
          >
            The Black Diamond <span className="text-zinc-500">Edge</span>
          </motion.h1>
        </div>
      </section>

      {/* ================= 1. QUALITY ASSURANCE (Left Text, Right Image) ================= */}
      <section id="quality" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20 border-b border-zinc-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-block p-4 rounded-full bg-zinc-900/50 border border-zinc-800 text-[#d11329]">
              <ShieldCheck className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase mb-6 text-white">
              Quality <span className="text-zinc-600">Assurance</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed text-justify font-roboto">
              <p>
                At Black Diamond Motors, our primary motto is <strong>“Consistent Quality.”</strong> We place utmost importance on delivering products that meet the highest quality standards. It is our top priority to ensure that every single product leaving our factory complies with the rigorous Quality Standard we have adopted, which is on par with <strong>TS16949</strong> – the globally recognized International Quality Standard for the Automobile Sector.
              </p>
              <p>
                We understand that quality is not a mere checkbox, but a fundamental aspect that underpins our commitment to customer satisfaction and industry excellence. To achieve this, we have implemented a robust <strong>Quality Assurance Scheme</strong> that permeates every stage of our production process.
              </p>
            </div>
          </motion.div>

          {/* IMAGE 2: Factory Workers (Process & Quality) */}
          <motion.div 
            className="relative h-[500px] w-full border-2 border-[#d11329]/20 p-2 rounded-sm bg-[#111]"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image 
                src="/factory-workers.jpg" 
                alt="Quality Testing Lab" 
                fill 
                className="object-cover" // Removed grayscale
              />
              <div className="absolute bottom-0 right-0 bg-[#d11329] px-6 py-3">
                <span className="text-white font-bold font-oswald uppercase tracking-widest">TS16949 Certified</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= 2. HIGHEST RESALE (Right Text, Left Image) ================= */}
      <section id="resale" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20 border-b border-zinc-900 bg-[#0a0a0a]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* IMAGE 3: Excavator Action (Rugged Usage) */}
          <motion.div 
            className="relative h-[500px] w-full border-2 border-zinc-800 p-2 rounded-sm bg-[#111] order-2 lg:order-1"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image 
                src="/excavator-action.jpg" 
                alt="Long Lasting Trailers" 
                fill 
                className="object-cover" // Removed grayscale
              />
              <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md border-l-4 border-[#d11329] p-6">
                <h3 className="text-4xl font-oswald text-white font-bold">12+ Years</h3>
                <p className="text-zinc-400 text-sm uppercase">Proven Lifespan</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-block p-4 rounded-full bg-zinc-900/50 border border-zinc-800 text-[#d11329]">
              <TrendingUp className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase mb-6 text-white">
              Highest <span className="text-zinc-600">Resale Value</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed text-justify font-roboto">
              <p>
                When it comes to longevity, Black Diamond Motors products are renowned for their exceptional lifespan. Our trailers, in particular, have gained a reputation for their robust construction and durability. Even after <strong>12 years of operation</strong>, our trailers continue to maintain excellent running conditions.
              </p>
              <p>
                The recognition and reliability associated with the Black Diamond Motors brand also translate into significant advantages when it comes to the resale market. Our trailers command the <strong>highest prices in the resale (second-hand) market</strong> due to their outstanding quality, durability, and strong reputation.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= 3. DESIGN STRENGTH (Left Text, Right Image) ================= */}
      <section id="design" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20 border-b border-zinc-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-block p-4 rounded-full bg-zinc-900/50 border border-zinc-800 text-[#d11329]">
              <PenTool className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase mb-6 text-white">
              Design <span className="text-zinc-600">Strength</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed text-justify font-roboto">
              <p>
                At Black Diamond Motors, we take pride in our ability to develop innovative design solutions that precisely meet our clients’ requirements while providing maximum utility. We achieve this by leveraging the expertise of our <strong>multidisciplinary design engineers</strong>, who possess strong backgrounds in research and development, extensive practical experience, and advanced technical skills in driving the latest <strong>CAD software</strong>.
              </p>
              <p>
                Our design team is at the forefront of innovation, constantly pushing boundaries and exploring new possibilities. They possess a wealth of knowledge and experience that enables them to tackle complex challenges and deliver designs that excel in functionality, efficiency, and reliability.
              </p>
            </div>
          </motion.div>

          {/* IMAGE 4: Reusing Factory Collage (Because Design happens here) */}
          {/* Note: Ideally, a blueprint image would be best, but using what we have */}
          <motion.div 
            className="relative h-[500px] w-full border-2 border-[#d11329]/20 p-2 rounded-sm bg-[#111]"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image 
                src="/factory-collage.jpg" 
                alt="CAD Design Engineering" 
                fill 
                className="object-cover" // Removed grayscale
              />
              <div className="absolute inset-0 bg-[#d11329]/10 mix-blend-overlay" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= 4. EXPRESS DELIVERY (Right Text, Left Image) ================= */}
      <section id="express" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20 bg-[#0a0a0a]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* IMAGE 5: Truck Image (Delivery Concept) */}
          <motion.div 
            className="relative h-[500px] w-full border-2 border-zinc-800 p-2 rounded-sm bg-[#111] order-2 lg:order-1"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-full flex items-center justify-center bg-black">
              <Image 
                src="/toll-free-image.png" 
                alt="Express Delivery Fleet" 
                width={500}
                height={300}
                className="object-contain" 
              />
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-block p-4 rounded-full bg-zinc-900/50 border border-zinc-800 text-[#d11329]">
              <Truck className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase mb-6 text-white">
              Express <span className="text-zinc-600">Delivery</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed text-justify font-roboto">
              <p>
                Black Diamond Motors takes pride in being the <strong>largest manufacturer of Tip-Trailers in India</strong>. With our state-of-the-art production facilities and high production capacity, we are consistently able to meet the demands of our customers and commit to swift deliveries.
              </p>
              <p>
                We understand the importance of timely delivery, and our express delivery service is designed to ensure that our customers receive their orders promptly. With our <strong>streamlined manufacturing processes</strong> and efficient logistics operations, we can expedite the production and delivery of our Tip-Trailers.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}