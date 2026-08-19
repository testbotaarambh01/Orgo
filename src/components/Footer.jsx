import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Mail } from 'lucide-react';

const SOCIAL_LINKS = {
  Facebook: 'https://facebook.com',
  Twitter: 'https://twitter.com',
  Instagram: 'https://instagram.com',
  LinkedIn: 'https://linkedin.com',
};

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm sm:text-lg">O</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Orgo</h3>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed">
              Your trusted source for premium organic products delivered fresh to your door.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link to="/" className="hover:text-primary-400 transition">Home</Link></li>
              <li><Link to="/products" className="hover:text-primary-400 transition">Products</Link></li>
              <li><Link to="/about" className="hover:text-primary-400 transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link to="/about" className="hover:text-primary-400 transition">About</Link></li>
              <li><Link to="/about#blog" className="hover:text-primary-400 transition">Blog</Link></li>
              <li><Link to="/about#careers" className="hover:text-primary-400 transition">Careers</Link></li>
              <li><Link to="/about#press" className="hover:text-primary-400 transition">Press</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Newsletter</h4>
            <p className="text-xs sm:text-sm mb-3 sm:mb-4">Subscribe for organic tips and exclusive offers.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-gray-900 text-xs sm:text-sm focus:outline-none"
                required
              />
              <button type="submit" className="btn-primary p-1.5 sm:p-2 flex-shrink-0" aria-label="Subscribe">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-gray-400">
              &copy; 2024 Orgo. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
              {Object.entries(SOCIAL_LINKS).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
