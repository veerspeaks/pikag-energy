import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import offerings from '../data/offerings';

const ProductDetail = () => {
  const { categoryId, subcategoryId, productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [subcategory, setSubcategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the product from our offerings data
    const categoryData = offerings.find(c => c.id === categoryId);
    if (!categoryData) {
      navigate('/not-found', { replace: true });
      return;
    }
    
    const subcategoryData = categoryData.subcategories.find(s => s.id === subcategoryId);
    if (!subcategoryData) {
      navigate('/not-found', { replace: true });
      return;
    }
    
    const productData = subcategoryData.products.find(p => p.id === productId);
    if (!productData) {
      navigate('/not-found', { replace: true });
      return;
    }
    
    setCategory(categoryData);
    setSubcategory(subcategoryData);
    setProduct(productData);
    setLoading(false);
  }, [categoryId, subcategoryId, productId, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="/" className="text-gray-600 hover:text-primary text-sm">Home</a>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <a href="/offerings" className="ml-1 text-gray-600 hover:text-primary text-sm md:ml-2">Offerings</a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <span className="ml-1 text-gray-600 text-sm md:ml-2">{category.title}</span>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <span className="ml-1 text-gray-600 text-sm md:ml-2">{subcategory.title}</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Product header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {category.title} - {subcategory.title}
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mt-2">
            {product.name}
          </h2>
        </div>

        {/* Product details */}
        <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="border-b border-gray-200 p-4">
            <h3 className="text-lg font-medium text-gray-900">Product Details</h3>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product image */}
              <div className="flex justify-center items-center">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="max-h-80 w-auto object-contain rounded-md shadow"
                  onError={(e) => {
                    e.target.src = '/images/placeholder.jpg';
                    e.target.onerror = null;
                  }}
                />
              </div>
              
              {/* Product info */}
              <div>
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Description</h4>
                  <p className="text-gray-700">{product.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Key Features</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {product.productPointers.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8">
                  {product.partnerLogo && (
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">Partner</p>
                      <img 
                        src={product.partnerLogo} 
                        alt="Partner Logo" 
                        className="h-10 max-w-[180px] object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  <a 
                    href={product.partnerUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Know more on Partner's site
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 