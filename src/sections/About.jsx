import { motion } from "framer-motion";
import { RefreshCcw, Laptop } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark-bg dark:to-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block mb-8"
            >
              <div className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                About{" "}
                <motion.span
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                  Me
                </motion.span>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              Get to know the person behind the code
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 relative"
            >
              {/* Floating text elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -left-4 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
              >
                Passionate
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/4 -right-4 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium"
              >
                Creative
              </motion.div>

              <motion.p
                whileHover={{ x: 10 }}
                className="text-lg text-gray-600 dark:text-gray-300 p-4 bg-white dark:bg-dark-surface rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                I'm a passionate Frontend Developer with expertise in creating
                modern, responsive web applications that deliver exceptional
                user experiences.
              </motion.p>
              <motion.p
                whileHover={{ x: 10 }}
                className="text-lg text-gray-600 dark:text-gray-300 p-4 bg-white dark:bg-dark-surface rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                My focus is on building clean, efficient code using React and
                Tailwind CSS, with a strong emphasis on performance,
                accessibility, and visual quality.
              </motion.p>
              <motion.p
                whileHover={{ x: 10 }}
                className="text-lg text-gray-600 dark:text-gray-300 p-4 bg-white dark:bg-dark-surface rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                I believe in the power of simple, intuitive designs that solve
                real problems. Every project is an opportunity to learn,
                innovate, and deliver value.
              </motion.p>

              {/* Interactive skills chips */}
              <div className="flex flex-wrap gap-3 pt-6">
                {[
                  "Problem Solver",
                  "Team Player",
                  "Quick Learner",
                  "Detail Oriented",
                ].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-600 dark:text-blue-400 rounded-full font-medium cursor-pointer hover:shadow"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-1"
              >
                <div className="bg-white dark:bg-dark-surface rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                    Core Competencies
                  </h3>

                  <div className="space-y-6">
                    {[
                      { skill: "Frontend Development", level: 95 },
                      { skill: "UI/UX Design", level: 90 },
                      { skill: "Performance Optimization", level: 85 },
                      { skill: "Responsive Design", level: 95 },
                    ].map((item, index) => (
                      <motion.div
                        key={item.skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-700 dark:text-gray-300">
                            {item.skill}
                          </span>
                          <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.5,
                            }}
                            className="text-blue-600 dark:text-blue-400 font-bold"
                          >
                            {item.level}%
                          </motion.span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: index * 0.2 + 0.5,
                              type: "spring",
                            }}
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 relative"
                          >
                            {/* Shimmer effect */}
                            <motion.div
                              className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                              animate={{ x: ["-100%", "100%"] }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: index * 0.3,
                              }}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Interactive toggle */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl cursor-pointer group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        Always Learning
                      </span>
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="text-blue-500 text-xl"
                      >
                        <RefreshCcw />
                      </motion.div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Continuously updating skills with latest technologies
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating elements around the card */}
              <motion.div
                animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-50"
              />
              <motion.div
                animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full opacity-50"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
