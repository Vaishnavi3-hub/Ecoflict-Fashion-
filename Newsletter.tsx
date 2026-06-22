import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Zap, CheckCircle, AlertCircle, Loader2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Valid email daal na bhai!');
      return;
    }

    setStatus('loading');
    const { error } = await supabase.from('newsletter_subscriptions').insert({ email });

    if (error) {
      if (error.message.includes('duplicate')) {
        setStatus('error');
        setMessage('Bhai, pehle se hi subscribed ho!');
      } else {
        setStatus('error');
        setMessage('Kuch glitch ho gaya. Dobara try karo.');
      }
    } else {
      setStatus('success');
      setMessage('Welcome to the crew bhai! Exclusive drops milega ab.');
      setEmail('');
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-genz-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-genz-lime/5 rounded-full blur-[150px]" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-genz-pink/5 rounded-full blur-[100px]" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 glass-light text-genz-lime px-4 py-1.5 rounded-full text-xs font-medium mb-6">
            <Zap className="w-3.5 h-3.5" />
            Stay in the loop
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Join the <span className="gradient-text">Green Squad</span>
          </h2>
          <p className="text-genz-muted mb-10 max-w-md mx-auto">
            Newsletter join kar lo bhai. Early access, exclusive discounts, aur sustainability tips — sab free mein.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== 'idle') { setStatus('idle'); setMessage(''); }
                }}
                placeholder="your@email.com"
                className="w-full px-5 py-3.5 rounded-2xl bg-genz-card border border-genz-border text-white placeholder:text-genz-muted focus:outline-none focus:border-genz-lime/50 focus:ring-2 focus:ring-genz-lime/20 text-sm transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3.5 bg-genz-lime text-genz-black font-display font-bold rounded-2xl hover:brightness-110 transition-all disabled:opacity-60 text-sm whitespace-nowrap flex items-center justify-center gap-2 neon-glow"
            >
              {status === 'loading' ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  Subscribe <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <AnimatePresence mode="wait">
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 flex items-center justify-center gap-2 text-genz-lime"
              >
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">{message}</span>
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 flex items-center justify-center gap-2 text-genz-pink"
              >
                <AlertCircle className="w-5 h-5" />
                <span className="text-sm font-medium">{message}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
