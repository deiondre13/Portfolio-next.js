"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from "react-icons/fi";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-bg-2 border-t border-[var(--border-subtle)]">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-12 grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold">
                <span className="text-accent">&lt;</span>
                <span className="text-text">DS</span>
                <span className="text-accent">/&gt;</span>
              </span>
            </Link>
            <p className="text-text-muted text-sm max-w-xs">
              Full-Stack Developer passionate about building exceptional digital experiences 
              with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:text-center">
            <h4 className="text-sm font-semibold text-text uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="flex flex-wrap md:justify-center gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-muted hover:text-accent-2 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social & Back to Top */}
          <div className="md:text-right">
            <h4 className="text-sm font-semibold text-text uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex md:justify-end gap-3 mb-4">
              <a
                href="https://github.com/deiondre13"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface/60 border border-[var(--border-subtle)] text-text-muted hover:text-accent-2 hover:border-accent transition-all"
                title="GitHub"
              >
                <FiGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/deiondre-smith-03254529a/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface/60 border border-[var(--border-subtle)] text-text-muted hover:text-accent-2 hover:border-accent transition-all"
                title="LinkedIn"
              >
                <FiLinkedin size={18} />
              </a>
              <a
                href="mailto:deiondresmith00@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface/60 border border-[var(--border-subtle)] text-text-muted hover:text-accent-2 hover:border-accent transition-all"
                title="Email"
              >
                <FiMail size={18} />
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent-2 transition-colors"
            >
              Back to top
              <FiArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} Deiondre Smith. All rights reserved.
          </p>
          <p className="text-text-muted text-sm flex items-center gap-1">
            Built with <FiHeart className="text-accent" size={14} /> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
