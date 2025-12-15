"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronRight, Globe, Menu, X } from "lucide-react"; // Added Menu, X

// --- MENU DATA STRUCTURE (Synced with ProductFleet) ---
const navItems = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "#",
    submenu: [
      { name: "Our Story", href: "/about/story" },
      { name: "Our Advantage", href: "/advantage" },
      { 
        name: "Financial Reports", 
        href: "/about/financials",
        subsubmenu: [
          { name: "Annual Reports", href: "/about/financials/annual-reports" },
          { name: "Annual Returns", href: "/about/financials/annual-returns" }
        ]
      },
    ],
  },
  {
    name: "Products",
    href: "#",
    submenu: [
      { name: "Tipper", href: "/products/tipper" },
      { name: "Tip Trailer", href: "/products/tip-trailer" },
      { name: "Side Wall Trailer", href: "/products/sidewall" },
      { name: "Flatbed Trailer", href: "/products/flatbed" },
      { name: "Chassis & Car Carrier", href: "/products/car-carrier" },
      { name: "Special Application", href: "/products/special" },
      { name: "Curtain Sider", href: "/products/curtain-sider" },
      { name: "Rock Body", href: "/products/rock-body" },
    ],
  },
  {
    name: "Services",
    href: "#",
    submenu: [
      { name: "After Sales", href: "/services/after-sales" },
      { name: "Custom Designs", href: "/services/custom-designs" },
      { name: "Drivers / Training", href: "/services/training" },
      { name: "Free Consultancy", href: "/services/consultancy" },
      { name: "Onsite Services", href: "/services/onsite" },
      { name: "Pickup / Delivery", href: "/services/pickup" },
    ],
  },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [language, setLanguage] = useState("EN");
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  
  // --- MOBILE STATES ---
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  // Toggle Mobile Submenu
  const toggleMobileSubmenu = (name: string) => {
    setMobileExpanded(mobileExpanded === name ? null : name);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-black border-b border-zinc-900 shadow-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="relative w-48 h-12 flex-shrink-0 cursor-pointer">
          <Image
            src="/bdm-logo.png" 
            alt="Black Diamond Motors"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <div className="hidden lg:flex items-center gap-8 h-full">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative group h-full flex items-center"
              onMouseEnter={() => setHoveredMenu(item.name)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-1 text-sm font-oswald font-bold uppercase tracking-wide transition-colors ${
                  item.name === "Home" ? "text-red-600" : "text-white group-hover:text-red-600"
                }`}
              >
                {item.name}
                {item.submenu && (
                  <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                )}
              </Link>

              {/* Desktop Dropdown */}
              {item.submenu && (
                <div
                  className={`absolute top-full left-0 w-64 bg-white shadow-xl transition-all duration-300 origin-top z-50
                    ${hoveredMenu === item.name ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible"}
                  `}
                >
                  <div className="h-1 w-full bg-red-600"></div>
                  <div className="py-2">
                    {item.submenu.map((subItem) => (
                      <div key={subItem.name} className="relative group/nested">
                        <Link
                          href={subItem.href}
                          className="flex items-center justify-between px-6 py-3 text-sm font-roboto font-medium text-gray-600 hover:text-red-600 hover:bg-gray-50 border-b border-gray-100 last:border-0 transition-colors"
                        >
                          {subItem.name}
                          {subItem.subsubmenu && <ChevronRight className="w-3 h-3 text-gray-400" />}
                        </Link>

                        {/* Nested Dropdown (Financial Reports) */}
                        {subItem.subsubmenu && (
                          <div className="absolute left-full top-0 w-56 bg-white shadow-xl opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200 border-l-4 border-red-600">
                            {subItem.subsubmenu.map((nestedItem) => (
                              <Link
                                key={nestedItem.name}
                                href={nestedItem.href}
                                className="block px-5 py-3 text-sm font-roboto text-gray-600 hover:text-red-600 hover:bg-gray-50 border-b border-gray-100 last:border-0"
                              >
                                {nestedItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* DESKTOP RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => setLanguage(language === "EN" ? "HI" : "EN")}
            className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white border border-zinc-700 px-3 py-1.5 rounded-sm transition-all hover:border-red-600 min-w-[90px] justify-center"
          >
            <Globe className="w-3 h-3" />
            <span>{language === "EN" ? "English" : "हिंदी"}</span>
          </button>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <div 
          className="lg:hidden text-white cursor-pointer z-[110]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </div>

      </div>

      {/* ================= MOBILE OVERLAY ================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-[100] bg-black border-t border-zinc-800 overflow-y-auto lg:hidden">
          <div className="flex flex-col p-6 space-y-6">
            
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-zinc-800 pb-4 last:border-0">
                {item.submenu ? (
                  <>
                    <button 
                      onClick={() => toggleMobileSubmenu(item.name)}
                      className="flex items-center justify-between w-full text-lg font-oswald font-bold text-white uppercase tracking-wide"
                    >
                      {item.name}
                      <ChevronDown className={`w-5 h-5 transition-transform ${mobileExpanded === item.name ? "rotate-180" : ""}`} />
                    </button>
                    
                    {/* Mobile Submenu Expansion */}
                    {mobileExpanded === item.name && (
                      <div className="mt-4 ml-2 space-y-3 border-l-2 border-red-600 pl-4">
                        {item.submenu.map((subItem) => (
                          <div key={subItem.name}>
                            {subItem.subsubmenu ? (
                              <div className="space-y-2">
                                <span className="block text-sm font-bold text-zinc-300">{subItem.name}</span>
                                {subItem.subsubmenu.map((nested) => (
                                  <Link 
                                    key={nested.name}
                                    href={nested.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block text-sm text-zinc-500 hover:text-red-500 pl-2"
                                  >
                                    - {nested.name}
                                  </Link>
                                ))}
                              </div>
                            ) : (
                              <Link 
                                href={subItem.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-sm text-zinc-400 hover:text-white"
                              >
                                {subItem.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link 
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-oswald font-bold text-white uppercase tracking-wide hover:text-red-600"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Language Switch */}
            <button
              onClick={() => setLanguage(language === "EN" ? "HI" : "EN")}
              className="flex items-center justify-center gap-2 w-full py-4 border border-zinc-700 rounded-sm text-zinc-300 font-bold hover:border-red-600 hover:text-white transition-all mt-4"
            >
              <Globe className="w-5 h-5" />
              <span>Switch to {language === "EN" ? "Hindi" : "English"}</span>
            </button>

          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;