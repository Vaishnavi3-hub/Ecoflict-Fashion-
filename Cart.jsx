import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../lib/cartContext';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Package } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Cart() {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();

  const shipping = totalPrice > 100 ? 0 : 8;
  const finalTotal = totalPrice + shipping;

  return (
    <div className="min-h-screen bg-genz-black pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 glass-light text-genz-lime px-4 py-1.5 rounded-full text-xs font-medium mb-4">
            <ShoppingBag className="w-3.5 h-3.5" />
            Your Bag
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-3">
            Shopping <span className="gradient-text">Cart</span>
          </h1>
          <p className="text-genz-muted">
            {totalItems === 0 ? 'Bhai, cart khali hai! Kuch add kar le.' : `You have ${totalItems} item(s) in your cart.`}
          </p>
        </motion.div>

        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-3xl p-16 text-center"
          >
            <div className="w-20 h-20 bg-genz-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Package className="w-10 h-10 text-genz-lime" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">Cart totally empty, bro!</h3>
            <p className="text-genz-muted mb-8 max-w-md mx-auto">
              Abhi kuch add nahi kiya? Sustainable fashion ka vibe lena hai toh products dekh le.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-genz-lime text-genz-black px-8 py-4 rounded-2xl font-display font-bold hover:brightness-110 transition-all neon-glow"
            >
              Explore Products <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence mode="popLayout">
                {items.map((item, i) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="glass rounded-2xl p-4 flex gap-4 items-center group"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold text-white text-sm truncate">{item.name}</h3>
                      <p className="text-xs text-genz-muted mb-2">{item.category}</p>
                      <div className="font-display font-bold text-genz-lime">${item.price}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-lg glass-light flex items-center justify-center text-genz-gray hover:text-white hover:bg-white/10 transition-all"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium text-white">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-lg glass-light flex items-center justify-center text-genz-gray hover:text-white hover:bg-white/10 transition-all"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="w-9 h-9 rounded-lg glass-light flex items-center justify-center text-genz-muted hover:text-genz-pink hover:bg-genz-pink/10 transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>

              <button
                onClick={clearCart}
                className="text-sm text-genz-muted hover:text-genz-pink transition-colors flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Clear entire cart
              </button>
            </div>

            {/* Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-3xl p-6 h-fit border border-genz-lime/20"
            >
              <h3 className="font-display font-bold text-white text-lg mb-6">Order Summary</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-genz-muted">Subtotal</span>
                  <span className="text-white font-medium">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-genz-muted">Shipping</span>
                  <span className={shipping === 0 ? 'text-genz-lime font-medium' : 'text-white font-medium'}>
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="border-t border-genz-border pt-3 flex justify-between">
                  <span className="text-white font-display font-semibold">Total</span>
                  <span className="text-genz-lime font-display font-bold text-xl">${finalTotal.toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full py-4 bg-genz-lime text-genz-black font-display font-bold rounded-2xl hover:brightness-110 transition-all neon-glow mb-3">
                Checkout
              </button>
              <p className="text-xs text-genz-muted text-center">
                {shipping > 0 ? `Add $${(100 - totalPrice).toFixed(0)} more for free shipping!` : 'Free shipping unlocked!'}
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
