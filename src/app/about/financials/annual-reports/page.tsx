"use client";

import { motion } from "framer-motion";
import { Download, Lock, TrendingUp, Calendar, FileText } from "lucide-react";

export default function AnnualReports() {
  const financialHighlights = [
    { label: "Operating Revenue (FY24)", value: "₹402 Cr+", trend: "+28%" },
    { label: "Net Worth Growth", value: "37.66%", trend: "Yearly" },
    { label: "EBITDA Growth", value: "28.05%", trend: "Positive" },
  ];

  return (
    <main className="bg-[#050505] text-white pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase mb-4">
            Financial <span className="text-[#d11329]">Reports</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Transparency and growth define our journey. Here is an overview of our financial performance for the Financial Year 2023-24.
          </p>
        </div>

        {/* 1. FINANCIAL HIGHLIGHTS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {financialHighlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-sm text-center group hover:border-[#d11329] transition-colors"
            >
              <TrendingUp className="w-8 h-8 text-[#d11329] mx-auto mb-4" />
              <h3 className="text-4xl font-oswald font-bold text-white mb-2">{item.value}</h3>
              <p className="text-zinc-500 uppercase tracking-widest text-sm mb-2">{item.label}</p>
              <span className="text-green-500 text-xs font-bold bg-green-500/10 px-2 py-1 rounded">
                {item.trend} Growth
              </span>
            </motion.div>
          ))}
        </div>

        {/* 2. REPORTS LIST (LOCKED / REQUEST ONLY) */}
        <div className="bg-[#111] border border-zinc-800 rounded-sm p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-zinc-800 pb-4">
            <div>
              <h2 className="text-2xl font-oswald font-bold uppercase text-white">Annual Reports & Returns</h2>
              <p className="text-zinc-500 text-sm mt-1">Authorized access only. Please request access to view full PDFs.</p>
            </div>
            <div className="text-zinc-500 text-xs flex items-center gap-2 mt-4 md:mt-0">
              <Calendar className="w-4 h-4" /> Last Updated: Sep 30, 2024
            </div>
          </div>

          <div className="space-y-4">
            {/* Dummy List Items */}
            {["Annual Report 2023-24", "Annual Return (MGT-7) 2023-24", "Audited Financials 2022-23"].map((doc, i) => (
              <div key={i} className="flex items-center justify-between bg-black p-4 border border-zinc-800 rounded hover:bg-zinc-900 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-zinc-800 rounded text-[#d11329]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm md:text-base">{doc}</h4>
                    <span className="text-zinc-500 text-xs">PDF Document • Restricted</span>
                  </div>
                </div>
                
                {/* Lock Button instead of Download */}
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 border border-zinc-700 px-4 py-2 rounded hover:bg-[#d11329] hover:text-white hover:border-[#d11329] transition-all">
                  <Lock className="w-3 h-3" /> Request Access
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}