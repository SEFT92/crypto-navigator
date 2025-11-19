import React from 'react';
import { Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-16 bg-brand-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
         <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
         </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-brand-dark/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
            
            <div className="text-white md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">Stay Ahead in Crypto</h2>
                <p className="text-blue-100 text-lg">
                    Get exclusive reviews, safety tips, and market news delivered straight to your inbox. No spam, ever.
                </p>
            </div>

            <div className="w-full md:w-1/2">
                <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                    <div className="relative flex-grow">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input 
                            type="email" 
                            placeholder="Enter your email address" 
                            className="w-full pl-12 pr-4 py-4 rounded-lg border-none focus:ring-2 focus:ring-brand-accent text-gray-900"
                            required
                        />
                    </div>
                    <button 
                        type="submit"
                        className="px-8 py-4 bg-brand-accent hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg transition-colors whitespace-nowrap"
                    >
                        Subscribe Now
                    </button>
                </form>
                <p className="text-blue-200 text-xs mt-3 text-center md:text-left">
                    By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;