"use client";

import { featuredProjects, homeProjects } from "@/data/projects";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();

  return (
    <section
      id="projects"
      className="py-24 md:py-32 relative"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold mb-16">
            <span className="section-number" style={{ fontFamily: "var(--font-mono)" }}>
              04.
            </span>
            Things I&apos;ve Built
          </h2>
        </ScrollReveal>

        {/* Featured Projects */}
        <div className="space-y-20 md:space-y-28 mb-24">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <ScrollReveal key={project.id} delay={0.1}>
                <div className="grid md:grid-cols-[1fr_1fr] gap-6 md:gap-10 items-center">
                  {/* Image */}
                  <motion.div
                    className={`relative group overflow-hidden rounded-xl cursor-pointer ${
                      !isEven ? "md:order-2" : ""
                    }`}
                    onClick={() => router.push(`/project/${project.id}`)}
                    role="link"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") router.push(`/project/${project.id}`);
                    }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div
                      className="aspect-video overflow-hidden rounded-xl"
                      style={{
                        background: project.logoBackgroundColor || "var(--bg-tertiary)",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.images[1] || project.logo}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = project.logo;
                        }}
                      />
                    </div>
                    <div
                      className="absolute inset-0 opacity-25 group-hover:opacity-0 transition-opacity duration-500 rounded-xl"
                      style={{ background: "var(--accent)" }}
                    />
                  </motion.div>

                  {/* Info */}
                  <div className={!isEven ? "md:order-1 md:text-right" : ""}>
                    <p
                      className="text-xs font-medium uppercase tracking-widest mb-2"
                      style={{
                        color: "var(--accent)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      Featured Project
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold mb-4">
                      <Link
                        href={`/project/${project.id}`}
                        className="hover:text-[var(--accent)] transition-colors"
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <motion.div
                      className="card rounded-xl p-5 mb-4 text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                      whileHover={{
                        boxShadow: "0 8px 40px rgba(99, 102, 241, 0.08)",
                      }}
                    >
                      {project.fullDescription}
                    </motion.div>
                    <div className={`flex flex-wrap gap-2 mb-5 ${!isEven ? "md:justify-end" : ""}`}>
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className={`flex gap-4 ${!isEven ? "md:justify-end" : ""}`}>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 transition-all hover:text-[var(--accent)] hover:-translate-y-1"
                          style={{ color: "var(--text-secondary)" }}
                          aria-label={`${project.title} GitHub`}
                        >
                          <FaGithub size={20} />
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 transition-all hover:text-[var(--accent)] hover:-translate-y-1"
                          style={{ color: "var(--text-secondary)" }}
                          aria-label={`${project.title} live`}
                        >
                          <FaExternalLinkAlt size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Other Projects */}
        <ScrollReveal>
          <h3 className="text-xl font-bold text-center mb-12" style={{ color: "var(--text-primary)" }}>
            Other Noteworthy Projects
          </h3>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {homeProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.06}>
              <motion.div
                className="card p-6 h-full flex flex-col group cursor-pointer relative"
                onClick={() => router.push(`/project/${project.id}`)}
                role="link"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") router.push(`/project/${project.id}`);
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Top accent line on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: "var(--accent-gradient)" }}
                />

                <div className="flex items-center justify-between mb-5">
                  <FaFolder size={32} style={{ color: "var(--accent)" }} />
                  <div
                    className="flex gap-3 relative z-10"
                    onClick={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 transition-all hover:text-[var(--accent)] hover:-translate-y-1"
                        style={{ color: "var(--text-muted)" }}
                        aria-label={`${project.title} GitHub`}
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 transition-all hover:text-[var(--accent)] hover:-translate-y-1"
                        style={{ color: "var(--text-muted)" }}
                        aria-label={`${project.title} live`}
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="text-lg font-bold mb-3 group-hover:text-[var(--accent)] transition-colors leading-tight">
                  {project.title}
                </h4>
                <p className="text-sm mb-6 flex-1 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-1 mt-auto">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs"
                      style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
                    >
                      {tech}
                    </span>
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
