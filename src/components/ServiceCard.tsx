import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, features, delay = 0 }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-3 animate-fade-up cursor-default"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-[1px] rounded-2xl bg-card/95 backdrop-blur-xl" />
      
      {/* Border glow effect */}
      <div className="absolute inset-0 rounded-2xl border border-border/50 group-hover:border-primary/50 transition-colors duration-500" />
      <div className="absolute inset-0 rounded-2xl shadow-card group-hover:shadow-glow transition-shadow duration-500" />
      
      <div className="relative z-10">
        {/* Icon with pulse ring */}
        <div className="relative w-16 h-16 mb-6">
          <div className={`absolute inset-0 rounded-xl bg-gradient-primary opacity-20 blur-xl transition-all duration-500 ${isHovered ? 'scale-150 opacity-40' : ''}`} />
          <div className="relative w-full h-full rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
            <Icon className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>

        {/* Title with underline animation */}
        <h3 className="text-xl font-bold text-foreground mb-3 underline-animate inline-block">
          {title}
        </h3>

        {/* Description with fade */}
        <p className="text-muted-foreground leading-relaxed mb-5 group-hover:text-foreground/80 transition-colors duration-300">
          {description}
        </p>

        {/* Features list with stagger */}
        {features && features.length > 0 && (
          <ul className="space-y-2.5">
            {features.map((feature, index) => (
              <li 
                key={index} 
                className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground/70 transition-all duration-300"
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  transform: isHovered ? 'translateX(4px)' : 'translateX(0)'
                }}
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className={`absolute inline-flex h-full w-full rounded-full bg-primary transition-opacity duration-300 ${isHovered ? 'animate-ping opacity-75' : 'opacity-0'}`} style={{ animationDelay: `${index * 100}ms` }} />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;