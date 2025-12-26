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
    icon: Globe,
    title: "Web Application Development",
    description: "Custom web applications built for scale with secure, high-performance platforms and professional dashboards.",
    features: ["Admin dashboards", "Client portals", "Internal operations tools", "Role-based access"],
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description: "Automate repetitive workflows and reduce manual effort with smart automation for operations, finance, and reporting.",
    features: ["Rule-based automation", "Event-driven systems", "Real-time alerts", "Action triggers"],
  },
  {
    icon: CreditCard,
    title: "POS & Billing Solutions",
    description: "Smart POS systems designed for retail & service businesses with fast billing, inventory sync, and sales tracking.",
    features: ["GST-ready invoicing", "Multi-outlet support", "Real-time reports", "Multi-user access"],
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Real-time inventory visibility with stock movement, alerts, forecasting, and vendor tracking.",
    features: ["Stock alerts", "Purchase tracking", "Multi-location control", "Demand forecasting"],
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Integration",
    description: "WhatsApp-first business communication with automated order updates, billing, and customer support.",
    features: ["Automated notifications", "Invoice delivery", "Customer follow-ups", "Order updates"],
  },
  {
    icon: Bot,
    title: "Intelligent Bots",
    description: "AI-powered bots for customer and internal operations. 24×7 systems that work without human intervention.",
    features: ["Sales chatbots", "Lead qualification", "Data processing", "Monitoring bots"],
  },
  {
    icon: Cloud,
    title: "Cloud Migration",
    description: "Move your business securely to the cloud with scalable, cost-optimized infrastructure on AWS, GCP, and Azure.",
    features: ["High availability", "Backup solutions", "Disaster recovery", "Cost optimization"],
  },
  {
    icon: BarChart3,
    title: "Dashboards & Analytics",
    description: "Decision-ready dashboards for business leaders with real-time KPIs, metrics, and custom reports.",
    features: ["Real-time insights", "Custom reports", "Data visualization", "Performance tracking"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security by design with role-based access, audit logs, and encrypted storage.",
    features: ["Data protection", "Activity tracking", "Secure APIs", "Access control"],
  },
  {
    icon: Cpu,
    title: "Modern Tech Stack",
    description: "Built with modern, future-ready technologies. Cloud-native and API-first architecture designed to evolve.",
    features: ["AI integration", "Scalable systems", "API-first", "Future-ready"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="glow-orb glow-orb-primary w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          badge="Our Capabilities"
          title="End-to-End Technology Solutions"
          subtitle="Everything you need to run, scale, and optimize your business operations. From web applications to intelligent automation."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
