import React, { useState, useEffect } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-lg ${isScrolled ? 'bg-brand-light text-white' : 'bg-white text-brand-light'}`}>
            <TrendingUp size={24} />
          </div>
          <span className={`text-2xl font-heading font-bold tracking-tight ${
            isScrolled ? 'text-gray-900' : 'text-white'
          }`}>
            Crypto<span className={isScrolled ? 'text-brand-light' : 'text-brand-accent'}>Navigator</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Reviews', 'Comparisons', 'Guides', 'News'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`font-medium hover:text-brand-accent transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {item}
            </a>
          ))}
          <a 
            href="#best-exchanges"
            className={`px-5 py-2 rounded-full font-bold transition-all shadow-md transform hover:scale-105 ${
              isScrolled 
                ? 'bg-brand-light text-white hover:bg-brand-dark' 
                : 'bg-brand-accent text-white hover:bg-orange-600'
            }`}
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100">
          <div className="flex flex-col p-6 gap-4">
            {['Reviews', 'Comparisons', 'Guides', 'News'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 font-medium text-lg py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
             <a 
              href="#best-exchanges"
              className="bg-brand-accent text-white text-center py-3 rounded-lg font-bold mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;