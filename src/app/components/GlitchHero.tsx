import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export const GlitchHero = () => {
  const [text,KZ] = useState("PERFECT! IT'S BROKEN");
  
  // Random character replacement effect
  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    const originalText = "PERFECT! IT'S BROKEN";
    
    const interval = setInterval(() => {
      if (Math.random() > 0.9) {
        const splitText = originalText.split('');
        const randomIndex = Math.floor(Math.random() * splitText.length);
        splitText[randomIndex] = chars[Math.floor(Math.random() * chars.length)];
        KZ(splitText.join(''));
        
        setTimeout(() => {
          KZ(originalText);
        }, 100);
      }
    }, 200);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60vh] flex flex-col justify-center items-center bg-black overflow-hidden border-b-4 border-white">
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none opacity-20">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-white h-full"></div>
        ))}
      </div>
      
      {/* Glitch Text Layer 1 (Red) */}
      <motion.h1 
        className="text-[8vw] font-mono font-bold text-red-600 absolute mix-blend-screen z-10"
        animate={{ 
          x: [0, -4, 4, -2, 0],
          y: [0, 2, -2, 4, 0],
          opacity: [1, 0.8, 1, 0.5, 1]
        }}
        transition={{ 
          duration: 0.2, 
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random() * 2
        }}
      >
        {text}
      </motion.h1>

      {/* Glitch Text Layer 2 (Cyan) */}
      <motion.h1 
        className="text-[8vw] font-mono font-bold text-cyan-400 absolute mix-blend-screen z-10"
        animate={{ 
          x: [0, 4, -4, 2, 0],
          y: [0, -2, 2, -4, 0],
          opacity: [1, 0.5, 1, 0.8, 1]
        }}
        transition={{ 
          duration: 0.25, 
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random() * 3
        }}
      >
        {text}
      </motion.h1>

      {/* Main Text (White) */}
      <h1 className="text-[8vw] font-mono font-bold text-white z-20 relative">
        {text}
      </h1>
      
      <div className="absolute bottom-4 left-4 font-mono text-sm text-white bg-red-600 px-2 py-1">
        ERROR_CODE: 0x5F3759DF
      </div>
      <div className="absolute top-4 right-4 font-mono text-xs text-white border border-white px-2 py-1">
        SYSTEM STATUS: FAILED SUCCESSFULLY
      </div>
    </div>
  );
};
