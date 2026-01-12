import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiSupabase,
} from "react-icons/si";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px is typical lg breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const skills = [
    {
      icon: SiHtml5,
      name: "HTML5",
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      level: "Advanced",
      description: "Semantic markup, SEO optimization, accessibility",
      projects: "50+ projects",
    },
    {
      icon: SiCss3,
      name: "CSS3",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      level: "Advanced",
      description: "Modern layouts, animations, responsive design",
      projects: "50+ projects",
    },
    {
      icon: SiJavascript,
      name: "JavaScript",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      level: "Advanced",
      description: "ES6+, Async programming, DOM manipulation",
      projects: "40+ projects",
    },
    {
      icon: SiReact,
      name: "React",
      color: "text-cyan-500",
      bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
      level: "Expert",
      description: "Hooks, Context API, Performance optimization",
      projects: "30+ projects",
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind CSS",
      color: "text-teal-500",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
      level: "Expert",
      description: "Utility-first, responsive, custom configurations",
      projects: "25+ projects",
    },
    {
      icon: SiBootstrap,
      name: "Bootstrap",
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      level: "Advanced",
      description: "Responsive grid system, components, utilities",
      projects: "20+ projects",
    },
    {
      icon: SiSupabase,
      name: "Supabase",
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      level: "Intermediate",
      description: "PostgreSQL database, authentication, real-time",
      projects: "15+ projects",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4"
            >
              Skills &{" "}
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Expertise
              </motion.span>
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto"
            >
              {isMobile
                ? "Tap on each skill for details"
                : "Hover over each skill to see details"}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const shouldShowDetails = isMobile
                ? true
                : hoveredSkill === index;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  whileHover={!isMobile ? { y: -15, scale: 1.05 } : undefined}
                  onHoverStart={
                    !isMobile ? () => setHoveredSkill(index) : undefined
                  }
                  onHoverEnd={
                    !isMobile ? () => setHoveredSkill(null) : undefined
                  }
                  className={`${
                    skill.bgColor
                  } p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                    !isMobile ? "cursor-pointer" : ""
                  } relative overflow-hidden group`}
                >
                  {/* Animated background effect - desktop only */}
                  {!isMobile && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: hoveredSkill === index ? "100%" : "-100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  )}

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        animate={
                          !isMobile
                            ? { rotate: hoveredSkill === index ? 360 : 0 }
                            : undefined
                        }
                        transition={{ duration: 0.5 }}
                        className="p-3 bg-white dark:bg-dark-surface rounded-xl shadow-sm"
                      >
                        <skill.icon className={`w-8 h-8 ${skill.color}`} />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                          {skill.name}
                        </h3>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {skill.level}
                        </span>
                      </div>
                    </div>

                    {/* Skill details section */}
                    {isMobile ? (
                      // Mobile: Always show details
                      <div className="mt-4">
                        <p className="text-gray-600 dark:text-gray-300 mb-3">
                          {skill.description}
                        </p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 rounded-full">
                            {skill.projects}
                          </span>
                          <div className="text-gray-500 dark:text-gray-400">
                            →
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Desktop: Hover-triggered details with animation
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: shouldShowDetails ? "auto" : 0,
                          opacity: shouldShowDetails ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 dark:text-gray-300 mb-3">
                          {skill.description}
                        </p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 rounded-full">
                            {skill.projects}
                          </span>
                          <motion.div
                            animate={{ x: shouldShowDetails ? 0 : 10 }}
                            className="text-gray-500 dark:text-gray-400"
                          >
                            →
                          </motion.div>
                        </div>
                      </motion.div>
                    )}

                    {/* Progress indicator */}
                    <div className="mt-4">
                      <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          className={`h-full bg-gradient-to-r ${
                            skill.name === "React" ||
                            skill.name === "Tailwind CSS"
                              ? "from-cyan-500 to-teal-500"
                              : skill.name === "Bootstrap"
                              ? "from-purple-500 to-pink-500"
                              : skill.name === "Supabase"
                              ? "from-green-500 to-emerald-500"
                              : "from-blue-500 to-purple-500"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Floating stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "50+", label: "Projects Completed", delay: 0.1 },
              { value: "100%", label: "Client Satisfaction", delay: 0.2 },
              { value: "24/7", label: "Available", delay: 0.3 },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
                whileHover={{ scale: 1.1 }}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-dark-surface dark:to-gray-800/50 p-6 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-shadow"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
