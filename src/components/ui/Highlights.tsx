"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

// --- DATA ---
const stats = [
  {
    id: 1,
    number: 11000,
    suffix: "+",
    label: "Vehicles Sold",
    desc: "Expanding footprint across India",
    effect: "scatter",
    context: "Market Penetration",
  },
  {
    id: 2,
    number: 500,
    suffix: "+",
    label: "Monthly Production",
    desc: "Dual Manufacturing Hubs",
    effect: "pulse",
    context: "Active Manufacturing",
  },
  {
    id: 3,
    number: 2000,
    suffix: "+",
    label: "Happy Customers",
    desc: "Trust resonating nationwide",
    effect: "glow",
    context: "Customer Satisfaction",
  },
  {
    id: 4,
    number: 500000,
    suffix: "+",
    label: "Sq.ft Production Area",
    desc: "State-of-the-art infrastructure",
    effect: "scan",
    context: "Infrastructure Scale",
  },
];

const Counter = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

/**
 * INDIA-ONLY RANDOM DOTS
 * - Hum kuch regions define kar rahe hain jo India ke upar aate hain
 * - Har dot ko kisi ek region ke aas-paas chhota sa random offset diya jaata hai
 * - Isse dots sea/ocean me nahi jaayenge
 */
const indiaRegions = [
  { top: 30, left: 42 }, // North (Punjab/HP side)
  { top: 36, left: 40 }, // NW (Rajasthan)
  { top: 42, left: 45 }, // Central (MP)
  { top: 46, left: 52 }, // East-Central (Chhattisgarh)
  { top: 52, left: 48 }, // South-Central (Telangana/AP)
  { top: 60, left: 44 }, // South (Karnataka/TN)
  { top: 40, left: 55 }, // North-East cluster
];

const randomDots = Array.from({ length: 18 }).map((_, i) => {
  const region = indiaRegions[Math.floor(Math.random() * indiaRegions.length)];

  // Har region ke around ±3% ka random offset
  const offsetTop = (Math.random() * 6 - 3); // -3 to +3
  const offsetLeft = (Math.random() * 6 - 3);

  const top = region.top + offsetTop;
  const left = region.left + offsetLeft;

  return {
    id: i,
    top: `${top}%`,
    left: `${left}%`,
    delay: Math.random() * 2,
  };
});

