import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight
} from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Our Mission", href: "/about#mission" },
    { name: "Contact Us", href: "/contact" },
  ],
  services: [
    { name: "E-Commerce Solutions", href: "/services#ecommerce" },
    { name: "Logistics & Delivery", href: "/services#logistics" },
    { name: "Import & Export", href: "/services#import-export" },
    { name: "Distribution Services", href: "/services#distribution" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center font-heading font-bold text-secondary-foreground text-lg">
                M
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight text-white">
                  MMM Worldwide
                </span>
                <span className="text-xs leading-tight text-white/70">
                  Wish-Fulfilment Limited
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Connecting commerce and logistics through technology. Your trusted partner for e-commerce and fulfilment solutions in Nigeria and beyond.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-secondary mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-secondary flex-shrink-0" />
                <a href="tel:+234800000000" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  +234 800 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-secondary flex-shrink-0" />
                <a href="mailto:info@mmmworldwide.com" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  info@mmmworldwide.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} MMM Worldwide Wish-Fulfilment Limited. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
