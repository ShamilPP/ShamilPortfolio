"use client";

import { socialLinks, email } from "@/data/social";
import { motion } from "framer-motion";

export default function SocialSidebar() {
  return (
    <>
      {/* Left - Social Icons — pushed further left */}
      <motion.div
        className="fixed bottom-0 left-5 xl:left-8 z-30 hidden xl:flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 transition-all duration-200 hover:text-[var(--accent)] hover:-translate-y-1"
              style={{ color: "var(--text-muted)" }}
              aria-label={link.name}
            >
              <Icon size={16} />
            </a>
          );
        })}
        <div
          className="w-[1px] h-20 mt-1"
          style={{ background: "var(--text-muted)", opacity: 0.3 }}
        />
      </motion.div>

      {/* Right - Email — pushed further right */}
      <motion.div
        className="fixed bottom-0 right-5 xl:right-8 z-30 hidden xl:flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <a
          href={`mailto:${email}`}
          className="text-[11px] tracking-[0.15em] transition-all duration-200 hover:text-[var(--accent)] hover:-translate-y-1"
          style={{
            color: "var(--text-muted)",
            fontFamily: "var(--font-mono)",
            writingMode: "vertical-rl",
          }}
        >
          {email}
        </a>
        <div
          className="w-[1px] h-20 mt-1"
          style={{ background: "var(--text-muted)", opacity: 0.3 }}
        />
      </motion.div>
    </>
  );
}
