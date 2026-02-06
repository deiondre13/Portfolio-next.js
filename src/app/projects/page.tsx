"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiBookOpen } from "react-icons/fi";
import { projects, projectCategories, ProjectCategory } from "@/data/projects";
import { fadeInUp, staggerContainer } from "@/components/ui/MotionWrapper";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="section">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="section-header"
        >
          <span className="section-label">
            <span className="w-8 h-px bg-accent" />
            Portfolio
          </span>
          <h1 className="section-title">My Projects</h1>
          <p className="section-description">
            A collection of projects showcasing my skills in full-stack development,
            API design, and database architecture.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex justify-center mb-12"
        >
          <div className="filter-tabs">
            {projectCategories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveFilter(category.value)}
                className={`filter-tab ${activeFilter === category.value ? "active" : ""}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="premium-card overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-surface-2 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-accent-2/5" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-bold text-accent/20">
                      {String(project.id).padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="chip chip-gold text-xs uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="chip text-xs">Featured</span>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-bg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-surface/60 border border-border flex items-center justify-center text-text-muted hover:text-accent-2 hover:border-accent transition-all"
                    >
                      <FiGithub size={20} />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-surface/60 border border-border flex items-center justify-center text-text-muted hover:text-accent-2 hover:border-accent transition-all"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    )}
                    {project.caseStudyUrl && (
                      <a
                        href={project.caseStudyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-surface/60 border border-border flex items-center justify-center text-text-muted hover:text-accent-2 hover:border-accent transition-all"
                      >
                        <FiBookOpen size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-text group-hover:text-accent-2 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-muted text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="chip text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="chip text-xs">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-subtle)]">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost text-xs py-1.5 px-3"
                    >
                      <FiGithub size={14} />
                      Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost text-xs py-1.5 px-3"
                      >
                        <FiExternalLink size={14} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-text-muted">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
