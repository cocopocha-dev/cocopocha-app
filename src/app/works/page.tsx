import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works | cocopocha",
  description: "cocopochaの制作実績",
};

const works = [
  {
    title: "Neon Branding",
    category: "Branding",
    color: "from-primary to-pink-500",
    year: "2024",
  },
  {
    title: "Cyber Commerce",
    category: "Web App",
    color: "from-secondary to-blue-500",
    year: "2024",
  },
  {
    title: "Pop Magazine",
    category: "Editorial",
    color: "from-accent to-emerald-500",
    year: "2024",
  },
  {
    title: "Future Dashboard",
    category: "UI/UX",
    color: "from-purple-500 to-primary",
    year: "2023",
  },
  {
    title: "Glow Social",
    category: "Mobile App",
    color: "from-orange-500 to-yellow-500",
    year: "2023",
  },
  {
    title: "Wave Music",
    category: "Web Design",
    color: "from-teal-500 to-secondary",
    year: "2023",
  },
];

export default function WorksPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-mono text-primary mb-4 tracking-widest uppercase">
            Our Works
          </p>
          <h1 className="section-heading">
            Selected <span className="gradient-text">Projects</span>
          </h1>
          <p className="section-subheading mt-4">
            私たちが手がけたプロジェクトの一部をご紹介します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => (
            <article
              key={work.title}
              className="glass-card overflow-hidden group cursor-pointer hover:border-primary/50 transition-all duration-300"
            >
              <div
                className={`aspect-[4/3] bg-gradient-to-br ${work.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}
              >
                <span className="text-dark/80 text-6xl font-bold opacity-30 group-hover:opacity-50 transition-opacity">
                  {work.title.charAt(0)}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-primary/80 tracking-wider uppercase">
                    {work.category}
                  </span>
                  <span className="text-xs text-foreground/30">{work.year}</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {work.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
