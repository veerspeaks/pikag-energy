import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

function Home() {
  return (
    <>
      <Hero />
      
      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center" data-aos="fade-up">
            <div className="p-4">
              <p className="text-4xl font-bold text-primary">5+</p>
              <p className="mt-2 text-gray-600">Years Experience</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-primary">100+</p>
              <p className="mt-2 text-gray-600">Projects Completed</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-primary">50+</p>
              <p className="mt-2 text-gray-600">Happy Clients</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-primary">24/7</p>
              <p className="mt-2 text-gray-600">Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Our Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Energy Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Delivering innovative and sustainable energy solutions for a brighter future
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
                <div className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Indoor Lighting</h3>
                  <p className="mt-4 text-gray-500">Energy-efficient LED solutions for all your indoor lighting needs, designed for comfort and sustainability.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
                <div className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Outdoor Lighting</h3>
                  <p className="mt-4 text-gray-500">Durable and bright outdoor lighting solutions that withstand any environment while saving energy.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
                <div className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Solar Products</h3>
                  <p className="mt-4 text-gray-500">Sustainable solar solutions for residential and commercial use, powering a greener tomorrow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-white/90">Contact us today for a free consultation.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 transform hover:scale-105 transition-all duration-300"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;