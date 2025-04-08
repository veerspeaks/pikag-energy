import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ProductHero from '../components/products-components/ProductHero';
import CTA from '../components/products-components/CTA';

import { PIKAG_PRODUCTS_MAP, PIKAG_PRODUCT_TYPES } from '../constants/product_types';

function Products({productsMap, productTypes, pageName}) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.state?.selectedTab || productTypes[0]);
  const [currentProducts, setCurrentProducts] = useState(productsMap[activeTab]);
  const [sortOrder, setSortOrder] = useState('default');

  // Reset state when props change (different product page)
  useEffect(() => {
    setActiveTab(productTypes[0]);
    setCurrentProducts(productsMap[productTypes[0]]);
    
    // Refresh animations
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, [pageName, productsMap, productTypes]);

  // Handle tab selection from navigation
  useEffect(() => {
    if (location.state?.selectedTab && productsMap[location.state.selectedTab]) {
      setActiveTab(location.state.selectedTab);
      setCurrentProducts(productsMap[location.state.selectedTab]);
    }
  }, [location.state, productsMap]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentProducts(productsMap[tab]);
  };

  // Force scroll to top when navigating between product pages
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageName]);

  // Sort products
  const sortedProducts = [...currentProducts].sort((a, b) => {
    if (sortOrder === 'name-asc') return a.name.localeCompare(b.name);
    if (sortOrder === 'name-desc') return b.name.localeCompare(a.name);
    return 0; // default order
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Company Hero Banner */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary capitalize">{pageName}</span> Products
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 text-center">
            Explore our industry-leading {pageName} energy solutions
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Product Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:space-x-4 mb-8 sm:mb-12">
          {productTypes.map((type) => (
            <button
              key={`${pageName}-${type}`}
              onClick={() => handleTabChange(type)}
              className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-full transition-all duration-300 ${activeTab === type
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)} Products
            </button>
          ))}
        </div>

        {/* Product Filter & Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-0 capitalize">
            {activeTab} Products
          </h2>
          
          <div className="flex items-center">
            <label htmlFor="sort" className="mr-2 text-sm text-gray-600">Sort by:</label>
            <select 
              id="sort" 
              className="bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
            </select>
          </div>
        </div>

        {/* Conditional Content Based on Tab */}
        {activeTab === 'all' ? (
          /* All Products - Segmented by Category */
          <div>
            {productTypes.map((category) => (
              category !== 'all' && (
                <div key={category} className="mb-16">
                  <div className="flex items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 capitalize">{category} Products</h2>
                    <div className="h-0.5 flex-grow ml-6 bg-gradient-to-r from-primary/50 to-transparent"></div>
                  </div>
                  
                  {/* Products Grid for each category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
                    {productsMap[category].sort((a, b) => {
                      if (sortOrder === 'name-asc') return a.name.localeCompare(b.name);
                      if (sortOrder === 'name-desc') return b.name.localeCompare(a.name);
                      return 0;
                    }).map((product, index) => (
                      <div 
                        key={`${category}-${index}`}
                        className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl flex flex-col h-full"
                        data-aos="fade-up"
                        data-aos-delay={index % 4 * 100}
                      >
                        <div className="relative h-64">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-0 right-0 bg-primary/80 text-white text-xs font-medium px-2 py-1 m-2 rounded-md capitalize">
                            {category}
                          </div>
                        </div>
                        <div className="p-4 sm:p-5 flex-grow flex flex-col">
                          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">{product.name}</h3>
                          <p className="text-sm text-gray-600 line-clamp-3 flex-grow">{product.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        ) : (
          /* Specific Category Products Grid */
          <div className="mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {sortedProducts.map((product, index) => (
                <div
                  key={`${pageName}-${activeTab}-${index}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl flex flex-col h-full"
                  data-aos="fade-up"
                  data-aos-delay={index % 4 * 100}
                >
                  <div className="relative h-64">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-primary/80 text-white text-xs font-medium px-2 py-1 m-2 rounded-md capitalize">
                      {activeTab}
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 flex-grow flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">{product.name}</h3>
                    <p className="text-sm text-gray-600 line-clamp-3 flex-grow">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Featured Product Showcase - only display for specific categories, not "all" */}
        {activeTab !== 'all' && currentProducts.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12 border border-gray-100" data-aos="fade-up">
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <img 
                  src={currentProducts[0].image} 
                  alt={currentProducts[0].name}
                  className="w-full h-80 sm:h-96 lg:h-full object-cover" 
                />
              </div>
              <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4 capitalize">
                  Featured {activeTab} Product
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">{currentProducts[0].name}</h3>
                <p className="text-base text-gray-600 mb-6">{currentProducts[0].description}</p>
                <div className="mt-auto">
                  <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white text-sm sm:text-base rounded-md hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 shadow-md flex items-center">
                    See Product Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}

export default Products;
