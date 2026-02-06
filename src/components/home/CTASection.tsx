"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiMail, FiArrowRight } from "react-icons/fi";
import { fadeInUp } from "@/components/ui/MotionWrapper";

export default function CTASection() {
  return (
    <section className="section">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative overflow-hidden"
        >
          {/* Background Card */}
          <div className="premium-card p-12 md:p-16 text-center relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-2/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            {/* Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <FiMail className="text-accent" size={28} />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text">
                Let&apos;s Build Something{" "}
                <span className="gradient-text-gold">Amazing</span>
              </h2>

              <p className="text-text-muted mb-8 max-w-2xl mx-auto text-lg">
                Have a project in mind or looking for a developer to join your team? 
                I&apos;d love to hear from you. Let&apos;s discuss how we can work together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn btn-accent">
                  Get In Touch
                  <FiArrowRight />
                </Link>
                <a
                  href="mailto:deiondresmith00@gmail.com"
                  className="btn btn-outline"
                >
                  <FiMail />
                  deiondresmith00@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
