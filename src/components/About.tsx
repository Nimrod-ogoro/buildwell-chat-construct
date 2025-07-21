import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Shield, Users, Clock } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Award-Winning",
      description: "Recognized for excellence in construction and customer service"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Licensed & Insured",
      description: "Fully licensed, bonded, and insured for your peace of mind"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Expert Team",
      description: "Skilled professionals with decades of combined experience"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "On-Time Delivery",
      description: "Committed to completing projects on schedule and within budget"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Building Excellence Since 1998
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              BuildWell Construction has been transforming communities through quality construction 
              for over 25 years. We pride ourselves on delivering exceptional craftsmanship, 
              innovative solutions, and unmatched customer service.
            </p>
            
            <p className="text-muted-foreground mb-8">
              Our team of skilled professionals brings together decades of experience in residential 
              and commercial construction. From small renovations to large-scale developments, 
              we approach every project with the same commitment to quality and attention to detail.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                <span className="text-foreground">Family-owned and operated business</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                <span className="text-foreground">Comprehensive warranty on all work</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                <span className="text-foreground">Eco-friendly construction practices</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                <span className="text-foreground">Free project consultations and estimates</span>
              </div>
            </div>

            <Button variant="cta" size="lg">
              Learn About Our Process
            </Button>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-card-soft transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardContent className="p-0 text-center">
                  <div className="flex justify-center mb-4">
                    {achievement.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;