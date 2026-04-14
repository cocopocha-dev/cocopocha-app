"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const appWorks = [
  {
    title: "TaskFlow",
    subtitle: "Project Management App",
    desc: "チームのタスク管理を革新するプロジェクト管理アプリ",
    color: "#2979FF",
    accent: "#FFD600",
    year: "2024",
    category: "Mobile App",
  },
  {
    title: "FoodSnap",
    subtitle: "Recipe & Delivery App",
    desc: "AI搭載のレシピ提案＆フードデリバリーアプリ",
    color: "#FF1744",
    accent: "#FFF8E1",
    year: "2024",
    category: "iOS / Android",
  },
  {
    title: "FitPulse",
    subtitle: "Health & Fitness Tracker",
    desc: "ヘルスケアデータを一元管理するフィットネスアプリ",
    color: "#FF6D00",
    accent: "#1A1A1A",
    year: "2024",
    category: "Mobile App",
  },
  {
    title: "PayWave",
    subtitle: "Digital Wallet App",
    desc: "次世代のキャッシュレス決済ウォレットアプリ",
    color: "#00C853",
    accent: "#FFF8E1",
    year: "2023",
    category: "FinTech",
  },
  {
    title: "CloudNote",
    subtitle: "Collaborative Workspace",
    desc: "リアルタイム共同編集ワークスペースアプリ",
    color: "#AA00FF",
    accent: "#FFD600",
    year: "2023",
    category: "Web App",
  },
];

function AppMockup({ work, isActive }: { work: typeof appWorks[0]; isActive: boolean }) {
  return (
    <div className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px] flex-shrink-0">
      <div
        className="absolute inset-0 rounded-[40px] border-[6px] border-comic-black overflow-hidden"
        style={{
          background: work.color,
          boxShadow: isActive ? `12px 12px 0px #1A1A1A, 0 0 60px ${work.color}40` : "8px 8px 0px #1A1A1A",
          transition: "box-shadow 0.5s ease",
        }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-comic-black rounded-b-2xl" />

        <div className="flex flex-col items-center justify-center h-full px-6 text-center">
          <div
            className="w-16 h-16 rounded-2xl border-4 border-comic-black mb-4 flex items-center justify-center"
            style={{ background: work.accent }}
          >
            <span className="text-2xl font-comic" style={{ color: work.color }}>
              {work.title.charAt(0)}
            </span>
          </div>
          <h3 className="text-2xl font-comic text-white uppercase tracking-wider mb-1"
            style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.3)" }}
          >
            {work.title}
          </h3>
          <p className="text-sm text-white/70 font-medium">{work.subtitle}</p>

          <div className="mt-8 w-full space-y-3">
            <div className="h-3 bg-white/20 rounded-full" />
            <div className="h-3 bg-white/15 rounded-full w-4/5" />
            <div className="h-3 bg-white/10 rounded-full w-3/5" />
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 w-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square rounded-xl bg-white/10 border-2 border-white/20" />
            ))}
          </div>
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
      </div>
    </div>
  );
}

