import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import StatsSection from "@/components/StatsSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Cog, Package, Users } from "lucide-react";

const services = [
  {
    icon: Leaf,
    title: "Carisma Potato Seeds",
    description: "High quality potato seeds from Netherlands, now available in India for superior yields.",
  },
  {
    icon: Package,
    title: "Supply Chain Solution",
    description: "Partnered with the best buyers ensuring better commercial returns to producers.",
  },
  {
    icon: Cog,
    title: "Food Engineering Lines",
    description: "Complete processing lines for chips, snacks, french fries, and more.",
  },
  {
    icon: Users,
    title: "Advisory & Training",
    description: "Expert guidance for farmers, processors and value chain stakeholders.",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlider />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="w-6 h-6 text-accent" />
                <span className="text-accent font-medium">About</span>
              </div>
              <h2 className="text-4xl font-display font-bold mb-6">
                Comprehensive Agri and Engineering Solutions for the Food Industry
              </h2>
              <p className="text-muted-foreground mb-4">
                Siddhi Vinayak Agri Processing Pvt. Ltd., founded in 2008, has transformed the potato industry with its dual focus on agriculture and engineering. Its Agri Business Division provides year-round process-grade potatoes through advanced storage solutions and a nationwide delivery network.
              </p>
              <p className="text-muted-foreground mb-6">
                The Food Engineering Business Division specializes in innovative snack solutions and future foods, leveraging cutting-edge technology for products like potato chips, roasted nuts, and various puffed snacks.
              </p>
              <Button className="bg-accent hover:bg-accent/90">Download Brochure</Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 bg-background/90 backdrop-blur-sm rounded-lg">
                  <h3 className="text-2xl font-display font-bold mb-4">Transforming Agriculture</h3>
                  <p className="text-muted-foreground">Since 2008</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Leaf className="w-6 h-6 text-accent" />
              <span className="text-accent font-medium">What We Do</span>
            </div>
            <h2 className="text-4xl font-display font-bold mb-4">
              Agri Business Offering
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Your search for food processing solutions ends here
          </h2>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
