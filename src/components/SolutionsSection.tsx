import SectionHeader from "./SectionHeader";
import { TrendingUp, DollarSign, Target, LineChart, Users } from "lucide-react";

const impacts = [
  {
    icon: TrendingUp,
    title: "Increase Productivity",
    description: "Streamline operations across all teams with automated workflows and intelligent systems.",
  },
  {
    icon: DollarSign,
    title: "Reduce Costs",
    description: "Cut operational costs by eliminating manual processes and optimizing resource utilization.",
  },
  {
    icon: Target,
    title: "Improve Accuracy",
    description: "Minimize errors with automated data processing, validation, and real-time monitoring.",
  },
  {
    icon: LineChart,
    title: "Data-Driven Decisions",
    description: "Enable informed decision-making with comprehensive analytics and actionable insights.",
  },
  {
    icon: Users,
    title: "Scale Efficiently",
    description: "Grow your business without proportionally increasing headcount through smart automation.",
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-32 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          badge="Business Impact"
          title="How This Transforms Your Business"
          subtitle="Real, measurable improvements that drive growth and efficiency across your organization."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {impacts.slice(0, 3).map((impact, index) => (
            <div
              key={index}
              className="relative group animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative glass rounded-3xl p-10 h-full hover:border-primary/40 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-8 shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <impact.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{impact.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{impact.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {impacts.slice(3).map((impact, index) => (
            <div
              key={index}
              className="relative group animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative glass rounded-3xl p-10 h-full hover:border-primary/40 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-8 shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <impact.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{impact.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{impact.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
