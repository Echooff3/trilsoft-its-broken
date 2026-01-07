import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';

const PARTICLES = ['⚠️', '❌', '💀', '☠️', 'bug', '0', '1', 'NULL', 'ERROR'];

interface Particle {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  symbol: string;
  velocity: { x: number; y: number };
}

interface ExplodingButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode;
}

export const ExplodingButton = ({ children, className, ...props }: ExplodingButtonProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [hasClicked, setHasClicked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Call original onClick if it exists
    props.onClick?.(e);
    setHasClicked(true);

    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const newParticles: Particle[] = [];
    for (let i = 0; i < 30; i++) {
      const angle = Math.random() * Math.PI * 2;
      const velocity = 200 + Math.random() * 300; // Speed
      newParticles.push({
        id: Date.now() + i,
        x: centerX,
        y: centerY,
        rotation: Math.random() * 360,
        scale: 0.5 + Math.random() * 1.5,
        symbol: PARTICLES[Math.floor(Math.random() * PARTICLES.length)],
        velocity: {
          x: Math.cos(angle) * velocity,
          y: Math.sin(angle) * velocity
        }
      });
    }

    setParticles(prev => [...prev, ...newParticles]);

    // Clean up particles
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
    }, 1500);
  };

  return (
    <div className="relative inline-block">
      <Button 
        className={className} 
        {...props} 
        onClick={handleClick}
      >
        {hasClicked ? "GOTCHA! Arf Arf!" : children}
      </Button>

      <div className="absolute inset-0 pointer-events-none overflow-visible flex justify-center items-center">
        <AnimatePresence>
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{ 
                x: 0, 
                y: 0, 
                scale: 0,
                opacity: 1,
                rotate: 0 
              }}
              animate={{ 
                x: particle.velocity.x * 0.5, // Distance multiplier
                y: particle.velocity.y * 0.5,
                scale: particle.scale,
                rotate: particle.rotation + 360,
                opacity: 0
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 1,
                ease: "easeOut"
              }}
              className="absolute font-mono font-bold text-red-600 select-none whitespace-nowrap z-50"
              style={{ fontSize: '1.5rem' }}
            >
              {particle.symbol}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
