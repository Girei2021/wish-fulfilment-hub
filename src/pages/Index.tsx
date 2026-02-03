import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Truck, 
  Globe2, 
  Users, 
  Headphones,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Shield,
  Zap,
  MapPin,
  MessageCircle
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeading, AnimatedCounter, FadeIn, AnimatedCard } from "@/components/ui/animations";
import { ServiceCard } from "@/components/ui/service-card";
import heroImage from "@/assets/hero-logistics.jpg";
import bgMission from "@/assets/bg-mission.jpg";
import bgCta from "@/assets/bg-cta.jpg";

const services = [
  {
    icon: ShoppingCart,
    title: "E-Commerce & Online Retail",
    description: "Complete e-commerce solutions including online storefronts, payment processing, and order management.",
  },
  {
    icon: Truck,
    title: "Logistics & Delivery",
    description: "End-to-end logistics services with nationwide coverage and real-time tracking capabilities.",
  },
  {
    icon: Globe2,
    title: "Import & Export",
    description: "Seamless international trade services with customs clearance and global shipping networks.",
  },
  {
    icon: Users,
    title: "Agency & Distribution",
    description: "Strategic distribution partnerships and agency services for brands seeking Nigerian market presence.",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 50, suffix: "K+", label: "Deliveries Made" },
  { value: 36, suffix: "", label: "States Covered" },
  { value: 99, suffix: "%", label: "Customer Satisfaction" },
];

const whyChooseUs = [
  {
    icon: Zap,
    title: "Technology-Driven",
    description: "Cutting-edge systems for real-time tracking and seamless operations.",
  },
  {
    icon: MapPin,
    title: "Nationwide Reach",
    description: "Extensive network covering all 36 states and FCT in Nigeria.",
  },
  {
    icon: Shield,
    title: "Legal Compliance",
    description: "Fully registered under CAMA 2020 with adherence to global standards.",
  },
  {
    icon: TrendingUp,
    title: "Customer-Focused",
    description: "Dedicated support and tailored solutions for every client.",
  },
];

const WHATSAPP_NUMBER = "2348000000000"; // Replace with actual WhatsApp number
const WHATSAPP_MESSAGE = "Hello! I'm interested in MMM Worldwide services.";

export default function Index() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <Layout>
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5C] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={32} className="text-white" />
        <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us
        </span>
      </a>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Logistics and e-commerce operations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* Hero Content */}
        <div className="container-custom relative z-10 pt-24 pb-16">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6 backdrop-blur-sm">
                Welcome to MMM Worldwide
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-6 leading-tight"
            >
              Connecting Commerce<br />
              <span className="text-gradient-gold">& Logistics</span> Through<br />
              Technology
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl"
            >
              Your trusted partner for innovative e-commerce and fulfilment solutions. 
              We bridge the gap between businesses and customers with reliable, 
              technology-driven services across Nigeria and beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/services">
                  Our Services
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">Partner With Us</Link>
              </Button>
              <Button 
                variant="heroOutline" 
                size="xl" 
                asChild
                className="bg-[#25D366] border-[#25D366] hover:bg-[#20BA5C] hover:border-[#20BA5C]"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-secondary" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-primary-foreground/70 mt-2 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-primary/5 overflow-hidden">
                  <div className="absolute inset-4 rounded-2xl hero-gradient flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <div className="w-24 h-24 rounded-2xl bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                        <span className="text-5xl font-heading font-bold text-secondary">M</span>
                      </div>
                      <h3 className="font-heading text-2xl font-bold mb-2">MMM Worldwide</h3>
                      <p className="text-white/70">Wish-Fulfilment Limited</p>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-secondary/20 -z-10" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-2xl bg-secondary/10 -z-10" />
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Building the Future of{" "}
                <span className="text-gradient-gold">Commerce in Africa</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                MMM Worldwide Wish-Fulfilment Limited is an innovative e-commerce and 
                logistics company incorporated under the Companies and Allied Matters Act 
                (CAMA), 2020 of the Federal Republic of Nigeria.
              </p>
              <p className="text-muted-foreground mb-8">
                We operate across the full spectrum of modern commerce—from e-commerce 
                and online retail to logistics, importation, exportation, and distribution 
                services. Our commitment to legal compliance and global best practices 
                sets us apart in the Nigerian market.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {["Legally Compliant", "Technology-First", "Customer-Centric"].map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-foreground text-sm font-medium"
                  >
                    <CheckCircle2 size={16} className="text-secondary" />
                    {tag}
                  </span>
                ))}
              </div>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading
            badge="Our Services"
            title="Comprehensive Solutions for Your Business"
            description="From e-commerce platforms to last-mile delivery, we provide end-to-end services designed to help your business thrive."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>

          <FadeIn className="text-center mt-12">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight size={18} />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                badge="Why Choose Us"
                title="Your Trusted Partner for Growth"
                description="We combine technology, expertise, and dedication to deliver exceptional results for our clients."
                align="left"
              />

              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item, index) => (
                  <AnimatedCard key={item.title} delay={index * 0.1}>
                    <div className="flex gap-4">
                      <div className="icon-container flex-shrink-0">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>

            <FadeIn direction="right">
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden relative">
                  <img
                    src={bgMission}
                    alt="Mission and Vision"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/80" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading text-3xl font-bold text-white mb-4">
                        Our Mission
                      </h3>
                      <p className="text-white/80 text-lg leading-relaxed">
                        To provide reliable, efficient, and technology-driven solutions that 
                        empower businesses and satisfy customers across Nigeria and beyond.
                      </p>
                    </div>
                    <div className="pt-8 border-t border-white/20 mt-8">
                      <h4 className="font-heading text-xl font-semibold text-white mb-2">
                        Our Vision
                      </h4>
                      <p className="text-white/70">
                        To be the leading e-commerce and fulfilment company in Nigeria, 
                        setting the standard for excellence in commerce and logistics.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-3xl bg-secondary/20 -z-10" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bgCta}
            alt="Business partnership"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="container-custom text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Partner with MMM Worldwide and experience the future of e-commerce and 
              logistics. Let's build something great together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
