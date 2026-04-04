import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import IntroLoader from './components/IntroLoader';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.body.classList.add('dark-mode');
      document.documentElement.classList.add('dark');
    } else {
      document.body.classList.remove('dark-mode');
      document.documentElement.classList.remove('dark');
    }
  };

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  return (
    <div className={`app-container relative min-h-screen ${isDarkMode ? 'dark' : ''} bg-white dark:bg-[#060C18] transition-colors duration-500`}>
      {/* Premium Preloader */}
      <AnimatePresence mode="wait">
        {loading && <IntroLoader onComplete={handleLoaderComplete} />}
      </AnimatePresence>

      {/* Main Content (Always rendered behind loader to prevent white flash) */}
      <div className="relative">
        {/* Global Unified Background Layer */}
        <div className="fixed inset-0 z-[-1] bg-white dark:bg-[#060C18] transition-colors duration-500">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.06] mix-blend-overlay pointer-events-none"></div>
          {/* Subtle global ambient glowing blobs */}
          <div className="absolute top-0 left-0 w-full h-[500px] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-lighten pointer-events-none -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-full h-[500px] bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-lighten pointer-events-none translate-y-1/2"></div>
        </div>

        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
