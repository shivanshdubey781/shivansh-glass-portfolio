import { motion } from "framer-motion";
import { ExternalLink, Github, Heart, Database, Brain, ShoppingCart, Smartphone, Activity, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Blood Bank System",
      techStack: "MERN",
      description: "Manages blood donors/recipients & inventory.",
      role: "Full Stack Developer",
      icon: <Heart className="w-6 h-6" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Heart Disease Diagnosis",
      techStack: "Python, scikit-learn",
      description: "Predicts risk using ML classification.",
      role: "ML Engineer",
      icon: <Activity className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Diabetes Prediction",
      techStack: "Python, FastAPI",
      description: "Predicts diabetes using PIMA dataset.",
      role: "ML + API Developer",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cervical Cancer Prediction",
      techStack: "Python, sklearn",
      description: "Predictive modeling for diagnosis.",
      role: "ML Engineer",
      icon: <Brain className="w-6 h-6" />,
      color: "from-teal-500 to-green-500"
    },
    {
      title: "Breast Cancer Prediction",
      techStack: "TensorFlow, Streamlit",
      description: "Deep learning app for early detection.",
      role: "ML Engineer",
      icon: <Brain className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Happiness Tracker",
      techStack: "MERN, Chart.js",
      description: "Mood tracking with graphs and analytics.",
      role: "Full Stack Developer",
      icon: <Activity className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Gemini Android App",
      techStack: "Flutter, Gemini API",
      description: "Real-time AI-integrated Android app.",
      role: "Android + AI Developer",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Expense Tracker",
      techStack: "MERN",
      description: "Tracks income/expenses with responsive UI.",
      role: "Full Stack Developer",
      icon: <DollarSign className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "E-commerce Site",
      techStack: "MERN, Stripe",
      description: "Online store with product/payment system.",
      role: "Full Stack Developer",
      icon: <ShoppingCart className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
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
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A showcase of my work across web development, mobile apps, and machine learning
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5
              }}
              className="glass-card p-6 rounded-2xl relative overflow-hidden group cursor-pointer"
            >
              {/* Animated background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                animate={{ 
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <div className="relative z-10">
                {/* Project Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} p-2 mb-4 glow`}
                >
                  <div className="w-full h-full bg-background/20 rounded-lg flex items-center justify-center text-white">
                    {project.icon}
                  </div>
                </motion.div>

                {/* Project Info */}
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {project.title}
                </h3>
                
                <div className="mb-3">
                  <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full">
                    {project.techStack}
                  </span>
                </div>

                <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <span className="text-xs font-medium text-accent">
                    {project.role}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="glass border-primary/30 hover:bg-primary/10 flex-1"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="sm"
                      className={`bg-gradient-to-br ${project.color} hover:opacity-90 flex-1`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </motion.div>
                </div>
              </div>

              {/* Hover effect overlay */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent rounded-2xl"
                whileHover={{
                  borderColor: "rgba(168, 85, 247, 0.5)"
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-gradient-primary hover:scale-105 transition-transform duration-300 glow"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;