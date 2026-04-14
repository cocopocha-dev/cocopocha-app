"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Mobile App Dev", level: 95 },
  { name: "UI/UX Design", level: 92 },
  { name: "Frontend Dev", level: 90 },
  { name: "Backend / API", level: 88 },
];

const values = [
  {
    num: "01",
    title: "Innovation",
    desc: "常に最新技術をキャッチアップし、革新的なアプリ体験を追求します。",
    color: "bg-comic-yellow",
  },
  {
    num: "02",
    title: "Quality",
    desc: "細部にまでこだわり、最高品質のプロダクトを提供することをお約束します。",
    color: "bg-comic-red",
  },
  {
    num: "03",
    title: "Speed",
    desc: "アジャイルな開発プロセスで、スピーディーにアイデアを形にします。",
    color: "bg-comic-blue",
  },
  {
    num: "04",
    title: "Partnership",
    desc: "クライアントとの密なコミュニケーションで、最適なソリューションを導きます。",
    color: "bg-comic-orange",
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

const diagonalInRight = {
  hidden: { opacity: 0, x: 100, y: 50, rotate: 4 },
  visible: { opacity: 1, x: 0, y: 0, rotate: 0, transition: { duration: 0.7, ease } },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative py-24 px-6 bg-comic-yellow overflow-hidden">
        <div className="absolute inset-0 halftone opacity-10" />
        <div className="absolute -bottom-1 left-0 w-full">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-20">
            <path d="M0,0 L1440,80 L1440,120 L0,120 Z" fill="#1A1A1A" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ x: -80, opacity: 0, rotate: -3 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1 bg-comic-black text-comic-yellow font-comic text-sm tracking-widest uppercase mb-6 transform -rotate-2">
              About Us
            </span>
            <h1
              className="text-5xl md:text-7xl font-comic text-comic-black uppercase leading-tight mb-6"
              style={{ textShadow: "3px 3px 0px #FF1744" }}
            >
              アプリで
              <span className="text-comic-red">ビジネス</span>
              を
              <br />
              加速させる。
            </h1>
            <motion.div
              initial={{ rotate: -1, y: 20, opacity: 0 }}
              animate={{ rotate: -1, y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block bg-comic-black px-6 py-4 transform -rotate-1 border-2 border-comic-black"
              style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.3)" }}
            >
              <p className="text-comic-yellow text-lg leading-relaxed max-w-xl">
                cocopocha LAB は、アプリ開発に特化したクリエイティブチームです。
                企画・デザイン・開発・運用まで一気通貫で、
                ビジネスを成長させるアプリを生み出します。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-comic-black relative overflow-hidden">
        <div className="absolute inset-0 halftone-yellow opacity-5" />
        <div className="absolute inset-0 diagonal-lines opacity-5" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            variants={diagonalInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-5xl md:text-7xl font-comic text-comic-yellow uppercase tracking-wider"
              style={{ textShadow: "3px 3px 0px #FF1744" }}
            >
              Our Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={diagonalIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, rotate: i % 2 === 0 ? 1 : -1, y: -6 }}
                className={`${item.color} p-8 border-4 border-comic-black transform ${i % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
                style={{ boxShadow: "8px 8px 0px #1A1A1A" }}
              >
                <span className="text-6xl font-comic text-comic-black/20">{item.num}</span>
                <h3 className="text-3xl font-comic text-comic-black mt-2 mb-3 uppercase tracking-wider">
                  {item.title}
                </h3>
                <p className={`leading-relaxed font-medium ${item.color === "bg-comic-red" || item.color === "bg-comic-blue" ? "text-comic-white/80" : "text-comic-black/70"}`}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-1 left-0 w-full">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-20">
            <path d="M0,0 L0,120 L1440,120 L1440,60 Z" fill="#FFD600" />
          </svg>
        </div>
      </section>

      <section className="relative py-24 px-6 bg-comic-yellow overflow-hidden">
        <div className="absolute inset-0 halftone opacity-10" />

        <div className="max-w-3xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, x: -80, rotate: -3 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-center mb-16"
          >
            <h2
              className="text-5xl md:text-7xl font-comic text-comic-black uppercase"
              style={{ textShadow: "3px 3px 0px #FF1744" }}
            >
              Skills
            </h2>
          </motion.div>

          <div className="space-y-8">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ x: i % 2 === 0 ? -80 : 80, opacity: 0, rotate: i % 2 === 0 ? -3 : 3 }}
                whileInView={{ x: 0, opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-comic text-xl text-comic-black uppercase tracking-wider">
                    {skill.name}
                  </span>
                  <span className="font-comic text-xl text-comic-red">{skill.level}%</span>
                </div>
                <div className="h-6 bg-comic-black border-2 border-comic-black overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                    className="h-full bg-comic-red relative"
                  >
                    <div className="absolute inset-0 halftone opacity-20" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
