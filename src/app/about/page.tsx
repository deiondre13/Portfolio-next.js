import Link from "next/link";
import Image from "next/image";

const skills = {
  languages: ["C#", "JavaScript", "Python", "TypeScript", "SQL", "HTML/CSS"],
  frameworks: [
    "ASP.NET Core",
    "React",
    "Next.js",
    "Entity Framework",
    "Bootstrap",
    "Tailwind CSS",
  ],
  tools: ["Git", "VS Code", "Visual Studio", "SQL Server", "Docker", "Azure"],
  soft: [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Adaptability",
  ],
};

export default function About() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Profile Photo */}
        <div className="profile-photo-wrapper mb-8">
          <Image
            src="/images/profile.jpg"
            alt="Deiondre Smith"
            width={200}
            height={200}
            className="profile-photo"
            priority
          />
        </div>

        <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>

        {/* Bio Section */}
        <div className="glass-card p-8 mb-12 max-w-3xl mx-auto">
          <p className="text-lg text-gray-300 mb-6">
            A passionate software developer with a love for creating innovative
            solutions. I specialize in building full-stack web applications using
            modern technologies and best practices.
          </p>
          <p className="text-gray-400 mb-6">
            I enjoy tackling complex problems and turning ideas into reality through
            clean, efficient code. When I&apos;m not coding, I&apos;m constantly learning
            new technologies and improving my skills.
          </p>
          <Link
            href="/files/resume.pdf"
            target="_blank"
            className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg transition-all duration-300"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
          </Link>
        </div>

        {/* Skills Section */}
        <h2 className="text-3xl font-bold text-center mb-8">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Programming Languages */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4 text-accent-gold">
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary/20 text-primary border border-primary/30 rounded-lg text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4 text-accent-gold">
              Frameworks & Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary/20 text-primary border border-primary/30 rounded-lg text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4 text-accent-gold">
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary/20 text-primary border border-primary/30 rounded-lg text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4 text-accent-gold">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.soft.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-accent-gold/20 text-accent-gold border border-accent-gold/30 rounded-lg text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
