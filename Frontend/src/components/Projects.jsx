import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projectsList = [
    {
      id: 1,
      title: "ResumeVision AI",
      description: "A full-stack AI-powered resume analyzer that extracts and evaluates resumes using Python and Django on the backend, with a clean and responsive React frontend.",
      image: "/assets/resume_project.png",
      demoLink: "https://resumevisionai.netlify.app/",
      githubLink: "https://github.com/iamashwinmukati30/ResumeVisionAI",
      tag: "Full-Stack"
    },
    {
      id: 2,
      title: "Bonkers Corner",
      description: "A modern e-commerce web app built entirely with React, featuring product listings, cart management, and a smooth, user-friendly shopping experience.",
      image: "/assets/bonkers_original.png",
      demoLink: "https://bonkers-corner.netlify.app/",
      githubLink: "https://github.com/iamashwinmukati30/Ecommerce-react",
      tag: "Frontend / React"
    },
    {
      id: 3,
      title: "Rock Paper Scissors",
      description: "A fun and interactive Rock Paper Scissors game built with vanilla JavaScript, featuring live score tracking, animated results, and a clean minimal UI.",
      image: "/assets/rps_project.png",
      demoLink: "https://iamashwinmukati30.github.io/Rock-Paper-Scissor/",
      githubLink: "https://github.com/iamashwinmukati30/Rock-Paper-Scissor",
      tag: "JavaScript"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-transparent relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Portfolio</span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-6 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-transparent dark:from-blue-400 dark:to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-[2rem] overflow-hidden bg-white dark:bg-gray-800/30 border border-gray-100 dark:border-gray-700/50 shadow-xl shadow-gray-200/40 dark:shadow-black/40 backdrop-blur-md hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-500"
            >
              {/* Image Container with Zoom */}
              <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600';
                  }}
                />

                <div className="absolute top-4 right-4 backdrop-blur-md bg-white/70 dark:bg-black/50 text-gray-900 dark:text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider shadow-sm border border-white/20">
                  {project.tag}
                </div>

                {/* Gradient Overlay for blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content Space */}
              <div className="p-8 relative">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4 items-center">
                  <a
                    href={project.demoLink}
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-900 hover:bg-blue-600 dark:bg-white dark:hover:bg-blue-500 text-white dark:text-gray-900 font-bold rounded-xl transition-colors shadow-md"
                  >
                    <span>View Demo</span>
                    <FiExternalLink />
                  </a>
                  <a
                    href={project.githubLink}
                    className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-xl transition-colors shrink-0"
                    aria-label="GitHub Repository"
                  >
                    <FiGithub className="text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
