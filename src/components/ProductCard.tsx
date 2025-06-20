import { Product } from '../constants/products';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
      <Image 
        src={product.logo} 
        alt={product.name} 
        width={100} 
        height={100} 
        className="mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
}