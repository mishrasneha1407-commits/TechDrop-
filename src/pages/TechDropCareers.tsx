import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Users, Zap, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { useLenis } from '@/hooks/useLenis';
import { GlassmorphismCard } from '@/components/GlassmorphismCard';

const TechDropCareers = () => {
  useLenis();
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
        title="Careers - TechDrop" 
        description="Join the TechDrop team and help us build amazing web solutions. We're looking for passionate developers, designers, and marketers."
        keywords={['careers', 'jobs', 'web developer', 'ui designer', 'marketing intern', 'pune']}
      />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full aceternity-nav z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center"
                >
                  <img src="/logo-with-text.svg" alt="TechDrop Logo" className="h-10" />
                </motion.div>
              </Link>
            </div>
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
        </div>
      </nav>

      {/* Back to Home Button - Fixed positioned outside hero */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-24 right-8 z-50"
      >
        <Link 
          to="/" 
          className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 ease-out"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </motion.div>

      {/* Hero Section with gradient background */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        {/* Beautiful gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_20%,rgba(59,130,246,0.35),transparent_70%),radial-gradient(50%_40%_at_80%_30%,rgba(236,72,153,0.28),transparent_70%),radial-gradient(40%_40%_at_50%_80%,rgba(168,85,247,0.25),transparent_70%)] dark:bg-[radial-gradient(60%_50%_at_20%_20%,rgba(59,130,246,0.25),transparent_70%),radial-gradient(50%_40%_at_80%_30%,rgba(236,72,153,0.22),transparent_70%),radial-gradient(40%_40%_at_50%_80%,rgba(147,51,234,0.2),transparent_70%)]" />
        
        <motion.div 
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold font-josefin mb-6 text-foreground"
            variants={itemVariants}
          >
            Join Our Team
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-josefin"
            variants={itemVariants}
          >
            We're looking for passionate innovators to help us revolutionize web development and digital experiences.
          </motion.p>
          <motion.p
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto font-josefin"
            variants={itemVariants}
          >
            We welcome both full-time professionals and interns who are eager to contribute to cutting-edge web solutions.
          </motion.p>
        </motion.div>
      </section>

      {/* Why Join TechDrop Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold font-josefin mb-6 text-foreground" variants={itemVariants}>
              Why Join TechDrop?
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto font-josefin" variants={itemVariants}>
              We're always looking for talented individuals to join our growing team.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {[
              {
                title: "Innovation",
                description: "Work on cutting-edge web technologies that are transforming digital experiences.",
                icon: Zap
              },
              {
                title: "Impact",
                description: "Create solutions that help businesses grow and succeed in the digital world.",
                icon: TrendingUp
              },
              {
                title: "Growth",
                description: "Develop your skills in a rapidly expanding field with diverse challenges.",
                icon: Users
              }
            ].map((benefit, i) => (
              <GlassmorphismCard key={i} delay={i * 0.1}>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg font-josefin text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground font-josefin">{benefit.description}</p>
                </div>
              </GlassmorphismCard>
            ))}
          </motion.div>
          
          {/* Ready to Join Us Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mt-16"
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold font-josefin mb-6 text-foreground" variants={itemVariants}>
              Ready to Join Us?
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground mb-8 font-josefin" variants={itemVariants}>
              Send us your resume and let's discuss how you can contribute to our mission.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg"
                onClick={() => window.location.href = 'mailto:vaishnavbhosale1011@gmail.com?subject=Job Application - TechDrop'}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-6 h-auto shadow-xl rounded-full font-josefin"
              >
                <Mail className="mr-2" />
                Send Your Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300 mb-4">📧 vaishnavbhosale1011@gmail.com</p>
          <p className="text-gray-300 mb-4">📞 +91 9552702088</p>
          <p className="text-gray-300 mb-6">📍 Baner, Pune</p>
          <p className="text-gray-400 text-sm">
            © 2025 TechDrop. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default TechDropCareers;