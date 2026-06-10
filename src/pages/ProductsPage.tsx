import React from 'react';
import { useCartStore } from '../store/useCartStore';
import { Link } from 'react-router-dom';


export default function ProductsPage(): React.JSX.Element {

  const { products, addToCart } = useCartStore();

  return (
    <div className="bg-[#0d1117] min-h-[calc(100vh-69px)] text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Upgrade your inventory selection</h2>
          <p className="mt-2 text-gray-400 text-sm">
            Click "Add to Cart" to observe immediate store mutation across decoupled view parameters.
          </p>
        </div>
        
        {/* Responsive Grid View */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            
            <div key={product.id} className="bg-[#161b22] border border-gray-800 rounded-lg overflow-hidden flex flex-col justify-between hover:border-gray-700 transition">
              <Link to={`/product/${product.id}`}>
              <div>
                <img src={product.img} alt={product.name} className="w-full h-44 object-cover filter brightness-90" />
                <div className="p-5">
                  <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider">{product.category}</span>
                  <h3 className="font-semibold text-white mt-1 text-sm line-clamp-1">{product.name}</h3>
                  <p className="text-lg font-bold text-gray-200 mt-2">${product.price.toFixed(2)}</p>
                </div>
              </div>
              </Link>
              <div className="p-5 pt-0">
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full py-2.5 bg-[#10b981] hover:bg-[#059669] text-black font-semibold text-xs rounded transition active:scale-95"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
}