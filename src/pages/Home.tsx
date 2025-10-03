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
  { title: "iso", icon: Award },
  { title: "fssai", icon: CheckCircle },
  { title: "organic", icon: Leaf },
  { title: "export", icon: Award },
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
                <span className="text-accent font-medium">{t("home.About") || t("About")}</span>
              </div>
              <h2 className="text-4xl font-display font-bold mb-6">
                {t("home.aboutTitle")}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t("home.aboutDescription1")}
              </p>
              <p className="text-muted-foreground mb-6">
                {t("home.aboutDescription2")}
              </p>
              <Button className="bg-accent hover:bg-accent/90">{t("home.downloadBrochure")}</Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 bg-background/90 backdrop-blur-sm rounded-lg">
                  <h3 className="text-2xl font-display font-bold mb-4">{t("home.transformingAgriculture")}</h3>
                  <p className="text-muted-foreground">{t("home.since2008")}</p>
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
                <span className="text-accent font-medium">{t("home.watchOurStory")}</span>
              </div>
              <h2 className="text-4xl font-display font-bold mb-6">
                {t("home.farmToFork")}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t("home.videoDescription")}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {certificationKeys.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <cert.icon className="w-5 h-5 text-accent" />
                    <span className="text-sm font-medium">{t(`home.certifications.${cert.title}`)}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-accent hover:bg-accent/90">{t("home.learnMore")}</Button>
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
                <span className="text-accent font-medium">{t("home.ourFounder")}</span>
              </div>
              <h2 className="text-4xl font-display font-bold mb-6">
                {t("home.founderTitle")}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t("home.founderDescription1")}
              </p>
              <p className="text-muted-foreground mb-4">
                {t("home.founderQuote")}
              </p>
              <p className="text-sm text-muted-foreground italic">- {t("home.founderName")}</p>
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
              <span className="text-accent font-medium">{t("home.successStories")}</span>
            </div>
            <h2 className="text-4xl font-display font-bold mb-4">
              {t("home.whatFarmersSay")}
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
              <span className="text-accent font-medium">{t("home.whatWeDo")}</span>
            </div>
            <h2 className="text-4xl font-display font-bold mb-4">
              {t("home.agriBusinessOffering")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const serviceKey = service.title.toLowerCase().replace(/\s+/g, '');
              const key = serviceKey.includes('carisma') ? 'carismaSeeds' : 
                         serviceKey.includes('supply') ? 'supplyChain' :
                         serviceKey.includes('engineering') ? 'engineering' : 'advisory';
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-3">
                      {t(`home.services.${key}.title`)}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t(`home.services.${key}.description`)}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            {t("cta.searchEnds")}
          </h2>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            {t("cta.getStarted")}
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;