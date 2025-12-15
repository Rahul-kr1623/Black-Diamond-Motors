"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Hammer, Target, Eye, MapPin, Settings, Users, HardHat, Warehouse } from "lucide-react";

// --- TIMELINE DATA ---
const timelineData = [
  {
    year: "2005",
    title: "The Foundation",
    desc: "Established in Bilaspur, Black Diamond Motors emerged as the leading manufacturer of Tip-Trailers in India. We started with a vision to revolutionize logistics.",
  },
  {
    year: "2010",
    title: "Product Expansion",
    desc: "Pioneered the manufacturing of Rock Bodies, Box Trailers, and Semi-Low Bed Trailers. Became a proprietor of the registered Trademark 'BLACK DIAMOND MOTORS'.",
  },
  {
    year: "2015",
    title: "Infrastructure Boom",
    desc: "Invested in state-of-the-art facilities spanning 11 acres. Integrated strict adherence to Central Motor Vehicle Rules (CMVR) and ARAI regulations.",
  },
  {
    year: "2019",
    title: "Pan-India Leader",
    desc: "With a dedicated team of 450+ members, we expanded our footprint, serving high-density industries in Chhattisgarh and beyond.",
  },
  {
    year: "2024",
    title: "Future Ready",
    desc: "Continuing to exceed industry standards with innovative designs, ensuring long-lasting and trouble-free operations for our clients.",
  },
];

