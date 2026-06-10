import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Trash2 } from 'lucide-react';

export default function HomePage(): React.JSX.Element {
  return (
    <div className="bg-[#0d1117] text-white min-h-[calc(100vh-69px)] flex flex-col justify-between">
      
      {/* Hero Core Section */}
      <section className="relative px-6 py-16 md:px-16 md:py-24 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="relative z-10 space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl leading-tight">
            E-Commerce state <br /> has never been this easy.
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            VeloShop implements global state teleporters using Zustand. Zero boilerplate, blazing fast execution, completely typed parameters.
          </p>
          <div className="pt-2">
            <Link 
              to="/products" 
              className="inline-flex items-center space-x-2 px-6 py-3 bg-[#10b981] hover:bg-[#059669] text-black font-semibold text-sm rounded transition active:scale-95"
            >
              <span>EXPLORE PRODUCT CATALOG</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
        </div>

       
        <div className="relative hidden md:block">
          {/* Mock E-Commerce State Card */}
          <div className="relative border border-gray-800 bg-[#161b22] p-6 rounded-xl shadow-2xl space-y-6 max-w-sm mx-auto">
            {/* Header Area */}
            <div className="flex items-center justify-between border-b border-gray-800 pb-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-teal-500/10 rounded-lg text-teal-400">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Global Cart Store</h4>
                  <p className="text-[11px] text-gray-500 font-mono">state.cart (2 items)</p>
                </div>
              </div>
              <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px] px-2 py-0.5 rounded">
                Synced
              </span>
            </div>

            {/* Mock Item Feed */}
            <div className="space-y-3">
              {/* Item Unit 1 */}
              <div className="flex items-center justify-between bg-[#0d1117] border border-gray-800 p-3 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-400">KB</div>
                  <div>
                    <h5 className="text-xs font-medium text-white">Mech Keyboard</h5>
                    <p className="text-[10px] text-gray-400">$89.99 × 1</p>
                  </div>
                </div>
                <button className="p-1 text-gray-600 hover:text-rose-400 transition">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Item Unit 2 */}
              <div className="flex items-center justify-between bg-[#0d1117] border border-gray-800 p-3 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-400">MS</div>
                  <div>
                    <h5 className="text-xs font-medium text-white">Wireless Mouse</h5>
                    <p className="text-[10px] text-gray-400">$45.50 × 2</p>
                  </div>
                </div>
                <button className="p-1 text-gray-600 hover:text-rose-400 transition">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card Footer Balance Aggregates */}
            <div className="pt-2 flex items-center justify-between border-t border-gray-800 text-xs">
              <span className="text-gray-400 font-medium">Subtotal Metric:</span>
              <span className="font-bold text-teal-400 font-mono text-sm">$180.99</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}