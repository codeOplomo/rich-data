import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  company: [
    { label: "À propos", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Veille Sociale", href: "/services/veille-sociale" },
    { label: "Développement Web", href: "/services/developpement-web" },
    { label: "Applications Mobile", href: "/services/developpement-mobile" },
    { label: "Tous les services", href: "/services" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "mailto:hello@richdata.dev", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="relative pt-16 pb-8">
      {/* Gradient divider */}
      <div className="gradient-divider mb-16" />

      <div className="container px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-heading font-bold gradient-text">
              RichData
            </Link>
            <p className="text-muted-foreground text-sm mt-3 max-w-sm leading-relaxed">
              Empowering brands with social intelligence and world-class digital
              solutions. Listen smarter. Build better.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/30 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} RichData. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
