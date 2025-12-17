"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Truck, Hammer, Settings, ShieldCheck, ArrowRight, CheckCircle2, Ruler, Weight } from "lucide-react";

// --- 1. MODEL VARIANT TABLE (From Booklet: TIPPER on 31T Chassis) ---
const modelTable = [
  { vol: "18 m³", internal: "6500 x 2280 x 1215", overall_L: "8106", overall_H: "2631", tipping: "43°", prime: "31 MT" },
  { vol: "20 m³", internal: "6500 x 2280 x 1350", overall_L: "8106", overall_H: "2766", tipping: "43°", prime: "31 MT" },
  { vol: "22 m³", internal: "6500 x 2280 x 1485", overall_L: "8106", overall_H: "2901", tipping: "43°", prime: "31 MT" },
];

// --- 2. COMPONENT SPECS (Specific to Standard Tipper) ---
const componentSpecs = [
  { label: "Application", value: "Coal, Aggregate, Iron Ore, Sand, Blue Metal." },
  { label: "Body Material", value: "High Strength Steel (ST-52) or Wear Resistant Plate (Optional)." },
  { label: "Chassis Compatibility", value: "Optimized for 31T Haulage Chassis (All OEMs)." },
  { label: "Hydraulics", value: "HYVA / HYPRATEK Front End Cylinder with Air Control Valve." },
  { label: "Floor Design", value: "5mm Bottom Plate (Sandwich floor optional for heavy duty)." },
  { label: "Paint System", value: "Zinc Phosphate Primer + 2 Coats Automotive Paint (120 microns)." },
  { label: "Rear Overhang", value: "504 mm (Standard for stability)." },
  { label: "Electricals", value: "24V System with LED side markers and rear tail lamps." },
];

// --- 3. FEATURES (Separated for Tipper) ---
const features = [
  { 
    title: "Versatile Haulage", 
    desc: "Designed for multi-purpose use: from construction aggregates to coal transportation, ensuring high utility.",
    icon: <Truck className="w-8 h-8 text-[#d11329]" />
  },
  { 
    title: "Optimized Payload", 
    desc: "Lightweight ST-52 steel body design maximizes payload capacity without compromising structural strength.",
    icon: <Weight className="w-8 h-8 text-[#d11329]" />
  },
  { 
    title: "Universal Fit", 
    desc: "Compatible with all major truck chassis brands (Tata, Ashok Leyland, Benz, Eicher) from 180 to 300 BHP.",
    icon: <Settings className="w-8 h-8 text-[#d11329]" />
  },
  { 
    title: "Superior Finish", 
    desc: "Shot blasted and coated with automotive-grade paint for long-lasting protection against corrosion.",
    icon: <ShieldCheck className="w-8 h-8 text-[#d11329]" />
  },
];

