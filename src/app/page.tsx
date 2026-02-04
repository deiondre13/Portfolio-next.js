import Link from "next/link";
import { FiCode, FiLayout, FiSettings } from "react-icons/fi";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I&apos;m{" "}
            <span className="text-primary">Deiondre Smith</span>
          </h1>
          <p className="text-xl md:text-2xl text-accent-gold font-semibold mb-4">
            Full-Stack Software Developer
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            I build exceptional digital experiences with modern technologies.
            Passionate about creating clean, efficient, and user-friendly applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="px-8 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Development Card */}
            <div className="glass-card p-8 text-center">
              <div className="icon-wrapper mx-auto mb-6">
                <FiCode size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Development</h3>
              <p className="text-gray-400">
                Building robust and scalable web applications using modern frameworks
                and best practices.
              </p>
            </div>

            {/* Design Card */}
            <div className="glass-card p-8 text-center">
              <div className="icon-wrapper mx-auto mb-6">
                <FiLayout size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Design</h3>
              <p className="text-gray-400">
                Creating intuitive and visually appealing user interfaces that
                enhance user experience.
              </p>
            </div>

            {/* Engineering Card */}
            <div className="glass-card p-8 text-center">
              <div className="icon-wrapper mx-auto mb-6">
                <FiSettings size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Engineering</h3>
              <p className="text-gray-400">
                Architecting solutions that are maintainable, efficient, and built
                to last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center glass-card p-12">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-gray-400 mb-8">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss
            how we can bring your ideas to life.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-accent-gold hover:bg-accent-gold-light text-dark font-semibold rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
