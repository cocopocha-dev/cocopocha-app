"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="relative py-24 px-6 bg-comic-yellow overflow-hidden">
        <div className="absolute inset-0 halftone opacity-10" />
        <div className="absolute -bottom-2 left-0 w-full">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0,40 Q360,80 720,20 T1440,40 L1440,80 L0,80 Z" fill="#1A1A1A" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 bg-comic-black text-comic-yellow font-comic text-sm tracking-widest uppercase mb-6 transform -rotate-2">
              Contact
            </span>
            <h1
              className="text-5xl md:text-7xl font-comic text-comic-black uppercase"
              style={{ textShadow: "3px 3px 0px #FF1744" }}
            >
              Get in{" "}
              <span className="text-comic-red">Touch</span>
            </h1>
            <div className="inline-block bg-comic-black px-4 py-2 mt-4 transform rotate-1">
              <p className="text-comic-yellow">プロジェクトのご相談やお問い合わせはお気軽にどうぞ。</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-comic-black relative overflow-hidden">
        <div className="absolute inset-0 halftone-yellow opacity-5" />
        <div className="max-w-3xl mx-auto relative">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0, rotate: -5 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-comic-yellow p-12 border-4 border-comic-black text-center"
                style={{ boxShadow: "8px 8px 0px rgba(255,214,0,0.3)" }}
              >
                <div
                  className="text-6xl font-comic text-comic-red mb-4"
                  style={{ textShadow: "3px 3px 0px #1A1A1A" }}
                >
                  THANK YOU!
                </div>
                <p className="text-comic-black font-medium text-lg">
                  メッセージを受け付けました。2営業日以内にご返信いたします。
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: "name", label: "NAME", type: "text", placeholder: "お名前" },
                  { id: "email", label: "EMAIL", type: "email", placeholder: "email@example.com" },
                  { id: "subject", label: "SUBJECT", type: "text", placeholder: "件名" },
                ].map((field, i) => (
                  <motion.div
                    key={field.id}
                    initial={{ x: i % 2 === 0 ? -30 : 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <label htmlFor={field.id} className="block font-comic text-lg text-comic-yellow mb-2 tracking-wider uppercase">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      required
                      className="w-full px-5 py-4 bg-comic-yellow text-comic-black border-4 border-comic-yellow
                               focus:border-comic-red focus:outline-none font-medium placeholder:text-comic-black/30
                               transition-colors"
                      style={{ boxShadow: "4px 4px 0px rgba(255,214,0,0.3)" }}
                      placeholder={field.placeholder}
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="message" className="block font-comic text-lg text-comic-yellow mb-2 tracking-wider uppercase">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-5 py-4 bg-comic-yellow text-comic-black border-4 border-comic-yellow
                             focus:border-comic-red focus:outline-none font-medium placeholder:text-comic-black/30
                             transition-colors resize-none"
                    style={{ boxShadow: "4px 4px 0px rgba(255,214,0,0.3)" }}
                    placeholder="お問い合わせ内容"
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <button type="submit" className="btn-comic w-full justify-center text-2xl">
                    SEND MESSAGE!
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div
              className="bg-comic-yellow p-6 border-4 border-comic-black transform -rotate-1"
              style={{ boxShadow: "6px 6px 0px rgba(255,214,0,0.3)" }}
            >
              <h3 className="font-comic text-xl text-comic-black uppercase tracking-wider mb-2">Email</h3>
              <p className="text-comic-black/70 font-medium">hello@cocopocha.com</p>
            </div>
            <div
              className="bg-comic-red p-6 border-4 border-comic-black transform rotate-1"
              style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.3)" }}
            >
              <h3 className="font-comic text-xl text-comic-white uppercase tracking-wider mb-2">Hours</h3>
              <p className="text-comic-white/80 font-medium">Mon - Fri, 10:00 - 19:00</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
