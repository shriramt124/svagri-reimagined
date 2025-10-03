import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroAgri from "@/assets/hero-agri.jpg";
import heroEngineering from "@/assets/hero-engineering.jpg";
import heroIngredients from "@/assets/hero-ingredients.jpg";

const slides = [
  {
    image: heroAgri,
    title: "Welcome to Agri Solutions",
    subtitle: "Find Potatoes All Through the Year!",
    link: "/agri-solutions",
  },
  {
    image: heroEngineering,
    title: "Welcome to Engineering Solutions",
    subtitle: "The Best Food Engineering Solutions",
    link: "/engineering-solutions",
  },
  {
    image: heroIngredients,
    title: "Welcome to Ingredients Solutions",
    subtitle: "Best Ingredients Solutions for your Food Processing!",
    link: "/ingredient-solutions",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
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
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <p className="text-accent font-medium text-lg mb-4 animate-fade-in">
                {slide.subtitle}
              </p>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-8 animate-fade-in">
                {slide.title}
              </h1>
              <Link to={slide.link}>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg"
                >
                  Discover More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-background/20 hover:bg-background/40 backdrop-blur-sm p-2 rounded-full transition-all"
      >
        <ChevronLeft className="w-8 h-8 text-primary-foreground" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-background/20 hover:bg-background/40 backdrop-blur-sm p-2 rounded-full transition-all"
      >
        <ChevronRight className="w-8 h-8 text-primary-foreground" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-accent w-8"
                : "bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
