import SectionHeader from "./SectionHeader";
import { TrendingUp, DollarSign, Target, LineChart, Users } from "lucide-react";
import { useState } from "react";

const impacts = [
  {
    icon: TrendingUp,
    title: "Increase Productivity",
    description: "Streamline operations across all teams with automated workflows and intelligent systems.",
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    icon: DollarSign,
    title: "Reduce Costs",
    description: "Cut operational costs by eliminating manual processes and optimizing resource utilization.",
    color: "from-amber-500/20 to-amber-500/5",
  },
  {
    icon: Target,
    title: "Improve Accuracy",
    description: "Minimize errors with automated data processing, validation, and real-time monitoring.",
    color: "from-rose-500/20 to-rose-500/5",
  },
  {
    icon: LineChart,
    title: "Data-Driven Decisions",
    description: "Enable informed decision-making with comprehensive analytics and actionable insights.",
    color: "from-violet-500/20 to-violet-500/5",
  },
  {
    icon: Users,
    title: "Scale Efficiently",
    description: "Grow your business without proportionally increasing headcount through smart automation.",
    color: "from-sky-500/20 to-sky-500/5",
  },
];

const ImpactCard = ({ impact, index }: { impact: typeof impacts[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="relative group animate-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Blur background glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${impact.color} rounded-3xl blur-2xl transition-all duration-700 ${isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'}`} />
      
      {/* Card */}
      <div className="relative glass rounded-3xl p-10 h-full group-hover:border-primary/40 transition-all duration-500 hover:-translate-y-2">
        {/* Animated icon container */}
        <div className="relative w-18 h-18 mb-8">
          <div className={`absolute inset-0 rounded-2xl bg-gradient-primary opacity-30 blur-xl transition-all duration-500 ${isHovered ? 'scale-125' : 'scale-100'}`} />
          <div className="relative w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
            <impact.icon className="w-8 h-8 text-primary-foreground" />
          </div>
          
          {/* Orbiting dot */}
          <div className={`absolute w-3 h-3 bg-primary rounded-full shadow-glow transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} 
               style={{ 
                 animation: isHovered ? 'orbit 3s linear infinite' : 'none',
                 top: '50%',
                 left: '50%',
               }} />
        </div>
        
        <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-gradient transition-all duration-500">
          {impact.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground/80 transition-colors duration-300">
          {impact.description}
        </p>
        
        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-32 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          badge="Business Impact"
          title="How This Transforms Your Business"
          subtitle="Real, measurable improvements that drive growth and efficiency across your organization."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {impacts.slice(0, 3).map((impact, index) => (
            <ImpactCard key={index} impact={impact} index={index} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {impacts.slice(3).map((impact, index) => (
            <ImpactCard key={index + 3} impact={impact} index={index + 3} />
          ))}
        </div>
      </div>
      
      {/* Add orbit animation keyframes via style tag */}
      <style>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(40px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(40px) rotate(-360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default SolutionsSection;