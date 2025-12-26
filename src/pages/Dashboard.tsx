import { 
  TrendingUp, 
  Package, 
  Users, 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight,
  BarChart3,
  Activity,
  ShoppingCart,
  Truck,
  Target,
  Zap,
  Home,
  Wallet,
  FileText,
  RefreshCw,
  Shield,
  Gauge,
  Building2,
  UserCircle,
  Settings,
  Lock,
  Eye,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";

const platformTypes = [
  {
    id: "admin",
    label: "Admin Dashboard",
    icon: Settings,
    description: "Full control over operations, users, and analytics",
    access: "Admin Only",
  },
  {
    id: "client",
    label: "Client Portal",
    icon: UserCircle,
    description: "Self-service portal for customers and partners",
    access: "Authenticated Users",
  },
  {
    id: "internal",
    label: "Internal Tools",
    icon: Building2,
    description: "Team-specific workflows and operational tools",
    access: "Role-Based",
  },
];

const stats = [
  { title: "Total Revenue", value: "₹24.5L", change: "+12.5%", trend: "up", icon: DollarSign, color: "from-emerald-500 to-emerald-600" },
  { title: "Active Users", value: "2,847", change: "+23.1%", trend: "up", icon: Users, color: "from-blue-500 to-blue-600" },
  { title: "Orders Today", value: "156", change: "+8.2%", trend: "up", icon: ShoppingCart, color: "from-violet-500 to-violet-600" },
  { title: "Conversion", value: "4.8%", change: "+1.2%", trend: "up", icon: Target, color: "from-amber-500 to-amber-600" },
];

const salesData = [
  { month: "Jan", value: 42 },
  { month: "Feb", value: 58 },
  { month: "Mar", value: 45 },
  { month: "Apr", value: 72 },
  { month: "May", value: 65 },
  { month: "Jun", value: 88 },
  { month: "Jul", value: 78 },
];

const operationsKPIs = [
  { label: "Fulfillment Rate", value: "98.2%", target: "95%" },
  { label: "Processing Time", value: "2.4 hrs", target: "< 4 hrs" },
  { label: "Return Rate", value: "1.8%", target: "< 3%" },
  { label: "Accuracy", value: "99.1%", target: "99%" },
];

const financeKPIs = [
  { label: "Gross Margin", value: "42.5%", change: "+2.1%", trend: "up" },
  { label: "Operating Costs", value: "₹8.4L", change: "-5.2%", trend: "down" },
  { label: "Cash Flow", value: "₹15.2L", change: "+18.3%", trend: "up" },
  { label: "Receivables", value: "₹4.1L", change: "-12.5%", trend: "down" },
];

const topProducts = [
  { name: "Wireless Earbuds Pro", sales: 847, revenue: "₹12.7L", growth: 23 },
  { name: "Smart Watch Series 5", sales: 623, revenue: "₹9.3L", growth: 18 },
  { name: "USB-C Hub 7-in-1", sales: 512, revenue: "₹5.1L", growth: 31 },
  { name: "Laptop Stand Premium", sales: 489, revenue: "₹4.4L", growth: -5 },
];

const recentActivity = [
  { action: "Order #7823 shipped", time: "2 min ago", type: "success" },
  { action: "New customer registered", time: "8 min ago", type: "info" },
  { action: "Low stock alert: Mouse", time: "15 min ago", type: "warning" },
  { action: "Payment received ₹45K", time: "32 min ago", type: "success" },
  { action: "Report generated", time: "1 hr ago", type: "info" },
];

const securityFeatures = [
  { label: "Role-Based Access", icon: Lock },
  { label: "Real-Time Analytics", icon: BarChart3 },
  { label: "Audit Logging", icon: Eye },
  { label: "Secure APIs", icon: Shield },
];

const Dashboard = () => {
  const [activeView, setActiveView] = useState("admin");
  const [lastUpdate, setLastUpdate] = useState(new Date());
  
  useEffect(() => {
    const interval = setInterval(() => setLastUpdate(new Date()), 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-strong border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                Digi<span className="text-gradient">Forge</span>
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live
              </span>
              <span>•</span>
              <span>Updated {lastUpdate.toLocaleTimeString()}</span>
            </div>
            <Link to="/">
              <Button variant="glass" size="sm" className="gap-2">
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="mb-10 animate-fade-up">
          <div className="flex items-center gap-2 mb-3">
            <Gauge className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">High-Performance Web Platform</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Custom Web Applications <span className="text-gradient">Built for Scale</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Business-driven UI/UX with professional dashboards. Secure, role-based access with real-time analytics and reporting.
          </p>
        </div>

        {/* Platform Type Selector */}
        <div className="mb-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
          <div className="flex flex-wrap gap-3">
            {platformTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveView(type.id)}
                className={`group flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-300 ${
                  activeView === type.id 
                    ? 'bg-primary/10 border-primary/50 shadow-glow' 
                    : 'glass border-border/50 hover:border-primary/30'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                  activeView === type.id ? 'bg-gradient-primary shadow-lg' : 'bg-muted/30'
                }`}>
                  <type.icon className={`w-5 h-5 ${activeView === type.id ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                </div>
                <div className="text-left">
                  <p className={`font-medium text-sm ${activeView === type.id ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {type.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{type.access}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Security Features Bar */}
        <div className="mb-8 p-4 rounded-xl glass border border-border/50 animate-fade-up" style={{ animationDelay: '150ms' }}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm">
              <Shield className="w-4 h-4 text-primary" />
              <span className="font-medium text-foreground">Enterprise Security</span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <feature.icon className="w-3.5 h-3.5 text-primary/70" />
                  {feature.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main KPI Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="glass border-border/50 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow animate-fade-up group overflow-hidden relative"
              style={{ animationDelay: `${200 + index * 50}ms` }}
            >
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className={`flex items-center gap-1 text-xs md:text-sm font-medium ${stat.trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {stat.change}
                    {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" /> : <ArrowDownRight className="w-3 h-3 md:w-4 md:h-4" />}
                  </div>
                </div>
                <p className="text-muted-foreground text-xs md:text-sm mb-1">{stat.title}</p>
                <p className="text-xl md:text-2xl font-bold text-foreground">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Sales Trend */}
          <Card className="lg:col-span-2 glass border-border/50 animate-fade-up" style={{ animationDelay: '400ms' }}>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Revenue Analytics
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="text-xs h-7 px-2 text-muted-foreground">7D</Button>
                  <Button variant="glass" size="sm" className="text-xs h-7 px-2">30D</Button>
                  <Button variant="ghost" size="sm" className="text-xs h-7 px-2 text-muted-foreground">90D</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-48 md:h-56 flex items-end justify-between gap-2 md:gap-4 pt-4">
                {salesData.map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2 group">
                    <div className="relative w-full flex justify-center">
                      <div 
                        className="w-full max-w-10 rounded-t-lg bg-gradient-to-t from-primary/80 to-primary transition-all duration-500 group-hover:from-primary group-hover:to-primary/60"
                        style={{ height: `${item.value * 2}px` }}
                      >
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-foreground whitespace-nowrap">
                          ₹{item.value}L
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{item.month}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Live Activity */}
          <Card className="glass border-border/50 animate-fade-up" style={{ animationDelay: '450ms' }}>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                Live Activity
                <RefreshCw className="w-3 h-3 text-muted-foreground animate-spin" style={{ animationDuration: '3s' }} />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivity.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-2.5 rounded-lg bg-card/50 hover:bg-card/80 transition-colors">
                    <div className={`w-2 h-2 rounded-full mt-1.5 ${
                      item.type === 'success' ? 'bg-emerald-500' :
                      item.type === 'warning' ? 'bg-amber-500' : 'bg-blue-500'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground truncate">{item.action}</p>
                      <p className="text-xs text-muted-foreground">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Operations & Finance */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="glass border-border/50 animate-fade-up" style={{ animationDelay: '500ms' }}>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Truck className="w-5 h-5 text-primary" />
                Operations Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {operationsKPIs.map((kpi, index) => (
                  <div key={index} className="p-4 rounded-xl bg-card/50 border border-border/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-muted-foreground">{kpi.label}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    </div>
                    <p className="text-lg font-bold text-foreground">{kpi.value}</p>
                    <p className="text-xs text-muted-foreground">Target: {kpi.target}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-border/50 animate-fade-up" style={{ animationDelay: '550ms' }}>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Wallet className="w-5 h-5 text-primary" />
                Financial Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {financeKPIs.map((kpi, index) => (
                  <div key={index} className="p-4 rounded-xl bg-card/50 border border-border/50">
                    <span className="text-xs text-muted-foreground">{kpi.label}</span>
                    <div className="flex items-end gap-2 mt-1">
                      <p className="text-lg font-bold text-foreground">{kpi.value}</p>
                      <span className={`text-xs mb-0.5 ${kpi.trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
                        {kpi.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Products Table */}
        <Card className="glass border-border/50 animate-fade-up mb-8" style={{ animationDelay: '600ms' }}>
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                Top Products Report
              </CardTitle>
              <Button variant="ghost" size="sm" className="text-muted-foreground gap-1">
                <FileText className="w-4 h-4" />
                Export
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs text-muted-foreground border-b border-border/50">
                    <th className="pb-3 font-medium">Product</th>
                    <th className="pb-3 font-medium text-right">Units</th>
                    <th className="pb-3 font-medium text-right">Revenue</th>
                    <th className="pb-3 font-medium text-right">Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {topProducts.map((product, index) => (
                    <tr key={index} className="border-b border-border/30 hover:bg-card/50 transition-colors">
                      <td className="py-3 font-medium text-foreground text-sm">{product.name}</td>
                      <td className="py-3 text-right text-muted-foreground text-sm">{product.sales}</td>
                      <td className="py-3 text-right font-medium text-foreground text-sm">{product.revenue}</td>
                      <td className="py-3 text-right">
                        <span className={`inline-flex items-center gap-1 text-sm ${product.growth >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                          {product.growth >= 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                          {Math.abs(product.growth)}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '700ms' }}>
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto border border-border/50">
            <div className="flex justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary/20 flex items-center justify-center">
                <Settings className="w-5 h-5 text-primary" />
              </div>
              <div className="w-10 h-10 rounded-lg bg-gradient-primary/20 flex items-center justify-center">
                <UserCircle className="w-5 h-5 text-primary" />
              </div>
              <div className="w-10 h-10 rounded-lg bg-gradient-primary/20 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Admin Dashboards • Client Portals • Internal Tools
            </h3>
            <p className="text-muted-foreground mb-6 text-sm">
              We build secure, scalable web applications tailored to your business needs.
            </p>
            <Link to="/#contact">
              <Button variant="hero" size="lg" className="group">
                Build Your Platform
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
