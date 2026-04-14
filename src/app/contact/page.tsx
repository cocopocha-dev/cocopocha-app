"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-mono text-primary mb-4 tracking-widest uppercase">
            Contact
          </p>
          <h1 className="section-heading">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="section-subheading mt-4">
            プロジェクトのご相談やお問い合わせはお気軽にどうぞ。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            {submitted ? (
              <div className="glass-card p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  Thank you!
                </h3>
                <p className="text-foreground/50">
                  メッセージを受け付けました。2営業日以内にご返信いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-card border border-dark-border
                             focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50
                             text-foreground placeholder:text-foreground/30 transition-colors"
                    placeholder="お名前"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-card border border-dark-border
                             focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50
                             text-foreground placeholder:text-foreground/30 transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-card border border-dark-border
                             focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50
                             text-foreground placeholder:text-foreground/30 transition-colors"
                    placeholder="件名"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-dark-card border border-dark-border
                             focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50
                             text-foreground placeholder:text-foreground/30 transition-colors resize-none"
                    placeholder="お問い合わせ内容"
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </form>
            )}
          </div>

          <div className="md:col-span-2 space-y-6">
            {[
              {
                icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                label: "Email",
                value: "hello@cocopocha.com",
              },
              {
                icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                label: "Location",
                value: "Tokyo, Japan",
              },
              {
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                label: "Hours",
                value: "Mon - Fri, 10:00 - 19:00",
              },
            ].map((info) => (
              <div key={info.label} className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={info.icon}
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/40 mb-1">
                      {info.label}
                    </p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
