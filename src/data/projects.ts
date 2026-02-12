export type ProjectCategory = "all" | "web" | "personal" | "client" | "automation";

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: ProjectCategory;
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  imageUrl: string;
  featured?: boolean;
  private?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Lynnsup (Pty) Ltd Website",
    description:
      "Premium multi-page business website built using Next.js 14 with TypeScript, Tailwind CSS and Framer Motion. Designed for SEO, performance and responsive business presentation.",
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "web",
    githubUrl: "https://github.com/deiondre13/LynnsupWebsite",
    liveUrl: "https://lynnsupwebsite.vercel.app/",
    imageUrl: "/images/projects/lynnsup.png",
    featured: true,
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "Personal full-stack developer portfolio built with Next.js 14, TypeScript and Tailwind CSS using a modern dark UI and static export deployment via Vercel.",
    technologies: ["Next.js 14", "React", "TypeScript", "Tailwind CSS"],
    category: "personal",
    githubUrl: "https://github.com/deiondre13/Portfolio-next.js",
    liveUrl: "https://deiondre-portfolio.vercel.app/",
    imageUrl: "/images/projects/portfolio.png",
  },
  {
    id: 3,
    title: "Digital Marketing & SEO Landing Page",
    description:
      "High-conversion marketing landing page built for SA Telecoms digital marketing and SEO services, focused on lead generation and business growth.",
    technologies: ["Next.js", "Tailwind CSS", "Responsive Design"],
    category: "web",
    githubUrl: "https://github.com/SA-Telecoms00/digital-marketing-and-SEO",
    liveUrl: "https://nostalgic-yalow.51-254-142-172.plesk.page/services/digital-marketing-seo",
    imageUrl: "/images/projects/digital-marketing.png",
  },
  {
    id: 4,
    title: "Web Security & Protection",
    description:
      "Cybersecurity landing page highlighting penetration testing, vulnerability assessments and website protection services.",
    technologies: ["Next.js", "Tailwind CSS"],
    category: "web",
    githubUrl: "https://github.com/SA-Telecoms00/web-security-and-protection",
    liveUrl: "https://quirky-kalam.51-254-142-172.plesk.page/services/web-security",
    imageUrl: "/images/projects/web-security.png",
  },
  {
    id: 5,
    title: "Cloud & Data Protection",
    description:
      "Enterprise-focused cloud hosting and data protection landing page showcasing secure infrastructure and backup solutions.",
    technologies: ["Next.js", "Tailwind CSS"],
    category: "web",
    githubUrl: "https://github.com/SA-Telecoms00/cloud-and-data-protection",
    liveUrl: "https://beautiful-wiles.51-254-142-172.plesk.page/services/cloud-data-protection",
    imageUrl: "/images/projects/cloud-data.png",
  },
  {
    id: 6,
    title: "Email Hosting & Security",
    description:
      "Business email hosting and security landing page presenting spam filtering, secure email infrastructure and enterprise solutions.",
    technologies: ["Next.js", "Tailwind CSS"],
    category: "web",
    githubUrl: "https://github.com/SA-Telecoms00/Email-hosting-and-security",
    liveUrl: "https://jovial-antonelli.51-254-142-172.plesk.page",
    imageUrl: "/images/projects/email-hosting.png",
  },
  {
    id: 7,
    title: "SA Telecoms Subscription Landing",
    description:
      "Subscription-focused landing page designed to onboard users into SA Telecoms hosting services and subscription plans.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "client",
    imageUrl: "/images/projects/sa-telecoms.png",
    private: true,
  },
  {
    id: 8,
    title: "Automated Trading Bot",
    description:
      "Algorithmic trading bot developed for Forex automation with risk management logic and automated trade execution strategies.",
    technologies: ["Python", "Trading APIs", "Automation"],
    category: "automation",
    imageUrl: "/images/projects/trading-bot.png",
    private: true,
  },
];

export const projectCategories: { value: ProjectCategory; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "web", label: "Web" },
  { value: "personal", label: "Personal" },
  { value: "client", label: "Client" },
  { value: "automation", label: "Automation" },
];
