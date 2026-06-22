import { Link } from 'react-router-dom';
import { Leaf, Instagram, Twitter, Youtube, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-genz-border">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-genz-lime/5 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-genz-pink/5 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-genz-lime" />
              <span className="font-display text-lg font-bold">
                <span className="text-white">Eco</span>
                <span className="text-genz-lime">flect</span>
              </span>
            </Link>
            <p className="text-sm text-genz-muted leading-relaxed">
              Sustainable fashion that slaps. Har piece planet ke liye ek statement hai.
            </p>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold text-sm mb-4">Navigate</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Products', path: '/products' },
                { label: 'Contact', path: '/contact' },
                { label: 'FAQ', path: '/faq' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-genz-muted hover:text-genz-lime transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold text-sm mb-4">Hit Us Up</h4>
            <ul className="space-y-3 text-sm text-genz-muted">
              <li>hello@ecoflectearthware.com</li>
              <li>+1 (555) 234-5678</li>
              <li>Portland, OR</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold text-sm mb-4">Socials</h4>
            <div className="flex gap-3">
              {[Instagram, Twitter, Youtube, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl glass-light flex items-center justify-center text-genz-muted hover:text-genz-lime hover:bg-genz-lime/10 transition-all duration-300"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-genz-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-genz-muted">&copy; {new Date().getFullYear()} Ecoflect Earthware. Built different.</p>
          <div className="flex gap-6 text-xs text-genz-muted">
            <a href="#" className="hover:text-genz-lime transition-colors">Privacy</a>
            <a href="#" className="hover:text-genz-lime transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
