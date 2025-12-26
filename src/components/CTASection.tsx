import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="glow-orb glow-orb-primary w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Ready to Transform?
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-up delay-100">
            Let's <span className="text-gradient">Digitize</span> Your Business Operations
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up delay-200">
            Build systems that work while you focus on growth. Schedule a free consultation to discover how we can
            transform your operations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
            <Button variant="hero" size="lg" className="group">
              <Calendar className="w-5 h-5" />
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg">
              <Mail className="w-5 h-5" />
              Contact Us
            </Button>
          </div>

          {/* Taglines */}
          <div className="mt-16 pt-12 border-t border-border/50 animate-fade-up delay-400">
            <p className="text-muted-foreground italic text-lg mb-8">
              "Smarter Systems. Faster Growth. Better Control."
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
              <span>✓ No Long-Term Contracts</span>
              <span>✓ Flexible Engagement</span>
              <span>✓ Post-Launch Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
