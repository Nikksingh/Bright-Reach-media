'use client';

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

import { useRouter } from 'next/navigation';

export default function Contact() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here
    router.push('/thank-you');
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-electric/10 blur-[120px] rounded-full -mr-64 -mb-64" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Ready to <br />
              <span className="text-electric">Scale?</span>
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-md">
              Stop guessing and start growing. Let&apos;s build a performance marketing engine that drives real revenue.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-electric group-hover:text-black transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Email Me</p>
                  <p className="text-xl font-display font-bold">hello@abhinav.ads</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-electric group-hover:text-black transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Call Me</p>
                  <p className="text-xl font-display font-bold">+1 (555) 000-0000</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-electric group-hover:text-black transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Location</p>
                  <p className="text-xl font-display font-bold">Remote / Global</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-electric transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="john@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-electric transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Phone Number</label>
                  <input
                    required
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-electric transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Monthly Ad Spend</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-electric transition-colors appearance-none">
                    <option className="bg-black">$5k - $10k</option>
                    <option className="bg-black">$10k - $50k</option>
                    <option className="bg-black">$50k - $100k</option>
                    <option className="bg-black">$100k+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your goals..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-electric transition-colors resize-none"
                />
              </div>

              <button type="submit" className="w-full py-5 bg-electric text-black font-black text-lg rounded-xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-all">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <footer className="mt-32 pt-12 border-t border-white/10 text-center text-white/20 text-sm">
        <p>© {new Date().getFullYear()} Bright Reach Media. All rights reserved.</p>
      </footer>
    </section>
  );
}
