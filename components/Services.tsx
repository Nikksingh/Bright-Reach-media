'use client';

import { motion } from 'motion/react';
import { BarChart3, Search, MousePointer2, PieChart } from 'lucide-react';

const services = [
  {
    title: 'Meta Ads Management',
    description: 'Full-funnel Facebook and Instagram strategies focused on ROAS and scaling.',
    icon: <MousePointer2 className="text-electric" size={32} />,
  },
  {
    title: 'Google Ads (Search & PMax)',
    description: 'Capturing high-intent traffic and maximizing visibility across the Google ecosystem.',
    icon: <Search className="text-electric" size={32} />,
  },
  {
    title: 'Creative Strategy',
    description: 'Data-driven creative briefs and testing frameworks to lower your CPAs.',
    icon: <BarChart3 className="text-electric" size={32} />,
  },
  {
    title: 'Analytics & GA4',
    description: 'Deep-dive tracking and attribution setup to understand your true performance.',
    icon: <PieChart className="text-electric" size={32} />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Core <span className="text-electric">Services</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl">
            Specialized solutions designed to move the needle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-black border border-white/10 rounded-3xl hover:border-electric/50 transition-all group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform origin-left">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-4">{service.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
