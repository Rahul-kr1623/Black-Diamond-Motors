"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, BookOpen, Wrench, TrendingUp, ShieldCheck, CheckCircle2, Phone, UserCheck } from "lucide-react";

// --- TRAINING BENEFITS ---
const trainingBenefits = [
  {
    title: "Tire Wear Reduction",
    desc: "Drivers are trained in correct braking and cornering techniques to significantly extend tire life and reduce operational costs.",
    icon: <TrendingUp className="w-8 h-8 text-[#d11329]" />
  },
  {
    title: "Hydraulic Maintenance",
    desc: "Deep knowledge of hydraulic and pneumatic systems ensures optimal functioning and prevents unnecessary cylinder failures.",
    icon: <Wrench className="w-8 h-8 text-[#d11329]" />
  },
  {
    title: "Proactive Maintenance",
    desc: "Well-versed in routine checks, enabling drivers to identify potential issues before they become major breakdowns.",
    icon: <ShieldCheck className="w-8 h-8 text-[#d11329]" />
  },
  {
    title: "Operational Efficiency",
    desc: "Mastery over trailer maneuvering and tipping operations minimizes turnaround time and maximizes fleet productivity.",
    icon: <CheckCircle2 className="w-8 h-8 text-[#d11329]" />
  },
];

export default function DriversTraining() {
  return (
    <main className="bg-[#050505] text-white pt-20">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* ✅ Uses the image you uploaded (Rename to training-hero.jpg) */}
          <Image
            src="/services/training-hero.jpg" 
            alt="Black Diamond Driver Training"
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
              Skilled Hands Behind the Wheel
            </h4>
            <h1 className="text-5xl md:text-7xl font-oswald font-bold uppercase tracking-tight mb-6 text-white drop-shadow-2xl">
              Drivers & <span className="text-zinc-500">Training</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-200 font-light max-w-3xl mx-auto leading-relaxed">
              Empowering your fleet with professional staffing and expert technical training.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= 2. STAFFING SOLUTIONS (Overview) ================= */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-10 h-10 text-[#d11329]" />
              <h2 className="text-3xl md:text-5xl font-oswald font-bold uppercase leading-tight">
                Flexible <br /> <span className="text-[#d11329]">Staffing Solutions</span>
              </h2>
            </div>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed text-justify font-roboto">
              <p>
                We have established strong connections with fleet driver suppliers, enabling us to fulfill your staffing needs efficiently. Whether you require professional drivers on an ongoing basis or for specific projects, we have you covered.
              </p>
              <p>
                Our network of skilled drivers can be seamlessly integrated into your workforce, either as part of your <strong>Payroll</strong> or on a <strong>Rental Basis</strong>. This flexibility ensures that you have access to experienced manpower whenever the need arises, without the hassle of managing extensive recruitment processes.
              </p>
            </div>
          </motion.div>

          {/* Right: Feature Box */}
          <div className="bg-[#111] border border-zinc-800 p-10 rounded-sm relative overflow-hidden group hover:border-[#d11329] transition-all">
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <UserCheck className="w-40 h-40 text-white" />
             </div>
             <h3 className="text-2xl font-oswald font-bold text-white mb-6 relative z-10">Why Hire Through Us?</h3>
             <ul className="space-y-4 relative z-10">
               {[
                 "Verified & Background Checked Drivers",
                 "Flexible Engagement Models (Contract/Permanent)",
                 "Trained Specifically on Trailers & Tippers",
                 "Immediate Replacement Guarantee",
                 "Zero Recruitment Hassle"
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

      {/* ================= 3. TRAINING BENEFITS GRID ================= */}
      <section className="py-24 bg-[#0a0a0a] border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 justify-center mb-2">
                <BookOpen className="w-5 h-5 text-[#d11329]" />
                <span className="text-[#d11329] font-bold tracking-widest uppercase text-sm">The Black Diamond Advantage</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase text-white mb-4">Technical Proficiency</h2>
            <div className="h-1 w-24 bg-[#d11329] mx-auto rounded-full" />
            <p className="text-zinc-500 mt-4 max-w-2xl mx-auto">
              Our drivers aren't just operators; they are trained technicians who understand the machine they handle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingBenefits.map((benefit, i) => (
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
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-oswald font-bold text-white mb-2 uppercase">{benefit.title}</h3>
                    <p className="text-zinc-400 leading-relaxed text-sm">{benefit.desc}</p>
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
            Optimize Your Fleet Today
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Whether you need skilled drivers or training for your existing workforce, we have the solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-black hover:bg-zinc-900 text-white px-12 py-5 font-bold uppercase tracking-widest text-sm rounded-sm transition-all shadow-xl flex items-center justify-center gap-2">
              <Users className="w-5 h-5" /> Request Drivers
            </button>
            <button className="bg-white text-[#d11329] hover:bg-zinc-100 px-12 py-5 font-bold uppercase tracking-widest text-sm rounded-sm transition-all shadow-xl flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Contact Training Dept
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}