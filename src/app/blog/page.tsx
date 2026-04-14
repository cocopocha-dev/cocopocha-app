import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog | cocopocha",
  description: "cocopochaのブログ - デザイン・テクノロジーの最新情報",
};

const posts = [
  {
    slug: "design-trends-2024",
    title: "2024年のデザイントレンド — ネオンとミニマリズムの融合",
    excerpt:
      "今年注目すべきデザイントレンドを、ネオンカラーとミニマルデザインの観点から解説します。",
    date: "2024.03.15",
    category: "Design",
    readTime: "5 min",
  },
  {
    slug: "nextjs-performance",
    title: "Next.js 14で実現する究極のパフォーマンス最適化",
    excerpt:
      "App Routerを活用したパフォーマンスチューニングのベストプラクティスをご紹介します。",
    date: "2024.02.28",
    category: "Tech",
    readTime: "8 min",
  },
  {
    slug: "brand-identity",
    title: "ブランドアイデンティティを確立する5つのステップ",
    excerpt:
      "ポップでありながらプロフェッショナルなブランドを構築するための実践的なガイド。",
    date: "2024.02.10",
    category: "Branding",
    readTime: "6 min",
  },
  {
    slug: "creative-process",
    title: "クリエイティブプロセスの裏側 — アイデアから実装まで",
    excerpt:
      "私たちのデザインプロセスを公開。インスピレーションの見つけ方から最終納品まで。",
    date: "2024.01.20",
    category: "Process",
    readTime: "7 min",
  },
];

const categoryColors: Record<string, string> = {
  Design: "text-primary",
  Tech: "text-secondary",
  Branding: "text-accent",
  Process: "text-purple-400",
};

export default function BlogPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-mono text-primary mb-4 tracking-widest uppercase">
            Blog
          </p>
          <h1 className="section-heading">
            Latest <span className="gradient-text">Articles</span>
          </h1>
          <p className="section-subheading mt-4">
            デザイン・テクノロジーに関する最新の知見を発信しています。
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="glass-card p-8 group hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <span
                  className={`text-xs font-mono tracking-wider uppercase ${categoryColors[post.category] || "text-primary"}`}
                >
                  {post.category}
                </span>
                <span className="text-xs text-foreground/30">{post.date}</span>
                <span className="text-xs text-foreground/30">
                  {post.readTime}
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-foreground/50 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-4">
                <span className="text-sm text-primary/70 group-hover:text-primary transition-colors inline-flex items-center gap-1">
                  Read More
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
