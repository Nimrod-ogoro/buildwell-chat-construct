import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import merchImage from "@/assets/merch-collection.jpg";

const Merchandise = () => {
  const [cart, setCart] = useState<string[]>([]);
  const { toast } = useToast();

  const products = [
    {
      id: "1",
      name: "BuildWell Hard Hat",
      price: 39.99,
      image: merchImage,
      rating: 4.8,
      description: "OSHA-compliant safety hard hat with BuildWell branding",
      category: "Safety Gear"
    },
    {
      id: "2", 
      name: "Safety Vest",
      price: 24.99,
      image: merchImage,
      rating: 4.9,
      description: "High-visibility safety vest with reflective strips",
      category: "Safety Gear"
    },
    {
      id: "3",
      name: "Work Boots",
      price: 129.99,
      image: merchImage,
      rating: 4.7,
      description: "Steel toe work boots for maximum protection",
      category: "Footwear"
    },
    {
      id: "4",
      name: "BuildWell T-Shirt",
      price: 19.99,
      image: merchImage,
      rating: 4.6,
      description: "Comfortable cotton t-shirt with company logo",
      category: "Apparel"
    },
    {
      id: "5",
      name: "Hoodie",
      price: 49.99,
      image: merchImage,
      rating: 4.8,
      description: "Warm fleece hoodie perfect for cool mornings",
      category: "Apparel"
    },
    {
      id: "6",
      name: "Tool Belt",
      price: 79.99,
      image: merchImage,
      rating: 4.9,
      description: "Heavy-duty leather tool belt with multiple pockets",
      category: "Tools"
    }
  ];

  const addToCart = (productId: string, productName: string) => {
    setCart(prev => [...prev, productId]);
    toast({
      title: "Added to cart!",
      description: `${productName} has been added to your cart.`,
    });
  };

  const getCartCount = (productId: string) => {
    return cart.filter(id => id === productId).length;
  };

  return (
    <section id="merchandise" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            BuildWell Merchandise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional gear and branded merchandise for construction professionals. 
            Quality products that represent the BuildWell standard of excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id}
              className="group hover:shadow-card-soft transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardHeader className="p-0">
                <div 
                  className="h-48 bg-cover bg-center rounded-t-lg relative overflow-hidden"
                  style={{ backgroundImage: `url(${product.image})` }}
                >
                  <Badge 
                    className="absolute top-4 left-4 bg-primary text-primary-foreground"
                  >
                    {product.category}
                  </Badge>
                  <div className="absolute top-4 right-4 flex items-center bg-background/90 rounded-full px-2 py-1">
                    <Star className="h-4 w-4 text-accent fill-current mr-1" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-xl font-semibold text-foreground mb-2">
                  {product.name}
                </CardTitle>
                
                <p className="text-muted-foreground mb-4 text-sm">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">
                    ${product.price}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {getCartCount(product.id) > 0 && (
                      <Badge variant="secondary">
                        {getCartCount(product.id)} in cart
                      </Badge>
                    )}
                    <Button 
                      variant="cta" 
                      size="sm"
                      onClick={() => addToCart(product.id, product.name)}
                      className="group-hover:scale-105 transition-transform"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <ShoppingCart className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">
              Cart ({cart.length} items)
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              View Cart
            </Button>
            <Button variant="cta" size="lg" disabled={cart.length === 0}>
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Merchandise;