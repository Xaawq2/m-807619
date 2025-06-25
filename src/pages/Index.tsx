
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Satellite, TrendingUp, Database, Map, BarChart3, Clock, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Index() {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // How it works steps
  const processSteps = [
    {
      icon: <Satellite className="h-12 w-12 text-primary" />,
      title: "Satellite Data Collection",
      description: "Automated monthly retrieval of Sentinel satellite imagery for target monitoring areas"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "Environmental Analysis",
      description: "AI-powered analysis of NDVI, soil conditions, water presence, and vegetation health"
    },
    {
      icon: <Database className="h-12 w-12 text-primary" />,
      title: "Data Storage & Tracking",
      description: "Secure storage in PostgreSQL/PostGIS database with temporal tracking capabilities"
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
      title: "Report Generation",
      description: "Automated comparative reports showing environmental changes and trends over time"
    }
  ];

  // Key features
  const features = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Monthly Automated Updates",
      description: "System automatically processes new satellite imagery every month without manual intervention"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "NDVI & Environmental Indices",
      description: "Advanced analysis of vegetation health, soil moisture, and land cover changes"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Interactive Comparisons",
      description: "Side-by-side monthly comparisons with visual charts and statistical analysis"
    },
    {
      icon: <Map className="h-8 w-8 text-primary" />,
      title: "User-Friendly Interface",
      description: "Simple map interface and reporting dashboard accessible to all users"
    }
  ];

  // Technology stack
  const technologies = [
    "Python & ArcGIS Pro",
    "PostgreSQL/PostGIS",
    "Dash/Streamlit",
    "Sentinel Satellite API",
    "Machine Learning Models",
    "Automated Workflows"
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        
        {/* How It Works Section */}
        <section id="how-it-works" className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                Process Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                How Our System Works
              </h2>
              <p className="text-muted-foreground">
                Our automated pipeline transforms raw satellite data into actionable environmental insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 rounded-xl text-center animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-primary/10">
                      {step.icon}
                    </div>
                  </div>
                  <div className="mb-2 text-sm text-primary font-semibold">
                    Step {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="section bg-card">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                Key Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Powerful Environmental Monitoring
              </h2>
              <p className="text-muted-foreground">
                Advanced satellite imagery analysis with automated reporting and trend detection
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 rounded-xl animate-fade-in flex items-start space-x-4"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Demo Section */}
        <section className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                System Preview
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Dashboard & Reports
              </h2>
              <p className="text-muted-foreground">
                Interactive visualizations and comprehensive reporting tools
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Dashboard Mockup */}
              <div className="animate-fade-in">
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Interactive Dashboard</h3>
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-sea-light/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Map className="h-16 w-16 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground">Live Map Interface</p>
                      <p className="text-sm text-muted-foreground">NDVI Visualization & Analysis</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Reports Mockup */}
              <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Comparative Reports</h3>
                  <div className="aspect-video bg-gradient-to-br from-sea-light/20 to-primary/10 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="h-16 w-16 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground">Monthly Trend Analysis</p>
                      <p className="text-sm text-muted-foreground">Environmental Change Detection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button asChild size="lg" className="btn-primary">
                <Link to="/gallery">
                  <Eye className="mr-2 h-4 w-4" />
                  View Screenshots
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Technology Section */}
        <section className="section bg-card">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                Technology Stack
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Built with Industry-Leading Tools
              </h2>
              <p className="text-muted-foreground">
                Leveraging the best geospatial and data science technologies for reliable monitoring
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="glass-card p-4 rounded-lg text-center animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <p className="font-medium">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="relative py-24 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Monitor Your Environment?
              </h2>
              <p className="text-muted-foreground mb-8">
                Get started with automated satellite monitoring and environmental analysis for your project area
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="btn-primary min-w-[200px]">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="min-w-[200px]">
                  <Link to="/gallery">View Demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