export default function OurStory() {
  // ✅ FIX: Re-added the definition so the ref works without error
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  return (
    <main className="bg-[#050505] text-white overflow-hidden pt-20">
      
      {/* ================= 1. HERO SECTION (Factory Aerial) ================= */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
        >
          {/* ✅ IMAGE: Factory Aerial View (As requested) */}
          <Image
            src="/factory-aerial.jpg" 
            alt="Black Diamond Factory Aerial View"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505]" />
        </motion.div>

        <div className="relative z-10 text-center px-4 mt-10 max-w-5xl">
          <motion.h4 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-[#d11329] font-bold tracking-[0.3em] uppercase mb-6"
          >
            Since 2005
          </motion.h4>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-oswald font-bold uppercase tracking-tight leading-none"
          >
            Defining <span className="text-zinc-500">Strength</span> <br />
            Delivering <span className="text-[#d11329]">Trust</span>
          </motion.h1>
        </div>
      </section>

      {/* ================= 2. OUR STORY ================= */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-oswald font-bold mb-8 leading-tight uppercase">
              A LEGACY BUILT ON <br /> <span className="text-[#d11329]">UNCOMPROMISED QUALITY</span>
            </h2>
            
            <div className="space-y-6 text-zinc-300 text-lg font-roboto leading-relaxed text-justify">
              <p>
                Established in 2005, <strong>BLACK DIAMOND MOTORS®</strong> has emerged as the leading manufacturer of Tip-Trailers in India, both in terms of product range and production capacity. We are proud pioneers in the manufacturing of tippers, rock bodies, box trailers, semi-low bed trailers, flatbed trailers, skeletal trailers, and a wide range of customised trailers for diverse applications.
              </p>
              <p>
                To ensure the highest quality and compliance with industry regulations, we have invested in state-of-the-art facilities. Our cutting-edge infrastructure enables us to design and manufacture products in strict adherence to the <strong>Central Motor Vehicle Rules (CMVR)</strong> and the <strong>Automotive Research Association of India (ARAI)</strong> regulations.
              </p>
              <p>
                This unwavering commitment to compliance ensures that our products not only meet but exceed the required standards, guaranteeing long-lasting and trouble-free operation. We are also the proprietor of the registered Trademark and copyright <strong>‘BLACK DIAMOND MOTORS’</strong>.
              </p>
            </div>
          </motion.div>

          {/* Right: Image (Factory Collage) */}
          <motion.div
            className="relative h-[500px] w-full border border-zinc-800 p-2 bg-zinc-900/50"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-full overflow-hidden">
               {/* ✅ IMAGE: Factory Collage */}
               <Image 
                 src="/factory-collage.jpg" 
                 alt="Factory Operations"
                 fill
                 className="object-cover hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute bottom-0 right-0 bg-[#d11329] p-6 text-white max-w-xs">
                 <p className="font-oswald text-xl font-bold uppercase">ARAI & CMVR Compliant</p>
                 <p className="text-xs mt-1 text-white/80">Strict adherence to safety standards.</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= 3. MISSION & VISION ================= */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-zinc-500 font-bold tracking-[0.2em] uppercase mb-2">Our Core DNA</h4>
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white uppercase">
            Mission & <span className="text-[#d11329]">Vision</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#111] p-10 border-t-4 border-[#d11329] shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden group"
          >
            <Target className="w-12 h-12 text-[#d11329] mb-6" />
            <h3 className="text-3xl font-oswald font-bold uppercase mb-4 text-white">Our Mission</h3>
            <h4 className="text-zinc-400 font-bold uppercase text-sm mb-4 tracking-widest">Delivering Unparalleled Service, Innovation, Value, and Satisfaction</h4>
            <p className="text-zinc-400 leading-relaxed">
              At Black Diamond Motors, our mission is clear: to establish ourselves as an organization that prioritizes customer satisfaction above all else. We are committed to providing our customers with an unparalleled service experience, pioneering innovative solutions, delivering excellent value for money, and guaranteeing their utmost satisfaction.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#111] p-10 border-t-4 border-white shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden group"
          >
            <Eye className="w-12 h-12 text-white mb-6" />
            <h3 className="text-3xl font-oswald font-bold uppercase mb-4 text-white">Our Vision</h3>
            <h4 className="text-zinc-400 font-bold uppercase text-sm mb-4 tracking-widest">Leading the Transport Industry with Unrivaled Customer Service</h4>
            <p className="text-zinc-400 leading-relaxed">
              At Black Diamond Motors, our vision is to attain a pre-eminent position in the transport industry’s value chain. We strive to achieve this by delivering a premier level of customer service, offering top-quality products, and consistently surpassing our customers’ expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= 4. ADVANCED INFRASTRUCTURE ================= */}
      <section className="relative py-32 bg-[#0a0a0a] border-y border-zinc-900 overflow-hidden">
        {/* ✅ IMAGE: Factory Aerial View (Background) */}
        <div className="absolute inset-0 opacity-30">
           <Image 
             src="/factory-aerial.jpg"
             alt="Infrastructure Background" 
             fill 
             className="object-cover"
           />
        </div>
        <div className="absolute inset-0 bg-black/80" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#111]/90 backdrop-blur-sm p-8 border border-zinc-800 text-center hover:border-[#d11329] transition-colors">
                <Warehouse className="w-10 h-10 text-[#d11329] mx-auto mb-4" />
                <h3 className="text-4xl font-oswald font-bold text-white mb-1">11+</h3>
                <p className="text-zinc-500 text-xs uppercase tracking-widest">Acres Area</p>
              </div>
              <div className="bg-[#111]/90 backdrop-blur-sm p-8 border border-zinc-800 text-center hover:border-[#d11329] transition-colors">
                <Settings className="w-10 h-10 text-[#d11329] mx-auto mb-4" />
                <h3 className="text-3xl font-oswald font-bold text-white mb-1">1.85 L</h3>
                <p className="text-zinc-500 text-xs uppercase tracking-widest">Sq. Ft. Covered</p>
              </div>
              <div className="bg-[#111]/90 backdrop-blur-sm p-8 border border-zinc-800 text-center hover:border-[#d11329] transition-colors">
                <Users className="w-10 h-10 text-[#d11329] mx-auto mb-4" />
                <h3 className="text-4xl font-oswald font-bold text-white mb-1">450+</h3>
                <p className="text-zinc-500 text-xs uppercase tracking-widest">Specialized Team</p>
              </div>
              <div className="bg-[#111]/90 backdrop-blur-sm p-8 border border-zinc-800 text-center hover:border-[#d11329] transition-colors">
                <HardHat className="w-10 h-10 text-[#d11329] mx-auto mb-4" />
                <h3 className="text-4xl font-oswald font-bold text-white mb-1">9+</h3>
                <p className="text-zinc-500 text-xs uppercase tracking-widest">Departments</p>
              </div>
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-6 uppercase">
                Advanced <span className="text-[#d11329]">Infrastructure</span>
              </h2>
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                Black Diamond Motors boasts a state-of-the-art infrastructure that spans over a sprawling 11-acre area, with a covered area of 1,85,000 square feet. Our expansive facility stands as one of the largest body-building plants in India, equipped with cutting-edge technology and resources.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Behind our successful operations is a dedicated team of over 450 specialized members. Each member plays a crucial role in various departments, including <strong>Design & Drafting, R&D, Purchase, Sales, Stores, Quality Assurance, Production, Finance, and After-Sales Service</strong>.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 5. GEOGRAPHICAL ADVANTAGE ================= */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             
             {/* Map Visual */}
             <div className="relative h-[400px] w-full border-2 border-zinc-800 p-2 bg-zinc-900">
                {/* ✅ IMAGE: Excavator Action (Kept as requested) */}
                <Image 
                  src="/excavator-action.jpg"
                  alt="Mining Advantage"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white font-oswald text-2xl uppercase">Resource Rich</h3>
                  <p className="text-[#d11329] font-bold text-sm">Chhattisgarh</p>
                </div>
             </div>

             {/* Locations Text */}
             <div>
                <h4 className="text-[#d11329] font-bold tracking-widest uppercase mb-2">Strategic Location</h4>
                <h2 className="text-4xl font-oswald font-bold text-white mb-6 uppercase">
                  Geographical <span className="text-zinc-600">Advantage</span>
                </h2>
                <div className="space-y-6 text-zinc-300 leading-relaxed">
                  <p>
                    Being strategically located in <strong>Bilaspur</strong>, Black Diamond Motors is ideally positioned to serve the industries in Chhattisgarh and beyond. Our proximity to high-density industries and abundant natural resources allows us to better understand the needs and requirements of our customers.
                  </p>
                  <p>
                    The economy of Chhattisgarh is largely driven by natural resources, and the state efficiently leverages its rich mineral reserves. This natural resource-driven economy presents numerous opportunities for industries, including Black Diamond Motors, to thrive and contribute to the region’s growth.
                  </p>
                </div>
                
                <div className="mt-8 flex gap-4">
                  <div className="flex items-center gap-2 text-white border border-zinc-700 px-4 py-2 rounded-sm bg-zinc-900">
                    <MapPin className="text-[#d11329] w-4 h-4" />
                    <span className="text-sm font-bold">BILASPUR HUB</span>
                  </div>
                  <div className="flex items-center gap-2 text-white border border-zinc-700 px-4 py-2 rounded-sm bg-zinc-900">
                    <MapPin className="text-[#d11329] w-4 h-4" />
                    <span className="text-sm font-bold">ALWAR HUB</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ================= 6. LAVA TIMELINE ================= */}
      <section className="py-24 relative bg-[#0a0a0a]" ref={targetRef}>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <span className="text-zinc-500 uppercase tracking-widest text-sm font-bold">The Journey</span>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase text-white mt-2">Forged in Time</h2>
          </div>

          <div className="relative">
            {/* Static Grey Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-zinc-800 -translate-x-1/2 rounded-full" />
            
            {/* Animated Lava Line */}
            <motion.div 
              style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
              className="absolute left-4 md:left-1/2 top-0 w-1 bg-[#d11329] -translate-x-1/2 rounded-full origin-top z-10 shadow-[0_0_20px_#d11329]"
            />

            <div className="space-y-32 pb-32">
              {timelineData.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

// --- HELPER COMPONENT: TIMELINE ITEM ---
const TimelineItem = ({ item, index }: { item: any; index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? "md:justify-start" : "md:justify-end"}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      {/* Date Dot */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-[#0a0a0a] bg-[#d11329] z-20 shadow-[0_0_15px_rgba(209,19,41,0.8)]" />

      {/* Content Card */}
      <div className={`ml-16 md:ml-0 w-[85%] md:w-[45%] relative bg-zinc-900/40 p-8 border border-zinc-800 hover:border-[#d11329]/50 transition-all duration-300 rounded-sm overflow-hidden group ${isEven ? "md:mr-16" : "md:ml-16"}`}>
        
        {/* Year Watermark */}
        <span className="absolute top-0 right-2 text-7xl font-black font-oswald text-white/5 select-none group-hover:text-[#d11329]/10 transition-colors pointer-events-none">
          {item.year}
        </span>

        {/* Text Content */}
        <div className="relative z-10">
          <span className="text-[#d11329] font-bold text-sm tracking-widest uppercase mb-2 block">Year {item.year}</span>
          <h3 className="text-2xl text-white font-bold mb-3 font-oswald uppercase">{item.title}</h3>
          <p className="text-zinc-400 text-base leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};