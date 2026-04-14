"use client";

import { motion } from "framer-motion";

const works = [
  {
    title: "TaskFlow",
    category: "Mobile App",
    desc: "チームのタスク管理を革新するプロジェクト管理アプリ",
    color: "#2979FF",
    year: "2024",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    title: "FoodSnap",
    category: "iOS / Android",
    desc: "AI搭載のレシピ提案＆フードデリバリーアプリ",
    color: "#FF1744",
    year: "2024",
    icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z",
  },
  {
    title: "FitPulse",
    category: "Mobile App",
    desc: "ヘルスケアデータを一元管理するフィットネスアプリ",
    color: "#FF6D00",
    year: "2024",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "PayWave",
    category: "FinTech",
    desc: "次世代のキャッシュレス決済ウォレットアプリ",
    color: "#00C853",
    year: "2023",
    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
  },
  {
    title: "CloudNote",
    category: "Web App",
    desc: "リアルタイム共同編集ワークスペースアプリ",
    color: "#AA00FF",
    year: "2023",
    icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
  },
  {
    title: "ShopLive",
    category: "E-Commerce",
    desc: "ライブコマース機能搭載のECプラットフォーム",
    color: "#FF4081",
    year: "2023",
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
  },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const diagonalIn = {
  hidden: { opacity: 0, x: -100, y: 50, rotate: -4 },
  visible: (i: number) => ({
    opacity: 1, x: 0, y: 0, rotate: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease },
  }),
};

export default function WorksPage() {
  return (
    <>
      <section className="relative py-24 px-6 bg-comic-yellow overflow-hidden">
        <div className="absolute inset-0 halftone opacity-10" />
        <div className="absolute -bottom-1 left-0 w-full">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-20">
            <path d="M0,120 L0,80 L1440,0 L1440,120 Z" fill="#1A1A1A" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ x: -80, opacity: 0, rotate: -3 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="inline-block px-4 py-1 bg-comic-black text-comic-yellow font-comic text-sm tracking-widest uppercase mb-6 transform -rotate-2">
              Our Works
            </span>
            <h1
              className="text-5xl md:text-7xl font-comic text-comic-black uppercase leading-tight"
              style={{ textShadow: "3px 3px 0px #FF1744" }}
            >
              App{" "}
              <span className="text-comic-red">Portfolio</span>
            </h1>
            <div className="inline-block bg-comic-black px-4 py-2 mt-4 transform rotate-1">
              <p className="text-comic-yellow">cocopocha LAB が手がけたアプリの一部をご紹介します。</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-comic-black relative overflow-hidden">
        <div className="absolute inset-0 halftone-yellow opacity-5" />
        <div className="absolute inset-0 diagonal-lines opacity-5" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work, i) => (
              <motion.article
                key={work.title}
                custom={i}
                variants={diagonalIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2, y: -8 }}
                className="border-4 border-comic-black overflow-hidden cursor-pointer group"
                style={{
                  boxShadow: "8px 8px 0px rgba(255,214,0,0.3)",
                  transform: `rotate(${i % 2 === 0 ? "-1" : "1"}deg)`,
                }}
              >
                <div
                  className="aspect-[4/3] relative flex items-center justify-center overflow-hidden"
                  style={{ background: work.color }}
                >
                  <div className="absolute inset-0 halftone opacity-10" />

                  <div className="relative flex flex-col items-center">
                    <div className="w-20 h-20 rounded-2xl border-4 border-white/30 flex items-center justify-center mb-3 bg-white/10 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={work.icon} />
                      </svg>
                    </div>
                    <span className="text-lg font-comic text-white/80 tracking-wider uppercase">
                      {work.title}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full">
                    <svg viewBox="0 0 400 40" preserveAspectRatio="none" className="w-full h-6">
                      <path d="M0,40 L0,20 L400,0 L400,40 Z" fill="#1A1A1A" />
                    </svg>
                  </div>
                </div>

                <div className="p-6 bg-comic-black">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 bg-comic-yellow text-comic-black font-comic text-xs tracking-wider uppercase">
                      {work.category}
                    </span>
                    <span className="text-xs text-comic-yellow/50 font-comic">{work.year}</span>
                  </div>
                  <h3 className="text-xl font-comic text-comic-yellow group-hover:text-comic-red transition-colors uppercase tracking-wider mb-1">
                    {work.title}
                  </h3>
                  <p className="text-sm text-comic-yellow/60">{work.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-1 left-0 w-full">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-20">
            <path d="M0,0 L1440,80 L1440,120 L0,120 Z" fill="#FFD600" />
          </svg>
        </div>
      </section>

      <section className="relative bg-comic-yellow py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 halftone opacity-5" />
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 3 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="max-w-4xl mx-auto text-center relative"
        >
          <h2
            className="text-4xl md:text-6xl font-comic text-comic-black uppercase mb-4"
            style={{ textShadow: "3px 3px 0px #FF1744" }}
          >
            Got an App Idea?
          </h2>
          <p className="text-lg text-comic-black/60 mb-8 font-medium">
            あなたのアイデアをアプリにしましょう。お気軽にご相談ください。
          </p>
          <a href="/contact" className="btn-comic text-2xl">
            Let&apos;s Build It!
          </a>
        </motion.div>
      </section>
    </>
  );
}
