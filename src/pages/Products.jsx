import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Product data constants
const SOLAR_PRODUCTS = [
  {
    id: 1,
    name: 'Solar Integrated Street Light',
    image: 'https://images.unsplash.com/photo-1623177223515-3bbd608ae03d?w=800&auto=format&fit=crop&q=80',
    description: 'Advanced integrated solar street lighting with built-in panels and smart controls for optimal performance.'
  },
  {
    id: 2,
    name: 'Solar All-in-one Street Light',
    image: 'https://images.unsplash.com/photo-1611346717951-32c702c578cc?w=800&auto=format&fit=crop&q=80',
    description: 'Complete all-in-one solar street lighting solution with integrated battery and motion sensors.'
  },
  {
    id: 3,
    name: 'Solar Pump',
    image: 'https://images.unsplash.com/photo-1628917996825-3b8cc981aad1?w=800&auto=format&fit=crop&q=80',
    description: 'High-efficiency solar water pumping systems for agricultural and commercial applications.'
  },
  {
    id: 4,
    name: 'Solar Power Plants',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=80',
    description: 'Custom-designed solar power plants for residential, commercial, and industrial installations.'
  }
];

const ALL_PRODUCTS = [
  ...SOLAR_PRODUCTS,
  {
    id: 5,
    name: 'LED Panel Light',
    image: 'https://images.unsplash.com/photo-1565819428385-cf377321357b?w=800&auto=format&fit=crop&q=80',
    description: 'Energy-efficient LED panel lighting for commercial spaces.'
  },
  {
    id: 6,
    name: 'Industrial LED High Bay',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&auto=format&fit=crop&q=80',
    description: 'High-output LED lighting solutions for industrial facilities and warehouses.'
  },
  {
    id: 7,
    name: 'Smart LED Bulb',
    image: 'https://images.unsplash.com/photo-1560435650-41c3c3ed5417?w=800&auto=format&fit=crop&q=80',
    description: 'IoT-enabled smart LED bulbs with remote control and scheduling capabilities.'
  },
  {
    id: 8,
    name: 'PCB Manufacturing Service',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&auto=format&fit=crop&q=80',
    description: 'Custom PCB design and manufacturing services for electronics projects.'
  },
  {
    id: 9,
    name: 'Energy Monitoring System',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=80',
    description: 'Advanced monitoring systems for tracking and optimizing energy consumption.'
  }
];

function Products() {
  const [activeTab, setActiveTab] = useState('all');
  const [currentProducts, setCurrentProducts] = useState(ALL_PRODUCTS);

  useEffect(() => {
    // Set up AOS animation library
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, [activeTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentProducts(tab === 'solar' ? SOLAR_PRODUCTS : ALL_PRODUCTS);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:max-w-2xl" data-aos="fade-right">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">Discover Our</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                      Premium Products
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
                    From cutting-edge solar solutions to energy-efficient LED lighting, explore our comprehensive range of sustainable energy products.
                  </p>
                  <div className="mt-8 flex gap-4">
                    <button
                      onClick={() => handleTabChange('solar')}
                      className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      Solar Products
                    </button>
                    <button
                      onClick={() => handleTabChange('all')}
                      className="inline-flex items-center px-8 py-3 border-2 border-primary text-base font-medium rounded-full text-primary hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-300"
                    >
                      View All
                    </button>
                  </div>
                </div>
                <div className="mt-12 lg:mt-0 lg:ml-8" data-aos="fade-left">
                  <img
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=80"
                    alt="Product Showcase"
                    className="w-full max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center space-x-4 mb-12">
          <button
            onClick={() => handleTabChange('all')}
            className={`px-6 py-3 text-lg font-medium rounded-full transition-all duration-300 ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            All Products
          </button>
          <button
            onClick={() => handleTabChange('solar')}
            className={`px-6 py-3 text-lg font-medium rounded-full transition-all duration-300 ${
              activeTab === 'solar'
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Solar Products
          </button>
        </div>

        {/* Products Carousel */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {activeTab === 'solar' ? 'Solar Products' : 'All Products'}
          </h2>
          
          <div className="relative overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: [-currentProducts.length * 100, 0],
              }}
              transition={{
                x: {
                  duration: 25,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                },
              }}
            >
              {/* First set of products */}
              {currentProducts.map(product => (
                <div key={product.id} className="min-w-[300px] sm:min-w-[350px] p-4">
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 h-full">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-gray-600">{product.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Duplicated set for continuous loop */}
              {currentProducts.map(product => (
                <div key={`duplicate-${product.id}`} className="min-w-[300px] sm:min-w-[350px] p-4">
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 h-full">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-gray-600">{product.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Featured Products Grid */}
        <div data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProducts.slice(0, 3).map(product => (
              <div
                key={`featured-${product.id}`}
                className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={product.id * 100}
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Energy Solutions?</h2>
          <p className="text-white/90 text-xl mb-8 max-w-3xl mx-auto">
            Contact our team of experts today to discuss your specific requirements and discover how our products can benefit you.
          </p>
          <button className="px-8 py-3 bg-white text-primary font-medium rounded-full hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Request a Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products; 