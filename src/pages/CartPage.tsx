import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { Trash2, ArrowLeft } from 'lucide-react';

export default function CartPage(): React.JSX.Element {
  const { cart, removeFromCart, clearCart } = useCartStore();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="bg-[#0d1117] min-h-[calc(100vh-69px)] text-white flex items-center justify-center px-6">
        <div className="max-w-md text-center border border-gray-800 bg-[#161b22] p-8 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Your data stack is currently empty</h2>
          <p className="text-gray-400 text-xs mb-6">No global state mutations detected. Grab items from the index feed.</p>
          <Link to="/products" className="inline-flex items-center space-x-2 text-teal-400 font-medium text-sm hover:underline">
            <ArrowLeft className="w-4 h-4" /> <span>Back to Products</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0d1117] min-h-[calc(100vh-69px)] text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-end border-b border-gray-800 pb-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Active Allocation Feed</h2>
            <p className="text-xs text-gray-400 mt-1">Review items currently managed within Zustand global allocation.</p>
          </div>
          <button onClick={clearCart} className="text-xs text-rose-400 hover:underline font-medium">
            Clear All Stack
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-3 items-start">
          {/* Item Row Generation */}
          <div className="md:col-span-2 space-y-3">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 bg-[#161b22] border border-gray-800 p-4 rounded-lg">
                <img src={item.img} alt={item.name} className="w-12 h-12 object-cover rounded filter brightness-90" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm text-white line-clamp-1">{item.name}</h4>
                  <p className="text-gray-400 text-xs mt-0.5">${item.price.toFixed(2)} × {item.quantity}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-bold text-sm text-gray-200">${(item.price * item.quantity).toFixed(2)}</span>
                  <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-rose-400 transition">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout Totals Segment */}
          <div className="bg-[#161b22] border border-gray-800 rounded-lg p-6 space-y-6">
            <h3 className="font-bold text-sm tracking-wide text-gray-300 uppercase">Summary Metrics</h3>
            <div className="flex justify-between items-center border-t border-gray-800 pt-4">
              <span className="text-xs text-gray-400">Total Price:</span>
              <span className="text-2xl font-black text-white">${subtotal.toFixed(2)}</span>
            </div>
            <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded transition uppercase">
              Proceed to Check
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}