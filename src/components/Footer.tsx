import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = {
    services: [
      "Web Development",
      "Business Automation",
      "POS Solutions",
      "Cloud Migration",
      "Analytics & Dashboards",
    ],
    company: [
      "About Us",
      "Our Process",
      "Case Studies",
      "Careers",
      "Contact",
    ],
  };

  return (
    <footer className="relative pt-20 pb-8 border-t border-border/50 overflow-hidden">
      {/* Background glow */}
      <div className="glow-orb glow-orb-primary w-[400px] h-[400px] bottom-0 left-1/4 opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1 animate-fade-up">
            <a href="#" className="flex items-center gap-2 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-gradient-primary blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
              <span className="text-xl font-bold text-foreground">
                Digi<span className="text-gradient">Forge</span>
              </span>
            </a>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From Operations to Automation — We Build the Digital Backbone for Modern Businesses.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
                { icon: Github, label: "GitHub" },
              ].map(({ icon: Icon, label }, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={label}
                  className="group w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-glow transition-all duration-300"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="animate-fade-up delay-100">
            <h4 className="text-foreground font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {links.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-300 inline-block underline-animate"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="animate-fade-up delay-200">
            <h4 className="text-foreground font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-300 inline-block underline-animate"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-up delay-300">
            <h4 className="text-foreground font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                hello@digiforge.com
              </li>
              <li className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                +1 (555) 123-4567
              </li>
              <li className="group flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                123 Innovation Drive, Tech City, TC 12345
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} DigiForge. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground underline-animate transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground underline-animate transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-primary shadow-glow flex items-center justify-center text-primary-foreground hover:scale-110 transition-all duration-500 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;