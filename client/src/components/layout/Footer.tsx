import { navLinks, personalInfo, socialLinks } from "@/lib/constants";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      window.scrollTo({
        top: section.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "github":
        return <FaGithub size={20} />;
      case "linkedin":
        return <FaLinkedin size={20} />;
      case "twitter":
        return <FaTwitter size={20} />;
      case "instagram":
        return <FaInstagram size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">{personalInfo.name}</h3>
            <p className="text-slate-300 mt-1">Computer Engineering & Data Science Student</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-slate-300 hover:text-white transition"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
        
        <hr className="border-slate-600 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition"
                aria-label={link.name}
              >
                {getSocialIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
