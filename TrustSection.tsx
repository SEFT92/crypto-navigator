import React from 'react';
import { Lock, Info } from 'lucide-react';

const TrustSection: React.FC = () => {
  return (
    <section className="py-16 bg-brand-darkest text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-brand-dark rounded-2xl p-8 md:p-12 shadow-2xl border border-white/5">
            
            <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3 mb-2">
                    <Lock className="text-brand-accent" size={28} />
                    <h2 className="text-2xl md:text-3xl font-heading font-bold">Unbiased & Transparent</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                    At Crypto Navigator, trust is our currency. We earn commissions from some affiliate links on our site, 
                    but this <strong className="text-white">never</strong> influences our ratings. Our reviews are based on strict criteria: 
                    security, fees, liquidity, and user support.
                </p>
                <p className="text-gray-400 text-sm flex items-center gap-2">
                    <Info size={16} />
                    We do not accept payments for higher rankings.
                </p>
            </div>

            <div className="md:w-1/3 w-full">
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                    <h3 className="font-bold text-brand-light mb-4">Our Security Promise</h3>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                            <span className="text-green-400">✓</span>
                            We only list exchanges with Proof of Reserves.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-400">✓</span>
                            We regularly re-test platforms for vulnerabilities.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-400">✓</span>
                            Educational guides to help you hold your own keys.
                        </li>
                    </ul>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default TrustSection;