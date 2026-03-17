'use client';

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

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
  return (
    <section id="testimonials" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Client <span className="text-electric">Voices</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-10 bg-white/5 border border-white/10 rounded-3xl relative"
            >
              <Quote className="text-electric/20 absolute top-8 right-8" size={48} />
              <p className="text-lg text-white/80 italic mb-8 relative z-10">&quot;{t.quote}&quot;</p>
              <div>
                <p className="font-display font-bold text-white">{t.author}</p>
                <p className="text-white/40 text-xs uppercase tracking-widest font-bold">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
