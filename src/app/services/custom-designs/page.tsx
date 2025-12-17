"use client";

import Image from "next/image";
import { motion } from "framer-motion";
// ✅ FIX: Added 'Hammer' and consolidated imports
import { PencilRuler, Truck, Cog, Thermometer, ArrowUp, Container, ArrowRight, Lightbulb, Cpu, Hammer, ShieldCheck } from "lucide-react";

// --- CUSTOM SOLUTIONS DATA ---
const customSolutions = [
  {
    title: "Oversized Pavers Transport",
    desc: "Engineered solutions for extreme width and weight loads, specifically designed for road construction pavers and heavy machinery.",
    icon: <Truck className="w-8 h-8 text-[#d11329]" />
  },
  {
    title: "Heavy Mechanized Ramps",
    desc: " Hydraulic or pneumatic ramp systems integrated into trailers for effortless loading of tracked and wheeled equipment.",
    icon: <Cog className="w-8 h-8 text-[#d11329]" />
  },
  {
    title: "Extreme Temp Handling",
    desc: "Specialized bodies with advanced insulation and materials for transporting payloads like hot slag or cryogenic materials.",
    icon: <Thermometer className="w-8 h-8 text-[#d11329]" />
  },
  {
    title: "Elevated Tippers",
    desc: "High-lift tipping mechanisms designed to discharge loads into elevated hoppers or specific dumping zones.",
    icon: <ArrowUp className="w-8 h-8 text-[#d11329]" />
  },
  {
    title: "Container Type Bodies",
    desc: "Secure, fully enclosed box-type bodies mounted on trailer chassis for specialized, high-value cargo protection.",
    icon: <Container className="w-8 h-8 text-[#d11329]" />
  },
  {
    title: "Covering Mechanisms",
    desc: "Automated or manual retractable covering systems for trailers and tippers to protect loose cargo from weather and spillage.",
    icon: <ShieldCheck className="w-8 h-8 text-[#d11329]" />
  },
];

export default function CustomDesigns() {
  return (
    <main className="bg-[#050505] text-white pt-20">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/services/custom-hero.jpg" 
            alt="Black Diamond Custom Engineering"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/70 to-black/40" />
        </div>

        <div className="relative z-10 text-center max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-[#d11329] font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-lg bg-black/50 inline-block px-4 py-1 backdrop-blur-sm rounded-sm">
              Beyond the Catalogue
            </h4>
            <h1 className="text-5xl md:text-7xl font-oswald font-bold uppercase tracking-tight mb-6 text-white drop-shadow-2xl">
              Custom <span className="text-zinc-500">Designs</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-200 font-light max-w-3xl mx-auto leading-relaxed">
              Engineering bespoke solutions tailored to your unique operational challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= 2. OUR PHILOSOPHY (Overview) ================= */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-oswald font-bold uppercase mb-8 leading-tight">
              When Standard <br /> <span className="text-[#d11329]">Isn't Enough</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed text-justify font-roboto">
              <p>
                At Black Diamond Motors, we take pride in offering a diverse selection of products. However, we understand that sometimes special needs arise, and that’s where our expertise truly shines.
              </p>
              <p>
                We go above and beyond to assist our customers by designing and manufacturing customized solutions tailored to their unique needs. With our custom design solutions, we aim to provide you with the perfect answer to your specific requirements. Trust us to deliver exceptional results that exceed your expectations every time.
              </p>
            </div>
          </motion.div>

          {/* Right: Visual/Icon Block */}
          <div className="relative h-[400px] border border-zinc-800 bg-[#111] rounded-sm p-8 flex flex-col justify-between overflow-hidden group hover:border-[#d11329] transition-all">
             <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10" />
             <div>
                <PencilRuler className="w-16 h-16 text-[#d11329] mb-6" />
                <h3 className="text-3xl font-oswald font-bold text-white mb-4">From Concept to Reality</h3>
                <p className="text-zinc-400">Our expert R&D team collaborates closely with you to translate complex requirements into practical, durable engineering solutions.</p>
             </div>
             <div className="flex gap-4 mt-8">
                <div className="flex items-center gap-2 text-sm text-zinc-300"><Lightbulb className="w-4 h-4 text-[#d11329]"/> Ideation</div>
                <div className="flex items-center gap-2 text-sm text-zinc-300"><Cpu className="w-4 h-4 text-[#d11329]"/> Engineering</div>
                <div className="flex items-center gap-2 text-sm text-zinc-300"><Hammer className="w-4 h-4 text-[#d11329]"/> Fabrication</div>
             </div>
          </div>

        </div>
      </section>

      {/* ================= 3. CAPABILITIES GRID ================= */}
      <section className="py-24 bg-[#0a0a0a] border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase text-white mb-4">Specialized Solutions</h2>
            <div className="h-1 w-24 bg-[#d11329] mx-auto rounded-full" />
            <p className="text-zinc-500 mt-4">Examples of our bespoke engineering capabilities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customSolutions.map((sol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#111] p-8 rounded-sm border border-zinc-800 hover:border-[#d11329] transition-all group relative overflow-hidden"
              >
                {/* Hover subtle effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d11329]/0 to-[#d11329]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="mb-6 bg-zinc-900 p-4 w-fit rounded-full group-hover:bg-[#d11329] group-hover:text-white transition-colors relative z-10">
                  {sol.icon}
                </div>
                <h3 className="text-xl font-oswald font-bold text-white mb-3 uppercase relative z-10">{sol.title}</h3>
                <p className="text-zinc-400 leading-relaxed relative z-10">{sol.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. CTA SECTION ================= */}
      <section className="py-20 bg-[#d11329]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white uppercase mb-6">
            Have a Unique Challenge?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Contact us today to discuss your custom design project with our expert team. Let's engineer a solution together.
          </p>
          <button className="bg-black hover:bg-zinc-900 text-white px-12 py-5 font-bold uppercase tracking-widest text-sm rounded-sm transition-all shadow-xl flex items-center justify-center gap-2 mx-auto">
            Consult Our Engineers <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

    </main>
  );
}