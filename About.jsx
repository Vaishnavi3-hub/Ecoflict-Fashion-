import { motion } from 'framer-motion';
import { Leaf, Heart, Eye, Shield, Award, Users, Globe, TreePine } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
   visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const values = [
  {
    icon: Leaf,
    title: 'Sustainability First',
    desc: 'Har decision pehle planet ke baare mein sochte hain. Sourcing se shipping tak, footprint minimum rakhte hain.',
    color: 'text-genz-lime',
    bg: 'bg-genz-lime/10',
  },
  {
    icon: Heart,
    title: 'Ethical Production',
    desc: 'Sirf unhi factories ke saath kaam karte hain jo fair wages, safe conditions, aur workers rights ensure karte hain.',
    color: 'text-genz-pink',
    bg: 'bg-genz-pink/10',
  },
  {
    icon: Eye,
    title: 'Radical Transparency',
    desc: 'Har garment ka poora journey share karte hain — materials kahan se aaye, kisne banaya, aur environmental cost kya hai.',
    color: 'text-genz-cyan',
    bg: 'bg-genz-cyan/10',
  },
  {
    icon: Shield,
    title: 'Quality Over Quantity',
    desc: 'Timeless pieces jo saalon tak chalengi. Buy less, choose well, make it last — yehi philosophy hai.',
    color: 'text-genz-violet',
    bg: 'bg-genz-violet/10',
  },
];

const milestones = [
  { year: '2019', title: 'The Seed', desc: 'Ecoflect Earthware founded with a vision to transform fashion.' },
  { year: '2020', title: 'First Drop', desc: 'Debut line launch — organic linen aur hemp pieces.' },
  { year: '2021', title: 'B Corp Certified', desc: 'B Corporation certification mil gaya, officially sustainable!' },
  { year: '2022', title: 'Circular Program', desc: 'Garment recycling aur repair services introduce kiye.' },
  { year: '2023', title: 'Global Reach', desc: '15 countries mein expand kiye with local partners.' },
  { year: '2024', title: 'Carbon Neutral', desc: 'Full carbon neutrality across entire supply chain!' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-genz-black pt-24">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7679740/pexels-photo-7679740.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="About Ecoflect Earthware"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-genz-black/80 via-genz-black/60 to-genz-black" />
        </div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-genz-lime/10 rounded-full blur-[80px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            <div className="inline-flex items-center gap-2 glass-light text-genz-lime px-4 py-1.5 rounded-full text-xs font-medium mb-6">
              <TreePine className="w-3.5 h-3.5" />
              Our Story
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
              Fashion with a <span className="gradient-text">Conscience</span>
            </h1>
            <p className="text-lg text-genz-gray max-w-2xl mx-auto leading-relaxed">
              Style kabhi planet ke cost pe nahi aana chahiye. Ecoflect Earthware isi idea se paida hua — beautiful clothing jo nature ko respect kare aur change inspire kare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-genz-cyan/5 rounded-full blur-[150px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <div className="inline-flex items-center gap-2 glass-light text-genz-cyan px-4 py-1.5 rounded-full text-xs font-medium mb-4">
                <Globe className="w-3.5 h-3.5" />
                Our Mission
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Redefining What Fashion <span className="gradient-text">Can Be</span>
              </h2>
              <p className="text-genz-gray leading-relaxed mb-6">
                Fashion industry duniya ke sabse bade polluters mein se ek hai. Ecoflect Earthware pe ye prove kar rahe hain ki better way hai. Innovative sustainable materials ko timeless design ke saath mila ke, aisa clothing bana rahe hain jo exceptional dikhe aur light footprint chhode.
              </p>
              <p className="text-genz-gray leading-relaxed mb-8">
                Commitment sirf materials tak nahi. Communities mein invest karte hain, fair wages ensure karte hain, aur waste aur emissions reduce karne ke tareeke dhoondhte rehte hain.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="glass rounded-2xl px-5 py-4">
                  <div className="font-display text-2xl font-bold text-genz-lime">100%</div>
                  <div className="text-xs text-genz-muted">Organic or Recycled</div>
                </div>
                <div className="glass rounded-2xl px-5 py-4">
                  <div className="font-display text-2xl font-bold text-genz-cyan">Zero</div>
                  <div className="text-xs text-genz-muted">Single-Use Plastic</div>
                </div>
                <div className="glass rounded-2xl px-5 py-4">
                  <div className="font-display text-2xl font-bold text-genz-pink">Fair</div>
                  <div className="text-xs text-genz-muted">Trade Certified</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden ring-1 ring-genz-border">
                <img
                  src="https://images.pexels.com/photos/7679740/pexels-photo-7679740.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Sustainable production"
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 hidden md:block border border-genz-lime/30">
                <Award className="w-6 h-6 text-genz-lime mb-2" />
                <div className="font-display text-lg font-bold text-white">B Corp</div>
                <div className="text-xs text-genz-muted">Since 2021</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-genz-pink/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 glass-light text-genz-pink px-4 py-1.5 rounded-full text-xs font-medium mb-4">
              <Heart className="w-3.5 h-3.5" />
              What Drives Us
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
              Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-genz-muted max-w-lg mx-auto">
              Ye principles har decision guide karte hain, design se delivery tak.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="glass rounded-3xl p-7 hover:border-genz-lime/30 transition-all duration-500 group"
              >
                <div className={`w-12 h-12 ${v.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <v.icon className={`w-6 h-6 ${v.color}`} />
                </div>
                <h3 className="font-display font-semibold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-genz-muted leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 relative">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-genz-violet/5 rounded-full blur-[120px]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 glass-light text-genz-violet px-4 py-1.5 rounded-full text-xs font-medium mb-4">
              <Users className="w-3.5 h-3.5" />
              The Journey
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              <span className="gradient-text">Milestones</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-genz-lime via-genz-cyan to-genz-pink md:-translate-x-px" />
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className={`relative flex items-start gap-6 mb-14 last:mb-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`}>
                  <div className="font-display text-2xl font-bold text-genz-lime mb-1">{m.year}</div>
                  <h3 className="font-display font-semibold text-white mb-1">{m.title}</h3>
                  <p className="text-sm text-genz-muted">{m.desc}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-genz-dark border-2 border-genz-lime flex-shrink-0 relative z-10 mt-1 shadow-[0_0_15px_rgba(204,255,0,0.3)]" />
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="md:hidden font-display text-2xl font-bold text-genz-lime mb-1">{m.year}</div>
                  <h3 className="font-display font-semibold text-white mb-1">{m.title}</h3>
                  <p className="text-sm text-genz-muted">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
