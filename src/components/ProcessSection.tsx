import SectionHeader from "./SectionHeader";
import { MessageSquare, Wrench, Zap, TrendingUp, ArrowRight } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Understand",
    description: "We listen to your pain points. What slows you down? Where are the bottlenecks? We map it out.",
  },
  {
    icon: Wrench,
    number: "02",
    title: "Simplify",
    description: "We streamline your business logic. No unnecessary features — just what moves the needle.",
  },
  {
    icon: Zap,
    number: "03",
    title: "Automate",
    description: "We build practical automations that eliminate manual work and keep operations running 24/7.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Deliver",
    description: "You get a transformed business. We handle support so you stay focused on growth.",
  },
];

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="process" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="glow-orb glow-orb-accent w-[600px] h-[600px] -top-60 -right-60 opacity-30" />
      <div className="glow-orb glow-orb-primary w-[400px] h-[400px] bottom-0 -left-40 opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          badge="Our Approach"
          title="Understand → Simplify → Automate → Deliver"
          subtitle="We don't sell complexity. We take care of the work so you can focus on running your business."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Animated connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-16 left-[70%] w-[60%] items-center">
                  <div className="flex-1 h-[2px] bg-gradient-to-r from-primary/60 to-primary/20" />
                  <ArrowRight className={`w-4 h-4 text-primary transition-all duration-500 ${activeStep === index ? 'translate-x-2 opacity-100' : 'opacity-50'}`} />
                </div>
              )}
              
              <div className="relative glass rounded-2xl p-8 h-full hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow">
                {/* Large background number */}
                <div className={`absolute top-4 right-4 text-7xl font-bold transition-all duration-500 ${activeStep === index ? 'text-gradient opacity-30' : 'text-muted/10'}`}>
                  {step.number}
                </div>
                
                {/* Icon with animation */}
                <div className="relative mb-8">
                  <div className={`absolute inset-0 rounded-xl bg-gradient-primary blur-xl transition-all duration-500 ${activeStep === index ? 'opacity-40 scale-150' : 'opacity-0'}`} />
                  <div className="relative w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {step.description}
                </p>

                {/* Progress indicator */}
                <div className="mt-6 h-1 bg-muted/20 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-primary rounded-full transition-all duration-700 ease-out ${activeStep === index ? 'w-full' : 'w-0'}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features list with hover animations */}
        <div className="mt-20 flex flex-wrap justify-center gap-3 stagger-children">
          {[
            "No Over-Engineering",
            "Practical Solutions",
            "Quick Turnaround",
            "Ongoing Support",
            "Results Focused",
          ].map((feature, index) => (
            <div
              key={index}
              className="group px-6 py-3 rounded-full glass text-sm font-medium text-muted-foreground cursor-default hover-lift"
            >
              <span className="group-hover:text-gradient transition-all duration-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;