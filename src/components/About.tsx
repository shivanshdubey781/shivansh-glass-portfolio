import { motion } from "framer-motion";
import { Calendar, GraduationCap, Award } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "Masters of Computer Application",
      institution: "Bundelkhand University",
      period: "2023–2025",
      grade: "Current: 70%",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Bachelor of Science",
      institution: "Allahabad State University",
      period: "2020–2023",
      grade: "68%",
      icon: <Award className="w-6 h-6" />
    },
    {
      degree: "Senior Secondary",
      institution: "Dolphin Public School",
      period: "2019–2020",
      grade: "87%",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      degree: "Secondary",
      institution: "Dolphin Public School",
      period: "2017–2018",
      grade: "80%",
      icon: <Calendar className="w-6 h-6" />
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
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Passionate developer with expertise across multiple technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="glass-card p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-4 gradient-secondary-text">
                MERN Stack Developer
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Proficient MERN Stack Developer with hands-on experience in building dynamic web applications using MongoDB, Express.js, React.js, and Node.js. Skilled in deploying scalable applications using Docker and Amazon EC2, with a focus on performance, clean code, and responsive design.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-card p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Flutter & ML Developer
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Flutter-focused Android Developer skilled in Dart, cross-platform app development, and backend tech (MERN, PHP, Laravel). Proficient in SQL/MySQL, API integration, and clean code. Passionate about ML, with experience building ML-based APIs.
              </p>
            </motion.div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold mb-8 gradient-text"
            >
              Education
            </motion.h3>
            
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass-card p-6 rounded-xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className="glass p-2 rounded-lg text-primary">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-foreground">
                        {edu.degree}
                      </h4>
                      <p className="text-primary font-medium">
                        {edu.institution}
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-foreground/60">
                          {edu.period}
                        </span>
                        <span className="text-sm font-medium text-accent">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;