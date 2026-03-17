'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ExternalLink, TrendingUp, Target, Layers } from 'lucide-react';

const cases = [
  {
    title: 'D2C Skincare Brand',
    industry: 'E-Commerce',
    platform: 'Meta Ads',
    challenge: 'High CPM, low ROAS on cold traffic.',
    strategy: [
      'UGC creative testing at scale',
      'Lookalike audiences from high-LTV customers',
      'Retargeting funnel rebuild',
    ],
    results: {
      roas: '4.8x',
      revenue: '$180K',
      period: '90 Days',
    },
    image: 'https://picsum.photos/seed/skincare/800/600',
  },
  {
    title: 'SaaS Productivity Tool',
    industry: 'SaaS',
    platform: 'Google Ads',
    challenge: 'Wasted spend on broad keywords, low-quality leads.',
    strategy: [
      'Negative keyword scrubbing',
      'Competitor conquesting campaigns',
      'Landing page A/B testing',
    ],
    results: {
      roas: '3.2x',
      revenue: '40% CAC ↓',
      period: '60 Days',
    },
    image: 'https://picsum.photos/seed/saas/800/600',
  },
  {
    title: 'Luxury Real Estate',
    industry: 'Real Estate',
    platform: 'Both',
    challenge: 'High cost per lead, low lead-to-viewing conversion.',
    strategy: [
      'Lead form optimization',
      'Video walkthrough ads',
      'Dynamic remarketing',
    ],
    results: {
      roas: '12x ROI',
      revenue: '250+ Leads',
      period: '30 Days',
    },
    image: 'https://picsum.photos/seed/realestate/800/600',
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
              Case <span className="text-electric">Studies</span>
            </h2>
            <p className="text-white/40 text-lg max-w-xl">
              Real results for real businesses. No fluff, just performance.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-6xl font-black text-white/5 leading-none">WORK</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                rotateX: 5, 
                rotateY: -5, 
                z: 50,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col transform-style-3d perspective-1000"
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-electric text-[10px] font-bold uppercase tracking-widest rounded-full border border-electric/20">
                    {item.industry}
                  </span>
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/20">
                    {item.platform}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-display font-bold mb-6 group-hover:text-electric transition-colors">
                  {item.title}
                </h3>

                <div className="space-y-6 mb-8 flex-grow">
                  <div>
                    <div className="flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest mb-2">
                      <Target size={14} /> Challenge
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">{item.challenge}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest mb-2">
                      <Layers size={14} /> Strategy
                    </div>
                    <ul className="space-y-1">
                      {item.strategy.map((s) => (
                        <li key={s} className="text-white/70 text-sm flex items-start gap-2">
                          <span className="text-electric mt-1.5 w-1 h-1 rounded-full bg-electric shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Results Footer */}
                <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">ROAS</p>
                    <p className="text-2xl font-display font-black text-electric">{item.results.roas}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">Revenue</p>
                    <p className="text-2xl font-display font-black text-white">{item.results.revenue}</p>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-electric flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-full group-hover:translate-y-0">
                <button className="flex items-center gap-2 text-black font-black text-xl uppercase tracking-tighter">
                  View Case Study <ExternalLink size={24} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
