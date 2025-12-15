"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link"; // ✅ Added Link
import { motion, useInView } from "framer-motion";
import { Target, ShieldCheck, Hammer, ArrowRight } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Precision Engineering",
    icon: <Target className="w-8 h-8 text-red-600" />,
    text: "State-of-the-art CNC plasma cutting and robotic welding ensure every joint is pixel-perfect. We eliminate human error to guarantee structural integrity.",
  },
  {
    id: 2,
    title: "Safety Standards",
    icon: <ShieldCheck className="w-8 h-8 text-red-600" />,
    text: "Fully compliant with CMVR & ARAI regulations. We don't just build trucks; we build safety fortresses designed to protect the driver and the cargo.",
  },
  {
    id: 3,
    title: "Unmatched Durability",
    icon: <Hammer className="w-8 h-8 text-red-600" />,
    text: "High-grade tensile steel that withstands the harshest mining environments for decades. Built to take a beating and keep moving forward.",
  },
];

// Spark Particle: Left to Right flow
const Spark = ({ delay }: { delay: number }) => {
  const randomX = Math.random() * 200 + 20;
  const randomY = Math.random() * -300 - 50;

  return (
    <motion.div
      initial={{ opacity: 1, x: 0, y: 0, scale: 1.5 }}
      animate={{
        opacity: [1, 1, 0],
        x: randomX,
        y: randomY,
        scale: [1.5, 1, 0],
      }}
      transition={{
        duration: 0.6 + Math.random() * 0.8,
        delay: delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
      className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-yellow-200 to-red-600 z-20"
      style={{
        boxShadow: "0 0 8px 2px rgba(255, 100, 0, 0.9)",
      }}
    />
  );
};

const Commitment = () => {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative w-full bg-[#050505] text-white">
      <div className="flex flex-col md:flex-row">
        {/* --- LEFT COLUMN: STICKY VISUALS --- */}
        <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen md:sticky md:top-0 overflow-hidden bg-black border-r border-zinc-900">
          <Image
            src="/commitments-section.jpg"
            alt="Welder in Action"
            fill
            className="object-cover opacity-75"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/80 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />

          {/* SPARKS */}
          <div className="absolute bottom-[20%] left-[20%] z-20 pointer-events-none">
            {Array.from({ length: 60 }).map((_, i) => (
              <Spark key={i} delay={Math.random() * 3} />
            ))}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-orange-500/30 blur-[60px] rounded-full animate-pulse" />
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 blur-[20px] rounded-full animate-ping" />
          </div>
        </div>

        {/* --- RIGHT COLUMN: NARRATIVE (Scrollable) --- */}
        <div className="w-full md:w-1/2 relative bg-[#050505]">
          {/* NOTE: reduced total min-height for mobile, keep big for md+ */}
          <div className="md:min-h-[400vh] min-h-[220vh] w-full flex flex-col items-center px-6 md:px-16 py-20 md:py-24">
            {/* STICKY HEADER GROUP (sticky only on md+) */}
            <div className="md:sticky md:top-20 relative top-0 z-30 mb-12 w-full text-left mix-blend-normal">
              {/* Blur backdrop for text readability */}
              <div className="absolute inset-0 -z-10 bg-[#050505]/80 blur-xl" />

              <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-none font-oswald text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">
                Forged <br /> In Fire
              </h2>
              <div className="h-2 w-24 bg-red-600 mt-4 shadow-[0_0_20px_red]" />

              <p className="mt-6 text-base md:text-lg text-zinc-300 max-w-md font-roboto leading-relaxed border-l-2 border-zinc-700 pl-4 bg-[#050505]/80 backdrop-blur-md p-3 rounded-r-lg shadow-lg">
                Our vehicles are engineered to withstand the toughest terrains.
                We don't just weld steel; we forge trust. Every chassis passes through
                rigorous testing.
              </p>

              {/* CTA BUTTON (LINK ADDED HERE) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 pointer-events-auto"
              >
                <Link href="/advantage">
                  <button className="group relative flex items-center gap-4 px-6 py-3 bg-red-600 text-white font-oswald uppercase tracking-widest text-base hover:bg-red-700 transition-all overflow-hidden -skew-x-10 border border-red-500 shadow-[0_0_15px_rgba(220,38,38,0.5)] cursor-pointer">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
                    <span className="skew-x-10 inline-block">See Our Advantage</span>
                    <ArrowRight className="w-5 h-5 skew-x-10 group-hover:translate-x-2 transition-transform" />
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* SCROLLING CARDS */}
            <div className="flex flex-col md:gap-[70vh] gap-24 w-full max-w-lg z-20 pb-32 md:pb-[50vh]">
              {features.map((feature, index) => (
                <Card key={feature.id} feature={feature} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ feature, index }: { feature: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0.2, y: 100, scale: 0.9 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative p-6 md:p-8 rounded-sm border-l-4 border-red-600 bg-[#111] shadow-2xl z-20"
    >
      <div className="absolute -left-3 -top-3 p-3 bg-black border border-zinc-800 rounded-full shadow-lg shadow-red-900/20">
        {feature.icon}
      </div>

      <div className="mt-6">
        <h3 className="text-2xl md:text-3xl font-oswald font-bold uppercase text-white mb-3 tracking-wide">
          {feature.title}
        </h3>
        <p className="font-roboto text-zinc-400 leading-relaxed text-base md:text-lg">
          {feature.text}
        </p>
      </div>
    </motion.div>
  );
};

export default Commitment;
