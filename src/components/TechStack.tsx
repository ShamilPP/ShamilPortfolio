"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import Scene3D from "./Scene3D";
import FloatingGeometry from "./FloatingGeometry";
import { skillCategories } from "@/data/skills";

export default function TechStack() {
  const [showScene, setShowScene] = useState(false);

  useEffect(() => {
    setShowScene(
      window.innerWidth >= 768 &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* 3D Background */}
      {showScene && (
        <Scene3D camera={{ position: [0, 0, 5], fov: 60 }}>
          <FloatingGeometry />
        </Scene3D>
      )}

      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold mb-16">
            <span className="section-number" style={{ fontFamily: "var(--font-mono)" }}>
              03.
            </span>
            Tech Stack
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal key={category.name} delay={catIndex * 0.1}>
              <motion.div
                className="card p-6 h-full relative group"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Hover glow */}
                <div
                  className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg"
                  style={{ background: "var(--accent-glow)" }}
                />

                <h3
                  className="text-xs font-semibold mb-5 uppercase tracking-widest"
                  style={{
                    color: "var(--accent)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: catIndex * 0.05 + i * 0.04,
                        duration: 0.4,
                        type: "spring",
                      }}
                      whileHover={{
                        scale: 1.1,
                        y: -3,
                        boxShadow: "0 4px 20px rgba(99, 102, 241, 0.3)",
                      }}
                      className="tech-tag cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
