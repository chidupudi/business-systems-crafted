import SectionHeader from "./SectionHeader";
import ServiceCard from "./ServiceCard";
import { 
  Globe, 
  Workflow, 
  CreditCard, 
  Package, 
  MessageSquare, 
  Bot,
  Cloud,
  BarChart3,
  Shield,
  Cpu
} from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "Business Process Automation",
    description: "Eliminate repetitive tasks. We automate your workflows so your team focuses on what matters.",
    features: ["Workflow automation", "Smart triggers", "Zero manual effort", "Instant results"],
  },
  {
    icon: Package,
    title: "Supply Chain Optimization",
    description: "Streamline your entire supply chain from vendor to customer with real-time visibility.",
    features: ["Inventory sync", "Vendor management", "Demand forecasting", "Multi-location"],
  },
  {
    icon: Bot,
    title: "Intelligent Automations",
    description: "24/7 systems that work without human intervention. Bots that handle operations, support, and data.",
    features: ["Auto-responses", "Lead handling", "Data processing", "Always-on"],
  },
  {
    icon: Globe,
    title: "Business Portals & Dashboards",
    description: "Simple, effective web applications. Admin panels, client portals — built for your actual needs.",
    features: ["Clean interfaces", "Role-based access", "Real-time data", "No bloat"],
  },
  {
    icon: BarChart3,
    title: "Analytics That Matter",
    description: "Dashboards with KPIs you actually use. No complex reports — just actionable insights.",
    features: ["Key metrics only", "Simple reports", "Quick decisions", "Clear visuals"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background glows */}
      <div className="glow-orb glow-orb-primary w-[500px] h-[500px] top-1/4 -left-60 opacity-20" />
      <div className="glow-orb glow-orb-accent w-[400px] h-[400px] bottom-1/4 -right-40 opacity-15" />
      
      {/* Subtle grid */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          badge="What We Do"
          title="Practical Automations. Real Results."
          subtitle="We don't build complex systems you don't need. We deliver focused solutions that streamline your operations."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              delay={index * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;