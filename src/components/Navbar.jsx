import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import OfferingsDropdown from './OfferingsDropdown';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOfferingsOpen, setIsOfferingsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleOfferingsDropdown = () => {
    setIsOfferingsOpen(!isOfferingsOpen);
  };

  const closeOfferingsDropdown = () => {
    setIsOfferingsOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <img src="/logo.png" alt="PikaG Energy" className="h-10 w-auto" />
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:justify-center">
              <div className="flex space-x-8">
                <Link
                  to="/"
                  className={`${location.pathname === '/'
                    ? 'text-primary border-primary font-semibold'
                    : 'text-gray-600 border-transparent hover:border-primary hover:text-dark'
                    } inline-flex items-center px-1 pt-1 border-b-2 font-medium text-base tracking-wide`}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`${location.pathname === '/about'
                    ? 'text-primary border-primary font-semibold'
                    : 'text-gray-600 border-transparent hover:border-primary hover:text-dark'
                    } inline-flex items-center px-1 pt-1 border-b-2 font-medium text-base tracking-wide`}
                >
                  About
                </Link>

                {/* Offerings Button */}
                <div className={`relative ${location.pathname.includes('/offerings/')
                  ? 'text-primary border-primary font-semibold'
                  : 'text-gray-600 border-transparent hover:border-primary hover:text-dark'
                  } inline-flex items-center px-1 pt-1 border-b-2 font-medium text-base tracking-wide`}>
                  <button
                    type="button"
                    onClick={toggleOfferingsDropdown}
                    className="inline-flex justify-center items-center w-full px-2 py-2 hover:text-primary"
                  >
                    Offerings
                    <svg
                      className="w-4 h-4 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M10 12l-5-5h10l-5 5z" />
                    </svg>
                  </button>
                </div>

                <Link
                  to="/contact"
                  className={`${location.pathname === '/contact'
                    ? 'text-dark border-primary'
                    : 'text-gray-600 border-transparent hover:border-primary hover:text-dark'
                    } inline-flex items-center px-1 pt-1 border-b-2 font-medium`}
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex items-center sm:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-dark hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
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
            
            {/* Mobile Offerings Button */}
            <div className="border-l-4 border-transparent">
              <button
                onClick={toggleOfferingsDropdown}
                className="w-full text-left pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-800 flex items-center justify-between"
              >
                Offerings
                <svg
                  className={`w-4 h-4 transition-transform ${isOfferingsOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
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

      {/* Full screen offerings dropdown */}
      <OfferingsDropdown isOpen={isOfferingsOpen} onClose={closeOfferingsDropdown} />
    </>
  );
}

export default Navbar;