import React from 'react';
import { ArrowRight, ShieldCheck, BarChart3, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-darkest">
      {/* Background Overlay & Gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/180/1920/1080" 
          alt="Digital Finance Background" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/95 via-brand-darkest/90 to-black/95"></div>
        
        {/* Animated Decorative Blobs */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-brand-light/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="text-center md:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-accent text-sm font-semibold backdrop-blur-sm">
            <ShieldCheck size={16} />
            <span>Trusted by 50,000+ Investors</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white leading-tight">
            Your Guide to the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-cyan-400">
              Best Crypto Exchanges
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0 font-light">
            Compare fees, security, and features. Choose the right platform and start your crypto journey with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a 
              href="#best-exchanges"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent hover:bg-orange-600 text-white rounded-lg font-bold text-lg shadow-lg shadow-orange-500/20 transition-all transform hover:-translate-y-1"
            >
              See Top Exchange Picks
              <ArrowRight size={20} />
            </a>
            <a 
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-lg font-semibold text-lg backdrop-blur-sm transition-all"
            >
              How It Works
            </a>
          </div>
        </div>

        {/* Hero Visual/Graphic */}
        <div className="hidden md:block relative">
            <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-6 border-b border-gray-700 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-gray-400 text-xs font-mono">market_analysis.exe</span>
                </div>
                
                {/* Mock Chart UI */}
                <div className="space-y-4">
                    <div className="flex justify-between items-end h-32 gap-2">
                        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                            <div key={i} className="w-full bg-brand-light/20 rounded-t-sm relative group overflow-hidden">
                                <div style={{height: `${h}%`}} className="absolute bottom-0 w-full bg-gradient-to-t from-brand-light to-cyan-400 rounded-t-sm transition-all duration-1000"></div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between text-gray-400 text-sm font-mono">
                        <span>BTC</span>
                        <span>ETH</span>
                        <span>SOL</span>
                        <span className="text-green-400">+12.5%</span>
                    </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce duration-[3000ms]">
                    <div className="bg-green-100 p-2 rounded-full text-green-600">
                        <Globe size={24} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-bold uppercase">Global Reach</p>
                        <p className="text-gray-900 font-bold">150+ Countries</p>
                    </div>
                </div>

                 <div className="absolute -top-6 -right-6 bg-brand-dark p-4 rounded-xl shadow-xl border border-gray-700 flex items-center gap-3">
                    <div className="bg-brand-light/20 p-2 rounded-full text-brand-light">
                        <BarChart3 size={24} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 font-bold uppercase">Data Points</p>
                        <p className="text-white font-bold">Live Analysis</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;