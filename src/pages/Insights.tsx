import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, TrendingUp, Lightbulb } from "lucide-react";

const insights = [
  {
    icon: TrendingUp,
    title: "Market Trends in Food Processing",
    description: "Latest trends and innovations shaping the future of food processing industry",
    date: "March 2024",
  },
  {
    icon: Lightbulb,
    title: "Sustainable Agriculture Practices",
    description: "How modern technology is making agriculture more sustainable and efficient",
    date: "February 2024",
  },
  {
    icon: FileText,
    title: "Guide to Potato Varieties",
    description: "Comprehensive guide to selecting the right potato varieties for your needs",
    date: "January 2024",
  },
];

const Insights = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest industry insights, trends, and best practices
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                    <insight.icon className="w-8 h-8 text-accent" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{insight.date}</p>
                  <h3 className="text-2xl font-display font-semibold mb-4">
                    {insight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {insight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insights;
