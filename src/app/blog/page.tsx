"use client";

import { motion } from "framer-motion";

const posts = [
  {
    slug: "app-development-trends-2024",
    title: "2024年のアプリ開発トレンド — AI統合とクロスプラットフォーム",
    excerpt: "今年注目すべきアプリ開発トレンドを、AI機能統合とクロスプラットフォーム開発の観点から解説します。",
    date: "2024.03.15",
    category: "Tech",
    readTime: "5 min",
    color: "#2979FF",
  },
  {
    slug: "mobile-ux-design",
    title: "モバイルUXデザインの極意 — ユーザーを虜にする体験設計",
    excerpt: "ユーザーリテンションを高めるモバイルUXデザインのベストプラクティスをご紹介します。",
    date: "2024.02.28",
    category: "Design",
    readTime: "8 min",
    color: "#FF1744",
  },
  {
    slug: "flutter-vs-react-native",
    title: "Flutter vs React Native — 2024年の最適解を探る",
    excerpt: "クロスプラットフォーム開発のフレームワーク選定ガイド。プロジェクト特性別の最適解を解説。",
    date: "2024.02.10",
    category: "Tech",
    readTime: "6 min",
    color: "#FF6D00",
  },
  {
    slug: "app-launch-strategy",
    title: "アプリローンチ戦略 — 成功する市場投入のステップ",
    excerpt: "アプリリリースからグロースまで、cocopocha LAB が実践するローンチ戦略を公開。",
    date: "2024.01.20",
    category: "Strategy",
    readTime: "7 min",
    color: "#AA00FF",
  },
];

const categoryColors: Record<string, string> = {
  Design: "bg-comic-red text-comic-white",
  Tech: "bg-comic-blue text-comic-white",
  Strategy: "bg-comic-orange text-comic-black",
  Process: "bg-comic-pink text-comic-white",
};

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const diagonalIn = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -100 : 100,
    y: 40,
    rotate: i % 2 === 0 ? -4 : 4,
  }),
  visible: (i: number) => ({
    opacity: 1, x: 0, y: 0, rotate: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease },
  }),
};

export default function BlogPage() {
  return (
    <>
      <section className="relative py-24 px-6 bg-comic-yellow overflow-hidden">
        <div className="absolute inset-0 halftone opacity-10" />
        <div className="absolute -bottom-1 left-0 w-full">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-20">
            <path d="M0,120 L0,60 L1440,0 L1440,120 Z" fill="#1A1A1A" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ x: -80, opacity: 0, rotate: -3 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="inline-block px-4 py-1 bg-comic-black text-comic-yellow font-comic text-sm tracking-widest uppercase mb-6 transform rotate-1">
              Blog
            </span>
            <h1
              className="text-5xl md:text-7xl font-comic text-comic-black uppercase"
              style={{ textShadow: "3px 3px 0px #FF1744" }}
            >
              Latest{" "}
              <span className="text-comic-red">Articles</span>
            </h1>
            <div className="inline-block bg-comic-black px-4 py-2 mt-4 transform -rotate-1">
              <p className="text-comic-yellow">アプリ開発・デザインに関する最新の知見を発信しています。</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-comic-black relative overflow-hidden">
        <div className="absolute inset-0 halftone-yellow opacity-5" />
        <div className="absolute inset-0 diagonal-lines opacity-5" />
        <div className="max-w-4xl mx-auto relative space-y-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              custom={i}
              variants={diagonalIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? 0.5 : -0.5, y: -4 }}
              className="bg-comic-yellow p-8 border-4 border-comic-black cursor-pointer group relative overflow-hidden"
              style={{
                boxShadow: "8px 8px 0px rgba(255,214,0,0.3)",
              }}
            >
              <div
                className="absolute top-0 left-0 w-2 h-full"
                style={{ background: post.color }}
              />
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`px-3 py-1 font-comic text-xs tracking-wider uppercase border-2 border-comic-black ${categoryColors[post.category] || "bg-comic-yellow text-comic-black"}`}>
                  {post.category}
                </span>
                <span className="font-comic text-xs text-comic-black/50 tracking-wider">{post.date}</span>
                <span className="font-comic text-xs text-comic-black/50 tracking-wider">{post.readTime}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-3 text-comic-black group-hover:text-comic-red transition-colors">
                {post.title}
              </h2>
              <p className="text-comic-black/60 leading-relaxed">{post.excerpt}</p>
              <div className="mt-4">
                <span className="font-comic text-comic-red uppercase tracking-wider inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
