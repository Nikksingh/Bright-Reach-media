'use client';

import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const stats = [
  { label: 'Spend Managed', value: '$1M+' },
  { label: 'Avg. ROAS', value: '3.8x' },
  { label: 'Clients Helped', value: '50+' },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax and scroll effects
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const gridY = useTransform(scrollY, [0, 1000], [0, -100]);
  
  // Mouse tracking for 3D tilt
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const springX = useSpring(0, { stiffness: 100, damping: 30 });
  const springY = useSpring(0, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 15; // Max 7.5 deg
      const y = (clientY / innerHeight - 0.5) * -15;
      springX.set(x);
      springY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [springX, springY]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#050505] perspective-2000"
    >
      {/* 3D Animated Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.08),transparent_70%)]" />
        
        <motion.div 
          style={{ 
            rotateX: 55, 
            y: gridY,
            transformOrigin: 'center top'
          }}
          className="absolute inset-x-0 -top-1/4 h-[200%] opacity-[0.05] transform-style-3d"
        >
          <div 
            className="w-full h-full"
            style={{ 
              backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
              backgroundSize: '80px 80px',
            }}
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content with 3D Tilt */}
          <motion.div 
            style={{ 
              rotateY: springX, 
              rotateX: springY,
              transformStyle: 'preserve-3d'
            }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ transform: 'translateZ(50px)' }}
            >
              <p className="text-electric font-bold tracking-[0.2em] uppercase mb-4 text-xs md:text-sm">
                Bright Reach Media
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-balance">
                We Turn Ad <span className="text-electric">Spend</span> <br />
                Into Revenue<span className="text-electric">.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ transform: 'translateZ(30px)' }}
              className="text-base md:text-lg text-white/70 max-w-xl mb-10 leading-relaxed"
            >
              Performance Marketing Agency helping brands scale with data-driven Meta and Google Ads strategies that actually convert.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ transform: 'translateZ(20px)' }}
              className="flex flex-wrap gap-3 mb-12"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3 backdrop-blur-sm"
                >
                  <span className="text-electric font-bold text-lg">{stat.value}</span>
                  <span className="text-white/50 text-[10px] uppercase tracking-wider font-bold">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ transform: 'translateZ(40px)' }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#case-studies"
                className="group px-8 py-4 bg-electric text-black font-bold text-base rounded-xl flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,255,0,0.2)]"
              >
                See Our Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#"
                className="px-8 py-4 border border-white/20 text-white font-bold text-base rounded-xl flex items-center justify-center gap-3 hover:bg-white/5 transition-all backdrop-blur-sm"
              >
                Download Deck
              </a>
            </motion.div>
          </motion.div>

          {/* 3D Floating BR Logo */}
          <div className="hidden lg:block relative h-[600px] perspective-2000">
            <motion.div
              style={{ 
                y: y1, 
                rotateX: springY, 
                rotateY: springX,
                transformStyle: 'preserve-3d'
              }}
              animate={{ 
                y: [0, -30, 0],
                rotateZ: [0, 5, 0, -5, 0]
              }}
              transition={{ 
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                rotateZ: { duration: 12, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-80 h-80 bg-gradient-to-br from-electric/20 to-transparent rounded-[40px] border border-electric/30 backdrop-blur-2xl flex items-center justify-center transform-style-3d shadow-[0_0_100px_rgba(0,255,0,0.15)]">
                {/* Floating rings */}
                <div className="absolute -inset-8 border border-white/5 rounded-[60px] transform translate-z-[-20px] opacity-50" />
                <div className="absolute -inset-16 border border-white/5 rounded-[80px] transform translate-z-[-40px] opacity-20" />
                
                <div className="text-center transform translate-z-40">
                  <span className="text-9xl font-display font-black text-electric drop-shadow-[0_0_20px_rgba(0,255,0,0.5)]">BR</span>
                  <p className="text-white/60 font-bold tracking-[0.5em] uppercase mt-4 text-sm">Media</p>
                </div>
                
                {/* Internal glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.1),transparent_70%)] rounded-[40px]" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-electric/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-electric/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="absolute -bottom-20 -right-20 opacity-[0.01] select-none pointer-events-none">
        <span className="text-[30vw] font-black leading-none tracking-tighter">BR</span>
      </div>
    </section>
  );
}
