import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, MessageCircle, Truck, RefreshCcw, ShieldCheck, Leaf } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const faqs = [
  {
    icon: Leaf,
    question: 'Ye sustainable fashion kya hota hai?',
    answer: 'Bhai, sustainable fashion matlab aisa kapda jo planet ko hurt na kare. Organic materials, fair wages, aur zero waste production. Basically, fashion jo future ke liye achha ho.',
  },
  {
    icon: Truck,
    question: 'Shipping kitne din mein aati hai?',
    answer: 'India mein 3-5 business days, international 7-14 days. Free shipping on orders above $100. Track kar sakta hai real-time. No tension!',
  },
  {
    icon: RefreshCcw,
    question: 'Return policy kya hai?',
    answer: '30 days ka return window hai bhai. Agar size fit nahi aaya ya color pasand nahi aaya, no worries. Full refund ya exchange, dono option hai.',
  },
  {
    icon: ShieldCheck,
    question: 'Payment safe hai na?',
    answer: '100% secure bhai. SSL encryption, PCI compliant. Credit card, UPI, PayPal — sab chalega. Tumhara data kisi ke saath share nahi hota.',
  },
  {
    icon: MessageCircle,
    question: 'Customer support kaise contact karein?',
    answer: 'Contact page pe jao, form fill karo. Ya email karo hello@ecoflectearthware.com pe. Response time 24 hours max. Hum hamesha available hain!',
  },
  {
    icon: Leaf,
    question: 'Materials actually eco-friendly hain?',
    answer: 'Haan bhai, 100% certified. Organic cotton, recycled polyester, Tencel, hemp — sab verified. Certificates bhi dekh sakta hai product page pe.',
  },
  {
    icon: Truck,
    question: 'COD available hai kya?',
    answer: 'India mein COD available hai. International orders pe prepaid only. COD ke extra charges nahi hain, same price pay karo.',
  },
  {
    icon: RefreshCcw,
    question: 'Size guide kahan milegi?',
    answer: 'Har product page pe size chart hai. Chest, waist, length — sab measurements diye hain. Still confused? Humara chatbot puchh lo, instant help milegi.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-genz-black pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 glass-light text-genz-cyan px-4 py-1.5 rounded-full text-xs font-medium mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Got Questions?
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-3">
            <span className="gradient-text">FAQ</span> Section
          </h1>
          <p className="text-genz-muted max-w-lg mx-auto">
            Jo bhi doubt hai, yahan solve ho jayega. Nahi mila toh chatbot se puchh lo!
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <div
                className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'border-genz-lime/30' : 'border-transparent'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center gap-4 p-5 text-left"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                    openIndex === i ? 'bg-genz-lime/10' : 'bg-genz-card'
                  }`}>
                    <faq.icon className={`w-5 h-5 ${openIndex === i ? 'text-genz-lime' : 'text-genz-muted'}`} />
                  </div>
                  <span className={`flex-1 font-display font-semibold text-sm ${openIndex === i ? 'text-genz-lime' : 'text-white'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-genz-muted transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-genz-lime' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pl-[4.5rem]">
                        <p className="text-sm text-genz-gray leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
