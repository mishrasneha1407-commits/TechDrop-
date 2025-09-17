
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
  Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEO from '@/components/SEO';
import { useLenis } from '@/hooks/useLenis';

const Index = () => {
  useLenis();
  
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      <SEO 
        title="TechDrop - Full-Stack Website Solutions" 
        description="From design to hosting to maintenance — TechDrop handles everything so you can focus on growth. Based in Baner, Pune."
        keywords={['web development', 'website design', 'hosting', 'maintenance', 'pune', 'full-stack']}
      />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full aceternity-nav z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TechDrop
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/careers" className="text-gray-700 hover:text-gray-900 transition-colors">
                Careers
              </Link>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => window.open('https://cal.com/techdrop-agency', '_blank')}
                  className="aceternity-button text-white"
                >
                  Book Free Consultation
                </Button>
              </motion.div>
            </div>
            <div className="md:hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => window.open('https://cal.com/techdrop-agency', '_blank')}
                  size="sm"
                  className="aceternity-button text-white"
                >
                  Book Consultation
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"
          style={{ y }}
        />
        <div className="absolute inset-0 parallax-bg opacity-30" 
             style={{
               backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)'
             }}
        />
        <motion.div 
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            Full-Stack Website Solutions,{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Done for You.
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            From design to hosting to maintenance — TechDrop handles everything so you can focus on growth.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg"
              onClick={() => window.open('https://cal.com/techdrop-agency', '_blank')}
              className="aceternity-button text-white text-lg px-8 py-6 h-auto shadow-2xl"
            >
              Book a Free Consultation
              <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section - Just intro text */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" variants={itemVariants}>
              Who We Are
            </motion.h2>
            <motion.p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed" variants={itemVariants}>
              TechDrop is a full-service web agency based in Baner, Pune. We create custom websites, deploy them on 
              reliable hosting, connect your domain, and keep them maintained 24/7. Our mission is simple: build 
              digital experiences that actually work.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" variants={itemVariants}>
              What We Do
            </motion.h2>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full glass-card glass-hover rounded-2xl border-white/20">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Website Design & Development</h3>
                  <p className="text-gray-600">Tailored websites built for businesses, startups, and professionals.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full glass-card glass-hover rounded-2xl border-white/20">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Server className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Hosting & Deployment</h3>
                  <p className="text-gray-600">We manage hosting, domains, SSL, and updates so you don't have to.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full glass-card glass-hover rounded-2xl border-white/20">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Ongoing Maintenance</h3>
                  <p className="text-gray-600">Continuous monitoring, fixes, and performance improvements.</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" variants={itemVariants}>
              Plans That Fit Your Business
            </motion.h2>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Card className="h-full glass-card glass-hover rounded-2xl border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter Website</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-6">₹14,999 <span className="text-sm text-gray-500">one-time</span></p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Single-page modern website</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Free custom domain setup</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Mobile-friendly design</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Hosting & SSL included for 1 year</li>
                  </ul>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      className="w-full aceternity-button"
                      onClick={() => window.open('https://cal.com/techdrop-agency', '_blank')}
                    >
                      Book Consultation
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="h-full glass-card glass-hover rounded-2xl border-purple-300/50 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Website</h3>
                  <p className="text-3xl font-bold text-purple-600 mb-6">₹39,999 <span className="text-sm text-gray-500">one-time</span></p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />5–7 page business website</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Free domain & hosting setup</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />SEO optimization basics</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Analytics & contact form integration</li>
                  </ul>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      className="w-full aceternity-button"
                      onClick={() => window.open('https://cal.com/techdrop-agency', '_blank')}
                    >
                      Book Consultation
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="h-full glass-card glass-hover rounded-2xl border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Website</h3>
                  <p className="text-3xl font-bold text-purple-600 mb-6">Custom Quote</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Advanced multi-page website</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />E-commerce or custom features</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Priority support & integrations</li>
                  </ul>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      className="w-full aceternity-button"
                      onClick={() => window.open('https://cal.com/techdrop-agency', '_blank')}
                    >
                      Book Consultation
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Website Care Plan */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" variants={itemVariants}>
              Website Care Plan — We Keep It Running
            </motion.h2>
            <motion.p className="text-lg text-gray-600 mb-12" variants={itemVariants}>
              Choose monthly or annual maintenance, and let us handle the tech while you focus on your business.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Card className="max-w-lg mx-auto glass-card glass-hover rounded-2xl border-purple-300/50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Website Care Plan</h3>
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                    ₹2,999/month or ₹29,999/year
                  </p>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Unlimited bug fixes</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Security updates & backups</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Performance monitoring</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Priority support</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Hosting included</li>
                  </ul>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      className="w-full aceternity-button"
                      onClick={() => window.open('https://cal.com/techdrop-agency', '_blank')}
                    >
                      Subscribe to Care Plan
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" variants={itemVariants}>
              How It Works
            </motion.h2>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div className="text-center" variants={itemVariants}>
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Book a Call</h3>
              <p className="text-gray-600">Schedule a free consultation to discuss your project needs and goals.</p>
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">We Design & Build</h3>
              <p className="text-gray-600">Our team creates your custom website with modern design and functionality.</p>
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Launch & Maintain</h3>
              <p className="text-gray-600">We deploy your site and provide ongoing maintenance with our Care Plan.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" variants={itemVariants}>
              Our Work
            </motion.h2>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Restaurant Site</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Fine Dining Restaurant</h3>
                  <p className="text-gray-600 text-sm">Modern restaurant website with online reservations and menu showcase.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Portfolio Site</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Creative Portfolio</h3>
                  <p className="text-gray-600 text-sm">Personal portfolio website for a professional photographer.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">E-commerce Site</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Online Store</h3>
                  <p className="text-gray-600 text-sm">Complete e-commerce solution with payment integration.</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          <motion.div 
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <Button 
              onClick={() => window.open('https://cal.com/techdrop-agency', '_blank')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              Book a Consultation to See More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" variants={itemVariants}>
              What Our Clients Say
            </motion.h2>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    "TechDrop made our business site in record time — stress-free and professional. The care plan gives us peace of mind knowing our site is always running smoothly."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">RS</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Rahul Sharma</p>
                      <p className="text-sm text-gray-500">CEO, Digital Solutions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Amazing experience working with TechDrop. They handled everything from design to deployment, and the ongoing maintenance is fantastic. Highly recommended!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">PM</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Priya Mehta</p>
                      <p className="text-sm text-gray-500">Founder, Creative Studio</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section - Founders at bottom */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" variants={itemVariants}>
              Meet Our Team
            </motion.h2>
            <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
              The passionate minds behind TechDrop's innovative web solutions.
            </motion.p>
          </motion.div>
          
          {/* Founder Profiles */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="glass-card glass-hover rounded-2xl border-white/20 h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">VB</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Vaishnav Bhosale</h3>
                  <p className="text-blue-600 font-medium mb-4">Founder</p>
                  <p className="text-gray-600">Leading the vision and technical direction of TechDrop's innovative web solutions.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="glass-card glass-hover rounded-2xl border-white/20 h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">SM</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sneha Mishra</h3>
                  <p className="text-purple-600 font-medium mb-4">Co-Founder</p>
                  <p className="text-gray-600">Driving business strategy and ensuring exceptional client experiences across all projects.</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" variants={itemVariants}>
              Get in Touch
            </motion.h2>
            <motion.p className="text-xl mb-12 text-blue-100" variants={itemVariants}>
              Ready to transform your digital presence? Let's build something amazing together.
            </motion.p>
            <motion.div className="grid md:grid-cols-3 gap-8 mb-12" variants={containerVariants}>
              <motion.div className="text-center" variants={itemVariants}>
                <Mail className="w-8 h-8 mx-auto mb-4 text-blue-200" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-blue-100">vaishnavbhosale1011@gmail.com</p>
              </motion.div>
              <motion.div className="text-center" variants={itemVariants}>
                <Phone className="w-8 h-8 mx-auto mb-4 text-blue-200" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-blue-100">+91 9552702088</p>
              </motion.div>
              <motion.div className="text-center" variants={itemVariants}>
                <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-200" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-blue-100">Baner, Pune</p>
              </motion.div>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg"
                onClick={() => window.open('https://cal.com/techdrop-agency', '_blank')}
                className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 h-auto shadow-xl"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              TechDrop
            </h3>
            <p className="text-gray-300 mb-2">📧 vaishnavbhosale1011@gmail.com</p>
            <p className="text-gray-300 mb-2">📞 +91 9552702088</p>
            <p className="text-gray-300 mb-6">📍 Baner, Pune</p>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 TechDrop. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Index;
