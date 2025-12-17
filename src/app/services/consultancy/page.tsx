"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Lightbulb, FileText, TrendingUp, Handshake, BarChart, Scale } from "lucide-react";

// --- CONSULTANCY SERVICES ---
const consultancyServices = [
  {
    title: "Project Planning & RFQ",
    desc: "We actively support customers in planning their Requests for Quotation (RFQ), navigating complex tender processes with our 25+ years of expertise.",
    icon: <FileText className="w-8 h-8 text-[#d11329]" />
  },
  {
    title: "Product Selection Strategy",
    desc: "Helping you choose the exact right tip-trailer or tipper for your specific project needs, ensuring maximum utility and ROI.",
    icon: <Lightbulb className="w-8 h-8 text-[#d11329]" />
  },
  {
    title: "Regulatory Compliance",
    desc: "We stay updated with the latest government regulations (CMVR/ARAI) and incorporate them into your project planning to ensure full compliance.",
    icon: <Scale className="w-8 h-8 text-[#d11329]" />
  },
  {
    title: "Cost Optimization",
    desc: "Providing valuable inputs to optimize resource allocation and operational expenses, giving you a competitive edge in execution.",
    icon: <TrendingUp className="w-8 h-8 text-[#d11329]" />
  },
];

export default function Consultancy() {
  return (
    <main className="bg-[#050505] text-white pt-20">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* ✅ Uses the image you uploaded (Rename to consultancy-hero.jpg) */}
          <Image
            src="/services/consultancy-hero.jpg" 
            alt="Black Diamond Business Consultancy"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/70 to-black/30" />
        </div>

        <div className="relative z-10 text-center max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-[#d11329] font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-lg bg-black/50 inline-block px-4 py-1 backdrop-blur-sm rounded-sm">
              Strategic Expertise
            </h4>
            <h1 className="text-5xl md:text-7xl font-oswald font-bold uppercase tracking-tight mb-6 text-white drop-shadow-2xl">
              Free <span className="text-zinc-500">Consultancy</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-200 font-light max-w-3xl mx-auto leading-relaxed">
              25+ Years of Experience. Guiding your projects from planning to execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= 2. THE EXPERT ADVANTAGE (Overview) ================= */}
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
              More Than Just <br /> <span className="text-[#d11329]">Manufacturers</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed text-justify font-roboto">
              <p>
                With over <strong>25 years of extensive experience</strong> in project planning, our management brings invaluable expertise to the table. We don't just sell trailers; we partner with you to ensure your project's success.
              </p>
              <p>
                One of the ways we go above and beyond is by providing <strong>Free Consultancy</strong>. We understand the complexities of the tendering process and actively support our customers in planning their RFQs. Our goal is to ensure you achieve the highest level of operational efficiency and cost optimization.
              </p>
            </div>
          </motion.div>

          {/* Right: Feature Box */}
          <div className="bg-[#111] border border-zinc-800 p-10 rounded-sm relative overflow-hidden group hover:border-[#d11329] transition-all">
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <BarChart className="w-40 h-40 text-white" />
             </div>
             <h3 className="text-2xl font-oswald font-bold text-white mb-6 relative z-10">Why Consult Us?</h3>
             <ul className="space-y-4 relative z-10">
               {[
                 "In-depth Knowledge of CMVR Regulations",
                 "Expertise in Tender & RFQ Preparation",
                 "Optimization of Operational Expenses",
                 "Tailored Solutions for Specific Industries",
                 "Proven Track Record of Project Success"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-zinc-300">
                   <div className="h-2 w-2 bg-[#d11329] rounded-full" />
                   {item}
                 </li>
               ))}
             </ul>
          </div>

        </div>
      </section>

      {/* ================= 3. CONSULTANCY SERVICES GRID ================= */}
      <section className="py-24 bg-[#0a0a0a] border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase text-white mb-4">How We Add Value</h2>
            <div className="h-1 w-24 bg-[#d11329] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultancyServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#111] p-8 rounded-sm border-l-4 border-zinc-700 hover:border-[#d11329] transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-zinc-900 rounded-full group-hover:bg-[#d11329] group-hover:text-white transition-colors shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-oswald font-bold text-white mb-2 uppercase">{service.title}</h3>
                    <p className="text-zinc-400 leading-relaxed text-sm">{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. CTA SECTION ================= */}
      <section className="py-20 bg-[#d11329]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white uppercase mb-6">
            Planning a New Project?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Leverage our 25 years of industry insights. Schedule a free consultation session with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-black hover:bg-zinc-900 text-white px-12 py-5 font-bold uppercase tracking-widest text-sm rounded-sm transition-all shadow-xl flex items-center justify-center gap-2">
              <Handshake className="w-5 h-5" /> Book Consultation
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}