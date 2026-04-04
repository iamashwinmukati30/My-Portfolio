import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRocket, FaLaptopCode, FaCoffee } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden">

      {/* Decorative Blobs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-300 dark:bg-blue-600/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-[120px] opacity-60 animate-blob pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/4 w-[600px] h-[600px] bg-purple-300 dark:bg-purple-600/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-[120px] opacity-60 animate-blob animation-delay-4000 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Discover</span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-200 dark:to-gray-400 mb-6 tracking-tight">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-transparent dark:from-blue-400 dark:to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-stretch">
          
          {/* Left Column: Text & Stats Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 flex flex-col justify-between"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <p className="text-gray-600 dark:text-gray-300 leading-loose text-lg font-medium relative pl-6 border-l-4 border-blue-600 dark:border-blue-500 bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-900/10 py-4 rounded-r-2xl">
                I’m a 
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-xl tracking-wide mx-1">
                  Full Stack Developer
                </span> 
                who builds modern, scalable, and user-focused web applications, transforming ideas into impactful digital experiences through clean design and efficient code.
              </p>
              
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(37,99,235,0.15)] border border-gray-100 dark:border-gray-700 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                    <FaCode size={24} />
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-200">
                  I have developed a range of projects, from highly interactive portfolio websites to complex full-stack applications, with an uncompromising focus on 
                  <span className="font-semibold text-gray-900 dark:text-white"> performance</span>, 
                  <span className="font-semibold text-gray-900 dark:text-white"> usability</span>, and 
                  <span className="font-semibold text-gray-900 dark:text-white"> scalable architecture</span>.
                </p>
              </div>

              <div className="flex gap-6 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(147,51,234,0.15)] border border-gray-100 dark:border-gray-700 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                    <FaRocket size={24} />
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-200">
                  Passionate about technology and problem-solving, I continuously explore new concepts and tools to improve my skills. I’m always eager to take on new challenges and engineer meaningful solutions through beautifully crafted code.
                </p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Premium Education Timeline Card */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex-1 w-full flex"
          >
            <div className="relative w-full backdrop-blur-2xl bg-white/60 dark:bg-gray-800/40 rounded-[2rem] p-10 shadow-2xl shadow-blue-900/10 dark:shadow-black/40 border border-white/50 dark:border-gray-700/50 overflow-hidden group hover:bg-white/80 dark:hover:bg-gray-800/60 transition-colors duration-500">
              
              {/* Premium abstract glow inside card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-blue-400/30 transition-colors duration-700"></div>

              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="flex items-center gap-5 mb-12">
                  <div className="p-4 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg shadow-blue-600/30">
                    <FaGraduationCap className="text-white text-3xl" />
                  </div>
                  <h3 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Education</h3>
                </div>

                <div className="space-y-10">
                  {/* Timeline Item 1 */}
                  <div className="relative pl-10 group/item">
                    {/* Glowing animated dot */}
                    <div className="absolute top-2 left-0 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 ring-4 ring-blue-100 dark:ring-blue-900/30 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10">
                      <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75"></div>
                    </div>
                    {/* Glowing Line */}
                    <div className="absolute top-6 left-[9px] w-[2px] h-[120%] bg-gradient-to-b from-blue-400 to-gray-200 dark:from-blue-600 dark:to-gray-700 -z-0 group-hover/item:from-blue-500 group-hover/item:to-purple-500 transition-colors duration-300"></div>
                    
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors duration-300">
                      B.Tech in Computer Science
                    </h4>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-3">Medi-Caps University, Indore</p>
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 shadow-inner border border-blue-100 dark:border-blue-800/50">
                      2024 – Present
                    </span>
                  </div>

                  {/* Timeline Item 2 */}
                  <div className="relative pl-10 group/item pt-4">
                    <div className="absolute top-6 left-0 w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-600 ring-4 ring-gray-100 dark:ring-gray-800 transition-all duration-300 z-10 group-hover/item:bg-purple-500 group-hover/item:ring-purple-200 dark:group-hover/item:ring-purple-900/30"></div>
                    <div className="absolute top-10 left-[9px] w-[2px] h-[120%] bg-gray-200 dark:bg-gray-700 -z-0"></div>

                    <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1 group-hover/item:text-purple-600 dark:group-hover/item:text-purple-400 transition-colors duration-300 pt-1">
                      Higher Secondary (12th)
                    </h4>
                    <p className="text-md text-gray-500 dark:text-gray-400 font-medium tracking-wide">
                      St. Joseph Higher Secondary School
                    </p>
                  </div>

                  {/* Timeline Item 3 */}
                  <div className="relative pl-10 group/item pt-4">
                    <div className="absolute top-6 left-0 w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-600 ring-4 ring-gray-100 dark:ring-gray-800 transition-all duration-300 z-10 group-hover/item:bg-gray-500"></div>
                    
                    <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1 pt-1">
                      High School (10th)
                    </h4>
                    <p className="text-md text-gray-500 dark:text-gray-400 font-medium tracking-wide">
                      Saket International School
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
