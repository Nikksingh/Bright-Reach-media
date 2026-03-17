'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const skills = [
  'Campaign Strategy',
  'Creative Testing',
  'Funnel Optimization',
  'Data Analysis',
];

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] bg-white/5 rounded-3xl overflow-hidden group"
          >
            <Image
              src="https://picsum.photos/seed/abhinav/800/1000"
              alt="Abhinav"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-8 left-8">
              <p className="text-electric font-display font-bold text-xl">Abhinav</p>
              <p className="text-white/40 text-sm uppercase tracking-widest">Performance Marketer</p>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Who We <span className="text-electric">Are</span>
            </h2>
            <div className="space-y-4 text-base text-white/60 leading-relaxed mb-10">
              <p>
                At <span className="text-white">Bright Reach Media</span>, we don&apos;t just &quot;run ads.&quot; We build scalable growth engines. Led by Abhinav, with over a decade of experience in the digital advertising trenches, we&apos;ve seen platforms evolve and algorithms shift.
              </p>
              <p>
                Our philosophy is simple: <span className="text-white">Data tells the story, but creative drives the action.</span> Whether it&apos;s a D2C brand looking for its first $1M year or a SaaS tool aiming to lower CAC, we focus on the metrics that actually impact your bottom line.
              </p>
              <p>
                What makes us different? We treat your ad spend like our own. Every dollar is tracked, tested, and optimized for maximum ROI.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-6 py-3 bg-electric/10 border border-electric/20 text-electric font-bold rounded-xl text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
