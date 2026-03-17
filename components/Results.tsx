'use client';

import { motion, useSpring, useTransform, useInView, animate } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { label: 'Revenue Generated', value: 4.2, suffix: 'M', prefix: '$' },
  { label: 'Avg ROAS', value: 3.8, suffix: 'x' },
  { label: 'Campaigns Launched', value: 120, suffix: '+' },
  { label: 'Avg CAC Reduction', value: 40, suffix: '%' },
];

function Counter({ value, suffix, prefix = '' }: { value: number; suffix: string; prefix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        onUpdate: (latest) => setDisplayValue(latest),
        ease: 'easeOut',
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue.toFixed(value % 1 === 0 ? 0 : 1)}
      {suffix}
    </span>
  );
}

export default function Results() {
  return (
    <section id="results" className="py-32 bg-white/5 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center lg:text-left"
            >
              <div className="text-4xl md:text-5xl font-black text-electric mb-1 tracking-tighter">
                <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
