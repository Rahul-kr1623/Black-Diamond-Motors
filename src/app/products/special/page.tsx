"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Truck, Hammer, Settings, ShieldCheck, ArrowRight, CheckCircle2, Ruler, Cog } from "lucide-react";

// --- 1. SPECIAL VARIANTS TABLE (From Booklet & Content) ---
const specialVariants = [
  { 
    title: "Low Bed Trailer", 
    desc: "Equipped with Hydraulic Ramps for easy loading of Heavy Earth Moving Equipments like Excavators & Dozers.",
    dims: "Length: Customized | Ramp: Hydraulic",
    icon: "/icons/lowbed.svg" // Placeholder icon logic handled below
  },
  { 
    title: "Well Bed Trailer", 
    desc: "Designed with a deep loading deck for Over Dimensional Cargo (ODC) like Transformers and heavy machinery.",
    dims: "Deck Height: Low Profile | App: ODC",
    icon: "/icons/wellbed.svg"
  },
  { 
    title: "Hydraulic Lift Trailer", 
    desc: "Flat bed trailer with a hydraulic lifting mechanism for specialized unloading requirements.",
    dims: "Mechanism: Heavy Duty Hydraulics",
    icon: "/icons/lift.svg"
  },
  { 
    title: "Molten Skull Carrier", 
    desc: "Extreme temperature payload handling solution designed for steel plants (Hot Slag Pot).",
    dims: "Temp Resistance: Extreme High",
    icon: "/icons/fire.svg"
  },
];

// --- 2. COMPONENT SPECS (From Booklet) ---
const componentSpecs = [
  { label: "Application", value: "Heavy Earth Movers, ODC Cargo, Hot Slag, Specialized Loads." },
  { label: "Ramp System", value: "Heavy Mechanized Hydraulic Ramps (Optional)." },
  { label: "Chassis Frame", value: "Custom fabricated heavy-duty I-beams for specific load distribution." },
  { label: "Suspension", value: "Heavy duty suspension / Air Suspension for sensitive cargo." },
  { label: "Axles", value: "12V/24V Electrical System compatible axles." },
  { label: "King Pin", value: "2\" / 3.5\" SAE Bolted type (JOST make) with 14mm Rub plate." },
  { label: "Brakes", value: "Dual Line Air Brake System with emergency relay valve." },
  { label: "Paint System", value: "Shot Blasted + Zinc Phosphate Primer + 2 Coats Auto Paint." },
  { label: "Accessories", value: "RUPD, Tool Box, SUPD fitment." },
];

// --- 3. FEATURES (Customization Focus) ---
const features = [
  { 
    title: "Tailor-Made Design", 
    desc: "We don't just sell products; we engineer solutions. Every trailer is customized to your specific transport needs.",
    icon: <Settings className="w-8 h-8 text-[#d11329]" />
  },
  { 
    title: "Extreme Durability", 
    desc: "From molten slag to 100-ton transformers, our trailers are built to handle extreme weights and temperatures.",
    icon: <ShieldCheck className="w-8 h-8 text-[#d11329]" />
  },
  { 
    title: "Advanced Mechanisms", 
    desc: "Integration of hydraulic lifts, covering mechanisms, and mechanized ramps for operational efficiency.",
    icon: <Cog className="w-8 h-8 text-[#d11329]" />
  },
  { 
    title: "Expert Collaboration", 
    desc: "Our design team collaborates closely with you to create a carrier that fits your unique logistics puzzle.",
    icon: <Truck className="w-8 h-8 text-[#d11329]" />
  },
];

