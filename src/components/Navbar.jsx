import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
                className={`${
                  location.pathname === '/'
                    ? 'text-gray-900 border-primary'
                    : 'text-gray-500 border-transparent hover:border-primary hover:text-gray-900'
                } inline-flex items-center px-1 pt-1 border-b-2`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`${
                  location.pathname === '/about'
                    ? 'text-gray-900 border-primary'
                    : 'text-gray-500 border-transparent hover:border-primary hover:text-gray-900'
                } inline-flex items-center px-1 pt-1 border-b-2`}
              >
                About
              </Link>
              <Link
                to="/products"
                className={`${
                  location.pathname === '/products'
                    ? 'text-gray-900 border-primary'
                    : 'text-gray-500 border-transparent hover:border-primary hover:text-gray-900'
                } inline-flex items-center px-1 pt-1 border-b-2`}
              >
                Products
              </Link>
              <Link
                to="/contact"
                className={`${
                  location.pathname === '/contact'
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
            className={`${
              location.pathname === '/'
                ? 'bg-primary/10 border-primary text-primary'
                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
            } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${
              location.pathname === '/about'
                ? 'bg-primary/10 border-primary text-primary'
                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
            } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/products"
            className={`${
              location.pathname === '/products'
                ? 'bg-primary/10 border-primary text-primary'
                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
            } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/contact"
            className={`${
              location.pathname === '/contact'
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