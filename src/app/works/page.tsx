"use client";

import { motion } from "framer-motion";

const works = [
  {
    title: "Neon Branding",
    category: "Branding",
    color: "bg-comic-red",
    year: "2024",
    rotation: "-rotate-2",
  },
  {
    title: "Cyber Commerce",
    category: "Web App",
    color: "bg-comic-blue",
    year: "2024",
    rotation: "rotate-1",
  },
  {
    title: "Pop Magazine",
    category: "Editorial",
    color: "bg-comic-orange",
    year: "2024",
    rotation: "rotate-2",
  },
  {
    title: "Future Dashboard",
    category: "UI/UX",
    color: "bg-comic-pink",
    year: "2023",
    rotation: "-rotate-1",
  },
  {
    title: "Glow Social",
    category: "Mobile App",
    color: "bg-comic-yellow",
    year: "2023",
    rotation: "rotate-2",
  },
  {
    title: "Wave Music",
    category: "Web Design",
    color: "bg-comic-red",
    year: "2023",
    rotation: "-rotate-2",
  },
];

export default function WorksPage() {
  return (
    <>
      <section className="relative py-24 px-6 bg-comic-yellow overflow-hidden">
        <div className="absolute inset-0 halftone opacity-10" />
        <div className="absolute -bottom-2 left-0 w-full">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0,40 Q360,80 720,20 T1440,40 L1440,80 L0,80 Z" fill="#1A1A1A" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 bg-comic-black text-comic-yellow font-comic text-sm tracking-widest uppercase mb-6 transform -rotate-2">
              Our Works
            </span>
            <h1
              className="text-5xl md:text-7xl font-comic text-comic-black uppercase leading-tight"
              style={{ textShadow: "3px 3px 0px #FF1744" }}
            >
              Selected{" "}
              <span className="text-comic-red">Projects</span>
            </h1>
            <div className="inline-block bg-comic-black px-4 py-2 mt-4 transform rotate-1">
              <p className="text-comic-yellow">私たちが手がけたプロジェクトの一部をご紹介します。</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-comic-black relative overflow-hidden">
        <div className="absolute inset-0 halftone-yellow opacity-5" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work, i) => (
              <motion.article
                key={work.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                className={`${work.color} border-4 border-comic-black overflow-hidden cursor-pointer group ${work.rotation}`}
                style={{ boxShadow: "8px 8px 0px rgba(255,214,0,0.3)" }}
              >
                <div className="aspect-[4/3] relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 halftone opacity-10" />
                  <span
                    className="text-8xl font-comic text-comic-black/20 group-hover:text-comic-black/40 group-hover:scale-125 transition-all duration-300"
                  >
                    {work.title.charAt(0)}
                  </span>
                </div>
                <div className="p-6 bg-comic-black border-t-4 border-comic-black">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 bg-comic-yellow text-comic-black font-comic text-xs tracking-wider uppercase">
                      {work.category}
                    </span>
                    <span className="text-xs text-comic-yellow/50 font-comic">{work.year}</span>
                  </div>
                  <h3 className="text-xl font-comic text-comic-yellow group-hover:text-comic-red transition-colors uppercase tracking-wider">
                    {work.title}
                  </h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
