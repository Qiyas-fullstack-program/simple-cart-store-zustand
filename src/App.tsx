import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import ProductDetailPage from './pages/ProductDetailPage';

export default function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0d1117] font-sans antialiased selection:bg-teal-500 selection:text-black">
        {/* Global Navigation Layout Frame */}
        <Navbar />
        
        {/* Structural Router Processing Core */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="*" element={<div className="text-center text-white py-20">404 - Page Not Found</div>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}