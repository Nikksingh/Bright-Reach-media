'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { CheckCircle, ArrowLeft } from 'lucide-react';

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-[#050505] flex items-center justify-center px-6">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.08),transparent_70%)]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full bg-white/5 border border-white/10 p-12 rounded-[40px] text-center relative z-10 backdrop-blur-xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="w-24 h-24 bg-electric/20 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle size={48} className="text-electric" />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Thank <span className="text-electric">You!</span>
        </h1>
        <p className="text-white/60 text-lg mb-10">
          Your message has been received. Our team will review your goals and get back to you within 24 hours to schedule a strategy call.
        </p>

        <Link 
          href="/"
          className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all"
        >
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </motion.div>
    </main>
  );
}
