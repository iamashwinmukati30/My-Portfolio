import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaBootstrap, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiDjango, SiMysql } from 'react-icons/si';
import { TbBrandVscode, TbApi } from 'react-icons/tb';
import { IoLogoJavascript } from 'react-icons/io5';

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: 'HTML5', icon: <FaHtml5 />, textClass: 'text-[#E34F26]' },
        { name: 'CSS3', icon: <FaCss3Alt />, textClass: 'text-[#1572B6]' },
        { name: 'JavaScript', icon: <IoLogoJavascript />, textClass: 'text-[#F7DF1E]' },
        { name: 'React', icon: <FaReact />, textClass: 'text-[#61DAFB]' },
        { name: 'Bootstrap', icon: <FaBootstrap />, textClass: 'text-[#7952B3]' },
      ]
    },
    {
      title: "Backend & DB",
      skills: [
        { name: 'Python', icon: <FaPython />, textClass: 'text-[#3776AB]' },
        { name: 'Django', icon: <SiDjango />, textClass: 'text-[#092E20] dark:text-[#44B78B]' },
        { name: 'MySQL', icon: <SiMysql />, textClass: 'text-[#4479A1]' },
      ]
    },
    {
      title: "Tools & Tech",
      skills: [
        { name: 'Git', icon: <FaGitAlt />, textClass: 'text-[#F05032]' },
        { name: 'GitHub', icon: <FaGithub />, textClass: 'text-gray-800 dark:text-white' },
        { name: 'VS Code', icon: <TbBrandVscode />, textClass: 'text-[#007ACC]' },
        { name: 'REST APIs', icon: <TbApi />, textClass: 'text-teal-500' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm mb-2 block">My Stack</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 mb-5 tracking-tight">
            Technical Arsenal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-transparent dark:from-blue-400 dark:to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, catIndex) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="bg-white dark:bg-gray-800/40 backdrop-blur-md rounded-2xl p-6 border border-gray-100 dark:border-gray-700/50 shadow-lg shadow-gray-200/50 dark:shadow-black/20 hover:-translate-y-1 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-5 border-b border-gray-100 dark:border-gray-700/80 pb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200/60 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-500 transition-colors cursor-default group"
                  >
                    <div className={`text-lg transition-transform duration-300 group-hover:scale-110 ${skill.textClass}`}>
                      {skill.icon}
                    </div>
                    <span className="font-semibold text-sm text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
