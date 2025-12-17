"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Truck, Hammer, Settings, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

// --- 1. MODEL VARIANT TABLE ---
const modelTable = [
  { vol: "24 m³", wheelbase: "4565", length: "7462", height: "3290", tipping: "36°", prime: "40 MT" },
  { vol: "26 m³", wheelbase: "4565", length: "7462", height: "3290", tipping: "36°", prime: "40 MT" },
  { vol: "28 m³", wheelbase: "5235", length: "8381", height: "3290", tipping: "40°", prime: "40 MT" },
  { vol: "30 m³", wheelbase: "5235", length: "8381", height: "3290", tipping: "40°", prime: "40/49 MT" },
  { vol: "32 m³", wheelbase: "5235", length: "8381", height: "3435", tipping: "40°", prime: "40/49 MT" },
  { vol: "36 m³", wheelbase: "6485", length: "9742", height: "3435", tipping: "43°", prime: "40/49 MT" },
];

// --- 2. COMPONENT SPECS ---
const componentSpecs = [
  { label: "Axles", value: "Square beam Axles of YORK / FUWA or equivalent." },
  { label: "Suspension", value: "Heavy duty 9-leaf spring suspension (FUWA / YORK)." },
  { label: "King Pin", value: "2\" SAE Bolted type (JOST make) with 14mm Rub plate." },
  { label: "Landing Legs", value: "Twin speed gear operated (Static: 60T, Lift: 28T)." },
  { label: "Hydraulics", value: "HYVA / HYPRATEK Front End Cylinder (149-191 Series)." },
  { label: "Brakes", value: "Dual Line Air Brake System (WABCO) with T-24 Chambers." },
  { label: "Body Material", value: "All welded steel construction using ST-52 (Min Yield 350 N/mm²)." },
  { label: "Chassis Frame", value: "Jindal NPB sections with ST-52 cross bracing (5mm)." },
  { label: "Painting", value: "Shot Blasted + 2 Coats Zinc Phosphate + 2 Coats Auto Paint." },
  { label: "Electricals", value: "24V System with LED side markers and rear tail lamps." },
];

// --- 3. FEATURES ---
const features = [
  { 
    title: "High Tensile Body", 
    desc: "Built using ST-52 High Tensile Steel to reduce unladen weight and increase payload capacity.",
    icon: <Hammer className="w-8 h-8 text-[#d11329]" />
  },
  { 
    title: "Advanced Hydraulics", 
    desc: "Equipped with world-class Hyva/Hypratek telescopic cylinders for faster and safer tipping cycles.",
    icon: <Settings className="w-8 h-8 text-[#d11329]" />
  },
  { 
    title: "Stable Design", 
    desc: "Low center of gravity design ensuring high stability even during off-road mining operations.",
    icon: <Truck className="w-8 h-8 text-[#d11329]" />
  },
  { 
    title: "Safety First", 
    desc: "Comes with Rear Underrun Protection Device (RUPD) as standard for road safety.",
    icon: <ShieldCheck className="w-8 h-8 text-[#d11329]" />
  },
];

