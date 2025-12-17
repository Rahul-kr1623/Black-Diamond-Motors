"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Truck, Hammer, Settings, ShieldCheck, ArrowRight, CheckCircle2, Ruler, Package } from "lucide-react";

// --- 1. MODEL VARIANT TABLE (From Booklet: SIDE WALL TRAILER) ---
const modelTable = [
  { type: "26' x 3'", wheelbase: "4945", length: "7930", width: "2550", height: "1067", prime: "40/49 MT" },
  { type: "28' x 3'", wheelbase: "5550", length: "8540", width: "2550", height: "1067", prime: "40/49 MT" },
  { type: "30' x 3'", wheelbase: "5959", length: "9150", width: "2550", height: "1067", prime: "40/49 MT" },
  { type: "32' x 3'", wheelbase: "6569", length: "9760", width: "2550", height: "1067", prime: "40/49 MT" },
];

// --- 2. COMPONENT SPECS (Specific to Side Wall Trailer) ---
const componentSpecs = [
  { label: "Application", value: "Coal, Cement Bags, Aggregates, General Cargo." },
  { label: "Body Material", value: "All welded steel construction (IS-2062 Grade)." },
  { label: "Chassis Frame", value: "2 Rolled 'I' Sections (BS-4360) with welded cross members." },
  { label: "Axles", value: "Square beam Axles of YORK / FUWA or equivalent." },
  { label: "Suspension", value: "Heavy duty 9-leaf spring suspension (FUWA / YORK)." },
  { label: "King Pin", value: "2\" SAE Bolted type (JOST make) with 14mm Rub plate." },
  { label: "Landing Legs", value: "Twin speed gear operated (Static: 60T, Lift: 28T)." },
  { label: "Brakes", value: "Dual Line Air Brake System with T-24 Chambers & Slack Adjusters." },
  { label: "Paint System", value: "Shot Blasted + Zinc Phosphate Primer + 2 Coats Auto Paint (120 microns)." },
  { label: "Electricals", value: "24V System with side markers, reflectors & rear parking lights." },
];

// --- 3. FEATURES (From Content) ---
const features = [
  { 
    title: "Versatile Cargo", 
    desc: "Ideal for transporting bagged cargo like cement, fertilizers, and food grains, as well as loose aggregates.",
    icon: <Package className="w-8 h-8 text-[#d11329]" />
  },
  { 
    title: "Robust Chassis", 
    desc: "Built on a heavy-duty BS-4360 Rolled 'I' section chassis for superior load-bearing capacity and longevity.",
    icon: <Hammer className="w-8 h-8 text-[#d11329]" />
  },
  { 
    title: "Flexible Sizes", 
    desc: "Available in multiple lengths ranging from 20 feet to 40 feet to suit various transport requirements.",
    icon: <Ruler className="w-8 h-8 text-[#d11329]" />
  },
  { 
    title: "Global Standards", 
    desc: "Manufactured with export-quality standards, ensuring compatibility with international logistics needs.",
    icon: <ShieldCheck className="w-8 h-8 text-[#d11329]" />
  },
];

