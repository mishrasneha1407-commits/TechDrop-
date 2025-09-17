import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Code, 
  Server, 
  Settings, 
  CheckCircle, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin,
  Star,
  Zap,
  Shield,
  Rocket,
  ChevronDown,
  Users,
  Clock,
  Award
} from 'lucide-react';
import { useState } from 'react';
import SEO from '@/components/SEO';
import { useLenis } from '@/hooks/useLenis';
import { ModernNavbar } from '@/components/ModernNavbar';
import { HeroBackground } from '@/components/HeroBackground';
import { GlassmorphismCard } from '@/components/GlassmorphismCard';
import { GradientButton } from '@/components/GradientButton';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const Index = () => {
  useLenis();
  
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const services = [
    {
      icon: Code,
      title: "Custom Website Design & Development",
      description: "Tailored websites built for businesses, startups, and professionals with modern design and functionality."
    },
    {
      icon: Server,
      title: "Hosting & Deployment",
      description: "We manage hosting, domains, SSL, and updates so you don't have to worry about technical details."
    },
    {
      icon: Settings,
      title: "Ongoing Maintenance",
      description: "Continuous monitoring, fixes, and performance improvements to keep your website running smoothly."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter Website",
      price: "₹14,999",
      period: "one-time",
      features: [
        "Single-page modern website",
        "Free custom domain setup",
        "Mobile-friendly design",
        "Hosting & SSL included for 1 year"
      ]
    },
    {
      name: "Business Website",
      price: "₹39,999",
      period: "one-time",
      popular: true,
      features: [
        "5–7 page business website",
        "Free domain & hosting setup",
        "SEO optimization basics",
        "Analytics & contact form integration"
      ]
    },
    {
      name: "Enterprise Website",
      price: "Custom Quote",
      period: "",
      features: [
        "Advanced multi-page website",
        "E-commerce or custom features",
        "Priority support & integrations",
        "Dedicated project manager"
      ]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Book a Call",
      description: "Schedule a free consultation to discuss your project requirements and goals."
    },
    {
      number: "02",
      title: "We Design & Build",
      description: "Our team creates your custom website with modern design and functionality."
    },
    {
      number: "03",
      title: "Launch & Maintain",
      description: "We launch your site and provide ongoing maintenance with our Care Plan."
    }
  ];

  const portfolioItems = [
    {
      title: "Restaurant Website",
      description: "Modern restaurant site with online ordering system",
      category: "Food & Beverage"
    },
    {
      title: "Portfolio Website",
      description: "Creative portfolio showcasing design work",
      category: "Personal"
    },
    {
      title: "E-commerce Store",
      description: "Full-featured online store with payment integration",
      category: "E-commerce"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Local Business Owner",
      content: "TechDrop made our business site in record time — stress-free and professional.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "Startup Founder",
      content: "Excellent service from start to finish. They handle everything perfectly.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Typically 1-2 weeks for starter websites and 2-4 weeks for business websites, depending on complexity."
    },
    {
      question: "Do you provide hosting and domain services?",
      answer: "Yes, we handle everything including hosting setup, domain registration, and SSL certificates."
    },
    {
      question: "Can I update the website myself?",
      answer: "Absolutely! We provide easy-to-use content management systems and training if needed."
    },
    {
      question: "What's included in the maintenance plan?",
      answer: "Security updates, bug fixes, performance monitoring, backups, and priority support."
    }
  ];

  return (
    <>
      <SEO 
        title="TechDrop - Full-Stack Website Solutions" 
        description="From design to hosting to maintenance — TechDrop handles everything so you can focus on growth. Based in Baner, Pune."
        keywords={['web development', 'website design', 'hosting', 'maintenance', 'pune', 'full-stack']}
      />
      
      <ModernNavbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <HeroBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold font-josefin leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Full-Stack Website
                </span>
                <br />
                <span className="text-foreground">Solutions, Done for You.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-josefin font-light">
                From design to hosting to maintenance — TechDrop handles everything 
                so you can focus on growth.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <GlassmorphismCard className="p-4" hover={false}>
                <GradientButton 
                  href="https://cal.com/techdrop-agency"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </GradientButton>
              </GlassmorphismCard>
              
              <GradientButton 
                href="#services"
                variant="secondary"
                size="lg"
                className="bg-transparent border-2 border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-500 hover:text-white"
              >
                Explore Services
              </GradientButton>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-josefin mb-6">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Full-service web solutions from concept to maintenance
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <GlassmorphismCard key={service.title} delay={index * 0.2}>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold font-josefin">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </GlassmorphismCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-josefin mb-6">
              Plans That Fit Your Business
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing with no hidden costs
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-3 gap-8"
          >
            {pricingPlans.map((plan, index) => (
              <GlassmorphismCard 
                key={plan.name} 
                delay={index * 0.2}
                className={plan.popular ? "ring-2 ring-purple-500 relative" : ""}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold font-josefin mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-foreground">
                      {plan.price}
                      {plan.period && <span className="text-lg text-muted-foreground ml-2">{plan.period}</span>}
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-left">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <GradientButton 
                    href="https://cal.com/techdrop-agency"
                    className="w-full"
                  >
                    Book Consultation
                  </GradientButton>
                </div>
              </GlassmorphismCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Website Care Plan */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-josefin mb-6">
              Website Care Plan — We Keep It Running
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Choose monthly or annual maintenance, and let us handle the tech while you focus on your business.
            </p>

            <GlassmorphismCard className="p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold font-josefin mb-4">Website Care Plan</h3>
                  <div className="text-4xl font-bold text-foreground mb-2">
                    ₹2,999/month
                  </div>
                  <div className="text-lg text-muted-foreground">
                    or ₹29,999/year (Save 2 months!)
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 text-left">
                  {[
                    "Unlimited bug fixes",
                    "Security updates & backups",
                    "Performance monitoring",
                    "Priority support",
                    "Hosting included",
                    "Content updates"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <GradientButton 
                  href="https://cal.com/techdrop-agency"
                  size="lg"
                  className="w-full md:w-auto"
                >
                  Subscribe to Care Plan
                </GradientButton>
              </div>
            </GlassmorphismCard>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-josefin mb-6">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple process, professional results
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-3 gap-8"
          >
            {processSteps.map((step, index) => (
              <GlassmorphismCard key={step.title} delay={index * 0.2}>
                <div className="text-center space-y-4">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold font-josefin">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </GlassmorphismCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-josefin mb-6">
              Our Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sample projects showcasing our capabilities
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-3 gap-8"
          >
            {portfolioItems.map((item, index) => (
              <GlassmorphismCard key={item.title} delay={index * 0.2}>
                <div className="space-y-4">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg"></div>
                  <div>
                    <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">{item.category}</span>
                    <h3 className="text-xl font-semibold font-josefin mt-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </GlassmorphismCard>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <GradientButton href="https://cal.com/techdrop-agency" size="lg">
              Book a Consultation to See More
            </GradientButton>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-josefin mb-6">
              What Our Clients Say
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <GlassmorphismCard key={testimonial.name} delay={index * 0.2}>
                <div className="space-y-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </GlassmorphismCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-josefin mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <GlassmorphismCard key={index} hover={false}>
                <Collapsible
                  open={faqOpen === index}
                  onOpenChange={() => setFaqOpen(faqOpen === index ? null : index)}
                >
                  <CollapsibleTrigger className="flex justify-between items-center w-full text-left">
                    <h3 className="font-semibold text-lg">{faq.question}</h3>
                    <ChevronDown className={`h-5 w-5 transition-transform ${faqOpen === index ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-4">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CollapsibleContent>
                </Collapsible>
              </GlassmorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* About Section (Founders) */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-josefin mb-6">
              Who We Are
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-16">
              Founded by Vaishnav Bhosale (Founder) and Sneha Mishra (Co-Founder), TechDrop is a full-service web agency based in Baner, Pune. We create custom websites, deploy them on reliable hosting, connect your domain, and keep them maintained 24/7. Our mission is simple: build digital experiences that actually work.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <GlassmorphismCard delay={0.2}>
              <div className="text-center space-y-6">
                <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Users className="h-16 w-16 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-josefin">Vaishnav Bhosale</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">Founder</p>
                  <p className="text-muted-foreground mt-2">
                    Full-stack developer with expertise in modern web technologies and business growth strategies.
                  </p>
                </div>
              </div>
            </GlassmorphismCard>

            <GlassmorphismCard delay={0.4}>
              <div className="text-center space-y-6">
                <div className="w-32 h-32 mx-auto bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <Users className="h-16 w-16 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-josefin">Sneha Mishra</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">Co-Founder</p>
                  <p className="text-muted-foreground mt-2">
                    Designer and project manager focused on creating exceptional user experiences and client relationships.
                  </p>
                </div>
              </div>
            </GlassmorphismCard>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-josefin mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to start your project? Let's discuss your needs.
            </p>
          </motion.div>

          <GlassmorphismCard className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:vaishnavbhosale1011@gmail.com" className="text-muted-foreground hover:text-primary">
                      vaishnavbhosale1011@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Phone/WhatsApp</p>
                    <a href="tel:+919552702088" className="text-muted-foreground hover:text-primary">
                      +91 9552702088
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Office</p>
                    <p className="text-muted-foreground">Baner, Pune</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <GradientButton 
                  href="https://cal.com/techdrop-agency"
                  size="lg"
                  className="w-full"
                >
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </GradientButton>
              </div>
            </div>
          </GlassmorphismCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t glass-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="font-bold text-2xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              TechDrop
            </div>
            <p className="text-muted-foreground">
              © 2025 TechDrop. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:vaishnavbhosale1011@gmail.com" className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:+919552702088" className="text-muted-foreground hover:text-primary">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;