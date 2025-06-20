import { Product } from '../types/product';

export const PRODUCTS: Product[] = [
  // Crypto Exchanges
  { id: 1, name: "Binance KYC Account", category: 'crypto', price: 49.99, logo: "/logos/binance.svg" },
  { id: 2, name: "Coinbase Verified Account", category: 'crypto', price: 59.99, logo: "/logos/coinbase.svg" },
  { id: 3, name: "Kraken Pro Account", category: 'crypto', price: 44.99, logo: "/logos/kraken.svg" },
  { id: 4, name: "Bybit Verified Account", category: 'crypto', price: 39.99, logo: "/logos/bybit.svg" },
  
  // Social Media
  { id: 5, name: "Facebook Business Account", category: 'social', price: 29.99, logo: "/logos/facebook.svg" },
  { id: 6, name: "Instagram Aged Account", category: 'social', price: 34.99, logo: "/logos/instagram.svg" },
  { id: 7, name: "Telegram Premium Account", category: 'social', price: 19.99, logo: "/logos/telegram.svg" },
  { id: 8, name: "TikTok Verified Account", category: 'social', price: 39.99, logo: "/logos/tiktok.svg" },

  // Payment Systems
  { id: 9, name: "PayPal Verified Account", category: 'payment', price: 69.99, logo: "/logos/paypal.svg" },
  { id: 10, name: "Skrill Business Account", category: 'payment', price: 54.99, logo: "/logos/skrill.svg" },
  { id: 11, name: "Neteller Aged Account", category: 'payment', price: 44.99, logo: "/logos/neteller.svg" },
  { id: 12, name: "Wise Business Account", category: 'payment', price: 59.99, logo: "/logos/wise.svg" }
  // Add more products to reach 40
];
  
    category: 'social', 
    price: 39.99, 
    logo: '/logos/facebook.svg' 
  },
  // Payment Systems
  { 
    id: 21, 
    name: 'PayPal Verified Account', 
    category: 'payment', 
    price: 59.99, 
    logo: '/logos/paypal.svg' 
  }
  // Continue adding products...
];