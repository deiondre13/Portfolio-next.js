"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/components/ui/MotionWrapper";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "15+", label: "Projects Completed" },
  { value: "10+", label: "Technologies" },
];

export default function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center section">
      <div className="container-custom w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="order-2 lg:order-1"
          >
            {/* Status Badge */}
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/60 border border-[var(--border-subtle)]">
                <span className="w-2 h-2 bg-[var(--success)] rounded-full animate-pulse" />
                <span className="text-sm text-text-muted">Available for opportunities</span>
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 variants={fadeInUp} className="mb-4">
              Hi, I&apos;m{" "}
              <span className="gradient-text-gold">Deiondre Smith</span>
            </motion.h1>

            {/* Role */}
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl font-semibold text-accent-2 mb-6"
            >
              Full-Stack Software Developer
            </motion.p>

            {/* Description */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-text-muted mb-8 max-w-xl"
            >
              I craft exceptional digital experiences with modern technologies. 
              Passionate about building clean, efficient, and user-centric applications 
              that make a difference.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-10">
              <Link href="/projects" className="btn btn-accent">
                View My Work
                <FiArrowRight />
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Let&apos;s Talk
              </Link>
              <a 
                href="/files/resume.pdf" 
                target="_blank"
                className="btn btn-ghost"
              >
                <FiDownload />
                Resume
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="stat-value text-2xl md:text-3xl">{stat.value}</div>
                  <div className="stat-label text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-2 via-accent to-accent-2 rounded-full opacity-20 blur-2xl animate-pulse" />
              
              {/* Profile Photo */}
              <div className="profile-photo-wrapper w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/images/profile.jpg"
                  alt="Deiondre Smith"
                  fill
                  priority
                  className="profile-photo"
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>

              {/* Floating Social Links */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                <motion.a
                  href="https://github.com/deiondre13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-surface/60 border border-[var(--border-subtle)] flex items-center justify-center text-text-muted hover:text-accent-2 hover:border-accent transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiGithub size={18} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/deiondre-smith-03254529a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-surface/60 border border-[var(--border-subtle)] flex items-center justify-center text-text-muted hover:text-accent-2 hover:border-accent transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiLinkedin size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
