'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ExternalLink, TrendingUp, Target, Layers, X, ArrowRight } from 'lucide-react';

const cases = [
  {
    title: 'D2C Skincare Brand',
    industry: 'E-Commerce',
    platform: 'Meta Ads',
    challenge: 'High CPM, low ROAS on cold traffic. The brand was struggling to scale beyond $50k/month without seeing a significant drop in efficiency.',
    strategy: [
      'UGC creative testing at scale',
      'Lookalike audiences from high-LTV customers',
      'Retargeting funnel rebuild',
      'Post-purchase upsell automation',
    ],
    results: {
      roas: '4.8x',
      revenue: '$180K',
      period: '90 Days',
    },
    image: 'https://picsum.photos/seed/skincare/800/600',
    details: "We implemented a 'Creative Sandbox' testing method where we tested 20+ UGC variations weekly. By identifying winning hooks early, we were able to scale the budget by 300% while maintaining a 4.8x ROAS. We also implemented a sophisticated retargeting strategy that focused on high-intent behaviors rather than just site visits."
  },
  {
    title: 'SaaS Productivity Tool',
    industry: 'SaaS',
    platform: 'Google Ads',
    challenge: 'Wasted spend on broad keywords, low-quality leads. The cost per acquisition was higher than the customer LTV.',
    strategy: [
      'Negative keyword scrubbing',
      'Competitor conquesting campaigns',
      'Landing page A/B testing',
      'CRM integration for lead scoring',
    ],
    results: {
      roas: '3.2x',
      revenue: '40% CAC ↓',
      period: '60 Days',
    },
    image: 'https://picsum.photos/seed/saas/800/600',
    details: "Our audit revealed that 60% of the budget was being spent on 'informational' keywords that didn't lead to signups. We shifted the focus to 'high-intent' transactional keywords and built dedicated landing pages for each campaign. This resulted in a 40% reduction in CAC and a 2x increase in trial-to-paid conversion rate."
  },
  {
    title: 'Luxury Real Estate',
    industry: 'Real Estate',
    platform: 'Both',
    challenge: 'High cost per lead, low lead-to-viewing conversion. The leads being generated were not qualified for high-ticket properties.',
    strategy: [
      'Lead form optimization',
      'Video walkthrough ads',
      'Dynamic remarketing',
      'Custom audience layering',
    ],
    results: {
      roas: '12x ROI',
      revenue: '250+ Leads',
      period: '30 Days',
    },
    image: 'https://picsum.photos/seed/realestate/800/600',
    details: "We moved away from standard lead forms and implemented a qualifying quiz that filtered out low-intent users. By using high-production video walkthroughs as the primary creative, we attracted a more affluent demographic. The campaign generated over 250 highly qualified leads, resulting in multiple property viewings and sales within the first month."
  },
];

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<typeof cases[0] | null>(null);

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
              onClick={() => setSelectedCase(item)}
              className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col cursor-pointer"
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
                    <p className="text-white/70 text-sm leading-relaxed line-clamp-2">{item.challenge}</p>
                  </div>
                </div>

                {/* Results Footer */}
                <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">ROAS</p>
                    <p className="text-2xl font-display font-black text-electric">{item.results.roas}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">Period</p>
                    <p className="text-2xl font-display font-black text-white">{item.results.period}</p>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-electric flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-full group-hover:translate-y-0">
                <div className="flex items-center gap-2 text-black font-black text-xl uppercase tracking-tighter">
                  View Case Study <ArrowRight size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-4xl w-full bg-[#080808] border border-white/10 rounded-[40px] overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCase(null)}
                className="absolute top-6 right-6 w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center z-10 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={selectedCase.image}
                    alt={selectedCase.title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 md:p-12 overflow-y-auto max-h-[80vh]">
                  <span className="text-electric font-bold text-xs uppercase tracking-widest mb-4 block">
                    {selectedCase.industry} • {selectedCase.platform}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold mb-8">{selectedCase.title}</h3>
                  
                  <div className="space-y-8">
                    <section>
                      <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3">The Challenge</h4>
                      <p className="text-white/80 leading-relaxed">{selectedCase.challenge}</p>
                    </section>

                    <section>
                      <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3">Our Strategy</h4>
                      <ul className="space-y-3">
                        {selectedCase.strategy.map((s) => (
                          <li key={s} className="flex items-start gap-3 text-white/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-electric mt-2 shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section>
                      <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3">The Deep Dive</h4>
                      <p className="text-white/80 leading-relaxed">{selectedCase.details}</p>
                    </section>

                    <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">ROAS</p>
                        <p className="text-2xl font-display font-black text-electric">{selectedCase.results.roas}</p>
                      </div>
                      <div>
                        <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">Revenue</p>
                        <p className="text-2xl font-display font-black text-white">{selectedCase.results.revenue}</p>
                      </div>
                      <div>
                        <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">Period</p>
                        <p className="text-2xl font-display font-black text-white">{selectedCase.results.period}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
