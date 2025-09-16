import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Code, Palette, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEO from '@/components/SEO';

const TechDropCareers = () => {
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

  const roles = [
    {
      title: "Web Developer",
      icon: Code,
      description: "Build modern, responsive websites using React, TypeScript, and cutting-edge web technologies."
    },
    {
      title: "UI/UX Designer",
      icon: Palette,
      description: "Create beautiful, user-friendly designs that enhance digital experiences and drive conversions."
    },
    {
      title: "Marketing Intern",
      icon: Megaphone,
      description: "Help grow our brand through digital marketing, content creation, and social media strategies."
    }
  ];

  return (
    <>
      <SEO 
        title="Careers - TechDrop" 
        description="Join the TechDrop team and help us build amazing web solutions. We're looking for passionate developers, designers, and marketers."
        keywords={['careers', 'jobs', 'web developer', 'ui designer', 'marketing intern', 'pune']}
      />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TechDrop
              </Link>
            </div>
            <Button 
              onClick={() => window.open('https://cal.com/techdrop-agency', '_blank')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              Book Free Consultation
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"></div>
        <motion.div 
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            Work With{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TechDrop
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Join our team of passionate developers and designers creating amazing web experiences.
          </motion.p>
        </motion.div>
      </section>

      {/* Roles Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" variants={itemVariants}>
              Open Positions
            </motion.h2>
            <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
              We're always looking for talented individuals to join our growing team.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {roles.map((role, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full glass-card glass-hover rounded-2xl border-white/20">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <role.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{role.title}</h3>
                    <p className="text-gray-600 mb-6">{role.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" variants={itemVariants}>
              Ready to Join Us?
            </motion.h2>
            <motion.p className="text-lg text-gray-600 mb-8" variants={itemVariants}>
              Send us your resume and let's discuss how you can contribute to our mission.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button 
                size="lg"
                onClick={() => window.location.href = 'mailto:vaishnavbhosale1011@gmail.com?subject=Job Application - TechDrop'}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-6 h-auto"
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