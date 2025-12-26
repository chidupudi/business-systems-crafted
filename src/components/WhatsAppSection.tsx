import { useState } from "react";
import { 
  MessageSquare, 
  Bell, 
  FileText, 
  HeadphonesIcon, 
  Send, 
  CheckCheck,
  Clock,
  Zap,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "./SectionHeader";

const features = [
  {
    icon: Bell,
    title: "Automated Order Updates",
    description: "Real-time notifications for order confirmation, dispatch, and delivery status.",
  },
  {
    icon: FileText,
    title: "Billing & Invoices",
    description: "Send invoices, receipts, and payment reminders directly to customers.",
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Support",
    description: "Handle queries, complaints, and feedback through automated responses.",
  },
  {
    icon: Clock,
    title: "Smart Follow-Ups",
    description: "Automated reminders for abandoned carts, renewals, and reorders.",
  },
];

const chatMessages = [
  { type: "bot", text: "Hi! Your order #4521 has been confirmed ✓", time: "10:30 AM" },
  { type: "bot", text: "📦 Your package is out for delivery!", time: "2:15 PM" },
  { type: "user", text: "What's the delivery time?", time: "2:16 PM" },
  { type: "bot", text: "Expected delivery: Today by 6 PM. Track here: bit.ly/track4521", time: "2:16 PM" },
  { type: "bot", text: "✅ Delivered! Rate your experience:", time: "5:42 PM" },
];

const WhatsAppSection = () => {
  const [activeMessage, setActiveMessage] = useState(0);

  return (
    <section id="whatsapp" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-emerald-950/5 to-background" />
      <div className="glow-orb w-[600px] h-[600px] top-1/4 -right-60 opacity-20" style={{ background: 'radial-gradient(circle, rgba(37, 211, 102, 0.3) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 dot-pattern opacity-15" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          badge="WhatsApp Integration"
          title="WhatsApp-First Business Communication"
          subtitle="Reach customers where they are. Automated messaging for orders, support, and engagement."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-16">
          {/* Phone Mockup */}
          <div className="relative order-2 lg:order-1 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="relative mx-auto w-[280px] sm:w-[320px]">
              {/* Phone Frame */}
              <div className="relative bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-[3rem] p-3 shadow-2xl">
                {/* Screen */}
                <div className="bg-[#0b141a] rounded-[2.5rem] overflow-hidden">
                  {/* WhatsApp Header */}
                  <div className="bg-[#1f2c34] px-4 py-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">DigiForge Store</p>
                      <p className="text-emerald-400 text-xs">Online • Automated</p>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="h-[380px] p-4 space-y-3 overflow-hidden bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')]">
                    {chatMessages.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`}
                        style={{ animationDelay: `${index * 150}ms` }}
                      >
                        <div
                          className={`max-w-[85%] px-3 py-2 rounded-lg text-sm ${
                            msg.type === 'user'
                              ? 'bg-[#005c4b] text-white rounded-br-none'
                              : 'bg-[#1f2c34] text-white rounded-bl-none'
                          }`}
                        >
                          <p>{msg.text}</p>
                          <div className="flex items-center justify-end gap-1 mt-1">
                            <span className="text-[10px] text-zinc-400">{msg.time}</span>
                            {msg.type === 'bot' && <CheckCheck className="w-3.5 h-3.5 text-sky-400" />}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Input Area */}
                  <div className="bg-[#1f2c34] px-3 py-2 flex items-center gap-2">
                    <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 text-sm text-zinc-400">
                      Type a message...
                    </div>
                    <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                      <Send className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification badges */}
              <div className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-medium shadow-lg animate-float">
                +2.4k messages/day
              </div>
              <div className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-full glass text-foreground text-xs font-medium shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                98% delivery rate
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4">
                <MessageSquare className="w-4 h-4" />
                Automated Messaging
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Engage Customers <span className="text-gradient">24/7</span>
              </h3>
              <p className="text-muted-foreground">
                No missed messages. No delays. Automated responses handle orders, support, and follow-ups while you focus on growth.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-5 rounded-2xl glass border border-border/50 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 animate-fade-up" style={{ animationDelay: '700ms' }}>
              <Button variant="hero" className="group gap-2" style={{ background: 'linear-gradient(135deg, hsl(142 70% 45%), hsl(142 70% 35%))' }}>
                <MessageSquare className="w-5 h-5" />
                Get WhatsApp Automation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection;
