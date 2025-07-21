import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Wrench, Truck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Home className="h-12 w-12 text-primary" />,
      title: "Residential Construction",
      description: "Custom homes, additions, and renovations tailored to your lifestyle and budget.",
      features: ["New Home Construction", "Room Additions", "Kitchen & Bath Remodeling", "Foundation Work"]
    },
    {
      icon: <Building2 className="h-12 w-12 text-primary" />,
      title: "Commercial Building",
      description: "Professional construction for offices, retail spaces, and industrial facilities.",
      features: ["Office Buildings", "Retail Spaces", "Warehouses", "Industrial Facilities"]
    },
    {
      icon: <Wrench className="h-12 w-12 text-primary" />,
      title: "Renovation & Remodeling",
      description: "Transform your existing space with our expert renovation and remodeling services.",
      features: ["Complete Renovations", "Interior Design", "Structural Changes", "Historic Restoration"]
    },
    {
      icon: <Truck className="h-12 w-12 text-primary" />,
      title: "Project Management",
      description: "End-to-end project management ensuring timely delivery and quality results.",
      features: ["Timeline Planning", "Budget Management", "Quality Control", "Permit Assistance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Construction Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive construction services for residential and commercial projects,
            delivering quality craftsmanship and exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card-soft transition-all duration-300 hover:-translate-y-2 border-border/50"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="text-sm text-muted-foreground flex items-center justify-center"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="cta" size="lg">
            Request a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;