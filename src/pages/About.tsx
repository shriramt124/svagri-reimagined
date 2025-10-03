import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

const timeline = [
  { year: "2008", event: "Founded in Pune as Supply Chain Platform" },
  { year: "2011", event: "Capital raised from SONG Investments" },
  { year: "2012", event: "Started Engineering Division. Strategic Tie up with Mooij Agro & Agrico BV" },
  { year: "2014", event: "Joint Venture with Mooij Agro" },
  { year: "2015", event: "Started Aeroponic Facility in Pune. 2nd round of funds raised from Lok Capital & ASPADA" },
  { year: "2016", event: "Scaled up Food Engineering workshop facility in Pune" },
  { year: "2017", event: "Introduced proprietary potato varieties under SV Agri Brand" },
  { year: "2018", event: "3rd round of funds raised from ASPADA & Lok Capital" },
  { year: "2019", event: "Joint Venture formation with Agrico BV, Netherlands. Introduced low G.I. Potato Variety – Carisma" },
  { year: "2021", event: "Started Value added potato vertical. Collaboration with WayCool" },
  { year: "2022", event: "Patent for retail brands Carisma, Carisma Crest & Just Potate. First export of potatoes" },
  { year: "2023", event: "Expands to 5 Continents" },
  { year: "2024", event: "Crosses 150 cr in Revenue. Achieves PAT Positive" },
];

const team = [
  { name: "Hemant Gaur", role: "Founder & MD" },
  { name: "Kaushik Malpani", role: "Co-Founder" },
  { name: "Avijit Majumdar", role: "CEO" },
  { name: "Ranjeet Sahu", role: "Head - HR & Admin" },
  { name: "Ankit Maheshwari", role: "Finance Controller" },
  { name: "Asmita Kesharwani", role: "Company Secretary" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            About Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming the food industry since 2008 with innovative solutions and unmatched expertise
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Siddhi Vinayak Agri Processing Pvt. Ltd., founded in 2008, has transformed the potato industry with its dual focus on agriculture and engineering. Its Agri Business Division provides year-round process-grade potatoes through advanced storage solutions and a nationwide delivery network.
              </p>
              <p>
                The Food Engineering Business Division specializes in innovative snack solutions and future foods, leveraging cutting-edge technology for products like potato chips, roasted nuts, and various puffed snacks. With a state-of-the-art manufacturing facility and strategic partnerships, the company excels in delivering superior efficiency and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-8">
                  <div className="flex-shrink-0 w-24">
                    <div className="text-2xl font-display font-bold text-primary">{item.year}</div>
                  </div>
                  <div className="flex-1">
                    <Card>
                      <CardContent className="p-6">
                        <p className="text-muted-foreground">{item.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Users className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-4xl font-display font-bold mb-4">Meet the Team</h2>
            <p className="text-muted-foreground">Leadership driving innovation and excellence</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
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

export default About;
