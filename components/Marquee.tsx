'use client';

import { motion } from 'motion/react';

const tools = [
  'Meta Ads',
  'Google Ads',
  'GA4',
  'Klaviyo',
  'Shopify',
  'Zapier',
  'TikTok Ads',
  'Snapchat Ads',
  'Pinterest Ads',
  'HubSpot',
  'Salesforce',
  'Looker Studio',
];

export default function Marquee() {
  return (
    <div className="py-12 bg-white/5 border-y border-white/10 overflow-hidden relative">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex gap-16 items-center"
        >
          {[...tools, ...tools].map((tool, index) => (
            <span
              key={index}
              className="text-2xl md:text-4xl font-display font-black text-white/20 uppercase tracking-tighter hover:text-electric transition-colors cursor-default"
            >
              {tool}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
