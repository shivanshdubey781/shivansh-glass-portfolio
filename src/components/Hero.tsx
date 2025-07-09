import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            x: [0, 100, 0],
            y: [0, -100, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-20 h-20 glass rounded-full glow opacity-60"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            x: [0, -150, 0],
            y: [0, 150, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-32 w-32 h-32 glass rounded-lg glow opacity-40"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 left-32 w-16 h-16 glass rounded-full glow opacity-50"
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Profile Picture Section */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-4 glass-card rounded-full overflow-hidden glow-hover">
            <img 
              src="/lovable-uploads/8f40a23d-7bad-4e30-a243-cdf1134c79a4.png" 
              alt="Shivansh Dubey"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="gradient-text">Shivansh Dubey</span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto"
        >
          Building Smart, Scalable, and Stylish Solutions
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg text-foreground/70 mb-12"
        >
          MERN Stack Developer • Flutter Developer • ML Engineer
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex justify-center space-x-6 mb-12"
        >
          <motion.a
            href="https://github.com/shivanshdubey781"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            className="glass p-3 rounded-full glow-hover"
          >
            <Github className="w-6 h-6 text-primary" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/shivansh-dubey-2b110a292"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            className="glass p-3 rounded-full glow-hover"
          >
            <Linkedin className="w-6 h-6 text-secondary" />
          </motion.a>
          <motion.a
            href="mailto:shivanshdubey746@gmail.com"
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            className="glass p-3 rounded-full glow-hover"
          >
            <Mail className="w-6 h-6 text-accent" />
          </motion.a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-gradient-primary hover:scale-105 transition-transform duration-300 glow"
          >
            View My Work
          </Button>
          <Button
            onClick={scrollToContact}
            variant="outline"
            size="lg"
            className="glass border-primary/30 hover:bg-primary/10 hover:scale-105 transition-all duration-300"
          >
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-primary/60"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;