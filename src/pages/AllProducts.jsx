import React from 'react';
import { PRODUCTS_MAP, PRODUCT_TYPES } from '../constants/product_types';
import { Link } from 'react-router-dom';

function AllProducts() {
  // Display all products by category
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            All <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Products</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Browse our complete collection of energy solutions organized by category.
          </p>
        </div>

        {/* Product Categories */}
        {PRODUCT_TYPES.map((category) => (
          category !== 'all' && (
            <div key={category} className="mb-16">
              <div className="flex items-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 capitalize">{category} Products</h2>
                <div className="h-0.5 flex-grow ml-6 bg-gradient-to-r from-primary/50 to-transparent"></div>
              </div>
              
              {/* Products Grid - 2 columns for mobile, 3 for tablet, 4 for desktop */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {PRODUCTS_MAP[category].map((product, index) => (
                  <div 
                    key={`${category}-${index}`}
                    className="bg-white rounded-xl shadow-md overflow-hidden transform hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-40 sm:h-44 object-cover"
                      />
                      <div className="absolute top-0 right-0 bg-primary/80 text-white text-xs font-medium px-2 py-1 m-2 rounded-full capitalize">
                        {category}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 line-clamp-1">{product.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mb-3 h-14">{product.description}</p>
                      <button className="w-full text-center px-3 py-1.5 bg-primary text-white text-xs sm:text-sm rounded-full hover:bg-primary/90 transition-all duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        ))}

        {/* Back to Products button */}
        <div className="text-center mt-8">
          <Link 
            to="/products"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-md transition-all duration-300"
          >
            Back to Products Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AllProducts; 