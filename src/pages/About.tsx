import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Target, 
  Eye, 
  Award, 
  Users2, 
  Building2,
  Scale,
  Globe2,
  ArrowRight,
  Quote
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeading, FadeIn, AnimatedCard } from "@/components/ui/animations";
import heroAbout from "@/assets/hero-about.jpg";
import bgCta from "@/assets/bg-cta.jpg";
import ceoImage from "@/assets/ceo_mmm.jpeg";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every service we deliver, setting high standards for quality and performance.",
  },
  {
    icon: Users2,
    title: "Customer Focus",
    description: "Our customers are at the heart of everything we do. We listen, adapt, and deliver solutions that exceed expectations.",
  },
  {
    icon: Scale,
    title: "Integrity",
    description: "We operate with transparency and honesty, building trust through ethical business practices and legal compliance.",
  },
  {
    icon: Globe2,
    title: "Innovation",
    description: "We embrace technology and innovation to continuously improve our services and stay ahead of industry trends.",
  },
];

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description: "MMM Worldwide was incorporated under CAMA 2020, establishing our legal foundation for operations.",
  },
  {
    year: "2021",
    title: "Nationwide Expansion",
    description: "Extended our logistics network to cover all 36 states and FCT in Nigeria.",
  },
  {
    year: "2022",
    title: "Technology Integration",
    description: "Launched our proprietary tracking and management systems for enhanced service delivery.",
  },
  {
    year: "2023",
    title: "International Partnerships",
    description: "Established strategic partnerships with global logistics and e-commerce platforms.",
  },
  {
    year: "2024",
    title: "Credit Facility Launch",
    description: "Introduced innovative credit and financing solutions to empower businesses and individuals.",
  },
  {
    year: "2025",
    title: "Digital Transformation",
    description: "Rolled out AI-powered systems for faster approvals and enhanced customer experience.",
  },
  {
    year: "2026",
    title: "Pan-African Expansion",
    description: "Expanding operations beyond Nigeria to serve customers across the African continent.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroAbout}
            alt="About MMM Worldwide"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6 backdrop-blur-sm">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Pioneering the Future of{" "}
              <span className="text-gradient-gold">Commerce</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Learn about our journey, mission, and commitment to transforming 
              e-commerce and logistics in Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <SectionHeading
                badge="Who We Are"
                title="A Company Built on Excellence"
                align="left"
              />
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg">
                  MMM Worldwide Wish-Fulfilment Limited is an innovative e-commerce and 
                  logistics company duly incorporated under the Companies and Allied 
                  Matters Act (CAMA), 2020 of the Federal Republic of Nigeria.
                </p>
                <p>
                  We operate across the full spectrum of modern commerce, including 
                  e-commerce, online retail services, logistics and delivery, importation 
                  and exportation, agency and distribution services, and ancillary support 
                  services.
                </p>
                <p>
                  Our company is built on a foundation of legal compliance, transparency, 
                  and adherence to global best practices. We believe that sustainable 
                  business growth comes from operating within the framework of Nigerian 
                  laws while meeting international standards.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { label: "Registered under CAMA 2020", icon: Building2 },
                  { label: "Nigerian Law Compliant", icon: Scale },
                  { label: "Global Best Practices", icon: Globe2 },
                  { label: "Quality Certified", icon: Award },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-4 rounded-xl bg-muted">
                    <item.icon size={20} className="text-secondary" />
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-muted p-8">
                  <div className="h-full rounded-2xl hero-gradient flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-secondary/50" />
                      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full border-2 border-secondary/30" />
                    </div>
                    <div className="text-center text-white relative z-10">
                      <div className="w-32 h-32 rounded-2xl bg-secondary/20 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                        <span className="text-6xl font-heading font-bold text-secondary">M</span>
                      </div>
                      <h3 className="font-heading text-2xl font-bold mb-2">MMM Worldwide</h3>
                      <p className="text-white/70">Wish-Fulfilment Limited</p>
                      <p className="text-sm text-white/50 mt-4">Est. 2020 | Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-2xl bg-secondary/20 -z-10" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading
            badge="Our Purpose"
            title="Mission & Vision"
            description="Guiding principles that drive our commitment to excellence"
          />

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedCard delay={0}>
              <div className="bg-card rounded-3xl p-8 md:p-12 h-full border border-border">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                  <Target size={32} className="text-secondary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To provide reliable, efficient, and technology-driven solutions that 
                  empower businesses and satisfy customers. We aim to bridge the gap 
                  between commerce and logistics, creating seamless experiences for 
                  businesses and consumers across Nigeria and beyond.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Deliver exceptional service quality",
                    "Leverage technology for efficiency",
                    "Build lasting customer relationships",
                    "Support business growth nationwide",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 size={18} className="text-secondary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.1}>
              <div className="bg-primary rounded-3xl p-8 md:p-12 h-full">
                <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6">
                  <Eye size={32} className="text-secondary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-primary-foreground/80 text-lg leading-relaxed">
                  To be the leading e-commerce and fulfilment company in Nigeria, 
                  setting the standard for excellence in commerce and logistics. We 
                  envision a future where every business, regardless of size, has 
                  access to world-class logistics and e-commerce solutions.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Lead the industry in innovation",
                    "Expand across Africa and globally",
                    "Set new standards for service excellence",
                    "Empower millions of businesses",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-primary-foreground/70">
                      <CheckCircle2 size={18} className="text-secondary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden">
                  <img
                    src={ceoImage}
                    alt="CEO of MMM Worldwide"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-secondary/20 -z-10" />
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-primary/10 -z-10" />
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                Leadership
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Meet Our <span className="text-gradient-gold">CEO</span>
              </h2>
              
              <div className="bg-muted rounded-2xl p-6 mb-6">
                <Quote size={32} className="text-secondary/50 mb-4" />
                <p className="text-lg text-muted-foreground italic leading-relaxed">
                  "At MMM Worldwide, we believe that everyone deserves access to financial 
                  freedom. Our mission is to bridge the gap between aspirations and 
                  achievements through innovative credit solutions and exceptional service."
                </p>
              </div>

              <p className="text-muted-foreground mb-6">
                Under visionary leadership, MMM Worldwide has grown from a startup to a 
                trusted name in e-commerce, logistics, and financial services across Nigeria. 
                Our commitment to excellence, transparency, and customer satisfaction drives 
                everything we do.
              </p>

              <div className="flex flex-wrap gap-4">
                {["Visionary Leadership", "Customer-First Approach", "Innovation Driven"].map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium"
                  >
                    <CheckCircle2 size={16} />
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            badge="What We Believe"
            title="Our Core Values"
            description="The principles that guide our actions and decisions every day"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedCard key={value.title} delay={index * 0.1}>
                <div className="bg-card rounded-2xl p-6 h-full border border-border hover:border-secondary/30 transition-colors group">
                  <div className="icon-container mb-4 group-hover:bg-secondary/20 transition-colors">
                    <value.icon size={24} />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading
            badge="Our Journey"
            title="Milestones & Achievements"
            description="Key moments in our growth and development"
          />

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <AnimatedCard key={milestone.year} delay={index * 0.15}>
                <div className="flex gap-6 md:gap-10 pb-12 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center font-heading font-bold text-secondary-foreground text-lg shadow-gold">
                      {milestone.year.slice(-2)}
                    </div>
                    {index !== milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-4" />
                    )}
                  </div>
                  <div className="flex-1 pt-2">
                    <span className="text-sm text-secondary font-medium">{milestone.year}</span>
                    <h4 className="font-heading font-bold text-xl text-foreground mt-1 mb-2">
                      {milestone.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
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
              Ready to Work With Us?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Join the growing number of businesses that trust MMM Worldwide for their 
              e-commerce and logistics needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Contact Us Today
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
