import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Droplets, Recycle, Leaf, Heart, Star, ChevronRight, Sparkles, TrendingUp } from 'lucide-react';
import { products } from '../data/products';
import { testimonials } from '../data/testimonials';
import Newsletter from '../components/Newsletter';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const impactStats = [
  { icon: Droplets, value: '2.4M', label: 'Liters saved', color: 'text-genz-cyan', bg: 'bg-genz-cyan/10' },
  { icon: Recycle, value: '18K', label: 'Items recycled', color: 'text-genz-lime', bg: 'bg-genz-lime/10' },
  { icon: Leaf, value: '85%', label: 'Organic materials', color: 'text-genz-violet', bg: 'bg-genz-violet/10' },
  { icon: Heart, value: '50+', label: 'Communities', color: 'text-genz-pink', bg: 'bg-genz-pink/10' },
];

export default function Home() {
  const featured = products.filter((p) => p.isBestseller || p.isNew).slice(0, 4);

  return (
    <div className="min-h-screen bg-genz-black">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7679740/pexels-photo-7679740.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Sustainable fashion"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-genz-black/60 via-genz-black/40 to-genz-black" />
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-genz-lime/10 rounded-full blur-[60px] animate-pulse-glow hidden lg:block" />
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-genz-pink/10 rounded-full blur-[50px] animate-pulse-glow hidden lg:block" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 glass-light text-genz-lime px-4 py-1.5 rounded-full text-xs font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Sustainable Fashion Reimagined
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-bold text-white leading-[0.95] mb-6">
              Wear the{' '}
              <span className="gradient-text">Change</span>
            </h1>
            <p className="text-lg text-genz-gray mb-10 leading-relaxed max-w-lg">
              Premium eco-friendly clothing crafted from organic, recycled, and responsibly sourced materials. Fashion that respects the planet and looks fire.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-genz-lime text-genz-black px-8 py-4 rounded-2xl font-display font-bold hover:brightness-110 transition-all duration-300 neon-glow"
              >
                Shop Collection
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 glass-light text-white px-8 py-4 rounded-2xl font-display font-medium hover:bg-white/10 transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <div className="py-6 border-y border-genz-border overflow-hidden bg-genz-dark">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(2).fill(null).map((_, setIdx) => (
            <div key={setIdx} className="flex items-center gap-8 px-4">
              {['100% Organic', 'Carbon Neutral', 'Fair Trade', 'Zero Waste', 'Recycled Materials', 'Vegan Friendly', 'Water Positive', 'B Corp Certified'].map((text, i) => (
                <span key={i} className="flex items-center gap-3 text-sm font-display font-semibold text-genz-muted uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-genz-lime" />
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Sustainability Impact */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-genz-cyan/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 glass-light text-genz-cyan px-4 py-1.5 rounded-full text-xs font-medium mb-4">
              <TrendingUp className="w-3.5 h-3.5" />
              Real Impact
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
              Numbers That <span className="gradient-text">Matter</span>
            </h2>
            <p className="text-genz-muted max-w-lg mx-auto">
              Every garment we create is a step toward a more sustainable fashion industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {impactStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="glass rounded-3xl p-6 text-center hover:border-genz-lime/30 transition-all duration-500 group"
              >
                <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`w-7 h-7 ${stat.color}`} />
                </div>
                <div className={`font-display text-4xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-sm text-genz-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-genz-pink/5 rounded-full blur-[150px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            custom={0}
            className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
          >
            <div>
              <div className="inline-flex items-center gap-2 glass-light text-genz-pink px-4 py-1.5 rounded-full text-xs font-medium mb-4">
                <Star className="w-3.5 h-3.5" />
                Curated Drops
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
                Featured <span className="gradient-text">Products</span>
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1 text-genz-lime font-display font-semibold text-sm hover:gap-3 transition-all"
            >
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((product, i) => (
              <motion.div
                key={product.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="group glass rounded-3xl overflow-hidden hover:border-genz-lime/30 transition-all duration-500"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-genz-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-genz-cyan text-genz-black text-xs font-display font-bold px-3 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                  {product.isBestseller && (
                    <span className="absolute top-3 left-3 bg-genz-lime text-genz-black text-xs font-display font-bold px-3 py-1 rounded-full">
                      HOT
                    </span>
                  )}
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="w-full py-3 bg-genz-lime text-genz-black font-display font-bold text-sm rounded-xl hover:brightness-110 transition-all">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs text-genz-muted mb-1 uppercase tracking-wider font-medium">{product.category}</div>
                  <h3 className="font-display font-semibold text-white mb-1 group-hover:text-genz-lime transition-colors">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xl font-bold text-genz-lime">${product.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-genz-lime text-genz-lime" />
                      <span className="text-xs text-genz-gray">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-genz-violet/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 glass-light text-genz-violet px-4 py-1.5 rounded-full text-xs font-medium mb-4">
              <Heart className="w-3.5 h-3.5" />
              Community Vibes
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
              What the <span className="gradient-text">Squad</span> Says
            </h2>
            <p className="text-genz-muted max-w-lg mx-auto">
              Real stories from people who have embraced sustainable fashion with Ecoflect Earthware.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="glass rounded-3xl p-8 hover:border-genz-lime/30 transition-all duration-500 group"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-genz-lime text-genz-lime" />
                  ))}
                </div>
                <p className="text-genz-gray leading-relaxed mb-6 text-sm">{t.text}</p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-genz-border group-hover:ring-genz-lime/50 transition-all"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-display font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-genz-muted">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Calculator CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-genz-dark via-genz-black to-genz-dark" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-genz-lime/5 rounded-full blur-[200px]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className="w-16 h-16 bg-genz-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-8 h-8 text-genz-lime" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Calculate Your <span className="gradient-text">Footprint</span>
            </h2>
            <p className="text-genz-muted mb-10 max-w-lg mx-auto leading-relaxed">
              Discover how switching to sustainable clothing can reduce your environmental impact. See the difference you can make.
            </p>
            <Link
              to="/calculator"
              className="inline-flex items-center gap-2 bg-genz-lime text-genz-black px-8 py-4 rounded-2xl font-display font-bold hover:brightness-110 transition-all duration-300 neon-glow"
            >
              Try the Calculator
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
