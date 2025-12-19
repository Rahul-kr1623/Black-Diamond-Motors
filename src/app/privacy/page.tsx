"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Server } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#050505] text-white pt-20">
      
      {/* ================= HERO SECTION ================= */}
      <section className="py-20 px-6 text-center border-b border-zinc-900 bg-[#0a0a0a]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h4 className="text-[#d11329] font-bold tracking-[0.3em] uppercase mb-4">Legal & Compliance</h4>
          <h1 className="text-5xl md:text-7xl font-oswald font-bold uppercase tracking-tight mb-6">
            Privacy <span className="text-zinc-500">Policy</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            We value your privacy and are committed to protecting your personal data.
          </p>
        </motion.div>
      </section>

      {/* ================= POLICY CONTENT ================= */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto font-roboto text-zinc-300 leading-relaxed space-y-16">
        
        {/* 1. Introduction */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <Shield className="w-8 h-8 text-[#d11329]" />
            <h2 className="text-3xl font-oswald font-bold text-white uppercase">1. Introduction</h2>
          </div>
          <p>
            Welcome to <strong>Black Diamond Motors</strong>. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
          </p>
        </div>

        {/* 2. Information We Collect */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <FileText className="w-8 h-8 text-[#d11329]" />
            <h2 className="text-3xl font-oswald font-bold text-white uppercase">2. Information We Collect</h2>
          </div>
          <p className="mb-4">
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
          </p>
          <ul className="list-disc pl-6 space-y-2 marker:text-[#d11329]">
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
            <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
          </ul>
        </div>

        {/* 3. How We Use Your Data */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <Eye className="w-8 h-8 text-[#d11329]" />
            <h2 className="text-3xl font-oswald font-bold text-white uppercase">3. How We Use Your Data</h2>
          </div>
          <p className="mb-4">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2 marker:text-[#d11329]">
            <li>To process and deliver your order (e.g. Spare Parts or Vehicles).</li>
            <li>To manage our relationship with you (e.g. notifying you about changes to our terms or privacy policy).</li>
            <li>To use data analytics to improve our website, products/services, marketing, customer relationships and experiences.</li>
          </ul>
        </div>

        {/* 4. Data Security */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <Lock className="w-8 h-8 text-[#d11329]" />
            <h2 className="text-3xl font-oswald font-bold text-white uppercase">4. Data Security</h2>
          </div>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>
        </div>

        {/* 5. Contact Us */}
        <div className="bg-[#111] p-8 border-l-4 border-[#d11329] rounded-sm">
          <h3 className="text-2xl font-oswald font-bold text-white mb-4 uppercase">Contact for Privacy Concerns</h3>
          <p className="mb-4">
            If you have any questions about this privacy policy or our privacy practices, please contact us at:
          </p>
          <p className="text-white font-bold">Black Diamond Motors Pvt. Ltd.</p>
          <p>Email: <a href="mailto:blackbits@hotmail.com" className="text-[#d11329] hover:underline">blackbits@hotmail.com</a></p>
          <p>Phone: 1800-274-0001</p>
        </div>

      </section>

    </main>
  );
}