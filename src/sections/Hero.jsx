import { motion } from "framer-motion";
import { Rocket, Star } from "lucide-react";
import { FaGithub, FaLinkedin, FaTiktok } from "react-icons/fa";

const Hero = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/olamoyegunabdulsalam",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/abdulsalam-olamoyegun-718007371/",
      label: "LinkedIn",
    },
    {
      icon: FaTiktok,
      href: "https://www.tiktok.com/@codewithabdulsalam",
      label: "Tiktok",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-dark-bg dark:to-gray-900"
    >
      {/* Animated background elements */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-10 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      />
      <motion.div
        animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Animated blob element */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="relative inline-block mb-8"
            >
              <div className="w-40 h-40 md:w-48 md:h-48 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-blob overflow-hidden shadow-2xl">
                <div className="w-36 h-36 md:w-44 md:h-44 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                  <img src="/Img/Profile-pic.jpg" alt="Profile" />
                </div>
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-2 -right-2 md:-right-4 bg-white dark:bg-dark-surface text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full font-bold shadow-lg"
              >
                <span className="text-sm">
                  <Rocket />
                </span>
                Available
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-2 -left-2 md:-left-4 bg-gradient-to-r from-green-400 to-blue-400 text-white px-4 py-2 rounded-full font-bold shadow-lg"
              >
                <span className="text-sm">
                  <Star />
                </span>
                Pro
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="block text-gray-800 dark:text-white">
                Olamoyegun
              </span>
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-[length:200%_auto] bg-clip-text text-transparent"
              >
                Abdulsalam
              </motion.span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Frontend Developer &{" "}
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block text-blue-600 dark:text-blue-400 font-bold"
              >
                UI/UX Specialist
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12"
            >
              I build{" "}
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="inline-block px-2 py-1 bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/30 rounded-lg font-medium cursor-pointer"
              >
                exceptional
              </motion.span>{" "}
              digital experiences that are{" "}
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="inline-block px-2 py-1 bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 rounded-lg font-medium cursor-pointer"
              >
                fast
              </motion.span>
              ,{" "}
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="inline-block px-2 py-1 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg font-medium cursor-pointer"
              >
                accessible
              </motion.span>
              , and{" "}
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="inline-block px-2 py-1 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-lg font-medium cursor-pointer"
              >
                visually appealing
              </motion.span>
              . Let's bring your ideas to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">View Projects</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 bg-white dark:bg-dark-surface text-gray-800 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-full font-medium text-lg hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-lg"
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Interactive mouse follower */}
            <motion.div
              className="hidden lg:block absolute bottom-10 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex justify-center gap-6 mt-8"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.3, y: -10, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-white dark:bg-dark-surface text-gray-700 dark:text-gray-300 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 relative group"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
