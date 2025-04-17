import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, solutionId, subcategoryId }) => {
  // Construct internal product URL with the correct structure
  const productUrl = `/offerings/${solutionId}/${encodeURIComponent(subcategoryId)}/${product.id}`;
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="p-6">
        <h4 className="text-xl font-bold text-dark mb-3">{product.name}</h4>
        <p className="text-gray-600 line-clamp-3 mb-4">{product.description}</p>
        <div className="mt-auto">
          <Link
            to={productUrl}
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300"
          >
            View Details
            <svg className="ml-2 -mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 