export default function TipTrailer() {
  return (
    <main className="bg-[#050505] text-white pt-20">
      
      {/* ================= 1. HERO SECTION (Centered Text, Darker Gradient) ================= */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/products/tip-trailer-hero.png" 
            alt="Black Diamond Tip Trailer"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Strong gradient to hide logo at top and make text pop at center */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/80 to-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-6xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Small Badge */}
            <h4 className="text-[#d11329] font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-lg drop-shadow-md">
              India's First & Finest
            </h4>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-8xl font-oswald font-bold uppercase tracking-tight mb-6 drop-shadow-2xl text-white">
              Tip Trailer
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-2xl text-zinc-200 font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Engineered with <span className="text-[#d11329]">ST-52 Steel</span> for Maximum Payload & Durability.
            </p>
            
            {/* Buttons */}
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

      {/* ================= 2. OVERVIEW & PRODUCT SHOWCASE ================= */}
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
              Evolution of <br /> <span className="text-[#d11329]">Heavy Haulage</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed text-justify font-roboto">
              <p>
                Black Diamond Motors pioneered the <strong>Tip Trailer</strong> revolution in India. By utilizing advanced <strong>Front-End Telescopic Cylinders</strong>, we overcame the limitations of rigid trucks, allowing for larger volumes on semi-trailer chassis.
              </p>
              <p>
                Our trailers are designed for <strong>Aggregate, Coal, and Iron Ore</strong> transportation. The body is constructed using <strong>All Welded ST-52 Steel</strong>, providing a minimum yield strength of 350 N/mm².
              </p>
              
              <div className="flex flex-col gap-4 mt-6">
                <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#d11329] shrink-0" />
                    <span className="text-white text-lg">Application: Aggregate / Coal / Iron Ore</span>
                </div>
                <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#d11329] shrink-0" />
                    <span className="text-white text-lg">Compatible with 4x2 & 6x4 Prime Movers</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            // ✅ FIXES APPLIED HERE:
            // 1. Height reduced: h-[250px] md:h-[350px] (was 350px/500px)
            // 2. Overflow fix: Added 'overflow-hidden' class
            className="relative h-[250px] md:h-[350px] w-full border border-zinc-800 p-6 rounded-sm bg-[#111] flex items-center justify-center group hover:border-[#d11329] transition-all duration-300 shadow-2xl overflow-hidden"
          >
             <Image 
                 src="/products/tip-trailer.png" 
                 alt="Tip Trailer Product Showcase"
                 fill
                 className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
               />
               <div className="absolute bottom-6 right-6 bg-black/80 px-4 py-2 text-xs text-zinc-400 border border-zinc-800 rounded-full flex items-center gap-2 z-10">
                <Truck className="w-3 h-3 text-[#d11329]" /> PRODUCT VIEW
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
          </div>

          {/* --- SMART TABLE (Desktop: Table, Mobile: Cards) --- */}
          
          {/* DESKTOP VIEW */}
          <div className="hidden md:block overflow-x-auto mb-20 rounded-sm border border-zinc-800 shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-900 text-[#d11329] text-base uppercase tracking-wider font-oswald">
                  <th className="p-6 border-b border-zinc-800">Volume</th>
                  <th className="p-6 border-b border-zinc-800">Wheel Base</th>
                  <th className="p-6 border-b border-zinc-800">Length</th>
                  <th className="p-6 border-b border-zinc-800">Height</th>
                  <th className="p-6 border-b border-zinc-800">Tipping</th>
                  <th className="p-6 border-b border-zinc-800">Prime Mover</th>
                </tr>
              </thead>
              <tbody className="text-zinc-300 font-roboto text-sm md:text-base">
                {modelTable.map((row, i) => (
                  <tr key={i} className="border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors odd:bg-black even:bg-[#0c0c0c]">
                    <td className="p-6 font-bold text-white border-r border-zinc-800">{row.vol}</td>
                    <td className="p-6 border-r border-zinc-800">{row.wheelbase} mm</td>
                    <td className="p-6 border-r border-zinc-800">{row.length} mm</td>
                    <td className="p-6 border-r border-zinc-800">{row.height} mm</td>
                    <td className="p-6 border-r border-zinc-800">{row.tipping}</td>
                    <td className="p-6 text-[#d11329] font-bold">{row.prime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE VIEW */}
          <div className="md:hidden grid grid-cols-1 gap-4 mb-12">
            {modelTable.map((row, i) => (
              <div key={i} className="bg-[#111] border border-zinc-800 p-5 rounded-sm shadow-md">
                <div className="flex justify-between items-center mb-3 border-b border-zinc-800 pb-2">
                  <span className="text-[#d11329] font-bold font-oswald text-xl">{row.vol} Capacity</span>
                  <span className="text-xs font-bold bg-zinc-800 text-white px-2 py-1 rounded">{row.prime}</span>
                </div>
                <div className="grid grid-cols-2 gap-y-2 text-sm text-zinc-400">
                  <div>Wheelbase: <span className="text-white">{row.wheelbase} mm</span></div>
                  <div>Length: <span className="text-white">{row.length} mm</span></div>
                  <div>Height: <span className="text-white">{row.height} mm</span></div>
                  <div>Tipping Angle: <span className="text-white">{row.tipping}</span></div>
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
          
          <p className="text-center text-zinc-600 text-sm mt-16 italic px-4">
            * Note: Due to continuous improvement, specifications are subject to change without prior notice. Dimensions in mm.
          </p>
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
              Ready to Upgrade?
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
              Get the best price for India's most durable Tip Trailers. Tailored to your specific mining needs.
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