import { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Loader2, MessageSquare, ArrowUpRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Bhai, naam toh daal do!';
    if (!form.email.trim()) errs.email = 'Email bhi chahiye bhai';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Valid email daal na';
    if (!form.subject.trim()) errs.subject = 'Subject kya hai?';
    if (!form.message.trim()) errs.message = 'Message toh likho bhai';
    else if (form.message.trim().length < 10) errs.message = 'Thoda aur detail mein likho, 10 characters minimum';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

 const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    const { error } = await supabase.from('contact_submissions').insert({
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    });

    if (error) {
      setStatus('error');
      setMessage('Kuch galat ho gaya bhai. Dobara try karo.');
    } else {
      setStatus('success');
      setMessage('Message bhej diya! Jaldi reply ayega, chill karo.');
      setForm({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }
  };

  const handleSubmit = (e) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
    if (status !== 'idle') { setStatus('idle'); setMessage(''); }
  };

  return (
    <div className="min-h-screen bg-genz-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 glass-light text-genz-cyan px-4 py-1.5 rounded-full text-xs font-medium mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            Get in Touch
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-3">
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="text-genz-muted max-w-xl mx-auto">
            Koi sawaal hai? Feedback dena hai? Ya bas hi bolna hai? Hum sunn rahe hain bhai!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="space-y-4"
          >
            {[
              { icon: Mail, title: 'Email', lines: ['hello@ecoflectearthware.com', 'support@ecoflectearthware.com'], color: 'text-genz-lime', bg: 'bg-genz-lime/10' },
              { icon: Phone, title: 'Phone', lines: ['+1 (555) 234-5678', 'Mon-Fri, 9am-6pm PST'], color: 'text-genz-cyan', bg: 'bg-genz-cyan/10' },
              { icon: MapPin, title: 'Address', lines: ['123 Green Way', 'Portland, OR 97201'], color: 'text-genz-pink', bg: 'bg-genz-pink/10' },
            ].map((item, i) => (
              <div key={i} className="glass rounded-3xl p-6 hover:border-genz-lime/20 transition-all duration-300 group">
                <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <h3 className="font-display font-semibold text-white mb-2">{item.title}</h3>
                {item.lines.map((line, j) => (
                  <p key={j} className="text-sm text-genz-muted">{line}</p>
                ))}
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="lg:col-span-2"
          >
            <div className="glass rounded-3xl p-8 border border-genz-border">
              {status === 'success' ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-genz-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-genz-lime" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-genz-muted mb-8">{message}</p>
                  <button
                    onClick={() => { setStatus('idle'); setMessage(''); }}
                    className="inline-flex items-center gap-2 bg-genz-lime text-genz-black px-6 py-3 rounded-2xl font-display font-bold hover:brightness-110 transition-all text-sm"
                  >
                    Send Another <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-display font-medium text-white mb-2">Name</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Apna naam batao"
                        className={`w-full px-5 py-3.5 rounded-2xl border bg-genz-card text-white placeholder:text-genz-muted focus:outline-none focus:ring-2 text-sm transition-all ${
                          errors.name ? 'border-genz-pink focus:ring-genz-pink/20' : 'border-genz-border focus:ring-genz-lime/20 focus:border-genz-lime/50'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-genz-pink mt-2">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-display font-medium text-white mb-2">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="you@email.com"
                        className={`w-full px-5 py-3.5 rounded-2xl border bg-genz-card text-white placeholder:text-genz-muted focus:outline-none focus:ring-2 text-sm transition-all ${
                          errors.email ? 'border-genz-pink focus:ring-genz-pink/20' : 'border-genz-border focus:ring-genz-lime/20 focus:border-genz-lime/50'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-genz-pink mt-2">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-display font-medium text-white mb-2">Subject</label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      placeholder="Kis baare mein baat karni hai?"
                      className={`w-full px-5 py-3.5 rounded-2xl border bg-genz-card text-white placeholder:text-genz-muted focus:outline-none focus:ring-2 text-sm transition-all ${
                        errors.subject ? 'border-genz-pink focus:ring-genz-pink/20' : 'border-genz-border focus:ring-genz-lime/20 focus:border-genz-lime/50'
                      }`}
                    />
                    {errors.subject && <p className="text-xs text-genz-pink mt-2">{errors.subject}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-display font-medium text-white mb-2">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Bol bhai, kya kehna hai? (min 10 characters)"
                      rows={5}
                      className={`w-full px-5 py-3.5 rounded-2xl border bg-genz-card text-white placeholder:text-genz-muted focus:outline-none focus:ring-2 text-sm resize-none transition-all ${
                        errors.message ? 'border-genz-pink focus:ring-genz-pink/20' : 'border-genz-border focus:ring-genz-lime/20 focus:border-genz-lime/50'
                      }`}
                    />
                    {errors.message && <p className="text-xs text-genz-pink mt-2">{errors.message}</p>}
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-genz-pink bg-genz-pink/10 px-5 py-3 rounded-2xl text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex items-center gap-2 bg-genz-lime text-genz-black px-8 py-4 rounded-2xl font-display font-bold hover:brightness-110 transition-all disabled:opacity-60 text-sm neon-glow"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    {status === 'loading' ? 'Bhej raha hoon...' : 'Message Bhejo'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
