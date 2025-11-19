import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../client';
import { Exchange } from '../types';
import { EXCHANGES } from '../constants';
import { Star, CheckCircle, ExternalLink, FileText, AlertCircle, X } from 'lucide-react';

const ComparisonCards: React.FC = () => {
  const [exchanges, setExchanges] = useState<Exchange[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);
  const [dismissedBanner, setDismissedBanner] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        // GROQ query to fetch top 3 exchanges sorted by rating
        const query = `*[_type == "exchange"] | order(rating desc)[0...3]`;
        const data = await client.fetch(query);

        if (data && data.length > 0) {
          const mappedExchanges: Exchange[] = data.map((item: any) => ({
            id: item._id,
            name: item.name,
            logo: item.logo ? urlFor(item.logo).width(200).url() : '',
            summary: item.summary,
            rating: item.rating,
            primaryColor: item.primaryColor || '#1E88E5',
            url: item.affiliateLink || '#'
          }));
          setExchanges(mappedExchanges);
          setUsingFallback(false);
        } else {
          // If Sanity has no data yet (empty dataset), use fallback
          console.warn("Sanity dataset is empty. Using fallback data.");
          setExchanges(EXCHANGES);
          setUsingFallback(true);
        }
      } catch (err) {
        // Suppress the scary red error in console, just warn
        console.warn("Sanity fetch skipped (CORS not configured). Using local fallback data.");
        setExchanges(EXCHANGES);
        setUsingFallback(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExchanges();
  }, []);

  const origin = typeof window !== 'undefined' ? window.location.origin : 'Your Domain';

  return (
    <section id="best-exchanges" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-6">
        
        {/* Admin Helper Banner - Only shows if fetch fails */}
        {usingFallback && !dismissedBanner && (
          <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3 animate-fade-in">
            <AlertCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
            <div className="flex-grow text-sm text-blue-800">
              <p className="font-bold mb-1">Developer Mode: Showing Sample Data</p>
              <p>
                To see real data, add <strong>{origin}</strong> to your 
                <a href="https://www.sanity.io/manage/project/hu2i1wct/api#cors-origins" target="_blank" rel="noreferrer" className="underline ml-1 font-semibold hover:text-blue-600">
                   Sanity CORS Origins
                </a>.
              </p>
            </div>
            <button onClick={() => setDismissedBanner(true)} className="text-blue-400 hover:text-blue-600">
              <X size={20} />
            </button>
          </div>
        )}

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Top Rated Crypto Exchanges
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We've tested over 50 platforms. These three stand out for their reliability, fees, and user experience.
          </p>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-8">
             {[1, 2, 3].map((i) => (
               <div key={i} className="bg-white rounded-2xl h-[500px] shadow-md animate-pulse p-8 flex flex-col items-center">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mb-4"></div>
                  <div className="h-8 w-32 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 w-24 bg-gray-200 rounded mb-6"></div>
                  <div className="h-20 w-full bg-gray-200 rounded mb-4"></div>
                  <div className="mt-auto w-full h-12 bg-gray-200 rounded"></div>
               </div>
             ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {exchanges.map((exchange, index) => (
              <div 
                key={exchange.id} 
                className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1 relative flex flex-col"
              >
                {/* Rank Badge */}
                <div className="absolute top-0 left-0 bg-brand-dark text-white text-xs font-bold px-3 py-1 rounded-br-lg z-10">
                  #{index + 1} Ranked
                </div>

                <div className="p-8 flex flex-col items-center text-center border-b border-gray-100 bg-gradient-to-b from-white to-gray-50/50">
                  <div className="w-20 h-20 mb-4 rounded-full p-1 border-2 shadow-sm bg-white" style={{ borderColor: exchange.primaryColor }}>
                    {exchange.logo ? (
                      <img src={exchange.logo} alt={`${exchange.name} logo`} className="w-full h-full rounded-full object-contain p-2" />
                    ) : (
                      <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-xs font-bold tracking-tighter">
                         {exchange.name.substring(0, 2)}
                      </div>
                    )}
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

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 h-16 overflow-hidden line-clamp-3">
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
                    target="_blank"
                    rel="noopener noreferrer"
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
        )}
        
        <div className="text-center mt-12">
             <a href="#all-reviews" className="text-brand-light font-semibold hover:underline">View all 50+ exchange reviews</a>
        </div>
      </div>
    </section>
  );
};

export default ComparisonCards;