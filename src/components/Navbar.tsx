import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from '../assets/AllenLogo.png'
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "about" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <img src={logo} alt="" className="h-[60px] " />
              {/* <span
                className={cn(
                  "text-2xl font-heading font-bold tracking-wide transition-colors duration-300",
                  isScrolled ? "text-primary" : "text-primary-foreground"
                )}
              >
                LAKERS
              </span>
              <span
                className={cn(
                  "text-[10px] font-medium tracking-widest uppercase transition-colors duration-300",
                  isScrolled ? "text-muted-foreground" : "text-primary-foreground/70"
                )}
              >
                Architectural Hardware
              </span> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "nav-link text-sm font-medium transition-colors duration-200",
                  location.pathname === link.href && "active",
                  isScrolled
                    ? "text-foreground/80 hover:text-foreground"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+918140376087"
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors duration-200",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}
            >
              <Phone size={16} />
              <span className="hidden lg:inline">+91 81403 76087</span>
            </a>
            <Button variant={isScrolled ? "default" : "hero"} size="sm" asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              isScrolled
                ? "text-foreground hover:bg-muted"
                : "text-primary-foreground hover:bg-primary-foreground/10"
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-80 mt-4" : "max-h-0"
          )}
        >
          <div className="bg-background rounded-xl p-4 shadow-lg border border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    location.pathname === link.href
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="my-2 border-border" />
              <Button variant="gold" className="w-full" asChild>
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
