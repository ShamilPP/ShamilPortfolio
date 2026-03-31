"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { experiences } from "@/data/experience";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold mb-16">
            <span className="section-number" style={{ fontFamily: "var(--font-mono)" }}>
              02.
            </span>
            Work Experience
          </h2>
        </ScrollReveal>

        <div className="relative pl-8">
          {/* Timeline line */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-[2px]"
            style={{
              background: "linear-gradient(to bottom, var(--accent), transparent)",
            }}
          />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.company} delay={index * 0.15}>
                <div className="relative pl-8">
                  {/* Timeline dot - animated pulse */}
                  <motion.div
                    className="absolute -left-8 top-2 w-4 h-4 rounded-full border-[3px] z-10"
                    style={{
                      borderColor: "var(--accent)",
                      background: "var(--bg-secondary)",
                    }}
                    animate={
                      index === 0
                        ? {
                            boxShadow: [
                              "0 0 0 0 rgba(99, 102, 241, 0.4)",
                              "0 0 0 8px rgba(99, 102, 241, 0)",
                            ],
                          }
                        : {}
                    }
                    transition={
                      index === 0
                        ? { duration: 2, repeat: Infinity, ease: "easeOut" }
                        : {}
                    }
                  />

                  {/* Card */}
                  <motion.div
                    className="card p-5 sm:p-6"
                    whileHover={{ x: 4, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <FaBriefcase size={12} style={{ color: "var(--accent)" }} />
                      <span
                        className="text-xs font-medium px-3 py-1 rounded-full"
                        style={{
                          background: "var(--accent-glow)",
                          color: "var(--accent)",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {exp.period}
                      </span>
                      {index === 0 && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 uppercase tracking-wider">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                      {exp.company}
                    </h3>
                    <h4 className="text-sm font-medium mb-4" style={{ color: "var(--accent)" }}>
                      {exp.role}
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm leading-relaxed"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          <span style={{ color: "var(--accent)" }} className="mt-1 flex-shrink-0 text-xs">
                            &#9656;
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