export default function SideWallTrailer() {
  return (
    <main className="bg-[#050505] text-white pt-20">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* ✅ Uses your updated image name */}
          <Image
            src="/products/side-wall-trailer-hero.png" 
            alt="Black Diamond Side Wall Trailer"
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
              Secure & Reliable
            </h4>
            <h1 className="text-5xl md:text-8xl font-oswald font-bold uppercase tracking-tight mb-6 drop-shadow-2xl text-white">
              Side Wall <span className="text-zinc-500">Trailer</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-200 font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Premium Quality Trailers for <span className="text-[#d11329]">General Cargo</span> & Logistics.
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
              Unbeatable <br /> <span className="text-[#d11329]">Quality</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed text-justify font-roboto">
              <p>
                A <strong>Side Wall Trailer</strong> is a non-tippable semi-trailer featuring a robust container box with side walls and French doors. While common in the industry, Black Diamond Motors sets itself apart through superior engineering and dedication to quality.
              </p>
              <p>
                Our trailers are designed to meet the same rigorous quality parameters as our renowned tip trailers. Whether you need to transport cement bags, steel coils, or general goods, our side wall trailers offer exceptional durability and performance.
              </p>
              
              <div className="flex flex-col gap-4 mt-6">
                <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#d11329] shrink-0" />
                    <span className="text-white text-lg">Range: 20 ft to 40 ft Length</span>
                </div>
                <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#d11329] shrink-0" />
                    <span className="text-white text-lg">Compatible with 4x2 & 6x4 Tractors</span>
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
            className="relative h-[350px] lg:h-[500px] w-full border border-zinc-800 p-6 rounded-sm bg-[#111] flex items-center justify-center group hover:border-[#d11329] transition-all duration-300 shadow-2xl"
          >
             {/* ✅ Uses your updated image name without inversion */}
             {/* bg-white helps if the blueprint is transparent PNG to make lines visible */}
             <div className="bg-white w-full h-full p-2 rounded-sm flex items-center justify-center relative">
               <Image 
                   src="/products/sidewall-trailer.png" 
                   alt="Side Wall Trailer Blueprint"
                   fill
                   className="object-contain p-2" 
                 />
                 <div className="absolute bottom-6 right-6 bg-black/80 px-4 py-2 text-xs text-zinc-400 border border-zinc-800 rounded-full flex items-center gap-2">
                  <Ruler className="w-3 h-3 text-[#d11329]" /> ENGINEERING DRAWING
                 </div>
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
            <p className="text-zinc-500 mt-4">Standard Models (Custom Sizes Available)</p>
          </div>

          {/* --- SMART TABLE --- */}
          <div className="hidden md:block overflow-x-auto mb-20 rounded-sm border border-zinc-800 shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-900 text-[#d11329] text-base uppercase tracking-wider font-oswald">
                  <th className="p-6 border-b border-zinc-800">Type (L x H)</th>
                  <th className="p-6 border-b border-zinc-800">Wheel Base</th>
                  <th className="p-6 border-b border-zinc-800">Overall Length</th>
                  <th className="p-6 border-b border-zinc-800">Outer Width</th>
                  <th className="p-6 border-b border-zinc-800">Outer Height</th>
                  <th className="p-6 border-b border-zinc-800">Prime Mover</th>
                </tr>
              </thead>
              <tbody className="text-zinc-300 font-roboto text-sm md:text-base">
                {modelTable.map((row, i) => (
                  <tr key={i} className="border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors odd:bg-black even:bg-[#0c0c0c]">
                    <td className="p-6 font-bold text-white border-r border-zinc-800">{row.type}</td>
                    <td className="p-6 border-r border-zinc-800">{row.wheelbase} mm</td>
                    <td className="p-6 border-r border-zinc-800">{row.length} mm</td>
                    <td className="p-6 border-r border-zinc-800">{row.width} mm</td>
                    <td className="p-6 border-r border-zinc-800">{row.height} mm</td>
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
                  <span className="text-[#d11329] font-bold font-oswald text-xl">{row.type}</span>
                  <span className="text-xs font-bold bg-zinc-800 text-white px-2 py-1 rounded">{row.prime}</span>
                </div>
                <div className="grid grid-cols-2 gap-y-2 text-sm text-zinc-400">
                  <div>Wheelbase: <span className="text-white">{row.wheelbase} mm</span></div>
                  <div>Length: <span className="text-white">{row.length} mm</span></div>
                  <div>Width: <span className="text-white">{row.width} mm</span></div>
                  <div>Height: <span className="text-white">{row.height} mm</span></div>
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
              Ready to Haul More?
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
              Get the best deal on export-quality Side Wall Trailers. Contact us today.
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