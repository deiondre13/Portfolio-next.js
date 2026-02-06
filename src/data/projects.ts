export type ProjectCategory = "all" | "web" | "api" | "database";

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: ProjectCategory;
  githubUrl: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  imageUrl: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, secure payments, and an admin dashboard.",
    longDescription:
      "Built a complete e-commerce platform featuring user authentication, product catalog, shopping cart, Stripe payment integration, and a comprehensive admin panel for inventory and order management.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
    category: "web",
    githubUrl: "https://github.com/deiondre13/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    imageUrl: "/images/projects/ecommerce.png",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management API",
    description:
      "RESTful API for task management with JWT authentication, role-based access control, and real-time notifications.",
    longDescription:
      "Designed and implemented a scalable REST API with comprehensive documentation, rate limiting, caching strategies, and WebSocket support for real-time updates.",
    technologies: ["ASP.NET Core", "C#", "Entity Framework", "SQL Server", "Redis", "Docker"],
    category: "api",
    githubUrl: "https://github.com/deiondre13/task-api",
    imageUrl: "/images/projects/taskapi.png",
    featured: true,
  },
  {
    id: 3,
    title: "Real-Time Chat Application",
    description:
      "Modern chat application with real-time messaging, file sharing, and video call capabilities.",
    longDescription:
      "Developed a feature-rich chat application supporting private and group conversations, message reactions, file uploads, and WebRTC-based video calling.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "WebRTC", "AWS S3"],
    category: "web",
    githubUrl: "https://github.com/deiondre13/realtime-chat",
    liveUrl: "https://chat-demo.vercel.app",
    imageUrl: "/images/projects/chat.png",
  },
  {
    id: 4,
    title: "Inventory Database System",
    description:
      "Enterprise-grade inventory management system with advanced reporting and analytics dashboard.",
    longDescription:
      "Created a robust database solution with complex queries, stored procedures, triggers, and a reporting layer for business intelligence.",
    technologies: ["SQL Server", "T-SQL", "SSRS", "Power BI", "C#", "Azure"],
    category: "database",
    githubUrl: "https://github.com/deiondre13/inventory-db",
    imageUrl: "/images/projects/inventory.png",
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description:
      "Beautiful weather application with 7-day forecasts, interactive maps, and location-based alerts.",
    longDescription:
      "Built an intuitive weather dashboard integrating multiple weather APIs, featuring animated visualizations, geolocation support, and customizable alerts.",
    technologies: ["React", "TypeScript", "OpenWeather API", "Mapbox", "Chart.js", "PWA"],
    category: "web",
    githubUrl: "https://github.com/deiondre13/weather-dashboard",
    liveUrl: "https://weather-demo.vercel.app",
    imageUrl: "/images/projects/weather.png",
  },
  {
    id: 6,
    title: "Authentication Microservice",
    description:
      "Secure authentication service with OAuth2, MFA support, and session management.",
    longDescription:
      "Implemented a production-ready authentication microservice with support for multiple OAuth providers, two-factor authentication, and comprehensive audit logging.",
    technologies: ["Node.js", "Express", "JWT", "OAuth2", "PostgreSQL", "Docker"],
    category: "api",
    githubUrl: "https://github.com/deiondre13/auth-service",
    imageUrl: "/images/projects/auth.png",
  },
];

export const projectCategories: { value: ProjectCategory; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "web", label: "Web Apps" },
  { value: "api", label: "APIs" },
  { value: "database", label: "Database" },
];
