import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 dot-pattern opacity-20" />
      
      {/* Morphing glow orbs */}
      <div className="glow-orb glow-orb-primary w-[700px] h-[700px] top-1/4 -left-60" style={{ animationDelay: '0s' }} />
      <div className="glow-orb glow-orb-accent w-[600px] h-[600px] bottom-1/4 -right-60" style={{ animationDelay: '2s' }} />
      <div className="glow-orb glow-orb-primary w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" style={{ animationDelay: '4s' }} />

      {/* Floating particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm font-medium text-muted-foreground mb-8 animate-fade-up hover-glow cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            No Over-Engineering. Just Results.
          </div>

          {/* Main heading with reveal animation */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-blur-in delay-200">
            We Take Care of the Work.{" "}
            <span className="text-gradient relative">
              You Focus on Growth
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path 
                  d="M2 10C50 4 100 2 150 6C200 10 250 4 298 8" 
                  stroke="url(#underline-gradient)" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  className="line-draw"
                />
                <defs>
                  <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(186 100% 50%)" />
                    <stop offset="100%" stopColor="hsl(220 90% 56%)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-up delay-400">
            We don't over-engineer products. We deliver practical automations that streamline 
            your business logic and supply chain — so you can scale without the complexity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-500">
            <Button variant="hero" size="lg" className="group magnetic hover-glow">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button variant="glass" size="lg" className="group hover-lift">
              <div className="relative">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
              </div>
              See How It Works
            </Button>
          </div>

          {/* Stats with counter animation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border/50 stagger-children">
            {[
              { value: "10x", label: "Faster Operations" },
              { value: "60%", label: "Cost Reduction" },
              { value: "Zero", label: "Over-Engineering" },
              { value: "100%", label: "Business Focused" },
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-default">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-1000">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 scroll-indicator" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
};

export default HeroSection;