import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, TrendingUp, Sprout, BookOpen } from "lucide-react";
import heroAgri from "@/assets/hero-agri.jpg";

const services = [
  {
    icon: Sprout,
    title: "Carisma Potato Seeds",
    description: "The CARISMA Potato seed was born in Netherlands and after being popular in Australia, Canada, South Africa and other European nations, it is now being made available in India. High quality seeds for superior yields and better disease resistance.",
  },
  {
    icon: TrendingUp,
    title: "Supply Chain Solution",
    description: "Partnered with the best buyers (for both table & process grades) in the industry in our endeavour to ensure better commercial returns to the producers of potatoes. Comprehensive logistics and distribution network.",
  },
  {
    icon: Leaf,
    title: "Potato Seeds Variety",
    description: "Producing high quality potato tubers (seeds) of more than 25 varieties. Each variety is carefully selected and cultivated to meet specific market demands and growing conditions.",
  },
  {
    icon: BookOpen,
    title: "Advisory & Training",
    description: "Providing advisory and training that cater to relevant needs of potato farmers, processors and other value chain stakeholders. Expert guidance on cultivation practices and crop management.",
  },
];

const AgriSolutions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <img
          src={heroAgri}
          alt="Agri Solutions"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary-foreground mb-4">
            Agri Solutions
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Find Potatoes All Through the Year
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Leaf className="w-6 h-6 text-accent" />
              <span className="text-accent font-medium">Our Services</span>
            </div>
            <h2 className="text-4xl font-display font-bold mb-4">
              Comprehensive Agricultural Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide end-to-end agricultural solutions from premium quality seeds to supply chain management and expert training.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-display font-bold text-primary mb-2">25+</div>
              <p className="text-muted-foreground">Potato Varieties</p>
            </div>
            <div>
              <div className="text-5xl font-display font-bold text-primary mb-2">50k+</div>
              <p className="text-muted-foreground">Farmers Supported</p>
            </div>
            <div>
              <div className="text-5xl font-display font-bold text-primary mb-2">5</div>
              <p className="text-muted-foreground">Continents Reach</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgriSolutions;
