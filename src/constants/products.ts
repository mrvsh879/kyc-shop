export interface Product {
  id: number;
  name: string;
  category: 'crypto' | 'social' | 'payment';
  price: number;
  logo: string;
  description?: string;
}

export const PRODUCTS: Product[] = [
  // Crypto Exchanges
  { 
    id: 1, 
    name: "Binance Verified Account", 
    category: 'crypto', 
    price: 99.99, 
    logo: "/logos/binance.svg",
    description: "Fully verified Binance account with KYC"
  },
  { 
    id: 2, 
    name: "Coinbase Pro Account", 
    category: 'crypto', 
    price: 129.99, 
    logo: "/logos/coinbase.svg",
    description: "Verified Coinbase Pro trading account" 
  },
  // Continue with more products (total 40)
  { 
    id: 40, 
    name: "Neteller Account", 
    category: 'payment', 
    price: 59.99, 
    logo: "/logos/neteller.svg",
    description: "Verified Neteller payment account" 
  }
];