export default function SpecialApplication() {
  return (
    <main className="bg-[#050505] text-white pt-20">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* ✅ Placeholder: Replace with Low Bed / Special Trailer Image */}
          <Image
            src="/products/special-application-trailer-hero.png" 
            alt="Black Diamond Special Application Trailer"
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
              Beyond Standard Logistics
            </h4>
            <h1 className="text-5xl md:text-8xl font-oswald font-bold uppercase tracking-tight mb-6 drop-shadow-2xl text-white">
              Special <span className="text-zinc-500">Application</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-200 font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Custom Engineering for <span className="text-[#d11329]">ODC, Mining & Heavy Equipment</span>.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-[#d11329] hover:bg-red-700 text-white px-12 py-4 font-bold uppercase tracking-widest text-sm transition-all rounded-sm shadow-[0_10px_20px_rgba(209,19,41,0.4)]">
                Discuss Your Need
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
              Unique Problems <br /> <span className="text-[#d11329]">Custom Solutions</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed text-justify font-roboto">
              <p>
                At Black Diamond Motors, we understand that standard trailers don't always fit specific requirements. We excel in designing and manufacturing <strong>Tailor-Made Carriers</strong> for specialized applications.
              </p>
              <p>
                Whether it's transporting <strong>Special Oversized Pavers</strong>, creating extreme temperature handling solutions for steel plants, or designing heavy mechanized ramp trailers, our engineering team loves a challenge. We collaborate closely with you to deliver a solution that exceeds expectations.
              </p>
              
              <div className="flex flex-col gap-4 mt-6">
                <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#d11329] shrink-0" />
                    <span className="text-white text-lg">Speciality: Low Bed, Well Bed, ODC Carriers</span>
                </div>
                <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#d11329] shrink-0" />
                    <span className="text-white text-lg">Engineering: Custom Design & Fabrication</span>
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
             {/* ✅ Use Booklet Drawing Here */}
             <Image 
                 src="/products/special-application-trailer.png" // ⚠️ Save booklet blueprint here
                 alt="Special Application Engineering Blueprint"
                 fill
                 className="object-contain p-2" 
               />
               <div className="absolute bottom-6 right-6 bg-black/80 px-4 py-2 text-xs text-zinc-400 border border-zinc-800 rounded-full flex items-center gap-2">
                <Ruler className="w-3 h-3 text-[#d11329]" /> ENGINEERING DRAWING
               </div>
          </motion.div>

        </div>
      </section>

      {/* ================= 3. SPECIAL VARIANTS GRID ================= */}
      <section className="py-24 bg-[#0a0a0a] border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase text-white mb-4">Specialized Variants</h2>
            <div className="h-1 w-24 bg-[#d11329] mx-auto rounded-full" />
            <p className="text-zinc-500 mt-4">Solutions we have successfully delivered</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialVariants.map((variant, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-[#111] border border-zinc-800 p-8 rounded-sm hover:border-[#d11329] transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-oswald font-bold text-white group-hover:text-[#d11329] transition-colors">{variant.title}</h3>
                  <Truck className="w-6 h-6 text-zinc-600 group-hover:text-[#d11329] transition-colors" />
                </div>
                <p className="text-zinc-400 mb-6 leading-relaxed">{variant.desc}</p>
                <div className="pt-6 border-t border-zinc-800">
                  <span className="text-xs font-bold text-[#d11329] uppercase tracking-widest">{variant.dims}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Component Specs Grid */}
          <div className="mt-20">
            <h3 className="text-2xl font-oswald font-bold text-white mb-8 border-l-4 border-[#d11329] pl-4">Standard Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
              {componentSpecs.map((spec, i) => (
                <div key={i} className="flex flex-col border-b border-zinc-800 pb-4 group">
                  <span className="text-[#d11329] font-bold uppercase text-xs tracking-widest mb-2 group-hover:translate-x-1 transition-transform">{spec.label}</span>
                  <span className="text-white font-medium text-lg leading-snug">{spec.value}</span>
                </div>
              ))}
            </div>
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
              Have a Unique Requirement?
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
              Our engineering team is ready to design the perfect carrier for your special application.
            </p>
            <button className="bg-black hover:bg-zinc-900 text-white px-12 py-5 font-bold uppercase tracking-widest text-sm rounded-sm transition-all shadow-xl flex items-center justify-center gap-2 mx-auto">
              Consult an Expert <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}