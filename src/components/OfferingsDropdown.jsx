import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import offerings from '../data/offerings';

const OfferingsDropdown = ({ isOpen, onClose }) => {
  const [hoveredCategory, setHoveredCategory] = useState(offerings[0]?.id || '');
  const [hoveredSubcategory, setHoveredSubcategory] = useState(offerings[0]?.subcategories[0]?.id || '');

  const currentCategory = offerings.find(c => c.id === hoveredCategory) || offerings[0];

  // When changing category, also update the selected subcategory to the first one in the new category
  const handleCategoryChange = (categoryId) => {
    setHoveredCategory(categoryId);
    const category = offerings.find(c => c.id === categoryId);
    if (category && category.subcategories.length > 0) {
      setHoveredSubcategory(category.subcategories[0].id);
    }
  };

  return (
    <div 
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
    >
      <div 
        className={`bg-white w-full h-[100vh] max-h-[100vh] overflow-auto transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
        onClick={e => e.stopPropagation()}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-primary">Our Offerings</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row">
            {/* Column 1: Main categories navigation */}
            <div className="md:w-1/4 border-r border-gray-200 pr-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 px-4">Solutions</h3>
              <ul className="space-y-2">
                {offerings.map(category => (
                  <li key={category.id}>
                    <button
                      className={`w-full text-left px-4 py-3 rounded-md font-medium transition-colors ${
                        hoveredCategory === category.id 
                          ? 'bg-primary/10 text-primary' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onMouseEnter={() => handleCategoryChange(category.id)}
                      onClick={() => handleCategoryChange(category.id)}
                    >
                      {category.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Column 2: Subcategories */}
            <div className="md:w-1/4 border-r border-gray-200 pr-4 pl-4 mt-4 md:mt-0">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 px-4">{currentCategory.title}</h3>
              <ul className="space-y-2">
                {currentCategory.subcategories.map(subcategory => (
                  <li key={subcategory.id}>
                    <button
                      className={`w-full text-left px-4 py-3 rounded-md font-medium transition-colors ${
                        hoveredSubcategory === subcategory.id 
                          ? 'bg-primary/10 text-primary' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onMouseEnter={() => setHoveredSubcategory(subcategory.id)}
                      onClick={() => setHoveredSubcategory(subcategory.id)}
                    >
                      {subcategory.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Column 3: Products in selected subcategory */}
            <div className="md:w-2/4 pl-4 mt-4 md:mt-0">
              {currentCategory.subcategories.map(subcategory => (
                <div 
                  key={subcategory.id}
                  className={`${hoveredSubcategory === subcategory.id ? 'block' : 'hidden'}`}
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 px-4">{subcategory.title}</h3>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    {subcategory.products.length > 0 ? (
                      <ul className="space-y-4">
                        {subcategory.products.map(product => (
                          <li key={product.id} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                            <Link 
                              to={`/offerings/${currentCategory.id}/${subcategory.id}/${product.id}`}
                              className="block"
                              onClick={onClose}
                            >
                              <h4 className="text-primary text-lg font-medium hover:text-primary-dark hover:underline">
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