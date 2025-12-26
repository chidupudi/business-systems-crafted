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
  Clock,
  Zap,
  Home,
  PieChart,
  Wallet,
  FileText,
  RefreshCw
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";

// Simulated real-time data
const useRealTimeValue = (baseValue: number, variance: number = 0.02) => {
  const [value, setValue] = useState(baseValue);
  useEffect(() => {
    const interval = setInterval(() => {
      const change = baseValue * variance * (Math.random() - 0.5);
      setValue(prev => Math.max(0, prev + change));
    }, 2000);
    return () => clearInterval(interval);
  }, [baseValue, variance]);
  return value;
};

const stats = [
  {
    title: "Total Revenue",
    value: 2456890,
    format: "currency",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "from-emerald-500 to-emerald-600",
  },
  {
    title: "Orders Today",
    value: 156,
    format: "number",
    change: "+8.2%",
    trend: "up",
    icon: ShoppingCart,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Active Customers",
    value: 2847,
    format: "number",
    change: "+23.1%",
    trend: "up",
    icon: Users,
    color: "from-violet-500 to-violet-600",
  },
  {
    title: "Conversion Rate",
    value: 4.8,
    format: "percent",
    change: "+1.2%",
    trend: "up",
    icon: Target,
    color: "from-amber-500 to-amber-600",
  },
];

// Sales data for chart visualization
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
  { label: "Fulfillment Rate", value: "98.2%", status: "good", target: "95%" },
  { label: "Avg. Processing Time", value: "2.4 hrs", status: "good", target: "< 4 hrs" },
  { label: "Return Rate", value: "1.8%", status: "good", target: "< 3%" },
  { label: "Stock Accuracy", value: "99.1%", status: "good", target: "99%" },
];

const financeKPIs = [
  { label: "Gross Margin", value: "42.5%", trend: "up", change: "+2.1%" },
  { label: "Operating Costs", value: "₹8.4L", trend: "down", change: "-5.2%" },
  { label: "Cash Flow", value: "₹15.2L", trend: "up", change: "+18.3%" },
  { label: "Receivables", value: "₹4.1L", trend: "down", change: "-12.5%" },
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

const Dashboard = () => {
  const [lastUpdate, setLastUpdate] = useState(new Date());
  
  useEffect(() => {
    const interval = setInterval(() => setLastUpdate(new Date()), 30000);
    return () => clearInterval(interval);
  }, []);

  const formatValue = (value: number, format: string) => {
    if (format === "currency") return `₹${(value / 100000).toFixed(1)}L`;
    if (format === "percent") return `${value.toFixed(1)}%`;
    return Math.round(value).toLocaleString();
  };

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
            <span className="text-muted-foreground hidden sm:block">|</span>
            <span className="text-muted-foreground text-sm hidden sm:block">Executive Dashboard</span>
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
                <span className="hidden sm:inline">Back to Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Title Section */}
        <div className="mb-8 animate-fade-up">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="w-6 h-6 text-primary" />
            <span className="text-sm font-medium text-primary">Decision-Ready Dashboard</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Real-Time <span className="text-gradient">KPIs & Insights</span>
          </h1>
          <p className="text-muted-foreground">Data visualization built for clarity and speed.</p>
        </div>

        {/* Main KPI Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="glass border-border/50 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow animate-fade-up group overflow-hidden relative"
              style={{ animationDelay: `${index * 100}ms` }}
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
                <p className="text-xl md:text-2xl font-bold text-foreground">{formatValue(stat.value, stat.format)}</p>
                {/* Subtle activity indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sales Chart & Activity */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Sales Trend Chart */}
          <Card className="lg:col-span-2 glass border-border/50 animate-fade-up" style={{ animationDelay: '400ms' }}>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Sales Trend
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="text-xs h-7 px-2 text-muted-foreground">7D</Button>
                  <Button variant="glass" size="sm" className="text-xs h-7 px-2">30D</Button>
                  <Button variant="ghost" size="sm" className="text-xs h-7 px-2 text-muted-foreground">90D</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Simple Bar Chart Visualization */}
              <div className="h-48 md:h-64 flex items-end justify-between gap-2 md:gap-4 pt-4">
                {salesData.map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2 group">
                    <div className="relative w-full flex justify-center">
                      <div 
                        className="w-full max-w-12 rounded-t-lg bg-gradient-to-t from-primary/80 to-primary transition-all duration-500 group-hover:from-primary group-hover:to-primary-foreground/20"
                        style={{ height: `${item.value * 2.5}px` }}
                      >
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-foreground">
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

          {/* Live Activity Feed */}
          <Card className="glass border-border/50 animate-fade-up" style={{ animationDelay: '500ms' }}>
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
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-card/50 hover:bg-card/80 transition-colors"
                  >
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

        {/* Operations & Finance Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Operations KPIs */}
          <Card className="glass border-border/50 animate-fade-up" style={{ animationDelay: '600ms' }}>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Truck className="w-5 h-5 text-primary" />
                Operations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {operationsKPIs.map((kpi, index) => (
                  <div key={index} className="p-4 rounded-xl bg-card/50 border border-border/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-muted-foreground">{kpi.label}</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xl font-bold text-foreground">{kpi.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">Target: {kpi.target}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Finance KPIs */}
          <Card className="glass border-border/50 animate-fade-up" style={{ animationDelay: '700ms' }}>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Wallet className="w-5 h-5 text-primary" />
                Finance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {financeKPIs.map((kpi, index) => (
                  <div key={index} className="p-4 rounded-xl bg-card/50 border border-border/50">
                    <span className="text-xs text-muted-foreground">{kpi.label}</span>
                    <div className="flex items-end gap-2 mt-2">
                      <p className="text-xl font-bold text-foreground">{kpi.value}</p>
                      <span className={`text-xs mb-1 ${kpi.trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
                        {kpi.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Products */}
        <Card className="glass border-border/50 animate-fade-up mb-8" style={{ animationDelay: '800ms' }}>
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                Top Products
              </CardTitle>
              <Button variant="ghost" size="sm" className="text-muted-foreground gap-1">
                <FileText className="w-4 h-4" />
                Export Report
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs text-muted-foreground border-b border-border/50">
                    <th className="pb-3 font-medium">Product</th>
                    <th className="pb-3 font-medium text-right">Sales</th>
                    <th className="pb-3 font-medium text-right">Revenue</th>
                    <th className="pb-3 font-medium text-right">Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {topProducts.map((product, index) => (
                    <tr key={index} className="border-b border-border/30 hover:bg-card/50 transition-colors">
                      <td className="py-4">
                        <span className="font-medium text-foreground">{product.name}</span>
                      </td>
                      <td className="py-4 text-right text-muted-foreground">{product.sales}</td>
                      <td className="py-4 text-right font-medium text-foreground">{product.revenue}</td>
                      <td className="py-4 text-right">
                        <span className={`inline-flex items-center gap-1 ${product.growth >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
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

        {/* Footer CTA */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '900ms' }}>
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <PieChart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">
              Custom Reports for Your Business
            </h3>
            <p className="text-muted-foreground mb-6">
              This is a demo. We build dashboards tailored to your Operations, Sales, and Finance needs.
            </p>
            <Link to="/#contact">
              <Button variant="hero" size="lg" className="group">
                Get Your Custom Dashboard
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
