"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <main className="bg-[#050505] text-white pt-20">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* ✅ Placeholder for Contact Hero Image */}
          <div className="absolute inset-0 bg-[#111]" /> 
          {/* Agar image ho toh yahan Image tag use kar lena */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#d11329] font-bold tracking-[0.3em] uppercase mb-4"
          >
            Get In Touch
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-oswald font-bold uppercase tracking-tight mb-6"
          >
            Contact <span className="text-zinc-500">Us</span>
          </motion.h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Have a query about our products or need a custom solution? Our team is here to help.
          </p>
        </div>
      </section>

      {/* ================= 2. CONTACT INFO & FORM ================= */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-oswald font-bold text-white mb-8 uppercase">
              Head <span className="text-[#d11329]">Office</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-zinc-900 rounded-sm text-[#d11329]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase mb-1">Address</h4>
                  <p className="text-zinc-400 leading-relaxed">
                    119-B, Sirgitti Industrial Estate,<br />
                    Bilaspur - 495 004 (C.G.), INDIA
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-zinc-900 rounded-sm text-[#d11329]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase mb-1">Toll Free</h4>
                  <p className="text-zinc-400 text-lg font-oswald tracking-wide">1800-274-0001</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-zinc-900 rounded-sm text-[#d11329]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase mb-1">Email</h4>
                  <p className="text-zinc-400">blackbits@hotmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-zinc-900 rounded-sm text-[#d11329]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase mb-1">Working Hours</h4>
                  <p className="text-zinc-400">Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#111] p-8 md:p-12 border border-zinc-800 rounded-sm"
          >
            <h3 className="text-2xl font-oswald font-bold text-white mb-6 uppercase">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 w-4 h-4 text-zinc-600" />
                    <input type="text" className="w-full bg-black border border-zinc-800 text-white pl-10 pr-4 py-3 focus:outline-none focus:border-[#d11329] transition-colors rounded-sm" placeholder="John Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-3.5 w-4 h-4 text-zinc-600" />
                    <input type="tel" className="w-full bg-black border border-zinc-800 text-white pl-10 pr-4 py-3 focus:outline-none focus:border-[#d11329] transition-colors rounded-sm" placeholder="+91 98765 43210" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 w-4 h-4 text-zinc-600" />
                  <input type="email" className="w-full bg-black border border-zinc-800 text-white pl-10 pr-4 py-3 focus:outline-none focus:border-[#d11329] transition-colors rounded-sm" placeholder="john@company.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Your Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-3.5 w-4 h-4 text-zinc-600" />
                  <textarea rows={4} className="w-full bg-black border border-zinc-800 text-white pl-10 pr-4 py-3 focus:outline-none focus:border-[#d11329] transition-colors rounded-sm resize-none" placeholder="Tell us about your requirement..." />
                </div>
              </div>

              <button type="button" className="w-full bg-[#d11329] hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm py-4 rounded-sm transition-all flex items-center justify-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </section>

      {/* ================= 3. MAP SECTION ================= */}
      <section className="h-[400px] w-full border-t border-zinc-900 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.524673623769!2d82.1065!3d22.0685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b117b9b9a6d%3A0x4632128710239!2sSirgitti%20Industrial%20Area%2C%20Bilaspur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy"
        />
      </section>

    </main>
  );
}