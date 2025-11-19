import React from 'react';
import { RECENT_REVIEWS } from '../constants';
import { ArrowRight, Calendar } from 'lucide-react';

const RecentReviews: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-2">Latest Insights</h2>
                <p className="text-gray-600">Stay updated with market trends and platform updates.</p>
            </div>
            <a href="#blog" className="text-brand-light font-semibold flex items-center hover:text-brand-dark transition-colors">
                View all articles <ArrowRight size={18} className="ml-2" />
            </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {RECENT_REVIEWS.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all group cursor-pointer">
                    <div className="h-48 overflow-hidden relative">
                        <div className="absolute top-4 left-4 bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-full z-10 uppercase tracking-wide">
                            {post.category}
                        </div>
                        <img 
                            src={post.imageUrl} 
                            alt={post.title} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <div className="p-6">
                        <div className="flex items-center text-gray-400 text-xs mb-3">
                            <Calendar size={14} className="mr-1" />
                            {post.date}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-light transition-colors line-clamp-2">
                            {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {post.excerpt}
                        </p>
                        <span className="text-brand-light font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                            Read More <ArrowRight size={16} className="ml-1" />
                        </span>
                    </div>
                </article>
            ))}
        </div>
      </div>
    </section>
  );
};

export default RecentReviews;