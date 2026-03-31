"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import TypingEffect from "./TypingEffect";
import Counter from "./Counter";
import Scene3D from "./Scene3D";
import HeroScene from "./HeroScene";
import { FaDownload, FaArrowRight, FaChevronDown } from "react-icons/fa";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const [showScene, setShowScene] = useState(false);

  useEffect(() => {
    const ok =
      window.innerWidth >= 768 &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setShowScene(ok);
  }, []);

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Three.js Background — behind everything */}
      {showScene && (
        <div className="absolute inset-0 z-0">
          <Scene3D camera={{ position: [0, 0, 8], fov: 50 }}>
            <HeroScene />
          </Scene3D>
        </div>
      )}

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 -left-32 w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[100px] pointer-events-none z-0"
        style={{ background: "var(--accent)" }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-[350px] h-[350px] rounded-full opacity-[0.04] blur-[100px] pointer-events-none z-0"
        style={{ background: "#8b5cf6" }}
      />

      {/* Content — above 3D */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-base font-medium mb-5 tracking-widest uppercase"
          style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 leading-[1.1]"
        >
          Shamil{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--accent-gradient)" }}
          >
            PP
          </span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 min-h-[1.4em]"
          style={{ color: "var(--text-secondary)" }}
        >
          <TypingEffect
            strings={[
              "Flutter Developer",
              "Mobile App Architect",
              "Self-Taught Builder",
            ]}
          />
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          A passionate Flutter developer with 3+ years of experience building
          beautiful, high-performance mobile applications. I specialize in
          creating scalable solutions with clean architecture and optimized
          performance.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 sm:gap-10 md:gap-16 mb-10"
        >
          {[
            { target: 3, label: "Years Exp" },
            { target: 15, label: "Projects" },
            { target: 300, label: "Plugin Downloads" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl sm:text-3xl md:text-4xl font-bold"
                style={{ color: "var(--accent)" }}
              >
                <Counter target={stat.target} />
              </div>
              <div
                className="text-[0.65rem] sm:text-xs md:text-sm mt-1 font-medium uppercase tracking-wider"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a href="/assets/ShamilPP-CV.pdf" className="btn-primary" download>
            <FaDownload size={14} />
            Download CV
          </a>
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="btn-secondary"
          >
            Get In Touch
            <FaArrowRight size={14} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        style={{ color: "var(--text-muted)" }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaChevronDown size={20} />
      </motion.div>
    </section>
  );
}