const services = [
  {
    title: "APP DEVELOPMENT",
    desc: "iOS/Android ネイティブ＆クロスプラットフォームアプリを高品質に開発します。",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    color: "bg-comic-red",
  },
  {
    title: "WEB APPLICATION",
    desc: "最新技術でスケーラブルなWebアプリケーションを構築します。",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    color: "bg-comic-blue",
  },
  {
    title: "UI/UX DESIGN",
    desc: "直感的で美しいユーザー体験をデザインします。",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
    color: "bg-comic-yellow",
  },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const diagonalIn = {
  hidden: { opacity: 0, x: -120, y: 60, rotate: -5 },
  visible: { opacity: 1, x: 0, y: 0, rotate: 0, transition: { duration: 0.7, ease } },
};

const diagonalInRight = {
  hidden: { opacity: 0, x: 120, y: 60, rotate: 5 },
  visible: { opacity: 1, x: 0, y: 0, rotate: 0, transition: { duration: 0.7, ease } },
};

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % appWorks.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const prev = () => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + appWorks.length) % appWorks.length);
  };

  const slideVariants = {
    enter: (d: number) => ({
      x: d > 0 ? 600 : -600,
      rotateY: d > 0 ? 25 : -25,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease },
    },
    exit: (d: number) => ({
      x: d > 0 ? -600 : 600,
      rotateY: d > 0 ? -25 : 25,
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-comic-black">
        <div className="absolute inset-0 diagonal-lines opacity-10" />

        <div className="absolute inset-0" style={{
          background: `radial-gradient(ellipse at 30% 50%, ${appWorks[current].color}15 0%, transparent 60%)`,
          transition: "background 1s ease",
        }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -80, rotate: -3 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease }}
            className="flex-1 text-left"
          >
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-5 py-2 bg-comic-yellow text-comic-black font-comic text-base tracking-widest uppercase mb-6 transform -rotate-2 border-3 border-comic-black"
              style={{ boxShadow: "4px 4px 0px #1A1A1A" }}
            >
              App Development Team
            </motion.div>

            <motion.h1
              initial={{ scale: 0.7, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 150, damping: 15 }}
              className="text-5xl md:text-7xl lg:text-8xl font-comic text-comic-yellow leading-none mb-6 uppercase"
              style={{ textShadow: "4px 4px 0px #FF1744, 8px 8px 0px rgba(0,0,0,0.3)" }}
            >
              cocopocha
              <br />
              <span className="text-comic-red" style={{ textShadow: "4px 4px 0px #FFD600" }}>
                LAB
              </span>
            </motion.h1>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-block bg-comic-yellow/10 backdrop-blur-sm px-6 py-4 mb-8 border-2 border-comic-yellow/30 transform rotate-1"
            >
              <p className="text-lg md:text-xl text-comic-yellow/90 max-w-lg">
                アイデアを形にする。
                <br />
                アプリ開発で、ビジネスを次のステージへ。
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/works" className="btn-comic">
                View Our Apps
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/contact" className="btn-comic-outline">
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>

          <div className="flex-1 flex items-center justify-center relative" style={{ perspective: "1200px" }}>
            <div className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px]">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <AppMockup work={appWorks[current]} isActive={true} />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
              <button
                onClick={prev}
                className="w-10 h-10 bg-comic-yellow border-3 border-comic-black flex items-center justify-center hover:bg-comic-red hover:text-white transition-colors"
                style={{ boxShadow: "3px 3px 0px #1A1A1A" }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex gap-2">
                {appWorks.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    className={`w-3 h-3 border-2 border-comic-black transition-all duration-300 ${
                      i === current ? "bg-comic-yellow scale-125" : "bg-comic-black/50 hover:bg-comic-yellow/50"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 bg-comic-yellow border-3 border-comic-black flex items-center justify-center hover:bg-comic-red hover:text-white transition-colors"
                style={{ boxShadow: "3px 3px 0px #1A1A1A" }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-1 left-0 w-full">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-20 md:h-28">
            <path d="M0,120 L0,80 L1440,0 L1440,120 Z" fill="#FFD600" />
          </svg>
        </div>
      </section>

      <section className="relative bg-comic-yellow py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 halftone opacity-5" />

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-7xl mx-auto relative text-center"
          >
            <span className="inline-block px-4 py-1 bg-comic-black text-comic-yellow font-comic text-sm tracking-widest uppercase mb-3">
              {appWorks[current].category} — {appWorks[current].year}
            </span>
            <h2
              className="text-4xl md:text-6xl font-comic text-comic-black uppercase mb-3"
              style={{ textShadow: "3px 3px 0px #FF1744" }}
            >
              {appWorks[current].title}
            </h2>
            <p className="text-lg text-comic-black/70 font-medium">{appWorks[current].desc}</p>
          </motion.div>
        </AnimatePresence>

        <div className="absolute -bottom-1 left-0 w-full">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-20 md:h-28">
            <path d="M0,0 L1440,80 L1440,120 L0,120 Z" fill="#1A1A1A" />
          </svg>
        </div>
      </section>

      <section className="py-28 px-6 bg-comic-black relative overflow-hidden">
        <div className="absolute inset-0 halftone-yellow opacity-5" />

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            variants={diagonalIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
                variants={i % 2 === 0 ? diagonalIn : diagonalInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2, y: -8 }}
                className={`${item.color} p-8 border-4 border-comic-black relative group transform ${i === 0 ? "-rotate-2" : i === 1 ? "rotate-1" : "-rotate-1"}`}
                style={{ boxShadow: "8px 8px 0px #1A1A1A" }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 halftone opacity-20" />
                <div className="w-14 h-14 bg-comic-black flex items-center justify-center mb-6 transform -rotate-3 border-2 border-comic-yellow">
                  <svg
                    className="w-7 h-7 text-comic-yellow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className={`text-2xl font-comic mb-3 uppercase tracking-wider ${item.color === "bg-comic-yellow" ? "text-comic-black" : "text-white"}`}>
                  {item.title}
                </h3>
                <p className={`leading-relaxed font-medium ${item.color === "bg-comic-yellow" ? "text-comic-black/70" : "text-white/80"}`}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-1 left-0 w-full">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-20 md:h-28">
            <path d="M0,0 L0,120 L1440,120 L1440,60 Z" fill="#FFD600" />
          </svg>
        </div>
      </section>

      <section className="relative bg-comic-yellow overflow-hidden py-24 px-6">
        <div className="absolute inset-0 halftone opacity-5" />
        <motion.div
          variants={diagonalInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative"
        >
          <h2
            className="text-4xl md:text-6xl font-comic text-comic-black uppercase mb-4"
            style={{ textShadow: "3px 3px 0px #FF1744" }}
          >
            Ready to Build
            <br />
            Your Next App?
          </h2>
          <p className="text-lg text-comic-black/60 mb-8 font-medium">
            アイデアをアプリにしましょう。まずはお気軽にご相談ください。
          </p>
          <Link href="/contact" className="btn-comic text-2xl">
            Let&apos;s Talk!
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
