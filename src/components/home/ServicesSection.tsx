"use client";

import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiServer, FiLayers } from "react-icons/fi";
import { fadeInUp, staggerContainer } from "@/components/ui/MotionWrapper";

const services = [
  {
    icon: FiCode,
    title: "Frontend Development",
    description: "Building responsive, performant user interfaces with React, Next.js, and modern CSS frameworks.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: FiServer,
    title: "Backend Development",
    description: "Designing robust APIs and server-side applications with .NET, Node.js, and cloud services.",
    skills: ["ASP.NET Core", "Node.js", "REST APIs", "GraphQL"],
  },
  {
    icon: FiDatabase,
    title: "Database Design",
    description: "Architecting efficient database schemas and optimizing queries for scalable applications.",
    skills: ["SQL Server", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    icon: FiLayers,
    title: "Full-Stack Solutions",
    description: "End-to-end development from concept to deployment, ensuring seamless integration across the stack.",
    skills: ["System Design", "DevOps", "CI/CD", "Cloud"],
  },
];

export default function ServicesSection() {
  return (
    <section className="section bg-[var(--bg-dark-secondary)]/50">
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
            What I Do
          </span>
          <h2 className="section-title">Services & Expertise</h2>
          <p className="section-description">
            I specialize in building modern web applications with a focus on 
            performance, accessibility, and exceptional user experience.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="premium-card p-8 group"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="icon-wrapper shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <service.icon size={24} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[var(--text-muted)] mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {service.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="chip text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
