import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ComparisonCards from './components/ComparisonCards';
import HowItWorks from './components/HowItWorks';
import TrustSection from './components/TrustSection';
import RecentReviews from './components/RecentReviews';
import Newsletter from './components/Newsletter';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-brand-accent selection:text-white">
      <Header />
      <main>
        <Hero />
        <ComparisonCards />
        <HowItWorks />
        <TrustSection />
        <RecentReviews />
        <Newsletter />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;