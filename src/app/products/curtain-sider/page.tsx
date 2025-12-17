"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Truck, Hammer, Settings, ShieldCheck, ArrowRight, CheckCircle2, Ruler, Box } from "lucide-react";

// --- 1. MODEL VARIANT TABLE (From Booklet) ---
const modelTable = [
  { model: "Curtain Sider 40ft", length: "12200 mm", width: "2600 mm", height: "4100 mm", payload: "Coils / Pallets", curtain: "900 GSM PVC" },
];

// --- 2. COMPONENT SPECS (Specific to Curtain Sider) ---
const componentSpecs = [
  { label: "Application", value: "Steel Coils, FMCG, White Goods, Palletized Cargo." },
  { label: "Canopy / Curtain", value: "High quality 750-900 GSM PVC Curtain (Sliding)." },
  { label: "Floor Design", value: "4mm Chequered Plate with dedicated Coil Well." },
  { label: "Chassis Frame", value: "2 Rolled 'I' Sections (BS-4360) with welded cross members." },
  { label: "Axles", value: "Square beam Axles of YORK / FUWA or equivalent." },
  { label: "Suspension", value: "Heavy duty 9-leaf spring suspension (FUWA / YORK)." },
  { label: "King Pin", value: "2\" SAE Bolted type (JOST make) with 14mm Rub plate." },
  { label: "Landing Legs", value: "Twin speed gear operated (Static: 60T, Lift: 28T)." },
  { label: "Paint System", value: "Shot Blasted + Zinc Phosphate Primer + 2 Coats Auto Paint." },
  { label: "Electricals", value: "24V System with side markers, reflectors & rear parking lights." },
];

// --- 3. FEATURES (Generated Professional Content) ---
const features = [
  { 
    title: "Weather Protection", 
    desc: "Features a high-grade 900 GSM PVC curtain system to protect sensitive cargo from rain, dust, and UV rays.",
    icon: <ShieldCheck className="w-8 h-8 text-[#d11329]" />
  },
  { 
    title: "Quick Loading", 
    desc: "Sliding curtain mechanism allows for faster side-loading and unloading of pallets compared to standard box trailers.",
    icon: <Settings className="w-8 h-8 text-[#d11329]" />
  },
  { 
    title: "Coil Transport", 
    desc: "Specially designed floor with a dedicated Coil Well ensures safe and secure transportation of heavy steel coils.",
    icon: <Truck className="w-8 h-8 text-[#d11329]" />
  },
  { 
    title: "Versatile Cargo", 
    desc: "Ideal for FMCG, electronics, and automotive parts where both security and accessibility are paramount.",
    icon: <Box className="w-8 h-8 text-[#d11329]" />
  },
];

export default function CurtainSider() {
  return (
    <main className="bg-[#050505] text-white pt-20">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/products/curtain-sider-hero.png" // Placeholder
            alt="Black Diamond Curtain Sider Trailer"
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
              Secure & Accessible
            </h4>
            <h1 className="text-5xl md:text-8xl font-oswald font-bold uppercase tracking-tight mb-6 drop-shadow-2xl text-white">
              Curtain Sider <span className="text-zinc-500">Trailer</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-200 font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Ultimate Protection for <span className="text-[#d11329]">Coils & Palletized Cargo</span>.
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
              Efficiency Meets <br /> <span className="text-[#d11329]">Protection</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed text-justify font-roboto">
              <p>
                The <strong>Curtain Sider Trailer</strong> combines the security of a box trailer with the loading flexibility of a flatbed. Featuring a retractable PVC curtain system, it offers complete weather protection for high-value goods while enabling rapid side-loading via forklifts.
              </p>
              <p>
                Engineered with a robust chassis and a specialized floor containing a <strong>Coil Well</strong>, this trailer is the perfect solution for steel coil logistics as well as FMCG and white goods distribution.
              </p>
              
              <div className="flex flex-col gap-4 mt-6">
                <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#d11329] shrink-0" />
                    <span className="text-white text-lg">Curtain: 900 GSM Heavy Duty PVC</span>
                </div>
                <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#d11329] shrink-0" />
                    <span className="text-white text-lg">Feature: Dedicated Coil Well for Steel Transport</span>
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
             {/* ✅ Use Booklet Drawing Here (No Invert, Added White BG to Container) */}
             <Image 
                 src="/products/curtain-sider.png" 
                 alt="Curtain Sider Engineering Blueprint"
                 fill
                 className="object-contain p-2" // Removed 'invert' class
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
            <p className="text-zinc-500 mt-4">Optimized for 40ft High Cube Logistics</p>
          </div>

          {/* --- SMART TABLE --- */}
          <div className="hidden md:block overflow-x-auto mb-20 rounded-sm border border-zinc-800 shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-900 text-[#d11329] text-base uppercase tracking-wider font-oswald">
                  <th className="p-6 border-b border-zinc-800">Model</th>
                  <th className="p-6 border-b border-zinc-800">Overall Length</th>
                  <th className="p-6 border-b border-zinc-800">Overall Width</th>
                  <th className="p-6 border-b border-zinc-800">Overall Height</th>
                  <th className="p-6 border-b border-zinc-800">Key Feature</th>
                  <th className="p-6 border-b border-zinc-800">Curtain Spec</th>
                </tr>
              </thead>
              <tbody className="text-zinc-300 font-roboto text-sm md:text-base">
                {modelTable.map((row, i) => (
                  <tr key={i} className="border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors odd:bg-black even:bg-[#0c0c0c]">
                    <td className="p-6 font-bold text-white border-r border-zinc-800">{row.model}</td>
                    <td className="p-6 border-r border-zinc-800">{row.length}</td>
                    <td className="p-6 border-r border-zinc-800">{row.width}</td>
                    <td className="p-6 border-r border-zinc-800">{row.height}</td>
                    <td className="p-6 border-r border-zinc-800">{row.payload}</td>
                    <td className="p-6 text-[#d11329] font-bold">{row.curtain}</td>
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
                  <span className="text-[#d11329] font-bold font-oswald text-xl">{row.model}</span>
                  <span className="text-xs font-bold bg-zinc-800 text-white px-2 py-1 rounded">{row.curtain}</span>
                </div>
                <div className="grid grid-cols-2 gap-y-2 text-sm text-zinc-400">
                  <div>Length: <span className="text-white">{row.length}</span></div>
                  <div>Height: <span className="text-white">{row.height}</span></div>
                  <div>Payload: <span className="text-white">{row.payload}</span></div>
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
              Protect Your Cargo
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
              Get the best price for our premium Curtain Sider Trailers.
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