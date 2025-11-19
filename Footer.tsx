import React from 'react';
import { TrendingUp, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-darkest text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-white/10 text-brand-light">
                <TrendingUp size={24} />
              </div>
              <span className="text-2xl font-heading font-bold text-white tracking-tight">
                Crypto<span className="text-brand-accent">Navigator</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Your trusted companion in the world of cryptocurrency. We provide unbiased reviews and tools to help you trade safely.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-light transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-brand-light transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-brand-light transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-brand-light transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-brand-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Our Methodology</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Editorial Policy</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Exchange Reviews</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Comparison Tool</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Beginner Guides</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Crypto News</a></li>
            </ul>
          </div>

          {/* Disclaimer Column */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Disclaimer</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Crypto Navigator provides information for educational purposes only. We are not financial advisors. 
              Crypto trading involves high risk. Past performance is not indicative of future results.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Crypto Navigator. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;