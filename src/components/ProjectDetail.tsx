"use client";

import { projects } from "@/data/projects";
import Link from "next/link";
import { useState } from "react";
/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

export default function ProjectDetail({ id }: { id: string }) {
  const project = projects[id];
  const [currentImage, setCurrentImage] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-6">
        <div className="text-center">
          <p
            className="text-6xl font-bold mb-4"
            style={{ color: "var(--accent)" }}
          >
            404
          </p>
          <h1
            className="text-2xl font-bold mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            Project not found
          </h1>
          <p style={{ color: "var(--text-secondary)" }}>
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
        <Link href="/" className="btn-primary">
          <FaArrowLeft size={14} />
          Go Back Home
        </Link>
      </div>
    );
  }

  const validImages =
    project.images.length > 0 ? project.images : [project.logo];

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % validImages.length);
  const prevImage = () =>
    setCurrentImage(
      (prev) => (prev - 1 + validImages.length) % validImages.length
    );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="glass sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-[70px] flex items-center justify-between">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--accent)]"
            style={{
              color: "var(--text-secondary)",
              fontFamily: "var(--font-mono)",
            }}
          >
            <FaArrowLeft size={14} />
            Back to Projects
          </Link>
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !py-2 !px-4 text-sm"
              >
                <FaGithub size={16} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !py-2 !px-4 text-sm"
              >
                <FaExternalLinkAlt size={14} />
                <span className="hidden sm:inline">Live</span>
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            {project.title}
          </h1>
          <p
            className="text-base md:text-lg mb-8 max-w-3xl leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.fullDescription}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>

          {/* Image Gallery */}
          {validImages.length > 0 && (
            <div className="mb-12">
              <div
                className="card relative rounded-xl overflow-hidden mb-4"
                style={{
                  background:
                    project.logoBackgroundColor || "var(--bg-tertiary)",
                }}
              >
                <div className="aspect-video flex items-center justify-center p-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={validImages[currentImage]}
                    alt={`${project.title} screenshot ${currentImage + 1}`}
                    className="max-w-full max-h-full object-contain rounded-lg"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = project.logo;
                    }}
                  />
                </div>

                {validImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all hover:scale-110"
                      style={{
                        background: "var(--bg-secondary)",
                        color: "var(--text-primary)",
                        border: "1px solid var(--border)",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                      }}
                      aria-label="Previous image"
                    >
                      <FaChevronLeft size={14} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all hover:scale-110"
                      style={{
                        background: "var(--bg-secondary)",
                        color: "var(--text-primary)",
                        border: "1px solid var(--border)",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                      }}
                      aria-label="Next image"
                    >
                      <FaChevronRight size={14} />
                    </button>

                    {/* Image counter */}
                    <div
                      className="absolute bottom-3 right-3 text-xs px-3 py-1 rounded-full"
                      style={{
                        background: "var(--bg-secondary)",
                        color: "var(--text-muted)",
                        border: "1px solid var(--border)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {currentImage + 1} / {validImages.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {validImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {validImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden transition-all ${
                        i === currentImage
                          ? "ring-2 ring-[var(--accent)] opacity-100 scale-105"
                          : "opacity-40 hover:opacity-70"
                      }`}
                      style={{
                        background:
                          project.logoBackgroundColor || "var(--bg-tertiary)",
                        border: "1px solid var(--border)",
                      }}
                      aria-label={`View image ${i + 1}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img}
                        alt={`Thumbnail ${i + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = project.logo;
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Features */}
          <div className="card p-6 md:p-8">
            <h2 className="text-xl font-bold mb-6">
              <span style={{ color: "var(--accent)" }}>Key</span> Features
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {project.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <span
                    style={{ color: "var(--accent)" }}
                    className="mt-0.5 flex-shrink-0 text-xs"
                  >
                    &#9656;
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
