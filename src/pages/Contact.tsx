import { useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageCircle
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeading, FadeIn, AnimatedCard } from "@/components/ui/animations";
import { z } from "zod";
import heroContact from "@/assets/hero-contact.jpg";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(20, "Phone number too long").optional().or(z.literal("")),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message must be less than 2000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    details: ["Lagos, Nigeria", "West Africa"],
  },
  {
    icon: Phone,
    title: "Phone Number",
    details: ["+234 803 859 2620"],
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["info@mmmworldwide.com", "support@mmmworldwide.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 8AM - 6PM", "Saturday: 9AM - 2PM"],
  },
];

const WHATSAPP_NUMBER = "2348038592620";
const WHATSAPP_MESSAGE = "Hello! I'm interested in MMM Worldwide services.";

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = contactSchema.parse(formData);
      
      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        setSubmitStatus("error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroContact}
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6 backdrop-blur-sm">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Get in <span className="text-gradient-gold">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Have a question or want to partner with us? We'd love to hear from you. 
              Reach out and let's start a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background -mt-8 relative z-10">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <AnimatedCard key={info.title} delay={index * 0.1}>
                <div className="bg-card rounded-2xl p-6 h-full border border-border hover:border-secondary/30 transition-colors text-center">
                  <div className="icon-container mx-auto mb-4">
                    <info.icon size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((detail) => (
                    <p key={detail} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeIn direction="left">
              <SectionHeading
                badge="Send a Message"
                title="We're Here to Help"
                description="Fill out the form and our team will get back to you within 24 hours."
                align="left"
              />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="form-label">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? "border-destructive focus:border-destructive focus:ring-destructive/20" : ""}`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? "border-destructive focus:border-destructive focus:ring-destructive/20" : ""}`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`form-input ${errors.phone ? "border-destructive focus:border-destructive focus:ring-destructive/20" : ""}`}
                      placeholder="+234 800 000 0000"
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="subject" className="form-label">
                      Subject <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`form-input ${errors.subject ? "border-destructive focus:border-destructive focus:ring-destructive/20" : ""}`}
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Partnership">Partnership Opportunity</option>
                      <option value="E-Commerce Services">E-Commerce Services</option>
                      <option value="Logistics Services">Logistics Services</option>
                      <option value="Import/Export">Import/Export Services</option>
                      <option value="Support">Customer Support</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.subject && (
                      <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.subject}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="form-label">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`form-input resize-none ${errors.message ? "border-destructive focus:border-destructive focus:ring-destructive/20" : ""}`}
                    placeholder="Tell us how we can help you..."
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.message}
                    </p>
                  )}
                </div>

                {submitStatus === "success" && (
                  <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 flex items-center gap-3">
                    <CheckCircle2 className="text-accent" size={20} />
                    <p className="text-accent font-medium">
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4 flex items-center gap-3">
                    <AlertCircle className="text-destructive" size={20} />
                    <p className="text-destructive font-medium">
                      Oops! Something went wrong. Please try again later.
                    </p>
                  </div>
                )}

                <Button 
                  type="submit" 
                  variant="secondary" 
                  size="xl"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </Button>
              </form>
            </FadeIn>

            <FadeIn direction="right">
              <div className="lg:sticky lg:top-32">
                {/* Map placeholder */}
                <div className="bg-card rounded-3xl overflow-hidden border border-border h-[400px] lg:h-[500px] mb-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.62283124574!2d3.28395955!3d6.548055099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1707000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MMM Worldwide Location - Lagos, Nigeria"
                  />
                </div>

                {/* Quick contact card */}
                <div className="bg-primary rounded-3xl p-8">
                  <h3 className="font-heading text-xl font-bold text-white mb-4">
                    Need Immediate Assistance?
                  </h3>
                  <p className="text-primary-foreground/70 mb-6">
                    Our customer support team is available during business hours to help you with any urgent inquiries.
                  </p>
                  <div className="space-y-4">
                    <a 
                      href="tel:+2348038592620"
                      className="flex items-center gap-3 text-white hover:text-secondary transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <Phone size={18} />
                      </div>
                      <span>+234 803 859 2620</span>
                    </a>
                    <a 
                      href="mailto:support@mmmworldwide.com"
                      className="flex items-center gap-3 text-white hover:text-secondary transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <Mail size={18} />
                      </div>
                      <span>support@mmmworldwide.com</span>
                    </a>
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white hover:text-secondary transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center">
                        <MessageCircle size={18} />
                      </div>
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
}