const Highlights = () => {
  const [activeStat, setActiveStat] = useState<number | null>(null);

  // --- COORDINATE CONTROL (tuned for this map image) ---
  const hubs = [
    { name: "Alwar, RJ", top: "34%", left: "38%", labelPosition: "top" },
    { name: "Bilaspur, CG", top: "52%", left: "52%", labelPosition: "bottom" },
  ] as const;

  const currentContext = stats.find((s) => s.id === activeStat)?.context;

  return (
    <section className="relative bg-[#0a0a0a] text-white py-24 overflow-hidden">
      {/* MOBILE BACKGROUND */}
      <div className="absolute inset-0 md:hidden z-0 opacity-20 pointer-events-none">
        <Image
          src="/map-highlights-section.jpg"
          alt="India Map"
          fill
          className="object-cover opacity-50"
        />
      </div>

      {/* Main Standard Container - Fixes alignment with other sections */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* --- LEFT SIDE: STATS --- */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center gap-8">
            <div className="mb-2">
              <h2 className="text-red-600 font-oswald text-xl uppercase tracking-widest mb-3">
                Impact & Scale
              </h2>
              <h3 className="text-5xl md:text-6xl font-oswald font-bold uppercase leading-tight">
                Our Numbers <span className="text-zinc-600">Speak</span>
              </h3>
            </div>

            <div className="space-y-6">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  onMouseEnter={() => setActiveStat(stat.id)}
                  onMouseLeave={() => setActiveStat(null)}
                  className={`relative p-6 cursor-pointer transition-all duration-300 border-l-[6px] rounded-r-lg ${
                    activeStat === stat.id
                      ? "border-red-600 bg-white/5 translate-x-2"
                      : "border-zinc-800 bg-transparent hover:bg-white/5 hover:border-zinc-700"
                  }`}
                >
                  <div className="flex flex-col">
                    <h3 className="text-5xl font-oswald font-bold text-white mb-2 transition-colors">
                      <Counter value={stat.number} />
                      <span className="text-red-600">{stat.suffix}</span>
                    </h3>
                    <p className="font-roboto-mono text-base uppercase text-zinc-400 tracking-wider font-bold">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT SIDE: MAP VISUAL --- */}
          <div className="hidden lg:flex w-full lg:w-7/12 h-[700px] relative items-center justify-center">
            {/* The Box */}
            <div className="relative w-full h-full bg-[#0f0f0f] rounded-xl border border-zinc-800 shadow-2xl overflow-hidden">
              {/* --- TEXT LAYER (Black boxes so overlap bhi clean lage) --- */}
              <div className="absolute top-8 left-8 z-30 pointer-events-none">
                <div className="bg-black/90 px-5 py-4 rounded-md shadow-xl inline-block">
                  <h4 className="font-oswald text-3xl uppercase font-bold text-white tracking-wider leading-none">
                    Pan India <br />
                    <span className="text-zinc-600">Presence</span>
                  </h4>
                  <div className="h-1.5 w-16 bg-red-600 mt-4" />
                </div>
              </div>

              <div className="absolute bottom-8 left-8 z-30 pointer-events-none">
                <div className="bg-black/90 px-4 py-3 rounded-md shadow-xl inline-block">
                  <h5 className="font-roboto font-bold text-xs uppercase text-zinc-500 tracking-widest mb-3">
                    Global Reach
                  </h5>
                  <ul className="text-xs font-mono text-red-600 space-y-1.5 font-bold">
                    <li>• Africa</li>
                    <li>• South East Asia</li>
                    <li>• Nepal & Bangladesh</li>
                  </ul>
                </div>
              </div>

              {/* --- MAP LAYER (Padded so it doesn't touch text) --- */}
              <div className="absolute inset-0 p-16 flex items-center justify-center z-10">
                <div className="relative w-full h-full">
                  <Image
                    src="/map-highlights-section.jpg"
                    alt="India Map 3D"
                    fill
                    className="object-contain"
                    priority
                  />

                  {/* ANIMATIONS (Inside Map Layer) */}
                  <AnimatePresence>
                    {/* SCATTER */}
                    {activeStat === 1 && (
                      <div className="absolute inset-0 z-20">
                        {randomDots.map((dot) => (
                          <motion.div
                            key={dot.id}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                              opacity: [0, 1, 0],
                              scale: [0, 1.2, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: dot.delay,
                            }}
                            className="absolute w-2 h-2 bg-red-600 rounded-full shadow-[0_0_8px_red]"
                            style={{ top: dot.top, left: dot.left }}
                          />
                        ))}
                      </div>
                    )}

                    {/* HUBS */}
                    {activeStat === 2 && (
                      <>
                        {hubs.map((hub, index) => {
                          const labelPositionClass =
                            hub.labelPosition === "bottom"
                              ? "top-full mt-2 left-1/2 -translate-x-1/2"
                              : "-top-10 left-1/2 -translate-x-1/2";

                          return (
                            <div
                              key={index}
                              className="absolute z-20 flex items-center justify-center"
                              style={{ top: hub.top, left: hub.left }}
                            >
                              {/* Red dot */}
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-3 h-3 bg-red-600 rounded-full shadow-[0_0_15px_red] border-2 border-white z-30"
                              />

                              {/* Ripple circles */}
                              {[1, 2].map((i) => (
                                <motion.div
                                  key={i}
                                  initial={{
                                    width: 0,
                                    height: 0,
                                    opacity: 0.8,
                                  }}
                                  animate={{
                                    width: "100px",
                                    height: "100px",
                                    opacity: 0,
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.4,
                                  }}
                                  className="absolute rounded-full border border-red-500/60"
                                />
                              ))}

                              {/* Label box – safe & clean on map */}
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={
                                  "absolute bg-black/90 border border-red-500/50 px-3 py-1 text-[10px] uppercase tracking-widest text-white whitespace-nowrap z-40 rounded shadow-xl " +
                                  labelPositionClass
                                }
                              >
                                {hub.name}
                              </motion.div>
                            </div>
                          );
                        })}
                      </>
                    )}

                    {/* GLOW */}
                    {activeStat === 3 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 z-10"
                        style={{
                          background:
                            "radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.15) 0%, transparent 70%)",
                        }}
                      />
                    )}

                    {/* SCANNER */}
                    {activeStat === 4 && (
                      <div className="absolute inset-0 z-40 overflow-hidden pointer-events-none">
                        <motion.div
                          initial={{ top: "10%" }}
                          animate={{ top: "90%" }}
                          exit={{ opacity: 0 }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute left-0 w-full h-[2px] bg-red-500 shadow-[0_0_20px_red]"
                        />
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* --- CONTEXT BOX (Bottom Right) --- */}
              {activeStat && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="absolute bottom-8 right-8 z-40 text-right"
                >
                  <div className="bg-zinc-950 border border-zinc-800 px-5 py-3 rounded-sm border-r-4 border-r-red-600 shadow-2xl">
                    <span className="text-zinc-500 text-[10px] uppercase tracking-widest block mb-1">
                      Visualization
                    </span>
                    <span className="text-white font-oswald uppercase tracking-wider text-sm block">
                      {currentContext}
                    </span>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
