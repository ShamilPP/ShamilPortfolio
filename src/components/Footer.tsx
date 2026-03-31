"use client";

import { socialLinks } from "@/data/social";

const YEAR = 2026;

export default function Footer() {
  return (
    <footer
      className="py-10 text-center"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Social Icons (mobile only) */}
        <div className="flex justify-center gap-5 mb-6 md:hidden">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 transition-all hover:text-[var(--accent)] hover:-translate-y-1"
                style={{ color: "var(--text-muted)" }}
                aria-label={link.name}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

        <p
          className="text-sm mb-2"
          style={{
            color: "var(--text-muted)",
            fontFamily: "var(--font-mono)",
          }}
        >
          Designed & Built by Shamil PP
        </p>
        <p
          className="text-xs"
          style={{
            color: "var(--text-muted)",
            fontFamily: "var(--font-mono)",
          }}
        >
          &copy; {YEAR} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
