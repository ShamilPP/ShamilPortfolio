"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold mb-14">
            <span className="section-number" style={{ fontFamily: "var(--font-mono)" }}>
              01.
            </span>
            About Me
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-[260px_1fr] gap-10 lg:gap-16 items-start">
          {/* Profile Image */}
          <ScrollReveal delay={0.1}>
            <motion.div
              className="relative group mx-auto md:mx-0 w-[220px] sm:w-[240px] md:w-[250px] h-[270px] sm:h-[290px] md:h-[300px]"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div
                className="absolute inset-0 rounded-xl translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"
                style={{ border: "2px solid var(--accent)" }}
              />
              <div className="relative overflow-hidden rounded-xl w-full h-full">
                <Image
                  src="/assets/profile.jpg"
                  alt="Shamil PP - Flutter Developer"
                  fill
                  className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 220px, 250px"
                  priority
                />
                <div
                  className="absolute inset-0 opacity-15 group-hover:opacity-0 transition-opacity duration-500 mix-blend-multiply"
                  style={{ background: "var(--accent)" }}
                />
              </div>
              {/* Glow effect */}
              <div
                className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                style={{ background: "var(--accent-glow)" }}
              />
            </motion.div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-5">
              <p style={{ color: "var(--text-secondary)" }} className="text-[0.95rem] leading-[1.8]">
                I&apos;m a{" "}
                <strong style={{ color: "var(--text-primary)" }}>self-taught Flutter Developer</strong>{" "}
                from{" "}
                <strong style={{ color: "var(--text-primary)" }}>Kerala, India</strong>{" "}
                with over{" "}
                <strong style={{ color: "var(--accent)" }}>3+ years</strong> of
                experience building high-quality mobile applications. What started as
                curiosity quickly became a passion for crafting elegant, performant
                apps that solve real-world problems.
              </p>
              <p style={{ color: "var(--text-secondary)" }} className="text-[0.95rem] leading-[1.8]">
                I specialize in{" "}
                <strong style={{ color: "var(--text-primary)" }}>Flutter & Dart</strong>,
                with deep expertise in{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  Firebase, REST APIs, Clean Architecture
                </strong>
                , and state management solutions like BLoC, Provider, and GetX.
                I&apos;ve successfully published multiple apps on the Play Store and a
                Flutter plugin on pub.dev.
              </p>
              <p style={{ color: "var(--text-secondary)" }} className="text-[0.95rem] leading-[1.8]">
                Currently, I&apos;m working as a Flutter Developer at{" "}
                <strong style={{ color: "var(--accent)" }}>
                  L-Earnings Quest Private Limited
                </strong>
                , where I develop scalable applications using Clean Architecture and
                BLoC pattern, deploy production builds, and integrate third-party SDKs
                for enhanced functionality.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
