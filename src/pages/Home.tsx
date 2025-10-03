import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import StatsSection from "@/components/StatsSection";
import ChatbotButton from "@/components/ChatbotButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Cog, Package, Users, Play, Quote, CheckCircle, Award } from "lucide-react";
import ownerPhoto from "@/assets/owner-photo.jpg";
import farmVideo from "@/assets/farm-video-thumbnail.jpg";
import { useTranslation } from "react-i18next";

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

const certificationKeys = [
  { title: "ISO 9001:2015 Certified", icon: Award },
  { title: "FSSAI Licensed", icon: CheckCircle },
  { title: "Organic Certified", icon: Leaf },
  { title: "Export Quality", icon: Award },
];

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <ChatbotButton />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="w-6 h-6 text-accent" />
                <span className="text-accent font-medium">{t("About")}</span>
              </div>
              <h2 className="text-4xl font-display font-bold mb-6">
                {t("Comprehensive Agri and Engineering Solutions for the Food Industry")}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t("siddhi vinayank agro M. private limited, founded in 2008, has transformed the potato industry with its dual focus on agriculture and engineering. Its Agri Business Division provides year-round process-grade potatoes through advanced storage solutions and a nationwide delivery network.")}
              </p>
              <p className="text-muted-foreground mb-6">
                {t("The Food Engineering Business Division specializes in innovative snack solutions and future foods, leveraging cutting-edge technology for products like potato chips, roasted nuts, and various puffed snacks.")}
              </p>
              <Button className="bg-accent hover:bg-accent/90">{t("Download Brochure")}</Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 bg-background/90 backdrop-blur-sm rounded-lg">
                  <h3 className="text-2xl font-display font-bold mb-4">{t("Transforming Agriculture")}</h3>
                  <p className="text-muted-foreground">{t("Since 2008")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl group cursor-pointer">
              <img 
                src={farmVideo} 
                alt="Our Farm" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-accent-foreground ml-1" />
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="w-6 h-6 text-accent" />
                <span className="text-accent font-medium">{t("Watch Our Story")}</span>
              </div>
              <h2 className="text-4xl font-display font-bold mb-6">
                {t("From Farm to Fork: Our Journey")}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t("Watch how we're revolutionizing potato farming in India with our premium Carisma seeds from Netherlands. See our farms, meet our farmers, and understand our quality process.")}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {certificationKeys.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <cert.icon className="w-5 h-5 text-accent" />
                    <span className="text-sm font-medium">{t(cert.title)}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-accent hover:bg-accent/90">{t("Learn More About Us")}</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Users className="w-6 h-6 text-accent" />
                <span className="text-accent font-medium">{t("Our Founder")}</span>
              </div>
              <h2 className="text-4xl font-display font-bold mb-6">
                {t("Meet the Visionary Behind siddhi vinayank agro M. private limited")}
              </h2>
              <p className="text-muted-foreground mb-4">
                <strong>{t("Mr. kuldeep singh rathore")}</strong>, {t("Founder & CEO, started his journey in 2008 with a vision to transform Indian agriculture. With over 15 years of experience in agri-business and a deep understanding of farmer challenges, he built siddhi vinayank agro M. private limited to bridge the gap between quality seeds and farmers.")}
              </p>
              <p className="text-muted-foreground mb-4">
                {t('"Every farmer deserves access to world-class seeds and fair market prices. That\'s why we brought Carisma potatoes from Netherlands to India and created a complete ecosystem from farm to market."')}
              </p>
              <p className="text-sm text-muted-foreground italic">{t("- kuldeep singh rathore, Founder")}</p>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={ownerPhoto} 
                alt="Founder - kuldeep singh rathore" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Quote className="w-6 h-6 text-accent" />
              <span className="text-accent font-medium">{t("Success Stories")}</span>
            </div>
            <h2 className="text-4xl font-display font-bold mb-4">
              {t("What Farmers Say About Us")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Testimonials will be fetched or defined elsewhere and translated */}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Leaf className="w-6 h-6 text-accent" />
              <span className="text-accent font-medium">{t("What We Do")}</span>
            </div>
            <h2 className="text-4xl font-display font-bold mb-4">
              {t("Agri Business Offering")}
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
                    {t(service.title)}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t(service.description)}
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
            {t("Your search for food processing solutions ends here")}
          </h2>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            {t("Get Started Today")}
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;