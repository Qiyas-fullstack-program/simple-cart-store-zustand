import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { ShoppingCart } from 'lucide-react';

export default function Navbar(): React.JSX.Element {
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-[#0d1117] text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Link */}
        <Link to="/" className="flex items-center space-x-2 font-bold text-xl hover:opacity-90 transition">
          <span className="text-2xl font-black bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Mini Shop
          </span>
        </Link>

        {/* Links Alignment */}
        <div className="flex items-center space-x-6 text-sm">
          <Link to="/" className="text-gray-400 hover:text-white transition">Home</Link>
          <Link to="/products" className="text-gray-400 hover:text-white transition">Products</Link>
          
          {/* Cart Icon Link */}
          <Link to="/cart" className="relative p-2 bg-gray-800/50 hover:bg-gray-800 rounded-full transition border border-gray-700">
            <ShoppingCart className="w-4 h-4 text-teal-400" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#10b981] text-black text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}