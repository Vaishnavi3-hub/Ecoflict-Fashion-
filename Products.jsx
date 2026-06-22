import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, Star, Leaf, X, ShoppingBag } from 'lucide-react';
import { products, categories } from '../data/products';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];
    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return result;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-genz-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 glass-light text-genz-lime px-4 py-1.5 rounded-full text-xs font-medium mb-4">
            <Leaf className="w-3.5 h-3.5" />
            Our Collection
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-3">
            Product <span className="gradient-text">Showcase</span>
          </h1>
          <p className="text-genz-muted max-w-xl">
            Browse our curated selection. Filter by category, search by name, or sort to find your perfect piece.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="mb-10"
        >
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-genz-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-genz-card border border-genz-border text-white placeholder:text-genz-muted focus:outline-none focus:border-genz-lime/50 focus:ring-2 focus:ring-genz-lime/20 text-sm transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-genz-muted hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden inline-flex items-center gap-2 px-4 py-3 bg-genz-card border border-genz-border rounded-2xl text-sm text-genz-gray"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-genz-card border border-genz-border rounded-2xl text-sm text-genz-gray focus:outline-none focus:border-genz-lime/50 focus:ring-2 focus:ring-genz-lime/20 transition-all"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Category pills */}
          <div className={`flex flex-wrap gap-2 mt-5 ${showFilters ? '' : 'hidden md:flex'}`}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-genz-lime text-genz-black font-display font-bold'
                    : 'bg-genz-card text-genz-gray border border-genz-border hover:border-genz-lime/50 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results count */}
        <div className="mb-6 text-sm text-genz-muted">
          Showing <span className="text-white font-medium">{filtered.length}</span> product{filtered.length !== 1 ? 's' : ''}
        </div>

        {/* Product Grid */}
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
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
                      <button className="w-full py-3 bg-genz-lime text-genz-black font-display font-bold text-sm rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-2">
                        <ShoppingBag className="w-4 h-4" />
                        Add to Cart
                      </button>
                    </div>
                    <div className="absolute top-3 right-3 glass rounded-lg px-2 py-1 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-genz-lime text-genz-lime" />
                      <span className="text-xs font-medium text-white">{product.rating}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-genz-muted uppercase tracking-wider font-medium">{product.category}</span>
                    </div>
                    <h3 className="font-display font-semibold text-white mb-2 group-hover:text-genz-lime transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-genz-muted mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {product.materials.map((m) => (
                        <span key={m} className="text-xs bg-genz-dark text-genz-gray px-2.5 py-1 rounded-full border border-genz-border">
                          {m}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xl font-bold text-genz-lime">${product.price}</span>
                      <button className="text-sm font-display font-semibold text-genz-lime hover:text-white transition-colors">
                        Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Search className="w-12 h-12 text-genz-muted/30 mx-auto mb-4" />
              <h3 className="font-display font-semibold text-white mb-2">No products found</h3>
              <p className="text-sm text-genz-muted">Try adjusting your search or filters.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
