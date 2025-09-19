
import PageLayout from '@/components/PageLayout';
import { ArrowLeft, Mail, Linkedin, Phone, Users, Zap, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import { GlassmorphismCard } from '@/components/GlassmorphismCard';
import { GradientButton } from '@/components/GradientButton';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with gradient and glassmorphism */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_20%,rgba(59,130,246,0.35),transparent_70%),radial-gradient(50%_40%_at_80%_30%,rgba(236,72,153,0.28),transparent_70%),radial-gradient(40%_40%_at_50%_80%,rgba(168,85,247,0.25),transparent_70%)] dark:bg-[radial-gradient(60%_50%_at_20%_20%,rgba(59,130,246,0.25),transparent_70%),radial-gradient(50%_40%_at_80%_30%,rgba(236,72,153,0.22),transparent_70%),radial-gradient(40%_40%_at_50%_80%,rgba(147,51,234,0.2),transparent_70%)]" />
      
      <PageLayout showContact={false}>
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              {/* Back to Home Button - Top-right positioned with gradient styling */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute top-8 right-8 z-20"
              >
                <Link 
                  to="/" 
                  className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 ease-out"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }} 
                className="text-4xl md:text-5xl font-bold font-josefin mb-6 text-foreground"
              >
                Join Our Team
              </motion.h1>
              
              <div className="prose prose-lg max-w-none">
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.5, delay: 0.2 }} 
                  className="text-xl text-muted-foreground mb-4 font-josefin"
                >
                  We're looking for passionate innovators to help us revolutionize web development and digital experiences.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-xl text-muted-foreground mb-12 font-josefin"
                >
                  We welcome both full-time professionals and interns who are eager to contribute to cutting-edge web solutions.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold font-josefin mb-6 text-foreground">Why Join TechDrop?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
                  </div>
                  
                  <GlassmorphismCard className="mt-12">
                    <div className="text-center">
                      <h3 className="font-bold text-2xl font-josefin mb-8 text-foreground">Contact Our Founders</h3>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex flex-col items-center text-center">
                          <img 
                            src="/avatar-placeholder.svg"
                            alt="Vaishnav Bhosale"
                            className="w-32 h-32 rounded-full mb-4 object-cover"
                          />
                          <h3 className="text-xl font-bold font-josefin text-foreground">Vaishnav Bhosale</h3>
                          <p className="text-purple-600 dark:text-purple-400 font-medium font-josefin mb-4">Founder</p>
                          <div className="flex flex-col space-y-3">
                            <a href="mailto:vaishnavbhosale1011@gmail.com" className="flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                              <Mail className="w-5 h-5 mr-2" />
                              vaishnavbhosale1011@gmail.com
                            </a>
                            <a href="tel:+919552702088" className="flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                              <Phone className="w-5 h-5 mr-2" />
                              +91 9552702088
                            </a>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-center text-center">
                          <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                            <img 
                              src={`${import.meta.env.BASE_URL}sneha-photo.jpg`}
                              alt="Sneha Mishra"
                              className="w-full h-full object-cover object-[50%_30%]"
                              loading="eager"
                              decoding="sync"
                              onError={(e) => {
                                const target = e.currentTarget as HTMLImageElement;
                                const base = import.meta.env.BASE_URL || "/";
                                if (!target.dataset.attempt || target.dataset.attempt === "jpg") {
                                  target.src = `${base}sneha-photo.jpeg`;
                                  target.dataset.attempt = "jpeg";
                                } else if (target.dataset.attempt === "jpeg") {
                                  target.src = `${base}sneha-photo.png`;
                                  target.dataset.attempt = "png";
                                }
                              }}
                            />
                          </div>
                          <h3 className="text-xl font-bold font-josefin text-foreground">Sneha Mishra</h3>
                          <p className="text-purple-600 dark:text-purple-400 font-medium font-josefin mb-4">Co-Founder</p>
                          <div className="flex flex-col space-y-3">
                            <a href="mailto:vaishnavbhosale1011@gmail.com" className="flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                              <Mail className="w-5 h-5 mr-2" />
                              vaishnavbhosale1011@gmail.com
                            </a>
                            <a href="tel:+919552702088" className="flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                              <Phone className="w-5 h-5 mr-2" />
                              +91 9552702088
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <GradientButton 
                          href="https://cal.com/techdrop-agency"
                          size="lg"
                          className="text-lg px-8 py-4"
                        >
                          Schedule a Call
                        </GradientButton>
                      </div>
                    </div>
                  </GlassmorphismCard>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default Careers;
