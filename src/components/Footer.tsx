import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact Us", href: "/contact" },
];

// const productLinks = [
//   { name: "Glass Door Handles", href: "/products?category=glass-door-handles" },
//   { name: "Patch Fittings", href: "/products?category=patch-fittings" },
//   { name: "Floor Springs", href: "/products?category=floor-springs" },
//   { name: "Mortise Handles", href: "/products?category=mortise-handles" },
//   { name: "Door Closers", href: "/products?category=door-closers" },
//   { name: "Shower Hinges", href: "/products?category=shower-hinges" },
// ];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-heading font-bold tracking-wide">
                Allen
              </h3>
              <p className="text-xs tracking-widest uppercase text-primary-foreground/60 mt-1">
                Architectural Hardware Solutions
              </p>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Built on Precision, Secured with Trust. Premium stainless steel
              hardware for residential, commercial, and industrial projects
              since 2015.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-12 h-1 bg-accent rounded-full"></span>
              <span className="text-xs text-primary-foreground/60">
                Est. 2015
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-accent">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm flex items-center gap-2 transition-colors group"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          {/* <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-accent">
              Our Products
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm flex items-center gap-2 transition-colors group"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-accent">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Head Office : Ahmedabad, Gujarat, India
                  Manufacturing Unit : Rajkot, Gujarat, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <a
                  href="tel:+918140376087"
                  className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                >
                  +91 81403 76087
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <a
                  href="mailto:info@lakers.in"
                  className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                >
                  allencreation7@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-accent mt-0.5 shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Mon - Sat: 9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm text-center">
              © {currentYear} LAKERS. All rights reserved. | Designed by Keyur L
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
