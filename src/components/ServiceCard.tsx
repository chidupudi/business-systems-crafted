import { LucideIcon } from "lucide-react";

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
      className="group relative glass rounded-2xl p-8 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-elevated animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Gradient glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-primary-foreground" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>

        {/* Features list */}
        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
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
