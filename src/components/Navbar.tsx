import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ["services", "solutions", "process", "contact"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Solutions", href: "#solutions" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3 shadow-elevated" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo with animation */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute inset-0 rounded-lg bg-gradient-primary blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
          </div>
          <span className="text-xl font-bold text-foreground">
            Digi<span className="text-gradient">Forge</span>
          </span>
        </a>

        {/* Desktop Navigation with active states */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative text-sm font-medium transition-colors duration-300 ${
                activeSection === link.href.slice(1) 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
              {/* Active indicator */}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-primary rounded-full transition-all duration-300 ${
                activeSection === link.href.slice(1) ? "w-full" : "w-0"
              }`} />
            </a>
          ))}
        </div>

        {/* CTA Button with hover effect */}
        <div className="hidden md:block">
          <Button variant="hero" size="default" className="group hover-glow">
            <span className="group-hover:scale-105 transition-transform duration-300">Get Started</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-card/50 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="relative w-6 h-6">
            <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
            <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu with slide animation */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="glass-strong mt-4 mx-6 rounded-2xl p-6">
          <div className="flex flex-col gap-2 stagger-children">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-card/50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" className="mt-4 w-full">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;