'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "Which platforms do you specialize in?",
    answer: "We are experts in Meta (Facebook/Instagram) and Google Ads (Search, Display, YouTube). We also handle GA4 setup and advanced tracking to ensure every conversion is attributed correctly."
  },
  {
    question: "What is your typical management fee?",
    answer: "Our fees are structured based on the complexity of the account and the ad spend managed. We typically work on a flat monthly retainer or a percentage of spend, whichever is more equitable for the client's scale."
  },
  {
    question: "How long does it take to see results?",
    answer: "While some accounts see immediate improvements within the first 14 days of optimization, we typically recommend a 3-month window to fully test creatives, build data sets, and stabilize the ROAS at scale."
  },
  {
    question: "Do you handle ad creative as well?",
    answer: "Yes! We believe creative is the biggest lever in modern performance marketing. We provide creative strategy and can work with your team or our partners to produce high-converting static and video assets."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Common <span className="text-electric">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-white/10 rounded-2xl overflow-hidden bg-white/5"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg">{faq.question}</span>
                {openIndex === index ? <Minus size={20} className="text-electric" /> : <Plus size={20} />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-white/50 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
