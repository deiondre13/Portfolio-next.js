import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-primary/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Deiondre Smith. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a
              href="https://github.com/deiondre13"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-gold transition-colors"
              title="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/deiondre-smith-03254529a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-gold transition-colors"
              title="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:deiondresmith00@gmail.com"
              className="text-gray-400 hover:text-accent-gold transition-colors"
              title="Email"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
