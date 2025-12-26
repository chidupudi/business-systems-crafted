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
  AlertCircle,
  CheckCircle2,
  Clock,
  Zap,
  Home
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    title: "Total Revenue",
    value: "₹24,56,890",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "from-emerald-500 to-emerald-600",
  },
  {
    title: "Orders Today",
    value: "156",
    change: "+8.2%",
    trend: "up",
    icon: ShoppingCart,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Active Customers",
    value: "2,847",
    change: "+23.1%",
    trend: "up",
    icon: Users,
    color: "from-violet-500 to-violet-600",
  },
  {
    title: "Pending Shipments",
    value: "43",
    change: "-5.4%",
    trend: "down",
    icon: Truck,
    color: "from-amber-500 to-amber-600",
  },
];

const recentOrders = [
  { id: "ORD-7821", customer: "Rahul Sharma", amount: "₹12,450", status: "completed", time: "2 min ago" },
  { id: "ORD-7820", customer: "Priya Patel", amount: "₹8,900", status: "processing", time: "15 min ago" },
  { id: "ORD-7819", customer: "Amit Kumar", amount: "₹45,200", status: "completed", time: "32 min ago" },
  { id: "ORD-7818", customer: "Sneha Reddy", amount: "₹6,750", status: "pending", time: "1 hour ago" },
  { id: "ORD-7817", customer: "Vikram Singh", amount: "₹23,100", status: "completed", time: "2 hours ago" },
];

const inventoryAlerts = [
  { product: "Wireless Mouse (Black)", stock: 12, threshold: 50, urgency: "critical" },
  { product: "USB-C Hub 7-in-1", stock: 28, threshold: 40, urgency: "warning" },
  { product: "Laptop Stand Aluminum", stock: 45, threshold: 60, urgency: "warning" },
];

const automationStats = [
  { label: "Orders Auto-Processed", value: "94%", icon: Zap },
  { label: "Invoices Generated", value: "1,247", icon: CheckCircle2 },
  { label: "WhatsApp Notifications", value: "3,892", icon: Activity },
  { label: "Avg. Response Time", value: "< 2 min", icon: Clock },
];

const Dashboard = () => {
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
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground text-sm">Demo Dashboard</span>
          </div>
          <Link to="/">
            <Button variant="glass" size="sm" className="gap-2">
              <Home className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-up">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Good Morning, <span className="text-gradient">Admin</span>
          </h1>
          <p className="text-muted-foreground">Here's what's happening with your business today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="glass border-border/50 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow animate-fade-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-medium ${stat.trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {stat.change}
                    {stat.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Recent Orders */}
          <Card className="lg:col-span-2 glass border-border/50 animate-fade-up" style={{ animationDelay: '400ms' }}>
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-primary" />
                Recent Orders
              </CardTitle>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order, index) => (
                  <div 
                    key={order.id} 
                    className="flex items-center justify-between p-4 rounded-xl bg-card/50 hover:bg-card/80 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                        {order.customer.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{order.customer}</p>
                        <p className="text-sm text-muted-foreground">{order.id} • {order.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-semibold text-foreground">{order.amount}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === 'completed' ? 'bg-emerald-500/10 text-emerald-500' :
                        order.status === 'processing' ? 'bg-blue-500/10 text-blue-500' :
                        'bg-amber-500/10 text-amber-500'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Inventory Alerts */}
          <Card className="glass border-border/50 animate-fade-up" style={{ animationDelay: '500ms' }}>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                Inventory Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {inventoryAlerts.map((item, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-xl bg-card/50 border border-border/50"
                  >
                    <div className="flex items-start gap-3">
                      <AlertCircle className={`w-5 h-5 mt-0.5 ${item.urgency === 'critical' ? 'text-rose-500' : 'text-amber-500'}`} />
                      <div className="flex-1">
                        <p className="font-medium text-foreground text-sm">{item.product}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Stock: <span className={item.urgency === 'critical' ? 'text-rose-500' : 'text-amber-500'}>{item.stock}</span> / Min: {item.threshold}
                        </p>
                        <div className="mt-2 h-1.5 bg-muted/30 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${item.urgency === 'critical' ? 'bg-rose-500' : 'bg-amber-500'}`}
                            style={{ width: `${(item.stock / item.threshold) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <Button variant="glass" className="w-full mt-2">
                  Manage Inventory
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Automation Stats */}
        <Card className="glass border-border/50 animate-fade-up" style={{ animationDelay: '600ms' }}>
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              Automation Performance
              <span className="ml-2 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">Live</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {automationStats.map((stat, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-card/50 border border-border/50 text-center group hover:border-primary/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-gradient mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <div className="mt-12 text-center animate-fade-up" style={{ animationDelay: '700ms' }}>
          <p className="text-muted-foreground text-sm">
            This is a demo dashboard showcasing what we can build for your business.
          </p>
          <Link to="/#contact">
            <Button variant="hero" size="lg" className="mt-4 group">
              Get Your Custom Dashboard
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
