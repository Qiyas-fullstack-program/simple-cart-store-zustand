import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { ArrowLeft, ShoppingBag, ShieldCheck, Truck, RotateCcw } from 'lucide-react';


export default function ProductDetailPage(): React.JSX.Element {
  const { id } = useParams<{ id: string }>();
  
  // Extract catalog array from our centralized state selector
  const products = useCartStore((state) => state.products);
  const addToCart = useCartStore((state) => state.addToCart);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="bg-[#0d1117] min-h-[calc(100vh-69px)] text-white flex items-center justify-center px-6">
        <div className="max-w-md text-center border border-gray-800 bg-[#161b22] p-8 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Product Node Not Found</h2>
          <p className="text-gray-400 text-xs mb-6">The item state parameter requested does not exist in memory.</p>
          <Link to="/products" className="inline-flex items-center space-x-2 text-teal-400 font-medium text-sm hover:underline">
            <ArrowLeft className="w-4 h-4" /> <span>Back to Products</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0d1117] min-h-[calc(100vh-69px)] text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        
        {/* Breadcrumb Navigation Line */}
        <Link to="/products" className="inline-flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition mb-10 group">
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          <span>Back to catalog allocation</span>
        </Link>

        {/* Dynamic Split Detail Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Visual Presentation Element */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-blue-500/10 blur-2xl rounded-full pointer-events-none" />
            <div className="relative border border-gray-800 bg-[#161b22] p-2 rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src={product.img} 
                alt={product.name} 
                className="w-full h-96 object-cover rounded-xl filter brightness-95"
              />
            </div>
          </div>

          {/* Context Controls Column */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider bg-teal-500/10 border border-teal-500/20 px-2.5 py-1 rounded">
                {product.category}
              </span>
              <h1 className="text-3xl font-extrabold tracking-tight mt-4 text-white md:text-4xl">
                {product.name}
              </h1>
            </div>

            <div className="border-y border-gray-800 py-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500 font-medium tracking-wide">STORE VALUATION</p>
                <p className="text-3xl font-black text-white mt-1">${product.price.toFixed(2)}</p>
              </div>
              <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs px-2.5 py-1 rounded">
                In Stock & Safe
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              {product.description}
            </p>

            {/* Global Dispatch Action Trigger Button */}
            <div className="pt-4">
              <button
                onClick={() => addToCart(product)}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-[#10b981] hover:bg-[#059669] text-black font-bold text-sm rounded-lg transition active:scale-95 shadow-xl shadow-emerald-950/20"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>ADD TO CART</span>
              </button>
            </div>

            {/* Quality Vectors Checklist Footer */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-gray-800 text-gray-400 text-[11px]">
              <div className="flex items-center space-x-2">
                <Truck className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Instant dispatch</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Secure payment</span>
              </div>
              <div className="flex items-center space-x-2">
                <RotateCcw className="w-4 h-4 text-purple-400 shrink-0" />
                <span>30-day guarantee</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}