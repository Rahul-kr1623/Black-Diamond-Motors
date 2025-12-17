"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Truck, Wrench, Clock, Settings, ShieldCheck, Phone } from "lucide-react";

// --- ONSITE FEATURES ---
const onsiteFeatures = [
  {
    title: "Service Camps",
    desc: "Strategically located hubs where skilled engineers gather to address bulk maintenance needs, bringing expert care closer to your fleet.",
    icon: <MapPin className="w-8 h-8 text-[#d11329]" />
  },
  {
    title: "Mobile Service Vans",
    desc: "A fleet of fully equipped vans stationed near operation sites to provide immediate response to breakdowns and regular servicing.",
    icon: <Truck className="w-8 h-8 text-[#d11329]" />
  },
  {
    title: "Preventive Maintenance",
    desc: "Scheduled onsite check-ups to identify potential issues early, preventing costly downtime and extending vehicle life.",
    icon: <ShieldCheck className="w-8 h-8 text-[#d11329]" />
  },
  {
    title: "Rapid Response",
    desc: "Our decentralized network ensures that expert help is never far away, guaranteeing the fastest turnaround times in the industry.",
    icon: <Clock className="w-8 h-8 text-[#d11329]" />
  },
];

export default function OnsiteServices() {
  return (
    <main className="bg-[#050505] text-white pt-20">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* ✅ Uses the image you uploaded (Rename to onsite-hero.jpg) */}
          <Image
            src="/services/onsite-hero.jpg" 
            alt="Black Diamond Onsite Service"
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
              We Come to You
            </h4>
            <h1 className="text-5xl md:text-7xl font-oswald font-bold uppercase tracking-tight mb-6 text-white drop-shadow-2xl">
              Onsite <span className="text-zinc-500">Services</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-200 font-light max-w-3xl mx-auto leading-relaxed">
              Minimizing downtime with strategic service camps and mobile response units.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= 2. SERVICE APPROACH (Overview) ================= */}
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
              Maximum Uptime <br /> <span className="text-[#d11329]">Zero Hassle</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed text-justify font-roboto">
              <p>
                At Black Diamond Motors, we go the extra mile to ensure prompt and efficient assistance. We employ a multi-faceted approach that includes organizing <strong>Service Camps</strong> at strategic locations and maintaining a fleet of <strong>Mobile Service Vans</strong>.
              </p>
              <p>
                By stationing these vans near our products’ operation sites, we ensure quick response times and immediate attention to breakdowns. We understand the value of time in the fast-paced business world, and our widespread service network enables us to provide timely support wherever you may be located.
              </p>
            </div>
          </motion.div>

          {/* Right: Feature Box */}
          <div className="bg-[#111] border border-zinc-800 p-10 rounded-sm relative overflow-hidden group hover:border-[#d11329] transition-all">
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <Wrench className="w-40 h-40 text-white" />
             </div>
             <h3 className="text-2xl font-oswald font-bold text-white mb-6 relative z-10">Service on Wheels</h3>
             <ul className="space-y-4 relative z-10">
               {[
                 "Fully Equipped Mobile Workshops",
                 "Genuine Spare Parts Stock",
                 "Expert Technicians on Board",
                 "Rapid Breakdown Assistance",
                 "Scheduled Maintenance Visits"
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

      {/* ================= 3. FEATURES GRID ================= */}
      <section className="py-24 bg-[#0a0a0a] border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase text-white mb-4">Why Choose Onsite?</h2>
            <div className="h-1 w-24 bg-[#d11329] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {onsiteFeatures.map((feature, i) => (
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
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-oswald font-bold text-white mb-2 uppercase">{feature.title}</h3>
                    <p className="text-zinc-400 leading-relaxed text-sm">{feature.desc}</p>
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
            Need Support on Site?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Our mobile service vans are ready to deploy. Contact us for immediate assistance or to schedule a service camp.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-black hover:bg-zinc-900 text-white px-12 py-5 font-bold uppercase tracking-widest text-sm rounded-sm transition-all shadow-xl flex items-center justify-center gap-2">
              <Truck className="w-5 h-5" /> Request Mobile Van
            </button>
            <button className="bg-white text-[#d11329] hover:bg-zinc-100 px-12 py-5 font-bold uppercase tracking-widest text-sm rounded-sm transition-all shadow-xl flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Contact Service Team
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}