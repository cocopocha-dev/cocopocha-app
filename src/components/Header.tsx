"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "TOP" },
  { href: "/about", label: "ABOUT" },
  { href: "/works", label: "WORKS" },
  { href: "/blog", label: "BLOG" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-comic-black border-b-4 border-comic-yellow">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="relative group flex items-baseline gap-1">
          <span className="text-3xl font-comic text-comic-yellow tracking-wider uppercase group-hover:text-comic-red transition-colors duration-200">
            cocopocha
          </span>
          <span className="text-xl font-comic text-comic-red tracking-wider uppercase group-hover:text-comic-yellow transition-colors duration-200">
            LAB
          </span>
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-comic-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 font-comic text-lg text-comic-yellow hover:bg-comic-yellow hover:text-comic-black
                         transition-all duration-200 tracking-wider border-2 border-transparent hover:border-comic-black
                         relative overflow-hidden"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 border-2 border-comic-yellow"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-comic-yellow transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-comic-yellow transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-comic-yellow transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-comic-black border-t-2 border-comic-yellow"
          >
            <div className="px-6 pb-6 pt-2 flex flex-col gap-2">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 font-comic text-xl text-comic-yellow hover:bg-comic-yellow hover:text-comic-black
                               transition-all duration-200 tracking-wider border-2 border-transparent hover:border-comic-black"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
