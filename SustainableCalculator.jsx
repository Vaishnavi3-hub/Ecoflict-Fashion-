import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Droplets, Cloud, TreePine, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function SustainabilityCalculator() {
  const [itemsPerMonth, setItemsPerMonth] = useState(2);
  const [sustainablePercent, setSustainablePercent] = useState(50);
  const [showResult, setShowResult] = useState(false);

  const calculateImpact = () => {
    const sustainableItems = itemsPerMonth * (sustainablePercent / 100);
    const waterSaved = Math.round(sustainableItems * 2700);
    const co2Reduced = Math.round(sustainableItems * 5.5);
    const treesEquivalent = Math.round((co2Reduced / 21) * 10) / 10;
    return { waterSaved, co2Reduced, treesEquivalent };
  };

  const result = calculateImpact();

  return (
    <div className="min-h-screen bg-genz-black pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 glass-light text-genz-cyan px-4 py-1.5 rounded-full text-xs font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Impact Tool
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-3">
            Sustainability <span className="gradient-text">Calculator</span>
          </h1>
          <p className="text-genz-muted max-w-xl mx-auto">
            See the real environmental impact of switching to sustainable fashion. Small choices create big change.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="glass rounded-3xl p-8 border border-genz-border mb-8"
        >
          <div className="space-y-10">
            {/* Items per month */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-display font-medium text-white">
                  Clothing items per month
                </label>
                <span className="text-sm font-display font-bold text-genz-lime bg-genz-lime/10 px-4 py-1.5 rounded-full">
                  {itemsPerMonth}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={20}
                value={itemsPerMonth}
                onChange={(e) => { setItemsPerMonth(Number(e.target.value)); setShowResult(false); }}
                className="w-full h-2 bg-genz-border rounded-full appearance-none cursor-pointer accent-genz-lime"
                style={{ accentColor: '#CCFF00' }}
              />
              <div className="flex justify-between text-xs text-genz-muted mt-2">
                <span>1</span>
                <span>20</span>
              </div>
            </div>

            {/* Sustainable percentage */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-display font-medium text-white">
                  Eco-friendly percentage
                </label>
                <span className="text-sm font-display font-bold text-genz-cyan bg-genz-cyan/10 px-4 py-1.5 rounded-full">
                  {sustainablePercent}%
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                step={5}
                value={sustainablePercent}
                onChange={(e) => { setSustainablePercent(Number(e.target.value)); setShowResult(false); }}
                className="w-full h-2 bg-genz-border rounded-full appearance-none cursor-pointer"
                style={{ accentColor: '#00F0FF' }}
              />
              <div className="flex justify-between text-xs text-genz-muted mt-2">
                <span>0%</span>
                <span>100%</span>
              </div>
            </div>

            <button
              onClick={() => setShowResult(true)}
              className="w-full inline-flex items-center justify-center gap-2 bg-genz-lime text-genz-black px-8 py-4 rounded-2xl font-display font-bold hover:brightness-110 transition-all neon-glow"
            >
              Calculate My Impact
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="glass rounded-3xl p-6 text-center border border-genz-cyan/20">
                <div className="w-14 h-14 bg-genz-cyan/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-7 h-7 text-genz-cyan" />
                </div>
                <div className="font-display text-3xl font-bold text-genz-cyan mb-1">
                  {result.waterSaved.toLocaleString()}L
                </div>
                <div className="text-sm text-genz-muted">Water saved / month</div>
              </div>

              <div className="glass rounded-3xl p-6 text-center border border-genz-lime/20">
                <div className="w-14 h-14 bg-genz-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-7 h-7 text-genz-lime" />
                </div>
                <div className="font-display text-3xl font-bold text-genz-lime mb-1">
                  {result.co2Reduced}kg
                </div>
                <div className="text-sm text-genz-muted">CO₂ reduced / month</div>
              </div>

              <div className="glass rounded-3xl p-6 text-center border border-genz-pink/20">
                <div className="w-14 h-14 bg-genz-pink/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TreePine className="w-7 h-7 text-genz-pink" />
                </div>
                <div className="font-display text-3xl font-bold text-genz-pink mb-1">
                  {result.treesEquivalent}
                </div>
                <div className="text-sm text-genz-muted">Trees equivalent</div>
              </div>
            </div>

            <div className="glass rounded-3xl p-8 text-center relative overflow-hidden border border-genz-lime/20">
              <div className="absolute top-0 left-0 w-40 h-40 bg-genz-lime/5 rounded-full blur-[60px]" />
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-genz-pink/5 rounded-full blur-[80px]" />
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  Your Annual Impact
                </h3>
                <p className="text-genz-muted mb-8 max-w-lg mx-auto">
                  Maintain these habits for a year and you would save{' '}
                  <span className="text-genz-cyan font-semibold">{(result.waterSaved * 12).toLocaleString()}L of water</span>{' '}
                  and reduce{' '}
                  <span className="text-genz-lime font-semibold">{result.co2Reduced * 12}kg of CO₂</span>.
                  That is like planting{' '}
                  <span className="text-genz-pink font-semibold">{Math.round(result.treesEquivalent * 12)} trees</span>!
                </p>
                <button
                  onClick={() => { setShowResult(false); setItemsPerMonth(2); setSustainablePercent(50); }}
                  className="inline-flex items-center gap-2 glass-light text-white px-6 py-3 rounded-2xl font-display font-medium hover:bg-white/10 transition-all text-sm"
                >
                  <RotateCcw className="w-4 h-4" />
                  Recalculate
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
