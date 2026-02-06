"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg-dark)]/95 backdrop-blur-lg border-b border-[var(--border-subtle)] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-1">
            <span className="text-xl font-bold">
              <span className="text-[var(--accent-gold)] group-hover:text-[var(--accent-gold-light)] transition-colors">&lt;</span>
              <span className="text-[var(--text-primary)]">DS</span>
              <span className="text-[var(--accent-gold)] group-hover:text-[var(--accent-gold-light)] transition-colors">/&gt;</span>
            </span>
            <span className="hidden sm:inline-block text-[var(--text-secondary)] font-medium ml-2">
              Deiondre Smith
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                  pathname === link.href
                    ? "text-[var(--accent-gold)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-[var(--accent-gold)]/10 rounded-lg -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 mr-2">
              <a
                href="https://github.com/deiondre13"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg text-[var(--text-muted)] hover:text-[var(--accent-gold)] hover:bg-[var(--accent-gold)]/10 transition-all"
                title="GitHub"
              >
                <FiGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/deiondre-smith-03254529a/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg text-[var(--text-muted)] hover:text-[var(--accent-gold)] hover:bg-[var(--accent-gold)]/10 transition-all"
                title="LinkedIn"
              >
                <FiLinkedin size={18} />
              </a>
            </div>
            <Link href="/contact" className="btn btn-accent text-sm py-2 px-4">
              <FiMail size={16} />
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent-gold)] hover:bg-[var(--accent-gold)]/10 transition-all"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1 border-t border-[var(--border-subtle)]">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                        pathname === link.href
                          ? "text-[var(--accent-gold)] bg-[var(--accent-gold)]/10"
                          : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                <div className="pt-4 mt-4 border-t border-[var(--border-subtle)]">
                  <div className="flex items-center gap-3 px-4">
                    <a
                      href="https://github.com/deiondre13"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors"
                    >
                      <FiGithub size={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/deiondre-smith-03254529a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors"
                    >
                      <FiLinkedin size={20} />
                    </a>
                    <Link
                      href="/contact"
                      className="btn btn-accent flex-1 text-sm py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <FiMail size={16} />
                      Hire Me
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
