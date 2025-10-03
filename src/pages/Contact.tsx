import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "Sales",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", department: "Sales", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            {t("contact.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">{t("contact.sendMessage")}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">{t("contact.name")}</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t("contact.namePlaceholder")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t("contact.email")}</label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t("contact.emailPlaceholder")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t("contact.department")}</label>
                  <select
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  >
                    <option>{t("contact.sales")}</option>
                    <option>{t("contact.purchase")}</option>
                    <option>{t("contact.hr")}</option>
                    <option>{t("contact.admin")}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t("contact.message")}</label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t("contact.messagePlaceholder")}
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                  {t("contact.sendRequest")}
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold mb-6">{t("contact.contactInfo")}</h2>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold mb-1">{t("contact.email")}</h3>
                      <a href="mailto:sales@svagri.co.in" className="text-muted-foreground hover:text-accent">
                        sales@svagri.co.in
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold mb-1">{t("contact.phone")}</h3>
                      <a href="tel:+918087533304" className="text-muted-foreground hover:text-accent">
                        +91 8087533304
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold mb-1">{t("contact.location")}</h3>
                      <p className="text-muted-foreground">{t("footer.location")}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
