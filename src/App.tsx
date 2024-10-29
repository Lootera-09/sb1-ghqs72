import React, { useState } from 'react';
import { ShoppingCart, Store } from 'lucide-react';
import { ProductCard } from './components/ProductCard';
import { SellerCard } from './components/SellerCard';
import { products } from './data/products';
import { sellers } from './data/sellers';
import { Product } from './types';

function App() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-500 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Store className="w-8 h-8" />
              <h1 className="text-2xl font-bold">Fresh Market</h1>
            </div>
            <div className="flex items-center space-x-2">
              <ShoppingCart className="w-6 h-6" />
              <span className="bg-white text-green-500 px-2 py-1 rounded-full">
                {cartItems.length}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex space-x-4">
            {['all', 'vegetable', 'fruit', 'drink'].map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-gray-600 hover:bg-green-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Sellers Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Sellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sellers.map(seller => (
              <SellerCard
                key={seller.id}
                seller={seller}
                productCount={seller.products.length}
              />
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Fresh Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center">© 2024 Fresh Market. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;