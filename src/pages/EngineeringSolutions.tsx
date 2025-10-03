import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Factory, Zap, Package2, Coffee } from "lucide-react";
import heroEngineering from "@/assets/hero-engineering.jpg";

const productLines = [
  { name: "All-in-One Line", description: "Complete integrated processing solution" },
  { name: "Pulses Roasting Line", description: "Advanced roasting technology" },
  { name: "Roasting Line", description: "High-efficiency roasting systems" },
  { name: "Popped Chips Line", description: "Modern chips production" },
  { name: "Potato Chips Line", description: "Traditional chips processing" },
  { name: "Vacuum Frying Line", description: "Low-temperature frying technology" },
  { name: "Breakfast Cereals Line", description: "Cereal production systems" },
  { name: "Extruded Snacks Line", description: "Baked and fried snacks" },
  { name: "Pellet Line", description: "Pellet snacks processing" },
  { name: "Dry Pasta Line", description: "Pasta manufacturing" },
  { name: "Popcorn Line", description: "Popcorn production systems" },
  { name: "French Fries Line", description: "Complete french fries solution" },
];

const EngineeringSolutions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <img
          src={heroEngineering}
          alt="Engineering Solutions"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary-foreground mb-4">
            Engineering Solutions
          </h1>
          <p className="text-xl text-primary-foreground/90">
            The Best Food Engineering Solutions
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">
              Food Engineering Process Lines & Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art food processing equipment and complete production lines for the modern food industry.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productLines.map((line, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Factory className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-2">
                    {line.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {line.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-display font-semibold mb-2">Cutting-Edge Technology</h3>
              <p className="text-primary-foreground/80">Latest innovations in food processing</p>
            </div>
            <div className="text-center">
              <Package2 className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-display font-semibold mb-2">Complete Solutions</h3>
              <p className="text-primary-foreground/80">End-to-end processing lines</p>
            </div>
            <div className="text-center">
              <Coffee className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-display font-semibold mb-2">Expert Support</h3>
              <p className="text-primary-foreground/80">Dedicated technical assistance</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EngineeringSolutions;
