
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Satellite, TrendingUp, Map, BarChart3, Database, Calendar } from "lucide-react";

export default function Gallery() {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // Demo screenshots and visualizations
  const demoItems = [
    {
      title: "NDVI Analysis Dashboard",
      description: "Real-time vegetation health monitoring with color-coded NDVI values",
      icon: <TrendingUp className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      category: "Dashboard"
    },
    {
      title: "Satellite Imagery Comparison",
      description: "Side-by-side monthly comparisons showing environmental changes",
      icon: <Satellite className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=600&fit=crop",
      category: "Analysis"
    },
    {
      title: "Interactive Map Interface",
      description: "User-friendly map with layered environmental data visualization",
      icon: <Map className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1597149961639-83c53c7d9b95?w=800&h=600&fit=crop",
      category: "Interface"
    },
    {
      title: "Trend Analysis Charts",
      description: "Statistical charts showing long-term environmental trends",
      icon: <BarChart3 className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      category: "Reports"
    },
    {
      title: "Data Management System",
      description: "Comprehensive database interface for historical data access",
      icon: <Database className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop",
      category: "Database"
    },
    {
      title: "Automated Reporting",
      description: "Monthly reports generated automatically with key insights",
      icon: <Calendar className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      category: "Reports"
    }
  ];

  const categories = ["All", "Dashboard", "Analysis", "Interface", "Reports", "Database"];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary/10 to-sea-light/20 dark:from-primary/20 dark:to-sea-dark/20">
          <div className="container relative z-10 pt-20">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                System Demo
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                Dashboard & Visualization Gallery
              </h1>
              <p className="text-muted-foreground">
                Explore our interactive environmental monitoring platform through screenshots and demo visualizations
              </p>
            </div>
          </div>
        </section>
        
        {/* Gallery Grid */}
        <section className="py-16">
          <div className="container">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full border border-primary/20 text-sm font-medium transition-colors hover:bg-primary hover:text-white"
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demoItems.map((item, index) => (
                <div 
                  key={index} 
                  className="group glass-card rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center mb-2">
                        {item.icon}
                        <span className="ml-2 text-sm bg-primary/80 px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Highlight */}
        <section className="py-16 bg-card">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Key Visualization Features
              </h2>
              <p className="text-muted-foreground">
                Our platform provides comprehensive tools for environmental data analysis and monitoring
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-card p-6 rounded-xl text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">NDVI Mapping</h3>
                <p className="text-muted-foreground">Real-time vegetation health visualization with detailed color mapping</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl text-center">
                <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Trend Analysis</h3>
                <p className="text-muted-foreground">Statistical charts showing environmental changes over time</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl text-center">
                <Map className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Maps</h3>
                <p className="text-muted-foreground">User-friendly interface with multi-layer environmental data</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
