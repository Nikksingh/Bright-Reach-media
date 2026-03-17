'use client';

import { motion } from 'motion/react';
import { Search, Target, BarChart3, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <Search className="text-electric" size={32} />,
    title: "Audit & Strategy",
    description: "We dive deep into your current accounts, identifying leaks and high-impact opportunities."
  },
  {
    icon: <Target className="text-electric" size={32} />,
    title: "Creative & Setup",
    description: "We build high-converting ad creatives and technical tracking that captures every lead."
  },
  {
    icon: <Rocket className="text-electric" size={32} />,
    title: "Launch & Scale",
    description: "We deploy campaigns and aggressively scale the winners while cutting the losers."
  },
  {
    icon: <BarChart3 className="text-electric" size={32} />,
    title: "Optimize & Report",
    description: "Continuous A/B testing and transparent reporting to ensure we hit your ROAS targets."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Our <span className="text-electric">Process</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            A systematic approach to scaling your brand through performance marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-electric/50 transition-colors group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
