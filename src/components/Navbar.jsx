import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

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
                className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary"
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;