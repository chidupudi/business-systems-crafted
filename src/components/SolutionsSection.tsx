import { useState } from "react";
import { ArrowRight, CheckCircle, Zap, Globe, CreditCard, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    id: "web",
    title: "Web Applications",
    tagline: "Scalable Business Platforms",
    description:
      "High-performance custom web systems designed to handle operations, analytics, and growth.",
    highlights: [
      "Admin & Client Dashboards",
      "Role-Based Access Control",
      "Analytics & Reports",
      "Enterprise-Grade Security",
    ],
    outcome: "Operate faster, smarter, and at scale.",
    icon: Globe,
    accent: "from-cyan-500 to-blue-600",
  },
  {
    id: "automation",
    title: "Process Automation",
    tagline: "Eliminate Manual Work",
    description:
      "Automate repetitive business workflows using rule-based and event-driven systems.",
    highlights: [
      "Workflow Automation",
      "Real-Time Alerts",
      "Data Processing Bots",
      "Error Reduction Systems",
    ],
    outcome: "Save time, reduce costs, and improve accuracy.",
    icon: Zap,
    accent: "from-violet-500 to-purple-600",
  },
  {
    id: "pos",
    title: "POS & Billing",
    tagline: "Smart Billing Infrastructure",
    description:
      "Fast billing systems with inventory sync and GST-ready reports.",
    highlights: [
      "Retail & Restaurant POS",
      "Inventory Sync",
      "GST Invoices",
      "Multi-Outlet Support",
    ],
    outcome: "Faster checkout and better stock control.",
    icon: CreditCard,
    accent: "from-emerald-500 to-teal-600",
  },
];

const SolutionsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = solutions[activeIndex];

  return (
    <section id="solutions" className="py-24 lg:py-32 relative overflow-hidden bg-background">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            What We Build
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Solutions That <span className="text-primary">Drive Results</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tailored digital solutions designed to transform your operations and accelerate growth.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Solution Tabs - Left Column */}
          <div className="lg:col-span-4 space-y-3">
            {solutions.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`group w-full text-left rounded-2xl p-5 transition-all duration-300 border ${
                    isActive
                      ? "bg-card border-primary/30 shadow-lg shadow-primary/5"
                      : "bg-card/50 border-border/50 hover:bg-card hover:border-border"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center shrink-0 transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-105"}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold text-lg transition-colors ${isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                        {item.tagline}
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 shrink-0 transition-all duration-300 ${isActive ? "text-primary rotate-90" : "text-muted-foreground/50 group-hover:text-muted-foreground group-hover:translate-x-1"}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Solution Detail - Right Column */}
          <div className="lg:col-span-8">
            <div className="h-full rounded-3xl bg-card border border-border/50 p-8 lg:p-10 relative overflow-hidden">
              {/* Gradient accent */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${active.accent} opacity-10 blur-3xl -translate-y-1/2 translate-x-1/2`} />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="mb-8">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${active.accent} text-white mb-4`}>
                    {active.tagline}
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    {active.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                    {active.description}
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {active.highlights.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 border border-border/30 transition-colors hover:bg-muted/50"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${active.accent} flex items-center justify-center shrink-0`}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Outcome & CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground font-medium">{active.outcome}</p>
                  </div>
                  <Button variant="hero" size="lg" className="group">
                    Get Free Audit
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
