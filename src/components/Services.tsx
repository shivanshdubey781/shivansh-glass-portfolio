import { motion } from "framer-motion";
import { Code, Smartphone, Brain, Database, Palette, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Custom Web Development",
      description: "Full-stack web applications using MERN stack with responsive design, performance optimization, and scalable architecture.",
      icon: <Code className="w-8 h-8" />,
      features: ["React.js Applications", "Node.js Backend", "MongoDB Database", "RESTful APIs"],
      color: "from-blue-500 to-cyan-500",
      delay: 0.1
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using Flutter with native performance and beautiful UI/UX design.",
      icon: <Smartphone className="w-8 h-8" />,
      features: ["Flutter Development", "Android Studio", "Firebase Integration", "MVVM Architecture"],
      color: "from-green-500 to-emerald-500",
      delay: 0.2
    },
    {
      title: "Machine Learning & AI",
      description: "ML model development and API integration for predictive analytics, classification, and intelligent automation.",
      icon: <Brain className="w-8 h-8" />,
      features: ["Model Training", "FastAPI Deployment", "Data Analysis", "Predictive Systems"],
      color: "from-purple-500 to-pink-500",
      delay: 0.3
    },
    {
      title: "Database Design",
      description: "Efficient database architecture and optimization for scalable applications with robust data management.",
      icon: <Database className="w-8 h-8" />,
      features: ["MongoDB Design", "SQL Optimization", "Data Modeling", "Performance Tuning"],
      color: "from-orange-500 to-red-500",
      delay: 0.4
    },
    {
      title: "UI/UX Design",
      description: "Modern, responsive user interfaces with focus on user experience and aesthetic appeal.",
      icon: <Palette className="w-8 h-8" />,
      features: ["Responsive Design", "Tailwind CSS", "Component Libraries", "User Experience"],
      color: "from-indigo-500 to-purple-500",
      delay: 0.5
    },
    {
      title: "API Integration",
      description: "Seamless third-party API integration and custom API development for enhanced functionality.",
      icon: <Zap className="w-8 h-8" />,
      features: ["RESTful APIs", "GraphQL", "Third-party Integration", "Documentation"],
      color: "from-teal-500 to-blue-500",
      delay: 0.6
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 8,
                z: 50
              }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              className="glass-card p-8 rounded-2xl relative overflow-hidden group cursor-pointer"
            >
              {/* Animated background gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                animate={{ 
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-primary/30 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -100, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                {/* Service Icon */}
                <motion.div
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1
                  }}
                  transition={{ 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200
                  }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-2 mb-6 glow`}
                >
                  <div className="w-full h-full bg-background/20 rounded-xl flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                </motion.div>

                {/* Service Title */}
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-foreground/80 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5,
                        delay: service.delay + featureIndex * 0.1
                      }}
                      className="flex items-center space-x-3"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}
                      />
                      <span className="text-sm text-foreground/70">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Service CTA */}
                <motion.div
                  className="mt-6 pt-4 border-t border-white/10"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`text-sm font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    Get Started →
                  </div>
                </motion.div>
              </div>

              {/* Hover border effect */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent rounded-2xl"
                whileHover={{
                  borderImage: `linear-gradient(135deg, ${service.color.replace('from-', '').replace(' to-', ', ')}) 1`
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Ready to Start Your Project?
            </h3>
            <p className="text-foreground/80 mb-6">
              Let's discuss your requirements and create something amazing together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-gradient-primary px-8 py-3 rounded-xl font-semibold glow hover:shadow-2xl transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;