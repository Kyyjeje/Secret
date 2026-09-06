"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import LanyardCard from "@/components/ui/LanyardCard";
import { profile } from "@/lib/data";
import { scrollToSection, EASE } from "@/lib/utils";

// Local, faster entrance timing so the whole sequence finishes before the
// loading screen begins fading out (~1.1s), avoiding the two transitions
// visually overlapping and washing out the later elements.
const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const heroItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="section-padding relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="section-container grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
        {/* Mobile: card first. Desktop: text first via order utilities */}
        <div className="order-1 flex justify-center lg:order-2">
          <LanyardCard />
        </div>

        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="show"
          className="relative z-10 order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left"
        >
          <motion.span variants={heroItem} className="eyebrow mb-5">
            Welcome to my portfolio
          </motion.span>

          <motion.h1
            variants={heroItem}
            className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">{profile.name}</span>
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="mt-5 text-lg font-medium text-secondary sm:text-xl"
          >
            {profile.title}
          </motion.p>

          <motion.p
            variants={heroItem}
            className="mt-5 max-w-xl text-sm leading-relaxed text-white sm:text-base"
          >
            {profile.heroDescription}
          </motion.p>

          <motion.div
            variants={heroItem}
            className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <motion.a
              href={profile.cvUrl}
              download
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="btn-primary"
            >
              <Download size={16} />
              Download CV
            </motion.a>

            <motion.a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="btn-ghost"
            >
              <Github size={16} />
              GitHub
            </motion.a>

            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="btn-ghost"
            >
              <Linkedin size={16} />
              LinkedIn
            </motion.a>

            <motion.button
              type="button"
              onClick={() => scrollToSection("#contact")}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="btn-ghost"
            >
              <Mail size={16} />
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollToSection("#about")}
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center rounded-full border border-white/10 bg-base/40 p-2 text-text-secondary backdrop-blur-sm hover:text-white sm:bottom-14"
      >
        <ArrowDown size={18} />
      </motion.button>
    </section>
  );
}
