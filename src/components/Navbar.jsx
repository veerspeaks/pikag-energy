import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { PIKAG_PRODUCT_TYPES, OMRON_PRODUCT_TYPES, LK_PRODUCT_TYPES } from '../constants/product_types';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => setIsProductsOpen(!isProductsOpen);

  // Helper function to filter product types - removes 'all' from repeating
  const filterProductTypes = (types) => {
    const filteredTypes = [...types];
    if (filteredTypes.includes('all')) {
      const allIndex = filteredTypes.indexOf('all');
      filteredTypes.splice(allIndex, 1);
    }
    return filteredTypes;
  };

  const pikagFilteredTypes = filterProductTypes(PIKAG_PRODUCT_TYPES);
  const lkFilteredTypes = filterProductTypes(LK_PRODUCT_TYPES);
  const omronFilteredTypes = filterProductTypes(OMRON_PRODUCT_TYPES);

  // Get the maximum number of product types across all companies for table layout
  const maxProductTypes = Math.max(
    pikagFilteredTypes.length + 1, // +1 for "All Products"
    lkFilteredTypes.length + 1,
    omronFilteredTypes.length + 1
  );

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img src="/logo.png" alt="PikaG Energy" className="h-12 w-auto" />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className={`${location.pathname === '/'
                  ? 'text-gray-900 border-primary'
                  : 'text-gray-500 border-transparent hover:border-primary hover:text-gray-900'
                  } inline-flex items-center px-1 pt-1 border-b-2`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`${location.pathname === '/about'
                  ? 'text-gray-900 border-primary'
                  : 'text-gray-500 border-transparent hover:border-primary hover:text-gray-900'
                  } inline-flex items-center px-1 pt-1 border-b-2`}
              >
                About
              </Link>

              <div className={`relative ${location.pathname.includes('/products/')
                ? 'text-gray-900 border-primary'
                : 'text-gray-500 border-transparent hover:border-primary hover:text-gray-900'
                } inline-flex items-center px-1 pt-1 border-b-2`}>
                <div className="group">
                  <button
                    type="button"
                    className="inline-flex justify-center items-center w-full px-4 py-2 group-hover:border-primary group-hover:text-gray-900"
                  >
                    Products
                    <svg
                      className="w-4 h-4 ml-2 -mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M10 12l-5-5h10l-5 5z" />
                    </svg>
                  </button>
                  
                  {/* Table-style mega menu */}
                  <div className="absolute left-0 mt-1 origin-top-left bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-10 border border-gray-100">
                    <table className="min-w-[32rem] border-collapse">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="py-2 px-3 text-sm font-semibold text-gray-900 text-left border-b border-gray-200">PikaG</th>
                          <th className="py-2 px-3 text-sm font-semibold text-gray-900 text-left border-b border-gray-200">Laurtiz Knudsen</th>
                          <th className="py-2 px-3 text-sm font-semibold text-gray-900 text-left border-b border-gray-200">OMRON</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* First row - All Products for each company */}
                        <tr>
                          <td className="py-1.5 px-3">
                            <Link
                              to="/products/pikag"
                              state={{ selectedTab: 'all' }}
                              className="block text-sm text-gray-700 hover:text-primary font-medium"
                            >
                              All Products
                            </Link>
                          </td>
                          <td className="py-1.5 px-3">
                            <Link
                              to="/products/laurtiz-knudsen"
                              state={{ selectedTab: 'all' }}
                              className="block text-sm text-gray-700 hover:text-primary font-medium"
                            >
                              All Products
                            </Link>
                          </td>
                          <td className="py-1.5 px-3">
                            <Link
                              to="/products/omron"
                              state={{ selectedTab: 'all' }}
                              className="block text-sm text-gray-700 hover:text-primary font-medium"
                            >
                              All Products
                            </Link>
                          </td>
                        </tr>
                        
                        {/* Product type rows */}
                        {[...Array(maxProductTypes - 1)].map((_, index) => (
                          <tr key={`product-row-${index}`}>
                            <td className="py-1.5 px-3">
                              {pikagFilteredTypes[index] && (
                                <Link
                                  to="/products/pikag"
                                  state={{ selectedTab: pikagFilteredTypes[index] }}
                                  className="block text-sm text-gray-700 hover:text-primary capitalize"
                                >
                                  {pikagFilteredTypes[index]}
                                </Link>
                              )}
                            </td>
                            <td className="py-1.5 px-3">
                              {lkFilteredTypes[index] && (
                                <Link
                                  to="/products/laurtiz-knudsen"
                                  state={{ selectedTab: lkFilteredTypes[index] }}
                                  className="block text-sm text-gray-700 hover:text-primary capitalize"
                                >
                                  {lkFilteredTypes[index]}
                                </Link>
                              )}
                            </td>
                            <td className="py-1.5 px-3">
                              {omronFilteredTypes[index] && (
                                <Link
                                  to="/products/omron"
                                  state={{ selectedTab: omronFilteredTypes[index] }}
                                  className="block text-sm text-gray-700 hover:text-primary capitalize"
                                >
                                  {omronFilteredTypes[index]}
                                </Link>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className={`${location.pathname === '/contact'
                  ? 'text-gray-900 border-primary'
                  : 'text-gray-500 border-transparent hover:border-primary hover:text-gray-900'
                  } inline-flex items-center px-1 pt-1 border-b-2`}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className={`${location.pathname === '/'
              ? 'bg-primary/10 border-primary text-primary'
              : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${location.pathname === '/about'
              ? 'bg-primary/10 border-primary text-primary'
              : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          
          {/* Mobile Products Dropdown */}
          <div className="border-l-4 border-transparent">
            <button
              onClick={toggleDropdown}
              className="w-full text-left pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-800 flex items-center justify-between"
            >
              Products
              <svg
                className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {isProductsOpen && (
              <div className="py-2">
                {/* Mobile table-like layout */}
                <div className="overflow-x-auto px-4">
                  <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="py-2 px-3 text-left font-medium text-gray-900">PikaG</th>
                        <th className="py-2 px-3 text-left font-medium text-gray-900">Laurtiz Knudsen</th>
                        <th className="py-2 px-3 text-left font-medium text-gray-900">OMRON</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {/* First row - All Products for each company */}
                      <tr>
                        <td className="py-1.5 px-3">
                          <Link
                            to="/products/pikag"
                            state={{ selectedTab: 'all' }}
                            className="block text-gray-700 hover:text-primary font-medium"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            All Products
                          </Link>
                        </td>
                        <td className="py-1.5 px-3">
                          <Link
                            to="/products/laurtiz-knudsen"
                            state={{ selectedTab: 'all' }}
                            className="block text-gray-700 hover:text-primary font-medium"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            All Products
                          </Link>
                        </td>
                        <td className="py-1.5 px-3">
                          <Link
                            to="/products/omron"
                            state={{ selectedTab: 'all' }}
                            className="block text-gray-700 hover:text-primary font-medium"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            All Products
                          </Link>
                        </td>
                      </tr>
                      
                      {/* Product type rows */}
                      {[...Array(maxProductTypes - 1)].map((_, index) => (
                        <tr key={`mobile-product-row-${index}`}>
                          <td className="py-1.5 px-3">
                            {pikagFilteredTypes[index] && (
                              <Link
                                to="/products/pikag"
                                state={{ selectedTab: pikagFilteredTypes[index] }}
                                className="block text-gray-700 hover:text-primary capitalize"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {pikagFilteredTypes[index]}
                              </Link>
                            )}
                          </td>
                          <td className="py-1.5 px-3">
                            {lkFilteredTypes[index] && (
                              <Link
                                to="/products/laurtiz-knudsen"
                                state={{ selectedTab: lkFilteredTypes[index] }}
                                className="block text-gray-700 hover:text-primary capitalize"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {lkFilteredTypes[index]}
                              </Link>
                            )}
                          </td>
                          <td className="py-1.5 px-3">
                            {omronFilteredTypes[index] && (
                              <Link
                                to="/products/omron"
                                state={{ selectedTab: omronFilteredTypes[index] }}
                                className="block text-gray-700 hover:text-primary capitalize"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {omronFilteredTypes[index]}
                              </Link>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
          
          <Link
            to="/contact"
            className={`${location.pathname === '/contact'
              ? 'bg-primary/10 border-primary text-primary'
              : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;