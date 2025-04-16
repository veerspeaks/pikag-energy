import React from 'react'
import { Link } from 'react-router-dom'
import offerings from '../data/offerings'

const RoboticsSolution = () => {
  // Get the robotics data from offerings
  const solution = offerings.find(item => item.id === "robotics");

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/services/robotics-hero.jpg"
            alt="Robotics Solutions"
          />
          <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Robotics Solutions
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Cutting-edge robotics solutions to streamline operations, increase productivity, and reduce operational costs for your business.
          </p>
        </div>
      </div>

      {/* Partners */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Technology Partners
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We collaborate with industry-leading manufacturers to provide you with the best robotics solutions.
            </p>
          </div>

          <div className="mt-10">
            <div className="flex justify-center">
              <img
                src={solution.partnerLogo}
                alt="Partner Logo"
                className="h-20 object-contain mx-2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Transform Your Operations
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Our robotics solutions are designed to revolutionize your manufacturing and logistics operations. From articulated robots to integrated vision systems, we offer a complete range of automation tools to enhance precision, speed, and safety.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-500">
                    Increased production speed and throughput
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-500">
                    Enhanced precision and quality control
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-500">
                    Improved workplace safety and ergonomics
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-500">
                    Reduced labor costs and operational expenses
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img className="rounded-lg shadow-lg" src="/services/robotics-detail.jpg" alt="Robotics Solutions" />
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Products</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Robotics Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Explore our range of high-quality robotics products and systems.
            </p>
          </div>

          <div className="mt-12">
            {solution.subcategories.map((subcategory) => (
              <div key={subcategory.id} className="mb-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">{subcategory.title}</h3>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {subcategory.products.map((product) => (
                    <div key={product.id} className="bg-white overflow-hidden shadow rounded-lg">
                      <div className="p-4">
                        <div className="aspect-w-3 aspect-h-2">
                          <img 
                            className="object-cover shadow-lg rounded-lg" 
                            src={product.imageUrl} 
                            alt={product.name} 
                          />
                        </div>
                        <div className="mt-4">
                          <h4 className="text-lg font-bold text-gray-900">{product.name}</h4>
                          <p className="mt-2 text-sm text-gray-500">{product.description}</p>
                          <ul className="mt-2 space-y-1 text-sm text-gray-500 list-disc list-inside">
                            {product.productPointers.slice(0, 3).map((point, index) => (
                              <li key={index}>{point}</li>
                            ))}
                          </ul>
                          <div className="mt-4">
                            <a
                              href={product.partnerUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary-dark font-medium"
                            >
                              Learn more about {product.name} <span aria-hidden="true">&rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to automate your operations?</span>
            <span className="block text-white">Get in touch with our robotics experts today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
              >
                Contact Us
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-dark hover:bg-primary-darker"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoboticsSolution 