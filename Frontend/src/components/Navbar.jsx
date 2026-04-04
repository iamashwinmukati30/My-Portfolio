import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  const shimmerAnim = {
    initial: { x: '-100%' },
    animate: { 
      x: '100%',
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: 'linear'
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, x: '-50%', opacity: 0 }}
      animate={{ 
        y: isScrolled ? 16 : 0, 
        x: '-50%', 
        opacity: 1,
        width: isScrolled ? '90%' : '100%'
      }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ maxWidth: isScrolled ? '1100px' : '100%' }}
      className={`fixed left-1/2 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/80 dark:bg-[#060C18]/90 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20 dark:border-gray-800/60 rounded-[30px] py-3 px-8' 
          : 'bg-transparent py-8 px-6 md:px-12'
      }`}
    >
      <div className="flex justify-between items-center w-full relative">
        {/* Logo / Name */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="group flex items-center gap-3 cursor-pointer"
        >
          <div className="relative flex items-center">
            {/* Soft background glow */}
            <div className="absolute -inset-4 bg-blue-500/20 dark:bg-blue-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative flex items-center font-mono tracking-tighter">
              {/* Left bracket */}
              <span className="text-2xl md:text-3xl font-light text-blue-600/40 dark:text-blue-400/30 group-hover:text-blue-500 transition-colors duration-300">
                &lt;
              </span>
              
              {/* Initials with gradient and glow */}
              <span className="relative px-1 text-2xl md:text-3xl font-black italic bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                AM
                <span className="absolute inset-0 bg-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </span>
              
              {/* Right bracket */}
              <span className="text-2xl md:text-3xl font-light text-blue-600/40 dark:text-blue-400/30 group-hover:text-blue-500 transition-colors duration-300">
                /&gt;
              </span>
            </div>

            {/* Developer Tag */}
            <div className="hidden sm:flex flex-col ml-3 pl-3 border-l border-gray-200 dark:border-gray-800 transition-colors duration-500">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-600 dark:text-blue-400">Developer</span>
              <span className="text-[9px] uppercase tracking-[0.1em] font-medium text-gray-400 dark:text-gray-500 mt-0.5">Ashwin Mukati</span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links (Centered with Sliding Pill) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center">
          <div className="relative bg-gray-100/40 dark:bg-white/5 backdrop-blur-md rounded-full p-1.5 border border-black/5 dark:border-white/10 flex items-center">
            {/* Sliding Pill Background */}
            <AnimatePresence>
              {hoveredIndex !== null && (
                <motion.div
                  layoutId="nav-pill"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                  className="absolute bg-white dark:bg-[#1A1F2B] shadow-sm rounded-full h-[calc(100%-12px)] top-1.5 left-1.5"
                  style={{
                    width: `calc(100% / ${navLinks.length} - 12px)`,
                    transform: `translateX(calc(100% * ${hoveredIndex}))`
                  }}
                />
              )}
            </AnimatePresence>

            <ul className="flex items-center relative z-10">
              {navLinks.map((link, index) => (
                <li 
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        layoutId="nav-hover-pill"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                        className="absolute inset-0 bg-white dark:bg-white/10 shadow-sm rounded-full -z-10"
                      />
                    )}
                  </AnimatePresence>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={600}
                    activeClass="text-blue-600 dark:text-blue-400"
                    className={`cursor-pointer text-[14px] font-bold transition-colors duration-300 px-6 py-2.5 rounded-full block ${
                      hoveredIndex === index 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : 'text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section: Theme Toggle + CTA */}
        <div className="hidden md:flex items-center gap-4">


          {/* Shimmer CTA Button */}
          <Link
            to="contact"
            smooth={true}
            offset={-100}
            duration={500}
            className="relative overflow-hidden group flex items-center justify-center px-8 py-3.5 font-bold text-white bg-blue-600 rounded-[18px] transition-all hover:bg-blue-700 active:scale-95 cursor-pointer shadow-lg shadow-blue-500/20"
          >
            <motion.div 
              variants={shimmerAnim}
              initial="initial"
              animate="animate"
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full skew-x-[-20deg]"
            />
            <span className="relative z-10">Get in Touch</span>
          </Link>
        </div>

        {/* Mobile Section */}
        <div className="md:hidden flex items-center gap-3">

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 dark:text-gray-200 focus:outline-none p-2.5 rounded-xl border border-gray-200/50 dark:border-gray-800 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md shadow-sm active:scale-90 transition-transform"
          >
            {isMobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden mt-6 overflow-hidden bg-white/95 dark:bg-[#060C18]/95 backdrop-blur-3xl rounded-[24px] border border-gray-100 dark:border-white/10 shadow-2xl"
          >
            <ul className="flex flex-col space-y-1 p-4 text-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setIsMobileMenuOpen(false)}
                    activeClass="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-white/5 shadow-sm"
                    className="block text-[18px] font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-2xl px-5 py-4 transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="contact"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-blue-600 text-white px-5 py-4 rounded-2xl font-bold text-lg active:scale-95 transition-transform"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
