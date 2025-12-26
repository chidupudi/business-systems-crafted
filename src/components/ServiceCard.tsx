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
  return (
    <div 
      className="group relative rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 animate-fade-up bg-card/50 border border-border/30 hover:border-primary/30 hover:bg-card/80"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative z-10">
        {/* Clean icon */}
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>

        {/* Features list - cleaner style */}
        {features && features.length > 0 && (
          <ul className="space-y-1.5">
            {features.map((feature, index) => (
              <li 
                key={index} 
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
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