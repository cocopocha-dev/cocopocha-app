"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "UI/UX Design", level: 95 },
  { name: "Frontend Dev", level: 90 },
  { name: "Backend Dev", level: 85 },
  { name: "Branding", level: 88 },
];

const values = [
  {
    num: "01",
    title: "Creativity",
    desc: "常に新しいアイデアを追求し、既成概念にとらわれないデザインを生み出します。",
    color: "bg-comic-yellow",
    rotation: "-rotate-2",
  },
  {
    num: "02",
    title: "Quality",
    desc: "細部にまでこだわり、最高品質のプロダクトを提供することをお約束します。",
    color: "bg-comic-red",
    rotation: "rotate-1",
  },
  {
    num: "03",
    title: "Speed",
    desc: "アジャイルな開発プロセスで、スピーディーにアイデアを形にします。",
    color: "bg-comic-blue",
    rotation: "rotate-2",
  },
  {
    num: "04",
    title: "Collaboration",
    desc: "クライアントとの密なコミュニケーションで、最適なソリューションを導きます。",
    color: "bg-comic-orange",
    rotation: "-rotate-1",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative py-24 px-6 bg-comic-yellow overflow-hidden">
        <div className="absolute inset-0 halftone opacity-10" />
        <div className="absolute -bottom-2 left-0 w-full">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0,0 L80,60 L160,20 L240,50 L320,10 L400,60 L480,30 L560,50 L640,10 L720,60 L800,20 L880,50 L960,10 L1040,60 L1120,30 L1200,50 L1280,10 L1360,60 L1440,20 L1440,80 L0,80 Z" fill="#1A1A1A" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1 bg-comic-black text-comic-yellow font-comic text-sm tracking-widest uppercase mb-6 transform -rotate-2">
              About Us
            </span>
            <h1
              className="text-5xl md:text-7xl font-comic text-comic-black uppercase leading-tight mb-6"
              style={{ textShadow: "3px 3px 0px #FF1744" }}
            >
              ポップで
              <span className="text-comic-red">スタイリッシュ</span>
              な
              <br />
              デジタル体験を。
            </h1>
            <motion.div
              initial={{ rotate: -1, y: 20, opacity: 0 }}
              animate={{ rotate: -1, y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block bg-comic-black px-6 py-4 transform -rotate-1 border-2 border-comic-black"
              style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.3)" }}
            >
              <p className="text-comic-yellow text-lg leading-relaxed max-w-xl">
                cocopochaは、デザインとテクノロジーを融合させたクリエイティブスタジオです。
                「ポップ」をコンセプトに、遊び心のあるデザインと洗練された技術力で、
                記憶に残るデジタル体験を創り出します。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-comic-black relative overflow-hidden">
        <div className="absolute inset-0 halftone-yellow opacity-5" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
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
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03, rotate: i % 2 === 0 ? 1 : -1 }}
                className={`${item.color} p-8 border-4 border-comic-black ${item.rotation}`}
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
      </section>

      <section className="relative py-24 px-6 bg-comic-yellow overflow-hidden">
        <div className="absolute top-0 left-0 w-full">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0,60 Q360,0 720,60 T1440,60 L1440,0 L0,0 Z" fill="#1A1A1A" />
          </svg>
        </div>
        <div className="absolute inset-0 halftone opacity-10" />

        <div className="max-w-3xl mx-auto relative">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
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
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
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
