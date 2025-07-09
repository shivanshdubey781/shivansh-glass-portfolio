import { motion } from "framer-motion";
import { Code, Database, Smartphone, Brain, Settings, Cloud } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-8 h-8" />,
      skills: ["Python", "JavaScript (ES6+)", "Java", "TypeScript", "SQL", "C/C++"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Machine Learning",
      icon: <Brain className="w-8 h-8" />,
      skills: ["scikit-learn", "pandas", "NumPy", "TensorFlow", "Keras", "OpenCV", "Streamlit"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Full Stack (MERN)",
      icon: <Database className="w-8 h-8" />,
      skills: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "RESTful APIs"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Web Design",
      icon: <Settings className="w-8 h-8" />,
      skills: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "SASS"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Android Development",
      icon: <Smartphone className="w-8 h-8" />,
      skills: ["Flutter", "Dart", "Java/Kotlin", "Firebase", "Retrofit", "MVVM"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Tools & Platforms",
      icon: <Cloud className="w-8 h-8" />,
      skills: ["Git", "GitHub", "Postman", "Docker", "Firebase Hosting", "Netlify", "Heroku"],
      color: "from-teal-500 to-blue-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive technical skills across multiple domains
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50
              }}
              className="glass-card p-8 rounded-2xl relative overflow-hidden group"
            >
              {/* Animated background gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                initial={false}
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
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} p-2 mb-6 glow`}
                >
                  <div className="w-full h-full bg-background/20 rounded-xl flex items-center justify-center text-white">
                    {category.icon}
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-6 text-foreground">
                  {category.title}
                </h3>

                {/* Skills */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ width: 0, opacity: 0 }}
                      whileInView={{ width: "100%", opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.8,
                        delay: skillIndex * 0.1
                      }}
                      className="relative"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-foreground/90">
                          {skill}
                        </span>
                      </div>
                      <div className="h-2 bg-background/30 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${85 + skillIndex * 2}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.2,
                            delay: skillIndex * 0.1 + 0.3,
                            ease: "easeOut"
                          }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                        >
                          <motion.div
                            animate={{ 
                              x: ["-100%", "100%", "-100%"]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: skillIndex * 0.2
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;