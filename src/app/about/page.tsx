"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiDownload, FiTarget, FiCode, FiDatabase, FiCloud, FiTrendingUp } from "react-icons/fi";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/components/ui/MotionWrapper";

const skills = {
  languages: ["C#", "JavaScript", "Python", "TypeScript", "SQL", "HTML/CSS"],
  frameworks: ["ASP.NET Core", "React", "Next.js", "Entity Framework", "Node.js", "Tailwind CSS"],
  tools: ["Git", "VS Code", "Visual Studio", "SQL Server", "Docker", "Azure"],
  databases: ["SQL Server", "PostgreSQL", "MongoDB", "Redis"],
};

const focusAreas = [
  { icon: FiCode, title: "Clean Code", description: "Writing maintainable, readable, and efficient code" },
  { icon: FiDatabase, title: "Scalable Architecture", description: "Designing systems that grow with your needs" },
  { icon: FiCloud, title: "Cloud-Native", description: "Building for modern cloud infrastructure" },
  { icon: FiTrendingUp, title: "Continuous Learning", description: "Always improving and staying current" },
];

const timeline = [
  {
    date: "2024 - Present",
    title: "Full-Stack Developer",
    subtitle: "Building modern web applications",
    type: "experience",
  },
  {
    date: "2023",
    title: "E-Commerce Platform",
    subtitle: "Full-stack project with Next.js & PostgreSQL",
    type: "project",
  },
  {
    date: "2022 - 2025",
    title: "Programming, Software development & Cybersecurity",
    subtitle: "Focus on website development and Database integration",
    type: "education",
  },
  {
    date: "2022",
    title: "Started Coding Journey",
    subtitle: "First steps into web development",
    type: "milestone",
  },
];

const currentlyLearning = [
  { name: "System Design", progress: 70 },
  { name: "Cloud Architecture (AWS)", progress: 55 },
  { name: "GraphQL", progress: 40 },
  { name: "Kubernetes", progress: 30 },
];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInLeft}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent-2 via-accent to-accent-2 rounded-2xl opacity-20 blur-2xl" />
                <div className="profile-photo-wrapper w-64 h-64 md:w-72 md:h-72">
                  <Image
                    src="/images/profile.jpg"
                    alt="Deiondre Smith"
                    fill
                    priority
                    className="profile-photo"
                    sizes="(max-width: 768px) 256px, 288px"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.span variants={fadeInUp} className="section-label mb-4">
                <span className="w-8 h-px bg-accent" />
                About Me
              </motion.span>

              <motion.h1 variants={fadeInUp} className="mb-6">
                Passionate about building{" "}
                <span className="gradient-text-gold">exceptional</span> software
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg text-[var(--text-secondary)] mb-6">
                I&apos;m a full-stack developer with a passion for creating innovative 
                solutions. I specialize in building modern web applications using 
                cutting-edge technologies and best practices.
              </motion.p>

              <motion.p variants={fadeInUp} className="text-text-muted mb-8">
                I enjoy tackling complex problems and turning ideas into reality through 
                clean, efficient code. My goal is to create software that not only works 
                flawlessly but also provides an exceptional user experience.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <a href="/files/resume.pdf" target="_blank" className="btn btn-primary">
                  <FiDownload />
                  Download Resume
                </a>
                <Link href="/contact" className="btn btn-outline">
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Focus Section */}
      <section className="section bg-bg-2/50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="section-header"
          >
            <span className="section-label">
              <span className="w-8 h-px bg-accent" />
              My Focus
            </span>
            <h2 className="section-title">What Drives Me</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="premium-card p-6 text-center group"
              >
                <div className="icon-wrapper mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <area.icon size={24} />
                </div>
                <h3 className="font-semibold mb-2 text-text">{area.title}</h3>
                <p className="text-sm text-text-muted">{area.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="section-header"
          >
            <span className="section-label">
              <span className="w-8 h-px bg-accent" />
              Tech Stack
            </span>
            <h2 className="section-title">Skills & Technologies</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Languages */}
            <motion.div variants={fadeInUp} className="premium-card p-6">
              <h3 className="text-lg font-semibold mb-4 text-accent">
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span key={skill} className="chip">{skill}</span>
                ))}
              </div>
            </motion.div>

            {/* Frameworks */}
            <motion.div variants={fadeInUp} className="premium-card p-6">
              <h3 className="text-lg font-semibold mb-4 text-accent">
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span key={skill} className="chip">{skill}</span>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div variants={fadeInUp} className="premium-card p-6">
              <h3 className="text-lg font-semibold mb-4 text-accent">
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="chip">{skill}</span>
                ))}
              </div>
            </motion.div>

            {/* Databases */}
            <motion.div variants={fadeInUp} className="premium-card p-6">
              <h3 className="text-lg font-semibold mb-4 text-accent">
                Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill) => (
                  <span key={skill} className="chip">{skill}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline & Currently Learning */}
      <section className="section bg-bg-2/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Timeline */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-px bg-accent" />
                My Journey
              </h3>
              <div className="timeline">
                {timeline.map((item, index) => (
                  <div key={index} className="timeline-item">
                    <span className="timeline-date">{item.date}</span>
                    <h4 className="timeline-title">{item.title}</h4>
                    <p className="timeline-subtitle">{item.subtitle}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Currently Learning */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-px bg-accent" />
                Currently Learning
              </h3>
              <div className="space-y-6">
                {currentlyLearning.map((item, index) => (
                  <div key={index} className="premium-card p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-text">{item.name}</span>
                      <span className="text-sm text-accent">{item.progress}%</span>
                    </div>
                    <div className="h-2 bg-surface-2 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-accent to-accent-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
