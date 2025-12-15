"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* ================= PART 1: RED CONTACT SECTION ================= */}
      <section className="bg-[#d11329] text-white py-20 px-6 relative overflow-hidden">
        {/* Subtle Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          {/* Header */}
          <div className="mb-12">
            <h4 className="text-sm font-bold tracking-[0.2em] uppercase mb-2 text-white/80">
              DRIVE YOUR SUCCESS
            </h4>
            <h2 className="text-5xl md:text-6xl font-oswald font-bold uppercase text-white mb-8">
              Get in Touch
            </h2>
            <div className="h-1 w-24 bg-white mx-auto mb-8 rounded-full" />
            <p className="text-white/90 font-roboto text-base leading-relaxed max-w-3xl mx-auto">
              Choose Black Diamond Motors for innovative designs, high-quality
              manufacturing, and exceptional after-sales service. Contact us
              today to explore our comprehensive range of trailers.
              <br />
              <br />
              Fill up the form below with your details and we will get back to
              you soon.
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto space-y-4 mb-16 bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 bg-white text-black rounded-sm focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-500 font-medium"
            />
            <input
              type="text"
              placeholder="Organisation"
              className="w-full p-4 bg-white text-black rounded-sm focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-500 font-medium"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Mobile"
                className="w-full p-4 bg-white text-black rounded-sm focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-500 font-medium"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 bg-white text-black rounded-sm focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-500 font-medium"
              />
            </div>
            <textarea
              placeholder="Message (if any)"
              rows={4}
              className="w-full p-4 bg-white text-black rounded-sm focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-500 font-medium"
            />
            <button className="w-full bg-[#333] hover:bg-black text-white font-bold py-4 rounded-sm transition-all uppercase tracking-widest text-sm shadow-lg border border-transparent hover:border-white/20">
              Submit Details
            </button>
          </div>

          {/* TRUCK IMAGE (Static) */}
          <div className="relative w-full max-w-lg mx-auto text-center mt-10">
            <div className="relative z-10">
              <Image
                src="/toll-free-image.png"
                alt="Toll Free Truck"
                width={500}
                height={200}
                className="w-full h-auto object-contain mx-auto drop-shadow-xl"
              />
            </div>
          </div>

          {/* CONTACT INFO BELOW TRUCK */}
          <div className="mt-8 space-y-3 text-base font-medium font-oswald tracking-wide">
            <p className="flex justify-center items-center gap-2">
              <span className="p-1 border border-white rounded-sm">
                <Phone className="w-4 h-4 text-white" />
              </span>
              1800 274 0001
            </p>
            <p className="flex justify-center items-center gap-2">
              <span className="p-1 border border-white rounded-sm">
                <Mail className="w-4 h-4 text-white" />
              </span>
              sales.support@blackdiamondmotors.com
            </p>
            <p className="flex justify-center items-center gap-2">
              <span className="p-1 border border-white rounded-sm">
                <Mail className="w-4 h-4 text-white" />
              </span>
              enquire@blackdiamondmotors.com
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Black+Diamond+Motors+Bilaspur+Chhattisgarh"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center gap-2 hover:underline decoration-1 underline-offset-4 cursor-pointer"
            >
              <span className="p-1 border border-white rounded-sm">
                <MapPin className="w-4 h-4 text-white" />
              </span>
              Directions: Google Map
            </a>
          </div>
        </div>
      </section>

      {/* ================= PART 2: MAIN BLACK FOOTER ================= */}
      <footer className="relative bg-[#050505] text-white pt-20 pb-8 border-t border-zinc-900 overflow-hidden">
        {/* Tyre Tread Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm10 17l-5-5h10l-5 5z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "30px 30px",
          }}
        ></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-zinc-400 font-roboto mb-16">
            {/* COL 1: HEADQUARTERS */}
            <div>
              <h4 className="text-white font-oswald font-bold uppercase mb-8 text-lg border-l-4 border-red-600 pl-3">
                Headquarters
              </h4>
              <div className="space-y-8">
                {/* BILASPUR LOCATION LINK */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Black+Diamond+Motors+Plot+No.119+Sector+B+Sirgitti+Industrial+Area+Bilaspur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 group hover:text-white transition-colors cursor-pointer"
                >
                  <div className="mt-1 p-2 bg-zinc-900 rounded-full text-red-600 h-fit group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white uppercase mb-1 tracking-wide text-base group-hover:text-red-500 transition-colors">
                      BILASPUR (CG)
                    </strong>
                    Plot No.119, Sector B, Sirgitti Industrial Area,
                    <br /> Bilaspur, Chhattisgarh - 495004
                  </div>
                </a>

                {/* ALWAR LOCATION LINK */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Black+Diamond+Motors+SP1-133+Gioth+Industrial+Area+Neemrana+Alwar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 group hover:text-white transition-colors cursor-pointer"
                >
                  <div className="mt-1 p-2 bg-zinc-900 rounded-full text-red-600 h-fit group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white uppercase mb-1 tracking-wide text-base group-hover:text-red-500 transition-colors">
                      ALWAR (RJ)
                    </strong>
                    SP1-133(D), General Zone, Gioth Industrial Area,
                    <br /> Shahjahapur, Neemrana, Alwar, Rajasthan - 301705
                  </div>
                </a>
              </div>
            </div>

            {/* COL 2: QUICK LINKS */}
            <div className="text-center md:text-left">
              <h4 className="text-white font-oswald font-bold uppercase mb-8 text-lg border-l-4 border-red-600 pl-3 md:border-none md:pl-0 inline-block md:block">
                Quick Links
              </h4>
              <ul className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Products", href: "/products" },
                  { name: "Services", href: "/services" },
                  { name: "Contact Us", href: "/contact" },
                  { name: "Privacy Policy", href: "/privacy" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="inline-block hover:text-red-500 hover:translate-x-2 transition-transform duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COL 3: CONNECT WITH US */}
            <div>
              <h4 className="text-white font-oswald font-bold uppercase mb-8 text-lg border-l-4 border-red-600 pl-3">
                Connect With Us
              </h4>

              {/* Contact rows */}
              <div className="space-y-5 text-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#111111] border border-zinc-700 text-red-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-base text-zinc-300">
                    +91 1800-274-0001
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#111111] border border-zinc-700 text-red-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-base text-zinc-300">
                    enquire@blackdiamondmotors.com
                  </span>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Black+Diamond+Motors+Bilaspur+Chhattisgarh"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 cursor-pointer"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#111111] border border-zinc-700 text-red-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-base text-zinc-300 hover:text-red-500 transition-colors">
                    Directions: Google Map
                  </span>
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mt-8">
                {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-12 h-12 flex items-center justify-center rounded-md bg-[#111111] border border-zinc-700 text-zinc-300 hover:text-white hover:border-red-600 hover:-translate-y-1 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* COPYRIGHT BAR */}
          <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 font-roboto">
            <p>© 2025 Black Diamond Motors. All Rights Reserved.</p>
            {/* POWERED BY LINK ADDED */}
            <a 
              href="https://gorebo.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
            >
              Powered by gorebo.com
            </a>
            <p className="mt-2 md:mt-0">
              Forged with <span className="text-red-900 animate-pulse">♥</span>{" "}
              in India
            </p>
          </div>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;