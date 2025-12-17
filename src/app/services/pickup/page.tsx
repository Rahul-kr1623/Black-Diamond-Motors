"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Truck, Clock, ShieldCheck, MapPin, CheckCircle2, UserCheck } from "lucide-react";

// --- SERVICE HIGHLIGHTS ---
const serviceHighlights = [
  {
    title: "Pan-India Reach",
    desc: "Our professional drivers specialize in transporting Prime Movers/Chassis from any location across India to our facility.",
    icon: <MapPin className="w-8 h-8 text-[#d11329]" />
  },
  {
    title: "Doorstep Delivery",
    desc: "Once the trailer is attached and ready, our team delivers the complete unit straight to your specified doorstep.",
    icon: <Truck className="w-8 h-8 text-[#d11329]" />
  },
  {
    title: "Save Time & Money",
    desc: "Eliminate the need to arrange separate transportation or wait for drivers. We handle the logistics so you can focus on core business.",
    icon: <Clock className="w-8 h-8 text-[#d11329]" />
  },
  {
    title: "Trained Professionals",
    desc: "Our drivers adhere to strict safety standards, ensuring your high-value assets are transported securely and responsibly.",
    icon: <UserCheck className="w-8 h-8 text-[#d11329]" />
  },
];

export default function PickupDelivery() {
  return (
    <main className="bg-[#050505] text-white pt-20">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* ✅ Uses the image you uploaded (Rename to pickup-hero.jpg) */}
          <Image
            src="/services/pickup-hero.jpg" 
            alt="Vehicle Pickup and Delivery Service"
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
              Seamless Logistics
            </h4>
            <h1 className="text-5xl md:text-7xl font-oswald font-bold uppercase tracking-tight mb-6 text-white drop-shadow-2xl">
              Pickup & <span className="text-zinc-500">Delivery</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-200 font-light max-w-3xl mx-auto leading-relaxed">
              From your location to ours, and back to your doorstep. Hassle-free vehicle transport.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= 2. THE PROCESS (Overview) ================= */}
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
              We Move It <br /> <span className="text-[#d11329]">So You Don't Have To</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed text-justify font-roboto">
              <p>
                At Black Diamond Motors, we understand the importance of convenience and efficiency. To establish our presence on a Pan-India basis, we have assembled a team of professional drivers who specialize in transporting Prime movers/Chassis from your location to ours.
              </p>
              <p>
                By utilizing our vehicle pickup and delivery service, you can save both time and money. Our dedicated drivers ensure a smooth and hassle-free transfer, eliminating the need for you to arrange transportation or wait for drivers to complete trailer attachment. We take care of the logistics, so you can focus on your core business activities without interruptions.
              </p>
            </div>
          </motion.div>

          {/* Right: Feature Box */}
          <div className="bg-[#111] border border-zinc-800 p-10 rounded-sm relative overflow-hidden group hover:border-[#d11329] transition-all">
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <ShieldCheck className="w-40 h-40 text-white" />
             </div>
             <h3 className="text-2xl font-oswald font-bold text-white mb-6 relative z-10">Safe & Secure</h3>
             <ul className="space-y-4 relative z-10">
               {[
                 "Experienced drivers for safe handling",
                 "Adherence to strict road safety standards",
                 "Timely transport for single units or fleets",
                 "Complete peace of mind for your assets",
                 "Streamlined operations workflow"
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
            <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase text-white mb-4">Service Benefits</h2>
            <div className="h-1 w-24 bg-[#d11329] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceHighlights.map((highlight, i) => (
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
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-oswald font-bold text-white mb-2 uppercase">{highlight.title}</h3>
                    <p className="text-zinc-400 leading-relaxed text-sm">{highlight.desc}</p>
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
            Ready to Move?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Schedule a pickup for your chassis today and experience our seamless delivery service.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-black hover:bg-zinc-900 text-white px-12 py-5 font-bold uppercase tracking-widest text-sm rounded-sm transition-all shadow-xl flex items-center justify-center gap-2">
              <Truck className="w-5 h-5" /> Schedule Pickup
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}