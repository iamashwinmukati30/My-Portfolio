import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Cube = ({ delay = 0, isGlowing = false }) => {
  const baseColor = "bg-white";
  const glowShadow = "0 0 30px rgba(255, 255, 255, 0.4)";
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: isGlowing ? 1.05 : 1,
        transition: { 
          opacity: { duration: 0.8, delay },
          scale: { duration: 0.5, ease: "easeInOut" }
        }
      }}
      className="relative w-8 h-8 md:w-12 md:h-12"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div 
        style={{ 
          transform: 'rotateX(-30deg) rotateY(45deg)', 
          transformStyle: 'preserve-3d',
          transition: 'all 0.5s ease-in-out'
        }} 
        className="w-full h-full relative"
      >
        {/* Top Face */}
        <div 
          className={`absolute inset-0 ${baseColor} border border-black/5 ${isGlowing ? 'shadow-white-glow' : ''}`} 
          style={{ 
            transform: 'rotateX(90deg) translateZ(16px) md:translateZ(24px)',
            boxShadow: isGlowing ? glowShadow : 'none',
            backgroundColor: isGlowing ? '#fff' : '#f9fafb'
          }}
        ></div>
        {/* Left Face */}
        <div 
          className={`absolute inset-0 bg-gray-100 border border-black/5`} 
          style={{ 
            transform: 'rotateY(-90deg) translateZ(16px) md:translateZ(24px)',
            backgroundColor: isGlowing ? '#f3f4f6' : '#e5e7eb'
          }}
        ></div>
        {/* Right Face */}
        <div 
          className={`absolute inset-0 bg-gray-200 border border-black/5`} 
          style={{ 
            transform: 'translateZ(16px) md:translateZ(24px)',
            backgroundColor: isGlowing ? '#e5e7eb' : '#d1d5db'
          }}
        ></div>
      </div>
    </motion.div>
  );
};

const IntroLoader = ({ onComplete }) => {
  const [activeCube, setActiveCube] = useState(0);

  useEffect(() => {
    // Sequential lighting loop
    const interval = setInterval(() => {
      setActiveCube((prev) => (prev + 1) % 7);
    }, 250);

    const timer = setTimeout(() => {
      onComplete();
    }, 2000); // Intro lasts 2 seconds as requested

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  // Hexagonal offsets for 7-cube cluster
  const R_SCALE = 1.05; // Tightness factor
  const cubes = [
    { x: 0, y: 0 },                    // Center (0)
    { x: 0, y: -42 * R_SCALE },         // Top (1)
    { x: 36 * R_SCALE, y: -21 * R_SCALE }, // Top Right (2)
    { x: 36 * R_SCALE, y: 21 * R_SCALE },  // Bottom Right (3)
    { x: 0, y: 42 * R_SCALE },          // Bottom (4)
    { x: -36 * R_SCALE, y: 21 * R_SCALE }, // Bottom Left (5)
    { x: -36 * R_SCALE, y: -21 * R_SCALE },// Top Left (6)
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-gradient-to-br from-[#020617] to-[#0f172a] overflow-hidden"
    >
      {/* Texture Layer */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none"></div>

      <div className="relative flex flex-col items-center gap-24 md:gap-32">
        {/* Hexagonal Isometric Cluster */}
        <div className="relative h-48 w-48 flex items-center justify-center scale-75 md:scale-100">
          {cubes.map((pos, index) => (
            <div 
              key={index}
              className="absolute transform"
              style={{ 
                left: `calc(50% + ${pos.x}px)`, 
                top: `calc(50% + ${pos.y}px)`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <Cube 
                delay={0.05 * index} 
                isGlowing={activeCube === index} 
              />
            </div>
          ))}
          
          {/* Subtle Ambient Glow */}
          <div className="absolute w-[250px] h-[250px] bg-white/5 blur-[80px] rounded-full pointer-events-none"></div>
        </div>

        {/* Cursive Signature Footer */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 0.8, ease: "easeOut" }
            }}
            className="flex items-center gap-6 text-white/95"
          >
            <span className="text-3xl md:text-4xl font-extralight text-white/40 tracking-wider">{"<"}</span>
            <h1
              className="text-5xl md:text-6xl font-normal tracking-tight"
              style={{ 
                fontFamily: "'Allison', cursive", 
                textShadow: '0 0 30px rgba(255, 255, 255, 0.15)' 
              }}
            >
              Ashwin Mukati
            </h1>
            <span className="text-3xl md:text-4xl font-extralight text-white/40 tracking-wider">{"/>"}</span>
          </motion.div>
          
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: 1,
              opacity: 1,
              transition: { delay: 0.8, duration: 1.0, ease: "easeInOut" }
            }}
            className="w-64 md:w-80 h-[1.5px] bg-gradient-to-r from-transparent via-white/30 to-transparent mt-6"
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default IntroLoader;
