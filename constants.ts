import { Exchange, ReviewPost, FAQItem } from './types';

export const EXCHANGES: Exchange[] = [
  {
    id: 'binance',
    name: 'Binance',
    logo: 'https://picsum.photos/id/10/60/60', // Placeholder for logo
    summary: 'The world’s largest exchange by volume. Great for advanced trading features and low fees.',
    rating: 4.9,
    primaryColor: '#F3BA2F',
    url: '#binance'
  },
  {
    id: 'coinbase',
    name: 'Coinbase',
    logo: 'https://picsum.photos/id/20/60/60',
    summary: 'Best for beginners. High security, user-friendly interface, and public listing on Nasdaq.',
    rating: 4.8,
    primaryColor: '#0052FF',
    url: '#coinbase'
  },
  {
    id: 'kraken',
    name: 'Kraken',
    logo: 'https://picsum.photos/id/30/60/60',
    summary: 'Top-tier security and bank-grade features. Excellent for margin trading and staking.',
    rating: 4.7,
    primaryColor: '#5741D9',
    url: '#kraken'
  }
];

export const RECENT_REVIEWS: ReviewPost[] = [
  {
    id: '1',
    title: 'Binance vs Coinbase: Which is Best for You in 2024?',
    excerpt: 'We break down fees, security, and ease of use to help you decide between the two giants.',
    imageUrl: 'https://picsum.photos/id/48/600/400',
    date: 'Oct 12, 2023',
    category: 'Comparison'
  },
  {
    id: '2',
    title: 'Is Bybit Safe? A Comprehensive Security Review',
    excerpt: 'An in-depth look at Bybit’s proof of reserves, regulatory status, and user protection funds.',
    imageUrl: 'https://picsum.photos/id/26/600/400',
    date: 'Oct 10, 2023',
    category: 'Safety'
  },
  {
    id: '3',
    title: 'Top 5 Crypto Exchanges for Day Trading',
    excerpt: 'High liquidity and low fees are key. Here are our top picks for active daily traders.',
    imageUrl: 'https://picsum.photos/id/96/600/400',
    date: 'Oct 08, 2023',
    category: 'Best Lists'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'q1',
    question: 'What is the safest crypto exchange for beginners?',
    answer: 'For beginners, we generally recommend regulated exchanges like Coinbase or Kraken due to their user-friendly interfaces, strong regulatory compliance, and insurance policies on digital assets.'
  },
  {
    id: 'q2',
    question: 'How do I avoid crypto scams?',
    answer: 'Never share your private keys or seed phrases. Always verify the URL of the exchange (look for the lock icon). Avoid "get rich quick" schemes and only use reputable exchanges listed on Crypto Navigator.'
  },
  {
    id: 'q3',
    question: 'Do these exchanges require ID verification (KYC)?',
    answer: 'Yes, most reputable centralized exchanges (CEX) require Know Your Customer (KYC) verification to comply with anti-money laundering laws. This helps secure your account and prevents fraud.'
  }
];