import SectionHeader from "./SectionHeader";
import { MessageSquare, Wrench, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Consult",
    description: "We understand your business challenges, goals, and existing processes to identify the best technology solutions.",
  },
  {
    icon: Wrench,
    number: "02",
    title: "Build",
    description: "Our team designs and develops custom solutions tailored to your specific requirements with modern technologies.",
  },
  {
    icon: Zap,
    number: "03",
    title: "Automate",
    description: "We implement intelligent automation to streamline workflows, reduce manual effort, and improve accuracy.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Scale",
    description: "Continuous support and optimization ensure your systems grow with your business seamlessly.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="glow-orb glow-orb-accent w-[500px] h-[500px] -top-40 -right-40 opacity-40" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          badge="Our Approach"
          title="Consult → Build → Automate → Scale"
          subtitle="A proven methodology for delivering successful digital transformations. Custom solutions, not one-size-fits-all."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <div className="relative">
                {/* Step number */}
                <div className="text-6xl font-bold text-gradient opacity-20 mb-4">{step.number}</div>
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features list */}
        <div className="mt-20 flex flex-wrap justify-center gap-4 animate-fade-up delay-600">
          {[
            "Fast Deployment",
            "Long-Term Support",
            "Transparent Pricing",
            "Clear Timelines",
            "Custom Solutions",
          ].map((feature, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-full glass text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-300"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
