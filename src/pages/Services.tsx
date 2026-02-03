import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Truck, 
  Globe2, 
  Users, 
  Headphones,
  Package,
  CreditCard,
  BarChart3,
  MapPin,
  Plane,
  Ship,
  Warehouse,
  Handshake,
  Store,
  Settings,
  HeadphonesIcon,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeading, FadeIn, AnimatedCard } from "@/components/ui/animations";

const services = [
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-Commerce & Online Retail Services",
    description: "Complete digital commerce solutions to help businesses thrive in the online marketplace.",
    features: [
      { icon: Store, text: "Online storefront development and management" },
      { icon: CreditCard, text: "Secure payment processing integration" },
      { icon: Package, text: "Order management and fulfillment" },
      { icon: BarChart3, text: "Analytics and performance tracking" },
    ],
    highlights: [
      "Multi-channel selling capabilities",
      "Inventory management systems",
      "Customer relationship tools",
      "Mobile-optimized platforms",
    ],
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Logistics & Delivery Services",
    description: "End-to-end logistics solutions with nationwide coverage and real-time tracking.",
    features: [
      { icon: MapPin, text: "Nationwide delivery network (36 states + FCT)" },
      { icon: Package, text: "Warehousing and inventory storage" },
      { icon: Truck, text: "Same-day and next-day delivery options" },
      { icon: Settings, text: "Real-time tracking and notifications" },
    ],
    highlights: [
      "Fleet management optimization",
      "Last-mile delivery expertise",
      "Cold chain logistics",
      "Secure handling protocols",
    ],
  },
  {
    id: "import-export",
    icon: Globe2,
    title: "Importation & Exportation Services",
    description: "Seamless international trade facilitation with expert customs handling.",
    features: [
      { icon: Ship, text: "Sea freight and ocean shipping" },
      { icon: Plane, text: "Air freight and express cargo" },
      { icon: Warehouse, text: "Customs clearance and documentation" },
      { icon: Globe2, text: "Global shipping network access" },
    ],
    highlights: [
      "Trade compliance expertise",
      "Duty and tariff optimization",
      "Door-to-door international delivery",
      "Cargo insurance options",
    ],
  },
  {
    id: "distribution",
    icon: Users,
    title: "Agency & Distribution Services",
    description: "Strategic partnerships helping brands establish and grow their presence in Nigeria.",
    features: [
      { icon: Handshake, text: "Brand representation and agency" },
      { icon: Store, text: "Retail distribution networks" },
      { icon: Warehouse, text: "Regional warehousing solutions" },
      { icon: BarChart3, text: "Market analysis and insights" },
    ],
    highlights: [
      "Exclusive distribution agreements",
      "Market entry strategy support",
      "Channel partner management",
      "Sales force deployment",
    ],
  },
  {
    id: "support",
    icon: Headphones,
    title: "Ancillary & Support Services",
    description: "Comprehensive support services to enhance your core business operations.",
    features: [
      { icon: HeadphonesIcon, text: "24/7 customer support services" },
      { icon: Settings, text: "Business process outsourcing" },
      { icon: BarChart3, text: "Consulting and advisory services" },
      { icon: Package, text: "Returns management and processing" },
    ],
    highlights: [
      "Quality assurance protocols",
      "Training and development",
      "Technology integration support",
      "Performance optimization",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-secondary blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-secondary/50 blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Comprehensive{" "}
              <span className="text-gradient-gold">Business Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              From e-commerce platforms to international logistics, we provide 
              end-to-end services designed to help your business succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom space-y-24">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <FadeIn direction={index % 2 === 0 ? "left" : "right"}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                    <service.icon size={18} />
                    Service {index + 1} of {services.length}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    {service.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature) => (
                      <div 
                        key={feature.text}
                        className="flex items-start gap-3 p-4 rounded-xl bg-muted"
                      >
                        <feature.icon size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="secondary" size="lg" asChild>
                    <Link to="/contact">
                      Get Started
                      <ArrowRight size={18} />
                    </Link>
                  </Button>
                </div>
              </FadeIn>

              <FadeIn direction={index % 2 === 0 ? "right" : "left"}>
                <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="bg-card rounded-3xl p-8 border border-border">
                    <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                      <service.icon size={40} className="text-secondary" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-6">
                      Key Highlights
                    </h3>
                    <ul className="space-y-4">
                      {service.highlights.map((highlight) => (
                        <li 
                          key={highlight}
                          className="flex items-center gap-3 text-muted-foreground"
                        >
                          <CheckCircle2 size={20} className="text-secondary flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`absolute -bottom-6 ${index % 2 === 0 ? "-right-6" : "-left-6"} w-32 h-32 rounded-2xl bg-secondary/10 -z-10`} />
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading
            badge="How We Work"
            title="Our Process"
            description="A streamlined approach to delivering exceptional results"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation", description: "We understand your unique business needs and challenges." },
              { step: "02", title: "Strategy", description: "We develop a customized solution tailored to your requirements." },
              { step: "03", title: "Implementation", description: "We execute the plan with precision and attention to detail." },
              { step: "04", title: "Support", description: "We provide ongoing support and optimization for continued success." },
            ].map((item, index) => (
              <AnimatedCard key={item.step} delay={index * 0.1}>
                <div className="bg-card rounded-2xl p-6 h-full border border-border relative overflow-hidden group">
                  <span className="absolute -top-4 -right-2 text-8xl font-heading font-bold text-muted/50 group-hover:text-secondary/20 transition-colors">
                    {item.step}
                  </span>
                  <div className="relative z-10">
                    <span className="inline-block w-10 h-10 rounded-xl bg-secondary text-secondary-foreground font-bold text-sm flex items-center justify-center mb-4">
                      {item.step}
                    </span>
                    <h4 className="font-heading font-bold text-lg text-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient">
        <div className="container-custom text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our services can help transform 
              your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Contact Us Now
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
