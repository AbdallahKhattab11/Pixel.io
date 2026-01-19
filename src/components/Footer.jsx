import logo from "../assets/images/logo.svg";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "Home", href: "#" },
      { name: "Services", href: "#" },
      { name: "Work", href: "#" },
      { name: "Contact", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
    socials: [
      {
        name: "Twitter",
        href: "#",
        icon: <FaTwitter />,
      },
      {
        name: "LinkedIn",
        href: "#",
        icon: <FaLinkedinIn />,
      },
      {
        name: "GitHub",
        href: "#",
        icon: <FaGithub />,
      },
    ],
  };

  return (
    <footer className="bg-white/5 border-t border-white/10 pt-16 text-gray-400 backdrop-blur-sm">
      <div className="container">
        {/* Upper Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Description */}
          <div className="md:col-span-5 lg:col-span-6">
            <img alt="logo" className="h-8 mb-6 brightness-110" src={logo} />
            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              We are a digital agency focused on strategy, design and
              development—helping brands build meaningful digital experiences
              and grow sustainably.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-7 lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">
                Company
              </h3>
              <ul className="space-y-4 text-sm">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">
                Legal
              </h3>
              <ul className="space-y-4 text-sm">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">
                Connect
              </h3>
              <ul className="flex flex-col gap-4 text-sm">
                {footerLinks.socials.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-white transition-colors duration-200"
                    >
                      <span className="text-lg">{social.icon}</span>
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs tracking-wide">
          <p>© {currentYear} Pixel io. All rights reserved.</p>
          <p className="text-slate-500 italic">
            Built with Passion by{" "}
            <span className="text-violet-400">Abdallah Khattab</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
