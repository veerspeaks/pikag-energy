import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import Product from '../components/Product';
import ProductHero from '../components/products-components/ProductHero';
import CTA from '../components/products-components/CTA';

import { PRODUCTS_MAP, PRODUCT_TYPES } from '../constants/product_types';

function Products() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.state?.selectedTab || PRODUCT_TYPES[0]);
  const [currentProducts, setCurrentProducts] = useState(PRODUCTS_MAP[activeTab]);

  useEffect(() => {
    // Refresh AOS animations when the active tab changes
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, [activeTab]);

  useEffect(() => {
    // Handle tab selection from navigation
    if (location.state?.selectedTab) {
      setActiveTab(location.state.selectedTab);
      setCurrentProducts(PRODUCTS_MAP[location.state.selectedTab]);
    }
  }, [location.state]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentProducts(PRODUCTS_MAP[tab]);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <ProductHero />

      {/* Dynamic Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-wrap justify-center gap-3 sm:space-x-4 mb-8 sm:mb-12">
          {PRODUCT_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => handleTabChange(type)}
              className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-medium rounded-full transition-all duration-300 ${activeTab === type
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)} Products
            </button>
          ))}
        </div>

        {/* Products Carousel */}
        <div className="mb-6 sm:mb-8" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
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
                  duration: currentProducts.length,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                },
              }}
            >
              {currentProducts.map((product, index) => (
                <Product key={index} id={index} product={product} />
              ))}
              {/* duplicate */}
              {currentProducts.map((product, index) => (
                <Product key={`dup-${index}`} id={index} product={product} />
              ))}
            </motion.div>
          </div>
          
          {/* View All Button */}
          <div className="mt-8 mb-12 text-center">
            <Link 
              to="/all-products" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-md transform hover:scale-105 transition-all duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>

        {/* Featured Products Grid */}
        <div data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{product.name}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{product.description}</p>
                  <button className="px-4 sm:px-6 py-1.5 sm:py-2 bg-primary text-white text-sm sm:text-base rounded-full hover:bg-primary/90 transition-all duration-300">
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
