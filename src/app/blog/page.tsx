"use client";

import { motion } from "framer-motion";

const posts = [
  {
    slug: "design-trends-2024",
    title: "2024年のデザイントレンド — ネオンとミニマリズムの融合",
    excerpt: "今年注目すべきデザイントレンドを、ネオンカラーとミニマルデザインの観点から解説します。",
    date: "2024.03.15",
    category: "Design",
    readTime: "5 min",
  },
  {
    slug: "nextjs-performance",
    title: "Next.js 14で実現する究極のパフォーマンス最適化",
    excerpt: "App Routerを活用したパフォーマンスチューニングのベストプラクティスをご紹介します。",
    date: "2024.02.28",
    category: "Tech",
    readTime: "8 min",
  },
  {
    slug: "brand-identity",
    title: "ブランドアイデンティティを確立する5つのステップ",
    excerpt: "ポップでありながらプロフェッショナルなブランドを構築するための実践的なガイド。",
    date: "2024.02.10",
    category: "Branding",
    readTime: "6 min",
  },
  {
    slug: "creative-process",
    title: "クリエイティブプロセスの裏側 — アイデアから実装まで",
    excerpt: "私たちのデザインプロセスを公開。インスピレーションの見つけ方から最終納品まで。",
    date: "2024.01.20",
    category: "Process",
    readTime: "7 min",
  },
];

const categoryColors: Record<string, string> = {
  Design: "bg-comic-red text-comic-white",
  Tech: "bg-comic-blue text-comic-white",
  Branding: "bg-comic-orange text-comic-black",
  Process: "bg-comic-pink text-comic-white",
};

export default function BlogPage() {
  return (
    <>
      <section className="relative py-24 px-6 bg-comic-yellow overflow-hidden">
        <div className="absolute inset-0 halftone opacity-10" />
        <div className="absolute -bottom-2 left-0 w-full">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0,20 L100,60 L200,30 L300,70 L400,20 L500,50 L600,10 L700,60 L800,30 L900,70 L1000,20 L1100,50 L1200,10 L1300,60 L1440,30 L1440,80 L0,80 Z" fill="#1A1A1A" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
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
              <p className="text-comic-yellow">デザイン・テクノロジーに関する最新の知見を発信しています。</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-comic-black relative overflow-hidden">
        <div className="absolute inset-0 halftone-yellow opacity-5" />
        <div className="max-w-4xl mx-auto relative space-y-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ x: i % 2 === 0 ? -40 : 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? 0.5 : -0.5 }}
              className="bg-comic-yellow p-8 border-4 border-comic-black cursor-pointer group"
              style={{
                boxShadow: "8px 8px 0px rgba(255,214,0,0.3)",
                transform: `rotate(${i % 2 === 0 ? "-0.5" : "0.5"}deg)`,
              }}
            >
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
