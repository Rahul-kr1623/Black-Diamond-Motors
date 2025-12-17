"use client";

import Image from "next/image";
import { motion } from "framer-motion";
// ✅ FIX: Added CheckCircle2 to the import list
import { Wrench, Phone, Truck, Clock, MapPin, ShieldCheck, Users, Settings, PenTool, CheckCircle2 } from "lucide-react";

// --- SERVICE FEATURES DATA ---
const serviceFeatures = [
  {
    title: "Mobile Service Vans",
    desc: "Deployed in close proximity to operation sites for swift assistance during breakdowns, minimizing downtime.",
    icon: <Truck className="w-8 h-8 text-[#d11329]" />
  },
  {
    title: "24/7 Spare Parts",
    desc: "Round-the-clock availability of genuine spare parts to ensure your fleet never stops moving.",
    icon: <Clock className="w-8 h-8 text-[#d11329]" />
  },
  {
    title: "Dedicated Workshops",
    desc: "Fully-equipped workshops to facilitate prompt settlements, major overhauls, and accidental repairs.",
    icon: <Wrench className="w-8 h-8 text-[#d11329]" />
  },
  {
    title: "On-Site Support",
    desc: "Expert technicians dispatched directly to your location for immediate troubleshooting and maintenance.",
    icon: <MapPin className="w-8 h-8 text-[#d11329]" />
  },
  {
    title: "Customer Care",
    desc: "A dedicated team ready to address technical queries and service requests over the telephone.",
    icon: <Phone className="w-8 h-8 text-[#d11329]" />
  },
  {
    title: "Service Camps",
    desc: "Regular health check-up camps organized at strategic locations to ensure vehicle longevity.",
    icon: <Users className="w-8 h-8 text-[#d11329]" />
  },
];

// --- NETWORK LOCATIONS ---
const networkStates = [
  "Chhattisgarh", "Madhya Pradesh", "Odisha", "Uttar Pradesh", 
  "Gujarat", "Rajasthan", "Haryana"
];

// --- PARTNERS ---
const partners = ["Hyva", "York", "Hidromas", "Wabco", "Knorr-Bremse"];

export default function AfterSales() {
  return (
    <main className="bg-[#050505] text-white pt-20">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/services/service-hero.jpg" 
            alt="Black Diamond Service Team"
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
              We've Got Your Back
            </h4>
            <h1 className="text-5xl md:text-7xl font-oswald font-bold uppercase tracking-tight mb-6 text-white drop-shadow-2xl">
              After Sales <span className="text-zinc-500">Service</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-200 font-light max-w-3xl mx-auto leading-relaxed">
              Unwavering support. Prompt solutions. Ensuring your fleet stays on the road.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= 2. SERVICE PROMISE (Overview) ================= */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-oswald font-bold uppercase mb-8 leading-tight">
              Commitment to <br /> <span className="text-[#d11329]">Customer Satisfaction</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed text-justify font-roboto">
              <p>
                Black Diamond Motors is renowned not just for manufacturing reliable products, but for prioritizing consistent support. Our commitment to customer satisfaction is reflected in our comprehensive service infrastructure spread across India.
              </p>
              <p>
                We understand that in the logistics business, <strong>Time is Money</strong>. That's why we have adopted a proactive approach. Our service team comprises experienced engineers, skilled technicians, and dedicated staff members who ensure that every issue is addressed promptly, minimizing downtime and maximizing efficiency.
              </p>
            </div>
          </motion.div>

          {/* Right: Stats / Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#111] p-8 border-l-4 border-[#d11329] rounded-sm">
              <Settings className="w-10 h-10 text-[#d11329] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Skilled Team</h3>
              <p className="text-zinc-500 text-sm">Expert engineers and trained technicians.</p>
            </div>
            <div className="bg-[#111] p-8 border-l-4 border-white rounded-sm">
              <ShieldCheck className="w-10 h-10 text-white mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Quality Parts</h3>
              <p className="text-zinc-500 text-sm">Only genuine spares used for repairs.</p>
            </div>
            <div className="bg-[#111] p-8 border-l-4 border-white rounded-sm">
              <Clock className="w-10 h-10 text-white mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Swift Response</h3>
              <p className="text-zinc-500 text-sm">Mobile vans ready for dispatch.</p>
            </div>
            <div className="bg-[#111] p-8 border-l-4 border-[#d11329] rounded-sm">
              <PenTool className="w-10 h-10 text-[#d11329] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Fully Equipped</h3>
              <p className="text-zinc-500 text-sm">Modern tools for accidental repairs.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 3. SERVICES GRID ================= */}
      <section className="py-24 bg-[#0a0a0a] border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase text-white mb-4">Our Service Ecosystem</h2>
            <div className="h-1 w-24 bg-[#d11329] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceFeatures.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#111] p-8 rounded-sm border border-zinc-800 hover:border-[#d11329] transition-all group"
              >
                <div className="mb-6 bg-zinc-900 p-4 w-fit rounded-full group-hover:bg-[#d11329] group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-oswald font-bold text-white mb-3 uppercase">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. NETWORK & PARTNERS ================= */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Network Nodes */}
          <div>
            <h3 className="text-3xl font-oswald font-bold text-white mb-8 uppercase">
              Service Network <span className="text-[#d11329]">Nodes</span>
            </h3>
            <p className="text-zinc-400 mb-8">
              We have established network nodes across key states to ensure that help is never too far away.
            </p>
            <div className="flex flex-wrap gap-3">
              {networkStates.map((state, i) => (
                <span key={i} className="px-6 py-3 bg-[#111] border border-zinc-700 text-zinc-300 font-bold uppercase text-sm rounded-sm hover:border-[#d11329] hover:text-white transition-colors cursor-default">
                  {state}
                </span>
              ))}
              <span className="px-6 py-3 border border-dashed border-zinc-700 text-zinc-500 uppercase text-sm rounded-sm">
                + More
              </span>
            </div>
          </div>

          {/* Aggregate Suppliers */}
          <div>
            <h3 className="text-3xl font-oswald font-bold text-white mb-8 uppercase">
              Trusted <span className="text-[#d11329]">Partners</span>
            </h3>
            <p className="text-zinc-400 mb-8">
              We secure maximum benefits for our customers by partnering with prominent aggregate suppliers for components and spares.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {partners.map((partner, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-[#111] border-l-2 border-zinc-600 hover:border-[#d11329] transition-all">
                  <CheckCircle2 className="w-5 h-5 text-[#d11329]" />
                  <span className="text-white font-bold text-lg">{partner}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= 5. CTA SECTION ================= */}
      <section className="py-20 bg-[#d11329]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white uppercase mb-6">
            Need Immediate Support?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Our customer care team is just a phone call away. Reach out for service queries, breakdowns, or spare parts.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-black hover:bg-zinc-900 text-white px-12 py-5 font-bold uppercase tracking-widest text-sm rounded-sm transition-all shadow-xl flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Contact Support
            </button>
            <button className="bg-white text-[#d11329] hover:bg-zinc-100 px-12 py-5 font-bold uppercase tracking-widest text-sm rounded-sm transition-all shadow-xl">
              Locate Workshop
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}