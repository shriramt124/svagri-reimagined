
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Award, TrendingUp, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import heroAgri from "@/assets/hero-agri.jpg";
import heroEngineering from "@/assets/hero-engineering.jpg";
import heroIngredients from "@/assets/hero-ingredients.jpg";

const HeroSlider = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: heroAgri,
      tag: t('hero.premiumSeeds'),
      title: t('hero.yearRoundQuality'),
      subtitle: t('hero.directFromNetherlands'),
      description: t('hero.seedsDescription'),
      primaryCta: t('hero.exploreSeeds'),
      secondaryCta: t('hero.talkToExpert'),
      link: "/agri-solutions",
    },
    {
      image: heroEngineering,
      tag: t('hero.engineeringExcellence'),
      title: t('hero.completeFoodProcessing'),
      subtitle: t('hero.fromChipsToSnacks'),
      description: t('hero.engineeringDescription'),
      primaryCta: t('hero.viewSolutions'),
      secondaryCta: t('hero.requestDemo'),
      link: "/engineering-solutions",
    },
    {
      image: heroIngredients,
      tag: t('hero.qualityIngredients'),
      title: t('hero.premiumProcessing'),
      subtitle: t('hero.bestQuality'),
      description: t('hero.ingredientsDescription'),
      primaryCta: t('hero.browseIngredients'),
      secondaryCta: t('hero.getPricing'),
      link: "/ingredient-solutions",
    },
  ];

  const trustBadges = [
    { icon: Award, text: t('trust.isoCertified') },
    { icon: Users, text: `500+ ${t('trust.farmers')}` },
    { icon: TrendingUp, text: `40% ${t('trust.betterYield')}` },
    { icon: Shield, text: t('trust.qualityAssured') },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Image with overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          
          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                {/* Tag */}
                <div className="inline-block bg-accent/20 backdrop-blur-sm border border-accent/50 rounded-full px-4 py-2 mb-6">
                  <span className="text-accent font-semibold text-sm">{slide.tag}</span>
                </div>
                
                {/* Main Content */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium mb-4">
                  {slide.subtitle}
                </p>
                <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl">
                  {slide.description}
                </p>
                
                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link to={slide.link}>
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-lg w-full sm:w-auto"
                    >
                      {slide.primaryCta}
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-primary-foreground/30 bg-background/10 hover:bg-background/20 text-primary-foreground font-semibold px-8 py-6 text-lg backdrop-blur-sm w-full sm:w-auto"
                    >
                      {slide.secondaryCta}
                    </Button>
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
                  {trustBadges.map((badge, i) => (
                    <div key={i} className="flex items-center space-x-2 bg-background/10 backdrop-blur-sm rounded-lg px-4 py-3">
                      <badge.icon className="w-5 h-5 text-accent" />
                      <span className="text-sm font-medium text-primary-foreground">{badge.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-background/20 hover:bg-accent/80 backdrop-blur-sm p-3 rounded-full transition-all group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-primary-foreground group-hover:text-accent-foreground" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-background/20 hover:bg-accent/80 backdrop-blur-sm p-3 rounded-full transition-all group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-primary-foreground group-hover:text-accent-foreground" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-accent w-12"
                : "bg-primary-foreground/40 w-2 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
