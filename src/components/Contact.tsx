"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import Scene3D from "./Scene3D";
import FloatingGeometry from "./FloatingGeometry";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  const [showScene, setShowScene] = useState(false);

  useEffect(() => {
    setShowScene(
      window.innerWidth >= 768 &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {showScene && (
        <Scene3D camera={{ position: [0, 0, 5], fov: 60 }}>
          <FloatingGeometry />
        </Scene3D>
      )}

      <div className="max-w-2xl mx-auto px-6 sm:px-10 md:px-16 text-center relative z-10">
        <ScrollReveal>
          <p
            className="text-sm font-medium mb-4 tracking-widest uppercase"
            style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
          >
            05. What&apos;s Next?
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Get In Touch</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p
            className="text-base md:text-lg mb-12 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            I&apos;m currently open to freelance projects and full-time
            opportunities. Whether you have a question or just want to say hi,
            my inbox is always open. I&apos;ll try my best to get back to you!
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <motion.a
            href="mailto:shamilpp4115@gmail.com"
            className="btn-primary text-base md:text-lg inline-flex"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaEnvelope size={16} />
            Say Hello
          </motion.a>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mt-10 text-sm"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
          >
            <a
              href="tel:+918943155853"
              className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors"
            >
              <FaPhone size={12} />
              +91 8943155853
            </a>
            <span className="hidden sm:inline">|</span>
            <a
              href="mailto:shamilpp4115@gmail.com"
              className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors"
            >
              <FaEnvelope size={12} />
              shamilpp4115@gmail.com
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
