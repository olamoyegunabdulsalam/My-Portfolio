import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Star } from "lucide-react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [ activeFilter, setActiveFilter ] = useState("all");

  const filters = ["all", "react", "javascript", "bootstrap", "tailwindcss"];

  const projects = [
    {
      title: "DevBalance",
      description:
        "A modern finance management dashboard that helps users track income, expenses, account balances, and financial insights through a clean, responsive interface with intuitive data visualization.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      image: "./Img/DevBalance.png",
      liveUrl: "https://devbalance.vercel.app",
      githubUrl: "https://github.com/olamoyegunabdulsalam/DevBalance",
      category: ["react", "dashboard", "tailwindcss"],
    },
    {
      title: "AuditIQ Platform",
      description:
        "A modern SaaS-style website interface for an eCommerce monitoring and auditing platform. The site presents features like real-time website health monitoring, performance tracking, SEO checks, and security alerts using a clean UI and responsive layout.",
      tech: ["HTML", "Tailwindcss", "javaScript", "Node.js"],
      image: "./Img/AuditIQ.png",
      liveUrl: "https://auditiq-psi.vercel.app/",
      githubUrl: "https://github.com/olamoyegunabdulsalam/AuditIQ",
      category: ["fullstack", "tailwindcss", "saas"],
    },
    {
      title: "Elixir Wellness",
      description:
        "A modern, high-converting product landing page built to promote a wellness brand. Designed with strong visual hierarchy, product highlights, testimonials, and call-to-action sections to guide visitors from interest to conversion.",
      tech: ["HTML", "Tailwindcss", "JavaScript"],
      image: "./Img/Landing.png",
      liveUrl: "https://elixir-nine-pi.vercel.app/",
      githubUrl:
        "https://github.com/olamoyegunabdulsalam/Sales-driven-landing-page",
      category: ["javascript", "landing-page", "tailwindcss"],
    },
    {
      title: "Fastride Car Rental Service",
      description:
        "A responsive car rental website that allows users to browse available vehicles, view pricing details, and submit rental inquiries. Built with a focus on clean UI, accessibility, and mobile-first responsiveness.",
      tech: ["HTML", "Bootstrap", "JavaScript"],
      image: "./Img/Fastride-Autos.png",
      liveUrl:
        "https://olamoyegunabdulsalam.github.io/Fastride-Car-Rental-Service/",
      githubUrl:
        "https://github.com/olamoyegunabdulsalam/Fastride-Car-Rental-Service",
      category: ["javascript", "bootstrap", "business"],
    },
    {
      title: "LearnHub Online Learning",
      description:
        "A modern online learning platform interface built with React and Tailwind CSS. It features structured course listings, a responsive layout, and a scalable dashboard-style UI designed for digital education platforms.",
      tech: ["Reac", "Tailwind CSS", "JavaScript"],
      image: "./Img/Learn-Hub.png",
      liveUrl: "https://olamoyegunabdulsalam.github.io/LearnHub/",
      githubUrl: "https://github.com/olamoyegunabdulsalam/LearnHub",
      category: ["react", "dashboard", "education"],
    },
    {
      title: "Resume Craft",
      description:
        "A modern resume builder that enables users to create professional resumes with live preview, customizable sections, and a clean, responsive interface for generating job-ready CVs.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      image: "./Img/Resume.png",
      liveUrl: "https://resume-craft-lime.vercel.app/",
      githubUrl: "https://github.com/olamoyegunabdulsalam/ResumeCraft",
      category: ["react", "productivity", "tailwindcss"],
    },
    {
      title: "Cosmetics Demo E-commerce Store",
      description:
        "A full demo e-commerce cosmetics platform featuring product listings. Includes product management, responsive UI.",
      tech: ["React", "Tailwind CSS", "Supabase"],
      image: "./Img/Cosmetics.png",
      liveUrl: "https://cosmetics-store-beta.vercel.app/",
      githubUrl: "https://github.com/olamoyegunabdulsalam/Cosmetics-Store",
      category: ["react", "ecommerce", "fullstack"],
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
