import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../lib/cartContext';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Calculator', path: '/calculator' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative">
            <Leaf className="w-7 h-7 text-genz-lime transition-all duration-300 group-hover:rotate-12" />
            <div className="absolute inset-0 w-7 h-7 bg-genz-lime/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight">
            <span className="text-white">Eco</span>
            <span className="text-genz-lime">flect</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                isActive(link.path)
                  ? 'text-genz-black bg-genz-lime'
                  : 'text-genz-gray hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/cart"
            className="relative w-10 h-10 rounded-full glass-light flex items-center justify-center text-genz-gray hover:text-white hover:bg-white/10 transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-genz-pink text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <Link
            to="/products"
            className="px-5 py-2.5 bg-genz-lime text-genz-black font-display font-semibold text-sm rounded-full hover:brightness-110 transition-all duration-300 neon-glow"
          >
            Shop Now
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 rounded-full glass-light flex items-center justify-center text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="mx-6 mt-2 glass rounded-2xl p-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                    isActive(link.path)
                      ? 'bg-genz-lime text-genz-black'
                      : 'text-genz-gray hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/cart"
                className="flex items-center justify-between py-3 px-4 rounded-xl text-sm font-medium text-genz-gray hover:text-white hover:bg-white/5 transition-all"
              >
                <span>Cart</span>
                {totalItems > 0 && (
                  <span className="bg-genz-pink text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>
              <div className="pt-2">
                <Link
                  to="/products"
                  className="block w-full text-center py-3 bg-genz-lime text-genz-black font-display font-semibold text-sm rounded-xl"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
