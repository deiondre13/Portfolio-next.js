"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiExternalLink } from "react-icons/fi";
import { fadeInUp, staggerContainer } from "@/components/ui/MotionWrapper";
import { Project } from "@/data/projects";

interface FeaturedProjectsProps {
  projects: Project[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="section">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="section-header"
        >
          <span className="section-label">
            <span className="w-8 h-px bg-[var(--accent-gold)]" />
            Featured Work
          </span>
          <h2 className="section-title">Recent Projects</h2>
          <p className="section-description">
            A selection of my recent work showcasing full-stack development, 
            API design, and database architecture.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="premium-card overflow-hidden"
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Image */}
                <div className={`relative h-64 lg:h-auto min-h-[300px] bg-[var(--bg-dark-tertiary)] ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-700)]/20 to-[var(--accent-gold)]/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-[var(--primary-500)]/20">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  {/* Placeholder for actual project image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="chip chip-gold">Featured Project</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-3 text-[var(--text-primary)]">
                    {project.title}
                  </h3>
                  <p className="text-[var(--text-muted)] mb-6 leading-relaxed">
                    {project.longDescription || project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      <FiGithub size={18} />
                      View Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <FiExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <Link href="/projects" className="btn btn-accent">
            View All Projects
            <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
