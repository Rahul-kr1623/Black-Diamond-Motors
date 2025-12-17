"use client";

import { motion } from "framer-motion";
import { Lock, FileCheck, Scale, ShieldCheck, Calendar } from "lucide-react";

export default function AnnualReturns() {
  // Compliance Highlights (Data dikhane ke liye taaki page khali na lage)
  const complianceStats = [
    { label: "Regulatory Compliance", value: "100%", icon: <Scale className="w-6 h-6" /> },
    { label: "Governance Score", value: "A+", icon: <ShieldCheck className="w-6 h-6" /> },
    { label: "Statutory Filings", value: "On-Time", icon: <FileCheck className="w-6 h-6" /> },
  ];

  return (
    <main className="bg-[#050505] text-white pt-24 pb-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* === HEADER === */}
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#d11329] font-bold tracking-[0.2em] uppercase mb-4"
          >
            Corporate Governance
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-oswald font-bold uppercase mb-6"
          >
            Annual <span className="text-[#d11329]">Returns</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-2xl mx-auto text-lg"
          >
            At Black Diamond Motors, we believe in absolute transparency and strict adherence to the regulatory framework of the Ministry of Corporate Affairs (MCA).
          </motion.p>
        </div>

        {/* === 1. COMPLIANCE STATS === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {complianceStats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-sm text-center group hover:border-[#d11329] transition-all duration-300"
            >
              <div className="bg-zinc-800 p-4 rounded-full w-fit mx-auto mb-4 text-[#d11329] group-hover:bg-[#d11329] group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-3xl font-oswald font-bold text-white mb-2">{item.value}</h3>
              <p className="text-zinc-500 uppercase tracking-widest text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* === 2. FILINGS LIST (Restricted Access) === */}
        <div className="bg-[#111] border border-zinc-800 rounded-sm p-8 md:p-12 relative overflow-hidden">
          
          {/* Subtle Background Pattern */}
          <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
            <ShieldCheck className="w-64 h-64 -rotate-12 -translate-y-10 translate-x-10" />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-zinc-800 pb-4 relative z-10">
            <div>
              <h2 className="text-2xl font-oswald font-bold uppercase text-white">Regulatory Filings (MGT-7)</h2>
              <p className="text-zinc-500 text-sm mt-1">Access to detailed Annual Returns is restricted to shareholders.</p>
            </div>
            <div className="text-zinc-500 text-xs flex items-center gap-2 mt-4 md:mt-0">
              <Calendar className="w-4 h-4" /> Updated: FY 2023-24
            </div>
          </div>

          <div className="space-y-4 relative z-10">
            {[
              "Form MGT-7 (Annual Return) 2023-24", 
              "Shareholding Pattern Summary 2023-24", 
              "Compliance Certificate 2023-24",
              "Form MGT-7 (Annual Return) 2022-23"
            ].map((doc, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between bg-black p-5 border border-zinc-800 rounded hover:border-zinc-600 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-zinc-900 rounded text-zinc-400 group-hover:text-[#d11329] transition-colors">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm md:text-base group-hover:text-[#d11329] transition-colors">{doc}</h4>
                    <span className="text-zinc-600 text-xs uppercase tracking-wider">MCA Filing • Confidential</span>
                  </div>
                </div>
                
                {/* Lock Button */}
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 border border-zinc-800 px-4 py-2 rounded group-hover:bg-[#d11329] group-hover:text-white group-hover:border-[#d11329] transition-all">
                  <Lock className="w-3 h-3" /> Request Access
                </button>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}