import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('q1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-blue-50 rounded-full text-brand-light mb-4">
            <HelpCircle size={32} />
          </div>
          <h2 className="text-3xl font-heading font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="text-gray-600 mt-2">Everything you need to know before signing up.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => (
            <div 
              key={faq.id} 
              className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${
                openId === faq.id ? 'shadow-md bg-white' : 'bg-gray-50 hover:bg-white'
              }`}
            >
              <button 
                onClick={() => toggle(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`font-semibold text-lg ${openId === faq.id ? 'text-brand-light' : 'text-gray-800'}`}>
                  {faq.question}
                </span>
                {openId === faq.id ? (
                  <ChevronUp className="text-brand-light" size={20} />
                ) : (
                  <ChevronDown className="text-gray-400" size={20} />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openId === faq.id ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;