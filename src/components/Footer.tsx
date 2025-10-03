import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold">SV</span>
              </div>
              <span className="font-display font-bold text-lg">Agri Solutions</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Comprehensive Agri and Engineering Solutions for the Food Industry
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/agri-solutions" className="text-sm hover:text-accent transition-colors">
                  Agri Solutions
                </Link>
              </li>
              <li>
                <Link to="/engineering-solutions" className="text-sm hover:text-accent transition-colors">
                  Engineering Solutions
                </Link>
              </li>
              <li>
                <Link to="/ingredient-solutions" className="text-sm hover:text-accent transition-colors">
                  Ingredient Solutions
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Potato Seeds & Supply Chain</li>
              <li>Food Processing Lines</li>
              <li>Engineering Solutions</li>
              <li>Advisory & Training</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:sales@svagri.co.in" className="hover:text-accent transition-colors">
                  sales@svagri.co.in
                </a>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+918087533304" className="hover:text-accent transition-colors">
                  +91 8087533304
                </a>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">Pune, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Siddhivinayak Agri Processing Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
