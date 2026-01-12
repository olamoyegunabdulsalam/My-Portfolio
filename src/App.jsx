import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { FaGithub, FaLinkedin, FaTiktok } from "react-icons/fa";

const App = () => {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/olamoyegunabdulsalam", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/abdulsalam-olamoyegun-718007371/", label: "LinkedIn" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@codewithabdulsalam", label: "Tiktok" },
  ];

  const currentYear = new Date().getFullYear();

  // Floating particles (keep these if you want, or remove them too)
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 5,
    delay: Math.random() * 5,
  }));

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300 overflow-hidden">
      {/* Floating particles (optional - remove if you don't want these either) */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-500/20 dark:bg-blue-400/20 rounded-full"
          style={{ left: `${particle.x}vw`, top: `${particle.y}vh` }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 relative overflow-hidden">
        {/* Animated gradient border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center md:text-left"
              >
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Olamoyegun Abdulsalam
                </h3>
                <p className="text-gray-400">
                  Frontend Developer & UI/UX Specialist
                </p>
              </motion.div>

              <motion.div
                className="flex gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    whileHover={{
                      scale: 1.3,
                      y: -5,
                      rotate: [0, 10, -10, 0],
                      transition: { duration: 0.5 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors hover:shadow-lg relative group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-20 blur-md"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="border-t border-gray-800 pt-8 text-center text-gray-400"
            >
              <p>
                &copy; {currentYear} Olamoyegun Abdulsalam. All rights reserved.
              </p>
              <motion.p
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-2 text-sm"
              >
                Built with React, Tailwind CSS, and Framer Motion
              </motion.p>

              {/* Back to top button */}
              <motion.a
                href="#home"
                className="inline-block mt-6 px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-sm font-medium transition-colors group"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  Back to top
                  <motion.span
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-lg"
                  >
                    ↑
                  </motion.span>
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default App;