export default function Tipper() {
  return (
    <main className="bg-[#050505] text-white pt-20">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/products/tipper-hero.png" 
            alt="Black Diamond Heavy Duty Tipper"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/80 to-black/40" />
        </div>

        <div className="relative z-10 text-center max-w-6xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-[#d11329] font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-lg drop-shadow-md">
              The Standard of Reliability
            </h4>
            <h1 className="text-5xl md:text-8xl font-oswald font-bold uppercase tracking-tight mb-6 drop-shadow-2xl text-white">
              Heavy Duty <span className="text-zinc-500">Tipper</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-200 font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Optimized for <span className="text-[#d11329]">Coal & Aggregate</span> Transport.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-[#d11329] hover:bg-red-700 text-white px-12 py-4 font-bold uppercase tracking-widest text-sm transition-all rounded-sm shadow-[0_10px_20px_rgba(209,19,41,0.4)]">
                Get a Quote
              </button>
              <button className="group border-2 border-white hover:bg-white hover:text-black text-white px-12 py-4 font-bold uppercase tracking-widest text-sm transition-all rounded-sm flex items-center justify-center gap-2 backdrop-blur-sm">
                <Download className="w-5 h-5 group-hover:text-[#d11329]" /> Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= 2. OVERVIEW & BLUEPRINT ================= */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-oswald font-bold uppercase mb-8 leading-tight">
              Efficient <br /> <span className="text-[#d11329]">Material Handling</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed text-justify font-roboto">
              <p>
                A <strong>Tipper</strong> is the backbone of the construction and logistics industry. At Black Diamond Motors, we manufacture best-in-class Box Tippers designed for efficiency and durability. Our tippers are engineered to withstand the rigorous demands of transporting loose bulk materials like sand, gravel, and coal.
              </p>
              <p>
                Combining superior design with high-grade <strong>ST-52 Steel</strong>, our tippers offer the perfect balance between low unladen weight and high structural strength, ensuring you get maximum profitability per trip.
              </p>
              
              <div className="flex flex-col gap-4 mt-6">
                <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#d11329] shrink-0" />
                    <span className="text-white text-lg">Capacity: 18 Cu.m to 22 Cu.m (31T Chassis)</span>
                </div>
                <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#d11329] shrink-0" />
                    <span className="text-white text-lg">Compatible with 4x2, 6x4 & 8x4 Trucks</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Blueprint Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[350px] lg:h-[500px] w-full border border-zinc-800 p-6 rounded-sm bg-white flex items-center justify-center group hover:border-[#d11329] transition-all duration-300 shadow-2xl"
          >
             {/* ✅ Use Booklet Drawing Here (No Invert, White Background) */}
             <Image 
                 src="/products/tipper.png" 
                 alt="Tipper Engineering Blueprint"
                 fill
                 className="object-contain p-2" 
               />
               <div className="absolute bottom-6 right-6 bg-black/80 px-4 py-2 text-xs text-zinc-400 border border-zinc-800 rounded-full flex items-center gap-2">
                <Ruler className="w-3 h-3 text-[#d11329]" /> ENGINEERING DRAWING
               </div>
          </motion.div>

        </div>
      </section>

      {/* ================= 3. DETAILED SPECIFICATIONS ================= */}
      <section className="py-24 bg-[#0a0a0a] border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase text-white mb-4">Technical Specifications</h2>
            <div className="h-1 w-24 bg-[#d11329] mx-auto rounded-full" />
            <p className="text-zinc-500 mt-4">Based on 31T Haulage Chassis (Standard Model)</p>
          </div>

          {/* --- SMART TABLE --- */}
          <div className="hidden md:block overflow-x-auto mb-20 rounded-sm border border-zinc-800 shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-900 text-[#d11329] text-base uppercase tracking-wider font-oswald">
                  <th className="p-6 border-b border-zinc-800">Volume</th>
                  <th className="p-6 border-b border-zinc-800">Internal Dims (LxWxH)</th>
                  <th className="p-6 border-b border-zinc-800">Overall Length</th>
                  <th className="p-6 border-b border-zinc-800">Overall Height</th>
                  <th className="p-6 border-b border-zinc-800">Tipping</th>
                  <th className="p-6 border-b border-zinc-800">Suitable Chassis</th>
                </tr>
              </thead>
              <tbody className="text-zinc-300 font-roboto text-sm md:text-base">
                {modelTable.map((row, i) => (
                  <tr key={i} className="border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors odd:bg-black even:bg-[#0c0c0c]">
                    <td className="p-6 font-bold text-white border-r border-zinc-800">{row.vol}</td>
                    <td className="p-6 border-r border-zinc-800">{row.internal} mm</td>
                    <td className="p-6 border-r border-zinc-800">{row.overall_L} mm</td>
                    <td className="p-6 border-r border-zinc-800">{row.overall_H} mm</td>
                    <td className="p-6 border-r border-zinc-800">{row.tipping}</td>
                    <td className="p-6 text-[#d11329] font-bold">{row.prime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden grid grid-cols-1 gap-4 mb-12">
            {modelTable.map((row, i) => (
              <div key={i} className="bg-[#111] border border-zinc-800 p-5 rounded-sm shadow-md">
                <div className="flex justify-between items-center mb-3 border-b border-zinc-800 pb-2">
                  <span className="text-[#d11329] font-bold font-oswald text-xl">{row.vol}</span>
                  <span className="text-xs font-bold bg-zinc-800 text-white px-2 py-1 rounded">{row.prime}</span>
                </div>
                <div className="grid grid-cols-2 gap-y-2 text-sm text-zinc-400">
                  <div>Internal: <span className="text-white">{row.internal}</span></div>
                  <div>Length: <span className="text-white">{row.overall_L} mm</span></div>
                  <div>Height: <span className="text-white">{row.overall_H} mm</span></div>
                  <div>Tipping: <span className="text-white">{row.tipping}</span></div>
                </div>
              </div>
            ))}
          </div>

          {/* PART B: COMPONENT SPECS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
            {componentSpecs.map((spec, i) => (
              <div key={i} className="flex flex-col border-b border-zinc-800 pb-4 group">
                <span className="text-[#d11329] font-bold uppercase text-xs tracking-widest mb-2 group-hover:translate-x-1 transition-transform">{spec.label}</span>
                <span className="text-white font-medium text-lg leading-snug">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. FEATURES & CTA ================= */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-[#111] p-8 border border-zinc-800 hover:border-[#d11329] transition-all duration-300 group rounded-sm shadow-lg"
            >
              <div className="mb-6 p-4 bg-zinc-900 w-fit rounded-full group-hover:bg-[#d11329] group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-oswald font-bold text-white mb-3 uppercase">{feature.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#d11329] rounded-sm p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white uppercase mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
              From light haulage to heavy mining, we build Tippers that fit your business needs perfectly.
            </p>
            <button className="bg-black hover:bg-zinc-900 text-white px-12 py-5 font-bold uppercase tracking-widest text-sm rounded-sm transition-all shadow-xl flex items-center justify-center gap-2 mx-auto">
              Contact Sales <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}