"use client";

import Link from "next/link";
import { motion } from "framer-motion";

function ComicBurst({ text, className }: { text: string; className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className || ""}`}>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <polygon
          points="100,10 120,80 190,80 135,120 155,190 100,145 45,190 65,120 10,80 80,80"
          fill="#FF1744"
          stroke="#1A1A1A"
          strokeWidth="4"
        />
        <text
          x="100"
          y="108"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#FFF8E1"
          fontFamily="var(--font-bangers)"
          fontSize="28"
          fontWeight="bold"
        >
          {text}
        </text>
      </svg>
    </div>
  );
}

const services = [
  {
    title: "CREATIVE DESIGN",
    desc: "独創的なデザインで、ブランドの個性を最大限に引き出します。",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    rotation: "-rotate-2",
    color: "bg-comic-yellow",
  },
  {
    title: "DEVELOPMENT",
    desc: "最新のテクノロジーで、高品質なWebアプリケーションを構築します。",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    rotation: "rotate-1",
    color: "bg-comic-red",
  },
  {
    title: "PERFORMANCE",
    desc: "スピードとユーザー体験を両立した、最適化されたソリューション。",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    rotation: "-rotate-1",
    color: "bg-comic-blue",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-comic-yellow">
        <div className="absolute inset-0 halftone opacity-10" />
        <div className="absolute inset-0 speed-lines opacity-30" />

        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-32 h-32 md:w-48 md:h-48 animate-float">
            <ComicBurst text="POW!" />
          </div>
          <div className="absolute bottom-20 left-10 w-24 h-24 md:w-36 md:h-36 animate-float [animation-delay:1s]">
            <ComicBurst text="ZAP!" />
          </div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 md:w-28 md:h-28 animate-float [animation-delay:2s]">
            <ComicBurst text="BAM!" />
          </div>
        </div>

        <div className="absolute -bottom-2 left-0 w-full">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0,40 Q360,100 720,40 T1440,40 L1440,100 L0,100 Z" fill="#1A1A1A" />
          </svg>
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-2 bg-comic-black text-comic-yellow font-comic text-lg md:text-xl tracking-widest uppercase mb-8 border-2 border-comic-black transform -rotate-2"
          >
            Creative Studio
          </motion.p>

          <motion.h1
            initial={{ scale: 0, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="text-6xl md:text-8xl lg:text-9xl font-comic text-comic-black leading-none mb-6 uppercase"
            style={{ textShadow: "4px 4px 0px #FF1744, 8px 8px 0px rgba(0,0,0,0.1)" }}
          >
            We Create
            <br />
            <span className="text-comic-red" style={{ textShadow: "4px 4px 0px #1A1A1A" }}>
              Digital Magic
            </span>
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block bg-comic-black/90 px-8 py-4 mb-10 transform rotate-1 border-2 border-comic-black"
          >
            <p className="text-lg md:text-xl text-comic-yellow max-w-2xl">
              デザインとテクノロジーの力で、あなたのビジョンを
              <br className="hidden sm:block" />
              ポップでスタイリッシュなデジタル体験に変えます。
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/works" className="btn-comic">
              View Works
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-comic-outline bg-comic-yellow text-comic-black border-comic-black">
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 px-6 bg-comic-black relative overflow-hidden">
        <div className="absolute inset-0 halftone-yellow opacity-5" />

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2
              className="text-5xl md:text-7xl font-comic text-comic-yellow uppercase tracking-wider"
              style={{ textShadow: "3px 3px 0px #FF1744" }}
            >
              What We Do
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0, rotate: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                className={`${item.color} p-8 border-4 border-comic-black relative group ${item.rotation}`}
                style={{ boxShadow: "8px 8px 0px #1A1A1A" }}
              >
                <div className="absolute top-0 right-0 w-16 h-16 halftone opacity-20" />
                <div className="w-14 h-14 bg-comic-black flex items-center justify-center mb-6 transform -rotate-3">
                  <svg
                    className={`w-7 h-7 ${item.color === "bg-comic-red" ? "text-comic-white" : "text-comic-yellow"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-comic text-comic-black mb-3 uppercase tracking-wider">
                  {item.title}
                </h3>
                <p className="text-comic-black/70 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-comic-yellow overflow-hidden">
        <div className="absolute top-0 left-0 w-full">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0,60 Q360,0 720,60 T1440,60 L1440,0 L0,0 Z" fill="#1A1A1A" />
          </svg>
        </div>
        <div className="py-24 px-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2
              className="text-4xl md:text-6xl font-comic text-comic-black uppercase mb-8"
              style={{ textShadow: "3px 3px 0px #FF1744" }}
            >
              Ready to Create
              <br />
              Something Amazing?
            </h2>
            <Link href="/contact" className="btn-comic text-2xl">
              Let&apos;s Talk!
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
