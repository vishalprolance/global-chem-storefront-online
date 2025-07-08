
import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductCatalog from '@/components/ProductCatalog';
import Cart from '@/components/Cart';
import { toast } from '@/hooks/use-toast';

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  category: string;
}

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock product data for cart functionality
  const products = [
    { id: 1, name: "HCL-Hydrochloric Acid", category: "Industrial Chemicals" },
    { id: 2, name: "Sulphuric Acid", category: "Industrial Chemicals" },
    { id: 3, name: "Nitric Acid", category: "Industrial Chemicals" },
    { id: 4, name: "Caustic Lye", category: "Industrial Chemicals" },
    { id: 5, name: "Hypo chloride/Bleaching Liquid", category: "Industrial Chemicals" },
    // Add more products as needed for cart functionality
  ];

  const handleAddToCart = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cartItems.find(item => item.id === productId);
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, {
        id: product.id,
        name: product.name,
        quantity: 1,
        category: product.category
      }]);
    }

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity === 0) {
      handleRemoveItem(productId);
      return;
    }

    setCartItems(cartItems.map(item =>
      item.id === productId
        ? { ...item, quantity }
        : item
    ));
  };

  const handleRemoveItem = (productId: number) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart.",
    });
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <Header
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        onSearchChange={setSearchQuery}
      />
      
      <Hero />
      
      <ProductCatalog
        searchQuery={searchQuery}
        onAddToCart={handleAddToCart}
      />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">GLOBAL CHEMICALS</h3>
              <p className="text-gray-300">
                Trusted supplier of quality chemicals since 1970. 
                Professional solutions for all your chemical needs.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>About Us</li>
                <li>Products</li>
                <li>Safety Guidelines</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="text-gray-300 space-y-2">
                <p>Email: info@globalchemicals.com</p>
                <p>Phone: +91 XXXXX XXXXX</p>
                <p>Address: Your Address Here</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Global Chemicals. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
