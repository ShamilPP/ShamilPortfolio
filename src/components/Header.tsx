"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const { isDark, toggle } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 50);
      if (current > 100) {
        setHidden(current > lastScroll);
      } else {
        setHidden(false);
      }
      lastScroll = current;

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setIsOpen(false);
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    },
    []
  );

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass" : "bg-transparent"
        }`}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-[70px] flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-xl font-bold tracking-tight"
          >
            Shamil
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--accent-gradient)" }}
            >
              PP
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === link.href ? "" : "hover:text-[var(--accent-light)]"
                }`}
                style={{
                  color: activeSection === link.href ? "var(--accent)" : "var(--text-secondary)",
                  fontFamily: "var(--font-mono)",
                  background: activeSection === link.href ? "var(--accent-glow)" : undefined,
                }}
              >
                <span className="text-[var(--accent)] mr-1 text-xs">0{i + 1}.</span>
                {link.label}
              </a>
            ))}
            <button
              onClick={toggle}
              className="ml-3 p-2.5 rounded-lg transition-all hover:bg-[var(--accent-glow)]"
              style={{ color: "var(--accent)" }}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              <motion.div
                key={isDark ? "moon" : "sun"}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? <FaMoon size={16} /> : <FaSun size={16} />}
              </motion.div>
            </button>
          </nav>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggle}
              className="p-2.5 rounded-lg transition-all hover:bg-[var(--accent-glow)]"
              style={{ color: "var(--accent)" }}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <FaMoon size={16} /> : <FaSun size={16} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg transition-all hover:bg-[var(--accent-glow)]"
              style={{ color: "var(--text-primary)" }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[min(280px,75vw)] z-50 md:hidden flex flex-col items-center justify-center gap-8"
              style={{
                background: "var(--bg-secondary)",
                borderLeft: "1px solid var(--border)",
              }}
              role="navigation"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-lg font-medium transition-colors text-center"
                  style={{
                    color: activeSection === link.href ? "var(--accent)" : "var(--text-secondary)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  <span className="text-[var(--accent)] block text-sm mb-1">0{i + 1}.</span>
                  {link.label}
                </a>
              ))}
              <a href="/assets/ShamilPP-CV.pdf" className="btn-secondary mt-4 text-sm">
                Resume
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
