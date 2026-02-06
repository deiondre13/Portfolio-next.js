import Link from "next/link";
import Image from "next/image";
import { FiCode, FiDatabase, FiServer, FiArrowRight, FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "@/data/projects";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturedProjects projects={featuredProjects} />
      <CTASection />
    </>
  );
}
