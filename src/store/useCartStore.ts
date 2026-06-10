import { create } from 'zustand';
import type { Product, CartItem } from '../types';


export const MOCK_PRODUCTS: Product[] = [
  { 
    id: 1, 
    name: "Wireless Mechanical Keyboard", 
    price: 89.99, 
    category: "Electronics", 
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80",
    description: "Engineered for speed and comfort. Features clicky hot-swappable mechanical switches, customizable RGB backlighting, and dual-mode wireless connectivity for clean desktop setups."
  },
  { 
    id: 2, 
    name: "Ergonomic Wireless Mouse", 
    price: 45.50, 
    category: "Electronics", 
    img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80",
    description: "Designed to reduce wrist fatigue during extended working intervals. Packed with an ultra-precise optical sensor, side scroll wheels, and a fast rechargeable internal battery core."
  },
  { 
    id: 3, 
    name: "Noise Cancelling Headphones", 
    price: 129.99, 
    category: "Audio", 
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    description: "Block out distractions with studio-grade Active Noise Cancellation (ANC). Offers crystal-clear audio fidelity, memory foam ear cups, and up to 40 hours of uninterrupted wireless playback."
  },
  { 
    id: 4, 
    name: "4K Ultra-Wide Monitor", 
    price: 349.99, 
    category: "Displays", 
    img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
    description: "Maximize your programming layout real estate. This massive 21:9 ultra-wide panel offers 4K color accuracy, immersive curved viewing glass, and multi-source input windowing profiles."
  },
];

interface CartState {
  products: Product[]; 
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  products: MOCK_PRODUCTS, 
  cart: [],
  
  addToCart: (product) => set((state) => {
    const existingItem = state.cart.find((item) => item.id === product.id);
    if (existingItem) {
      return {
        cart: state.cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    }
    return { cart: [...state.cart, { ...product, quantity: 1 }] };
  }),

  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== productId),
  })),

  clearCart: () => set({ cart: [] }),
}));