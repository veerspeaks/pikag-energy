import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import OfferingsDropdown from './OfferingsDropdown';
import Flag from 'react-world-flags';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOfferingsOpen, setIsOfferingsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close offerings dropdown when toggling menu
    if (!isMenuOpen) {
      setIsOfferingsOpen(false);
    }
  };

  const toggleOfferingsDropdown = () => {
    setIsOfferingsOpen(!isOfferingsOpen);
  };

  const closeOfferingsDropdown = () => {
    setIsOfferingsOpen(false);
  };

  return (
    <>
      <nav className={`bg-white shadow-md border-b border-gray-100 fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'py-1' : 'py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 md:h-16">
            {/* Logo - always visible */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img src="/logo.png" alt="PikaG Energy" className={`transition-all duration-300 ${scrolled ? 'h-8 w-auto' : 'h-10 w-auto'}`} />
              </Link>
            </div>

            {/* Desktop Navigation - hidden on mobile */}
            <div className="hidden md:flex md:flex-1 md:justify-center">
              <div className="flex space-x-4 lg:space-x-8">
                <Link
                  to="/"
                  className={`${location.pathname === '/'
                    ? 'text-primary border-primary font-semibold'
                    : 'text-gray-600 border-transparent hover:border-primary hover:text-dark'
                    } inline-flex items-center px-1 pt-1 border-b-2 font-medium text-sm lg:text-base tracking-wide`}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`${location.pathname === '/about'
                    ? 'text-primary border-primary font-semibold'
                    : 'text-gray-600 border-transparent hover:border-primary hover:text-dark'
                    } inline-flex items-center px-1 pt-1 border-b-2 font-medium text-sm lg:text-base tracking-wide`}
                >
                  About
                </Link>

                {/* Offerings Button */}
                <div className={`relative ${location.pathname.includes('/offerings/')
                  ? 'text-primary border-primary font-semibold'
                  : 'text-gray-600 border-transparent hover:border-primary hover:text-dark'
                  } inline-flex items-center px-1 pt-1 border-b-2 font-medium text-sm lg:text-base tracking-wide`}>
                  <button
                    type="button"
                    onClick={toggleOfferingsDropdown}
                    className="inline-flex justify-center items-center w-full px-2 py-2 hover:text-primary"
                  >
                    Offerings
                    <svg
                      className={`w-4 h-4 ml-1 transition-transform duration-300 ${isOfferingsOpen ? 'rotate-180' : ''}`}
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
                    ? 'text-primary border-primary font-semibold'
                    : 'text-gray-600 border-transparent hover:border-primary hover:text-dark'
                    } inline-flex items-center px-1 pt-1 border-b-2 font-medium text-sm lg:text-base tracking-wide`}
                >
                  Contact
                </Link>
                <Link
                  to="/credentials"
                  className={`${location.pathname === '/credentials'
                    ? 'text-primary border-primary font-semibold'
                    : 'text-gray-600 border-transparent hover:border-primary hover:text-dark'
                    } inline-flex items-center px-1 pt-1 border-b-2 font-medium text-sm lg:text-base tracking-wide`}
                >
                  Credentials
                </Link>
              </div>
            </div>

            {/* Right-side info - only on desktop */}
            <div className="hidden md:flex items-center space-x-2 text-gray-600 text-[14px] font-bold">
              <span className="hover:text-primary cursor-pointer">English</span>
              <span>|</span>
              <Flag code="IN" style={{ width: 20, height: 14 }} alt="Indian Flag" />
              <span>|</span>
              <a href="tel:+919755021473" className="hover:text-primary">+91 9755021473</a>
            </div>

            {/* Mobile menu button and phone link */}
            <div className="flex items-center space-x-4 md:hidden">
              <a href="tel:+919755021473" className="text-primary hover:text-primary-dark">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>

              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-dark hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                aria-expanded={isMenuOpen}
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

        {/* Mobile menu - slide down animation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pt-2 pb-3 space-y-1 px-4 border-t border-gray-200 bg-gray-50">
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
            <div className={`border-l-4 ${
              location.pathname.includes('/offerings/') 
                ? 'border-primary bg-primary/10' 
                : 'border-transparent'
            }`}>
              <button
                onClick={toggleOfferingsDropdown}
                className="w-full text-left pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-800 flex items-center justify-between"
              >
                Offerings
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isOfferingsOpen ? 'rotate-180' : ''}`}
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
            <Link
              to="/credentials"
              className={`${location.pathname === '/credentials'
                ? 'bg-primary/10 border-primary text-primary'
                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              Credentials
            </Link>

            {/* Language selection on mobile */}
            <div className="flex items-center space-x-2 pl-3 py-2 text-gray-600 text-sm">
              <span className="text-primary font-medium cursor-pointer">English</span>
              <span>|</span>
              <Flag code="IN" style={{ width: 16, height: 12 }} alt="Indian Flag" />
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16 md:h-20"></div>

      {/* Full screen offerings dropdown */}
      <OfferingsDropdown isOpen={isOfferingsOpen} onClose={closeOfferingsDropdown} />
    </>
  );
}

export default Navbar;