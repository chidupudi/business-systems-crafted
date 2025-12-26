import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Mail, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Layered background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="glow-orb glow-orb-primary w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
      
      {/* Floating sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Sparkles 
            key={i}
            className="absolute text-primary/30 animate-float"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`,
              width: `${16 + (i % 3) * 8}px`,
              height: `${16 + (i % 3) * 8}px`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm font-medium text-primary mb-8 animate-fade-up hover-glow cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Ready to Transform?
          </div>

          {/* Heading with gradient animation */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-blur-in delay-100">
            Let's{" "}
            <span className="relative inline-block">
              <span className="text-gradient">Digitize</span>
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path 
                  d="M2 6C40 2 80 2 100 4C120 6 160 6 198 2" 
                  stroke="url(#cta-underline)" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  className="line-draw"
                />
                <defs>
                  <linearGradient id="cta-underline" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(186 100% 50%)" />
                    <stop offset="100%" stopColor="hsl(220 90% 56%)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            Your Business Operations
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up delay-300">
            Build systems that work while you focus on growth. Schedule a free consultation to discover how we can transform your operations.
          </p>

          {/* CTA Buttons with enhanced animations */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-400">
            <Button variant="hero" size="lg" className="group magnetic hover-glow relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
            <Button variant="glass" size="lg" className="group hover-lift">
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Contact Us
            </Button>
          </div>

          {/* Taglines with animations */}
          <div className="mt-16 pt-12 border-t border-border/50 animate-fade-up delay-600">
            <p className="text-muted-foreground italic text-lg mb-8 animate-float" style={{ animationDuration: '4s' }}>
              "Smarter Systems. Faster Growth. Better Control."
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm stagger-children">
              {["No Long-Term Contracts", "Flexible Engagement", "Post-Launch Support"].map((item, i) => (
                <span key={i} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-default">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;