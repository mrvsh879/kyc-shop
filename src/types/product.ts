export interface Product {
  id: number;
  name: string;
  category: 'crypto' | 'social' | 'payment';
  price: number;
  logo: string;
  description?: string;
}
  