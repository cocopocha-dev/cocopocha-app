import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | cocopocha",
  description: "cocopochaについて - 私たちのビジョンとチーム",
};

const skills = [
  { name: "UI/UX Design", level: 95 },
  { name: "Frontend Dev", level: 90 },
  { name: "Backend Dev", level: 85 },
  { name: "Branding", level: 88 },
];

const values = [
  {
    emoji: "01",
    title: "Creativity",
    desc: "常に新しいアイデアを追求し、既成概念にとらわれないデザインを生み出します。",
  },
  {
    emoji: "02",
    title: "Quality",
    desc: "細部にまでこだわり、最高品質のプロダクトを提供することをお約束します。",
  },
  {
    emoji: "03",
    title: "Speed",
    desc: "アジャイルな開発プロセスで、スピーディーにアイデアを形にします。",
  },
  {
    emoji: "04",
    title: "Collaboration",
    desc: "クライアントとの密なコミュニケーションで、最適なソリューションを導きます。",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm font-mono text-primary mb-4 tracking-widest uppercase">
              About Us
            </p>
            <h1 className="section-heading">
              ポップで
              <span className="gradient-text">スタイリッシュ</span>
              な
              <br />
              デジタル体験を。
            </h1>
            <p className="section-subheading mt-6">
              cocopochaは、デザインとテクノロジーを融合させたクリエイティブスタジオです。
              私たちは「ポップ」をコンセプトに、遊び心のあるデザインと洗練された技術力で、
              記憶に残るデジタル体験を創り出します。
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-dark-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-mono text-secondary mb-4 tracking-widest uppercase">
            Our Values
          </p>
          <h2 className="section-heading mb-16">What We Believe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((item) => (
              <div
                key={item.title}
                className="glass-card p-8 group hover:border-secondary/50 transition-all duration-300"
              >
                <span className="text-5xl font-bold text-secondary/20 group-hover:text-secondary/40 transition-colors">
                  {item.emoji}
                </span>
                <h3 className="text-2xl font-bold mt-4 mb-3">{item.title}</h3>
                <p className="text-foreground/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-dark-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-mono text-accent mb-4 tracking-widest uppercase">
            Skills
          </p>
          <h2 className="section-heading mb-16">What We Do Best</h2>
          <div className="max-w-2xl space-y-8">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-foreground/50">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-dark-border rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
