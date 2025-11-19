import React from 'react';
import { Search, Sliders, FileText, CheckSquare } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Research",
    description: "We analyze 50+ exchanges, digging into their terms, fees, and hidden clauses."
  },
  {
    icon: Sliders,
    title: "Compare",
    description: "We pit top exchanges against each other in our detailed comparison dashboard."
  },
  {
    icon: FileText,
    title: "Review",
    description: "Our experts write unbiased, in-depth ratings based on real-world testing."
  },
  {
    icon: CheckSquare,
    title: "Choose",
    description: "You pick the platform that fits your needs and sign up securely."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-accent font-bold tracking-wider uppercase text-sm">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-2">
            How We Help You Start Smart
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connector Line (Desktop Only) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 z-0"></div>

            {steps.map((step, index) => (
                <div key={index} className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-white rounded-full border-4 border-gray-50 flex items-center justify-center mb-6 shadow-sm">
                        <div className="w-16 h-16 bg-brand-light/10 text-brand-light rounded-full flex items-center justify-center">
                            <step.icon size={32} />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed px-4">
                        {step.description}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;