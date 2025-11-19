export interface Exchange {
  id: string;
  name: string;
  logo: string;
  summary: string;
  rating: number;
  primaryColor: string;
  url: string;
}

export interface ReviewPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  category: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}