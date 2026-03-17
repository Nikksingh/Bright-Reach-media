'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Abhinav transformed our Meta Ads from a money pit into our primary growth engine. Our ROAS tripled in just two months.",
    author: "Sarah Jenkins",
    role: "CEO, Glow Skincare",
  },
  {
    quote: "The most data-driven marketer I've ever worked with. He doesn't just report numbers; he provides actionable insights.",
    author: "Mark Thompson",
    role: "Marketing Director, SaaSFlow",
  },
  {
    quote: "His Google Ads strategy cut our lead cost by 45% while actually improving lead quality. Highly recommended.",
    author: "David Chen",
    role: "Founder, Urban Realty",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Client <span className="text-electric">Voices</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="p-10 md:p-16 bg-white/5 border border-white/10 rounded-[40px] relative text-center"
              >
                <Quote className="text-electric/10 absolute top-12 left-12" size={80} />
                <p className="text-xl md:text-3xl text-white/90 italic mb-10 relative z-10 leading-relaxed font-display">
                  &quot;{testimonials[currentIndex].quote}&quot;
                </p>
                <div>
                  <p className="font-display font-bold text-2xl text-white mb-1">{testimonials[currentIndex].author}</p>
                  <p className="text-electric text-sm uppercase tracking-[0.2em] font-bold">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-10">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${currentIndex === i ? 'w-8 bg-electric' : 'bg-white/20'}`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
