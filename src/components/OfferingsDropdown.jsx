import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import offerings from '../data/offerings';

const OfferingsDropdown = ({ isOpen, onClose }) => {
  const [hoveredCategory, setHoveredCategory] = useState(offerings[0]?.id || '');
  const [hoveredSubcategory, setHoveredSubcategory] = useState(offerings[0]?.subcategories[0]?.id || '');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const currentCategory = offerings.find(c => c.id === hoveredCategory) || offerings[0];

  // When changing category, also update the selected subcategory to the first one in the new category
  const handleCategoryChange = (categoryId) => {
    setHoveredCategory(categoryId);
    const category = offerings.find(c => c.id === categoryId);
    if (category && category.subcategories.length > 0) {
      setHoveredSubcategory(category.subcategories[0].id);
    }
  };

  // Handle resize events to determine if we're on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when dropdown is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div 
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
    >
      <div 
        className={`bg-white w-full max-h-[90vh] md:max-h-[85vh] overflow-auto transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        } ${isMobile ? 'h-[100vh]' : ''}`}
        onClick={e => e.stopPropagation()}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
          <div className="flex justify-between items-center mb-4 md:mb-6 sticky top-0 bg-white pt-2 pb-2 z-10">
            <h2 className="text-xl md:text-2xl font-bold text-primary">Our Offerings</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row">
            {/* Column 1: Main categories navigation */}
            <div className="w-full md:w-1/4 md:border-r md:border-gray-200 md:pr-4 mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 md:mb-3 px-2 md:px-4">Solutions</h3>
              <div className="flex md:block overflow-x-auto md:overflow-visible pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
                <ul className="flex md:block md:space-y-2 items-center">
                  {offerings.map(category => (
                    <li key={category.id} className="md:w-full min-w-[140px] md:min-w-0 mr-2 md:mr-0 flex-shrink-0">
                      <button
                        className={`w-full text-left px-3 py-2 md:px-4 md:py-3 rounded-md font-medium transition-colors text-sm md:text-base ${
                          hoveredCategory === category.id 
                            ? 'bg-primary/10 text-primary' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        onMouseEnter={() => !isMobile && handleCategoryChange(category.id)}
                        onClick={() => handleCategoryChange(category.id)}
                      >
                        {category.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Column 2: Subcategories */}
            <div className="w-full md:w-1/4 md:border-r md:border-gray-200 md:pr-4 md:pl-4 mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 md:mb-3 px-2 md:px-4">{currentCategory.title}</h3>
              <div className="flex md:block overflow-x-auto md:overflow-visible pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
                <ul className="flex md:block md:space-y-2 items-center">
                  {currentCategory.subcategories.map(subcategory => (
                    <li key={subcategory.id} className="md:w-full min-w-[140px] md:min-w-0 mr-2 md:mr-0 flex-shrink-0">
                      <button
                        className={`w-full text-left px-3 py-2 md:px-4 md:py-3 rounded-md font-medium transition-colors text-sm md:text-base ${
                          hoveredSubcategory === subcategory.id 
                            ? 'bg-primary/10 text-primary' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        onMouseEnter={() => !isMobile && setHoveredSubcategory(subcategory.id)}
                        onClick={() => setHoveredSubcategory(subcategory.id)}
                      >
                        {subcategory.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Column 3: Products in selected subcategory */}
            <div className="w-full md:w-2/4 md:pl-4">
              {currentCategory.subcategories.map(subcategory => (
                <div 
                  key={subcategory.id}
                  className={`${hoveredSubcategory === subcategory.id ? 'block' : 'hidden'}`}
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 md:mb-3 px-2 md:px-4">{subcategory.title}</h3>
                  
                  <div className="bg-gray-50 rounded-lg p-4 md:p-6">
                    {subcategory.products.length > 0 ? (
                      <ul className="space-y-3 md:space-y-4">
                        {subcategory.products.map(product => (
                          <li key={product.id} className="border-b border-gray-200 pb-3 md:pb-4 last:border-b-0 last:pb-0">
                            <Link 
                              to={`/offerings/${currentCategory.id}/${subcategory.id}/${product.id}`}
                              className="block"
                              onClick={onClose}
                            >
                              <h4 className="text-primary text-base md:text-lg font-medium hover:text-primary-dark hover:underline">
                                {product.name}
                              </h4>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500 italic">No products available in this category</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferingsDropdown; 