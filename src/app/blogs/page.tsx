"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";

// --- DUMMY BLOG DATA ---
const blogPosts = [
  {
    id: 1,
    title: "Revolutionizing Heavy Haulage with Side Wall Trailers",
    excerpt: "Discover how our new range of side wall trailers is optimizing logistics for cement and steel industries across India.",
    date: "Dec 10, 2024",
    author: "Admin",
    category: "Product Innovation",
    image: "/products/side-wall-trailer-hero.png" // Reusing existing image
  },
  {
    id: 2,
    title: "Maintenance Tips: Extending the Life of Your Tipper",
    excerpt: "A comprehensive guide on hydraulic maintenance and chassis care to keep your tipper running for years without breakdown.",
    date: "Nov 28, 2024",
    author: "Service Team",
    category: "Maintenance",
    image: "/products/tipper-hero.png" // Reusing existing image
  },
  {
    id: 3,
    title: "Black Diamond Motors at Mining Expo 2024",
    excerpt: "Highlights from our participation in the biggest mining exhibition of the year. Showcasing our Rock Body giants.",
    date: "Oct 15, 2024",
    author: "Media Team",
    category: "Events",
    image: "/products/rock-body-hero.png" // Reusing existing image
  },
  {
    id: 4,
    title: "Understanding CMVR Regulations for Trailer Dimensions",
    excerpt: "What you need to know about the latest government regulations regarding trailer dimensions and payloads.",
    date: "Sep 05, 2024",
    author: "Consultancy Dept",
    category: "Regulations",
    image: "/products/flatbed-hero.png" // Reusing existing image
  }
];

export default function Blogs() {
  return (
    <main className="bg-[#050505] text-white pt-20 min-h-screen">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="py-20 px-6 text-center border-b border-zinc-900 bg-[#0a0a0a]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h4 className="text-[#d11329] font-bold tracking-[0.3em] uppercase mb-4">Latest Updates</h4>
          <h1 className="text-5xl md:text-7xl font-oswald font-bold uppercase tracking-tight mb-6">
            Insights & <span className="text-zinc-500">News</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Stay updated with the latest trends in transport technology, company news, and maintenance guides.
          </p>
        </motion.div>
      </section>

      {/* ================= 2. BLOG GRID ================= */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {blogPosts.map((post, i) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111] border border-zinc-800 rounded-sm overflow-hidden hover:border-[#d11329] transition-all group"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-[#d11329] text-white text-xs font-bold uppercase px-3 py-1 rounded-sm">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4 uppercase tracking-wider font-bold">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                </div>
                
                <h3 className="text-2xl font-oswald font-bold text-white mb-4 leading-tight group-hover:text-[#d11329] transition-colors">
                  {post.title}
                </h3>
                <p className="text-zinc-400 mb-6 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                
                <button className="text-white text-sm font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4 text-[#d11329]" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

    </main>
  );
}