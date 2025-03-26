import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Product from '../components/Product';
import ProductHero from '../components/products-components/ProductHero';
import CTA from '../components/products-components/CTA';

import { PRODUCTS_MAP, PRODUCT_TYPES } from '../constants/product_types';

function Products() {
  const [activeTab, setActiveTab] = useState(PRODUCT_TYPES[0]); // Initialize with the first product type
  const [currentProducts, setCurrentProducts] = useState(PRODUCTS_MAP[activeTab]);

  useEffect(() => {
    // Refresh AOS animations when the active tab changes
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, [activeTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentProducts(PRODUCTS_MAP[tab]);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <ProductHero />

      {/* Dynamic Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center space-x-4 mb-12">
          {PRODUCT_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => handleTabChange(type)}
              className={`px-6 py-3 text-lg font-medium rounded-full transition-all duration-300 ${activeTab === type
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)} Products
            </button>
          ))}
        </div>

        {/* Products Carousel */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Products
          </h2>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: [-currentProducts.length * 100, 0],
              }}
              transition={{
                x: {
                  duration: currentProducts.length * 1/2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                },
              }}
            >
              {currentProducts.map((product, index) => (
                <Product key={index} id={index} product={product} />
              ))}

            </motion.div>
          </div>
        </div>

        {/* Featured Products Grid */}
        <div data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProducts.slice(0, 3).map((product, index) => (
              <div
                key={`featured-${index}`}
                className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={product.id * 100}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}

export default Products;
