import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { FiArrowRight, FiDownload } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center pt-20 pb-12 overflow-hidden bg-transparent">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-20 relative z-20">

        {/* Left: Text Content */}
        <motion.div
          className="flex-1 text-center xl:text-left pt-10 xl:pt-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >


          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 dark:text-gray-400 mb-4 tracking-tight flex items-center justify-center xl:justify-start gap-3">
            Hey there! <span className="animate-[wave_2.5s_ease-in-out_infinite] origin-bottom-right inline-block">👋</span>
          </h2>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter leading-[1.1]">
            I'm <span className="text-blue-600 dark:text-blue-500">Ashwin Mukati</span>
          </h1>

          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 dark:text-gray-300 mb-8 h-[40px] md:h-[48px]">
            <TypeAnimation
              sequence={[
                'Software Engineer', 2500,
                'Full-Stack Developer', 2500,
                'UI/UX Enthusiast', 2500
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gray-700 dark:text-gray-300"
            />
          </div>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto xl:mx-0 leading-relaxed font-medium">
            Building modern, scalable web applications with clean design and efficient code.

          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center xl:justify-start">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-all duration-300 cursor-pointer"
            >
              <span>Explore Work</span>
              <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-400 font-bold rounded-xl shadow-sm transition-colors duration-300 cursor-pointer"
            >
              <FiDownload className="text-xl group-hover:-translate-y-1 transition-transform" />
              <span>Resume</span>
            </a>
          </div>
        </motion.div>

        {/* Right: Clean Portrait */}
        <motion.div
          className="flex-1 flex justify-center xl:justify-end relative mt-10 xl:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {/* Subtle Glow Behind Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-blue-500/20 rounded-full blur-3xl z-0"></div>

          {/* Normal Circular Profile Photo Container */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full p-2 border-4 border-blue-500/30 dark:border-blue-500/20 shadow-xl z-10 overflow-hidden bg-white dark:bg-gray-800">
            <img
              src="/assets/img/profile.jpg"
              alt="Ashwin Mukati"
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800"><span class="text-7xl font-black text-blue-500">AM</span></div>';
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
