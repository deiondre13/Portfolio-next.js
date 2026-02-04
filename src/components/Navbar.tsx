"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            <span className="text-accent-gold">&lt;</span>
            <span className="text-white">Deiondre Smith</span>
            <span className="text-accent-gold">/&gt;</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-300 hover:text-accent-gold ${
                  pathname === link.href
                    ? "text-accent-gold font-semibold"
                    : "text-gray-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/deiondre13"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-gold transition-colors"
              title="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/deiondre-smith-03254529a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-gold transition-colors"
              title="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:deiondresmith00@gmail.com"
              className="text-gray-400 hover:text-accent-gold transition-colors"
              title="Email"
            >
              <FiMail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-accent-gold"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary/20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 transition-colors duration-300 hover:text-accent-gold ${
                  pathname === link.href
                    ? "text-accent-gold font-semibold"
                    : "text-gray-300"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pt-4 mt-4 border-t border-primary/20">
              <a
                href="https://github.com/deiondre13"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-gold transition-colors"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/deiondre-smith-03254529a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-gold transition-colors"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="mailto:deiondresmith00@gmail.com"
                className="text-gray-400 hover:text-accent-gold transition-colors"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
