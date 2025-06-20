import { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types/product';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { RootState } from '../redux/store';

export default function Marketplace() {
  const [category, setCategory] = useState<string | null>(null);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const filteredProducts = category 
    ? PRODUCTS.filter(p => p.category === category)
    : PRODUCTS;

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">KYC SHOP Marketplace</h1>
      
      <div className="flex space-x-4 mb-6">
        <button 
          className={`px-4 py-2 ${category === null ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} 
          onClick={() => setCategory(null)}
        >
          All Products
        </button>
        <button 
          className={`px-4 py-2 ${category === 'crypto' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} 
          onClick={() => setCategory('crypto')}
        >
          Crypto Exchanges
        </button>
        <button 
          className={`px-4 py-2 ${category === 'social' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} 
          onClick={() => setCategory('social')}
        >
          Social Media
        </button>
        <button 
          className={`px-4 py-2 ${category === 'payment' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} 
          onClick={() => setCategory('payment')}
        >
          Payment Systems
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="border p-4 rounded-lg">
            <img src={product.logo} alt={product.name} className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
            <button 
              onClick={() => handleAddToCart(product)}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
  