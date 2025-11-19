import React from 'react';
import { EXCHANGES } from '../constants';
import { Star, CheckCircle, ExternalLink, FileText } from 'lucide-react';

const ComparisonCards: React.FC = () => {
  return (
    <section id="best-exchanges" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Top Rated Crypto Exchanges
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We've tested over 50 platforms. These three stand out for their reliability, fees, and user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {EXCHANGES.map((exchange, index) => (
            <div 
              key={exchange.id} 
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1 relative flex flex-col"
            >
              {/* Rank Badge */}
              <div className="absolute top-0 left-0 bg-brand-dark text-white text-xs font-bold px-3 py-1 rounded-br-lg z-10">
                #{index + 1} Ranked
              </div>

              <div className="p-8 flex flex-col items-center text-center border-b border-gray-100 bg-gradient-to-b from-white to-gray-50/50">
                <div className="w-20 h-20 mb-4 rounded-full p-1 border-2 shadow-sm" style={{ borderColor: exchange.primaryColor }}>
                   <img src={exchange.logo} alt={`${exchange.name} logo`} className="w-full h-full rounded-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{exchange.name}</h3>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                     <Star 
                       key={i} 
                       size={16} 
                       className={`${i < Math.floor(exchange.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                     />
                  ))}
                  <span className="ml-2 text-gray-600 font-semibold">{exchange.rating}/5</span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 h-16 overflow-hidden">
                  {exchange.summary}
                </p>
              </div>

              <div className="p-6 bg-white flex-grow flex flex-col justify-end gap-3">
                 <ul className="mb-6 space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle size={16} className="text-green-500 mr-2" />
                        <span>Bank-grade security</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle size={16} className="text-green-500 mr-2" />
                        <span>Low trading fees</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle size={16} className="text-green-500 mr-2" />
                        <span>24/7 Customer Support</span>
                    </li>
                 </ul>

                 <a 
                   href={exchange.url}
                   className="w-full flex items-center justify-center gap-2 bg-brand-light hover:bg-brand-dark text-white py-3 rounded-lg font-bold transition-colors"
                 >
                   Visit Exchange <ExternalLink size={16} />
                 </a>
                 <a 
                   href={`#review-${exchange.id}`}
                   className="w-full flex items-center justify-center gap-2 bg-transparent hover:bg-gray-50 text-gray-600 py-3 rounded-lg font-semibold text-sm transition-colors border border-gray-200"
                 >
                   Read Full Review <FileText size={16} />
                 </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
             <a href="#all-reviews" className="text-brand-light font-semibold hover:underline">View all 50+ exchange reviews</a>
        </div>
      </div>
    </section>
  );
};

export default ComparisonCards;