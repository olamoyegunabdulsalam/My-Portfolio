import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Star } from "lucide-react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [ activeFilter, setActiveFilter ] = useState("all");

  const filters = ["all", "react", "javascript", "bootstrap"];

  const projects = [
    {
      title: "Fastride Car Rental Service",
      description:
        "A responsive car rental website that allows users to browse available vehicles, view pricing details, and make rental inquiries. Built with a focus on clean UI, accessibility, and mobile-first responsiveness.",
      tech: ["HTML", "Bootstrap", "JavaScript"],
      image: "./Img/Fastride-Autos.png",
      liveUrl:
        "https://olamoyegunabdulsalam.github.io/Fastride-Car-Rental-Service/",
      githubUrl:
        "https://github.com/olamoyegunabdulsalam/Fastride-Car-Rental-Service",
      category: ["frontend", "bootstrap", "business"],
    },
    {
      title: "LearnHub Online Learning Platform",
      description:
        "An online learning platform interface built with React and Tailwind CSS, featuring course listings, structured layouts, and a modern dashboard-style design optimized for scalability.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      image: "./Img/Learn-Hub.png",
      liveUrl: "https://olamoyegunabdulsalam.github.io/LearnHub/",
      githubUrl: "https://github.com/olamoyegunabdulsalam/LearnHub",
      category: ["react", "dashboard", "education"],
    },
    {
      title: "MimiLuxe Cosmetics E-commerce",
      description:
        "A full e-commerce cosmetics platform with product listings, admin dashboard, and backend integration. Includes product management, responsive UI, and real-time data handling using Supabase.",
      tech: ["React", "Tailwind CSS", "Supabase"],
      image: "./Img/MiMi-Luxe.png",
      liveUrl: "https://mimiluxe-cosmetics.vercel.app/",
      githubUrl: "https://github.com/olamoyegunabdulsalam/mimiluxe-cosmetics",
      category: ["react", "ecommerce", "fullstack"],
    },
    {
      title: "Elevate Coaching Website",
      description:
        "A modern coaching and personal development website designed to clearly communicate services, build trust, and convert visitors through structured sections and call-to-action layouts.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "./Img/Elevate.png",
      liveUrl: "https://elevate-coaching-eosin.vercel.app/",
      githubUrl: "https://github.com/olamoyegunabdulsalam/Elevate-Coaching",
      category: ["frontend", "javascript", "branding"],
    },
    {
      title: "IT Consultant Business Website",
      description:
        "A professional corporate website for an IT consulting brand, highlighting services, expertise, and contact information with a clean, minimal, and business-focused design.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "./Img/IT-Consultant.png",
      liveUrl: "https://it-consultant-rho.vercel.app/",
      githubUrl: "https://github.com/olamoyegunabdulsalam/IT-Consultant",
      category: ["frontend", "javascript", "corporate"],
    },
    {
      title: "DesignHub UI & Design Showcase",
      description:
        "A creative frontend project showcasing modern UI components, layouts, and design patterns. Built to demonstrate visual design skills, animations, and layout composition.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "./Img/Design-Hub.png",
      liveUrl: "https://design-hub-teal.vercel.app/",
      githubUrl: "https://github.com/olamoyegunabdulsalam/DesignHub",
      category: ["frontend", "javascript", "ui"],
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4"
            >
              Featured{" "}
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 0px #3b82f6",
                    "0 0 20px #3b82f6",
                    "0 0 0px #3b82f6",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-blue-600 dark:text-blue-400"
              >
                Projects
              </motion.span>
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto"
            >
              Filter projects by technology
            </motion.p>
          </div>

          {/* Interactive filter buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 capitalize ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white dark:bg-dark-surface text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {filter === "all" ? "All Projects" : filter}
                {activeFilter === filter && (
                  <motion.span
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full -z-10"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Project grid with stagger animation */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{
                    y: -15,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA with floating animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16 relative"
          >
            <motion.a
              href="https://wa.me/2349075025164?text=Hello%20Abdulsalam%20I%20saw%20your%20portfolio%20and%20I%20want%20to%20work%20with%20you"
              target="_blank"
              rel="noopener noreferrer"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4
      bg-gradient-to-r from-green-500 to-emerald-600
      text-white rounded-full font-bold text-lg
      shadow-xl hover:shadow-2xl transition-all group"
            >
              {/* WhatsApp Icon */}
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-xl"
              >
                <svg viewBox="0 0 32 32" className="w-6 h-6 fill-current">
                  <path d="M16 0C7.164 0 0 7.164 0 16c0 2.82.738 5.57 2.137 7.996L0 32l8.27-2.094A15.92 15.92 0 0 0 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.09c-2.52 0-4.996-.676-7.156-1.957l-.512-.305-4.914 1.246 1.313-4.79-.336-.49A13.02 13.02 0 1 1 16 29.09z" />
                </svg>
              </motion.span>
              Let’s Talk on WhatsApp
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-xl"
              >
                →
              </motion.span>
            </motion.a>
            {/* Floating decorative elements */}
            <motion.div
              animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/2 -left-4 w-3 h-3 bg-blue-500 rounded-full opacity-50"
            />
            <motion.div
              animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              className="absolute top-1/2 -right-4 w-3 h-3 bg-purple-500 rounded-full opacity-50"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
