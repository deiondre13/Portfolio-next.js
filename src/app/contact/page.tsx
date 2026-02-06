"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCopy, FiCheck, FiMessageCircle, FiCalendar } from "react-icons/fi";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/components/ui/MotionWrapper";

const EMAIL = "deiondresmith00@gmail.com";

const quickActions = [
  {
    icon: FiMessageCircle,
    title: "General Inquiry",
    description: "Questions about my work or services",
    subject: "General Inquiry",
  },
  {
    icon: FiCalendar,
    title: "Project Discussion",
    description: "Let's discuss your project idea",
    subject: "Project Discussion",
  },
  {
    icon: FiGithub,
    title: "Collaboration",
    description: "Open source or team projects",
    subject: "Collaboration Opportunity",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email");
    }
  };

  const setQuickSubject = (subject: string) => {
    setFormData({ ...formData, subject });
    document.getElementById("subject")?.focus();
  };

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
            <span className="w-8 h-px bg-[var(--accent-gold)]" />
            Contact
          </span>
          <h1 className="section-title">Get In Touch</h1>
          <p className="section-description">
            Have a question or want to work together? I&apos;d love to hear from you.
            Let&apos;s create something amazing together.
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid sm:grid-cols-3 gap-4 mb-12"
        >
          {quickActions.map((action, index) => (
            <motion.button
              key={index}
              variants={fadeInUp}
              onClick={() => setQuickSubject(action.subject)}
              className="premium-card p-5 text-left group hover:border-[var(--accent-gold)] transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="icon-wrapper w-10 h-10 text-base shrink-0 group-hover:scale-110 transition-transform">
                  <action.icon size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)]">{action.description}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info Sidebar */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInLeft}
            className="lg:col-span-2 space-y-6"
          >
            {/* Availability Badge */}
            <div className="premium-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-[var(--success)] rounded-full animate-pulse" />
                <span className="text-[var(--success)] font-medium">
                  Available for opportunities
                </span>
              </div>
              <p className="text-[var(--text-muted)] text-sm mb-4">
                I&apos;m currently open to new opportunities, freelance projects, and collaborations.
              </p>
              <p className="text-[var(--text-secondary)] text-sm">
                Response time: <span className="text-[var(--accent-gold)]">Within 24 hours</span>
              </p>
            </div>

            {/* Email with Copy */}
            <div className="premium-card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="icon-wrapper w-12 h-12">
                  <FiMail size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[var(--text-muted)] mb-1">Email</p>
                  <p className="text-[var(--text-primary)] font-medium truncate">{EMAIL}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <a
                  href={`mailto:${EMAIL}`}
                  className="btn btn-primary flex-1 text-sm py-2"
                >
                  <FiMail size={16} />
                  Send Email
                </a>
                <button
                  onClick={copyEmail}
                  className="btn btn-outline py-2 px-3"
                  title="Copy email"
                >
                  {copied ? <FiCheck size={16} className="text-[var(--success)]" /> : <FiCopy size={16} />}
                </button>
              </div>
            </div>

            {/* Location */}
            <div className="premium-card p-6">
              <div className="flex items-center gap-4">
                <div className="icon-wrapper w-12 h-12">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-muted)] mb-1">Location</p>
                  <p className="text-[var(--text-primary)] font-medium">Available Remotely</p>
                  <p className="text-sm text-[var(--text-muted)]">Open to relocation</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="premium-card p-6">
              <h3 className="font-semibold mb-4 text-[var(--text-primary)]">Connect With Me</h3>
              <div className="flex gap-3">
                <motion.a
                  href="https://github.com/deiondre13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-wrapper w-12 h-12"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiGithub size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/deiondre-smith-03254529a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-wrapper w-12 h-12"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiLinkedin size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            className="lg:col-span-3"
          >
            <div className="premium-card p-8">
              <h2 className="text-xl font-semibold mb-6 text-[var(--text-primary)]">
                Send a Message
              </h2>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-[var(--success)]/10 border border-[var(--success)]/30 rounded-lg"
                >
                  <p className="text-[var(--success)] font-medium">Message sent successfully!</p>
                  <p className="text-[var(--success)]/80 text-sm">I&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-[var(--error)]/10 border border-[var(--error)]/30 rounded-lg"
                >
                  <p className="text-[var(--error)] font-medium">Something went wrong</p>
                  <p className="text-[var(--error)]/80 text-sm">Please try again or email me directly.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-[var(--text-secondary)]">
                      Name <span className="text-[var(--error)]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[var(--bg-dark-tertiary)] border border-[var(--border-subtle)] rounded-lg focus:outline-none focus:border-[var(--accent-gold)] transition-colors text-[var(--text-primary)] placeholder:text-[var(--text-muted)]"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-[var(--text-secondary)]">
                      Email <span className="text-[var(--error)]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[var(--bg-dark-tertiary)] border border-[var(--border-subtle)] rounded-lg focus:outline-none focus:border-[var(--accent-gold)] transition-colors text-[var(--text-primary)] placeholder:text-[var(--text-muted)]"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-[var(--text-secondary)]">
                    Subject <span className="text-[var(--error)]">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-[var(--bg-dark-tertiary)] border border-[var(--border-subtle)] rounded-lg focus:outline-none focus:border-[var(--accent-gold)] transition-colors text-[var(--text-primary)] placeholder:text-[var(--text-muted)]"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-[var(--text-secondary)]">
                    Message <span className="text-[var(--error)]">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[var(--bg-dark-tertiary)] border border-[var(--border-subtle)] rounded-lg focus:outline-none focus:border-[var(--accent-gold)] transition-colors text-[var(--text-primary)] placeholder:text-[var(--text-muted)] resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn btn-accent flex-1 sm:flex-none"
                  >
                    {status === "loading" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                  <p className="text-xs text-[var(--text-muted)] self-center">
                    I&apos;ll respond within 24 hours
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
