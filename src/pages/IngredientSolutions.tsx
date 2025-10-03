import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Package, Heart, Boxes } from "lucide-react";
import heroIngredients from "@/assets/hero-ingredients.jpg";

const products = [
  {
    icon: Package,
    title: "Branded Potatoes",
    description: "Production & Distribution of Branded/Other Types of Potatoes for various applications",
  },
  {
    icon: Heart,
    title: "Low GI Potatoes",
    description: "Table grade lower GI potatoes for diabetics & healthy eating",
  },
  {
    icon: Boxes,
    title: "Processing Potatoes",
    description: "Potatoes suitable for processing – Chips, French Fries, Flakes, etc.",
  },
  {
    icon: Leaf,
    title: "Multi-use Varieties",
    description: "Multi-use potatoes suitable for Chips as well as for table purpose",
  },
];

const ingredients = [
  "Milled Potato Flakes",
  "Potato Granules",
  "Mushroom Popcorn Kernels",
  "Butterfly Popcorn Kernels",
];

const IngredientSolutions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <img
          src={heroIngredients}
          alt="Ingredient Solutions"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary-foreground mb-4">
            Ingredient Solutions
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Best Ingredients Solutions for your Food Processing
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Leaf className="w-6 h-6 text-accent" />
              <span className="text-accent font-medium">Premium Quality</span>
            </div>
            <h2 className="text-4xl font-display font-bold mb-4">
              Potato & Ingredient Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              High-quality ingredients for all your food processing needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                    <product.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-4">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-secondary rounded-2xl p-12">
            <h3 className="text-3xl font-display font-bold text-center mb-8">
              Additional Ingredients
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ingredients.map((ingredient, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <Boxes className="w-8 h-8 text-accent mx-auto mb-3" />
                  <p className="font-display font-medium">{ingredient}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-display font-bold text-accent mb-2">100%</div>
              <p className="text-primary-foreground/80">Quality Assured</p>
            </div>
            <div>
              <div className="text-5xl font-display font-bold text-accent mb-2">25+</div>
              <p className="text-primary-foreground/80">Potato Varieties</p>
            </div>
            <div>
              <div className="text-5xl font-display font-bold text-accent mb-2">24/7</div>
              <p className="text-primary-foreground/80">Availability</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IngredientSolutions;
