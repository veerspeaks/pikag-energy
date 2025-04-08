import React from 'react'

const Services = () => {
    return (
        <div className="py-12 sm:py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center" data-aos="fade-up">
                    <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Our Services</h2>
                    <p className="mt-2 text-2xl sm:text-3xl md:text-4xl leading-8 font-extrabold tracking-tight text-gray-900">
                        Comprehensive Energy Solutions
                    </p>
                    <p className="mt-3 sm:mt-4 max-w-2xl text-lg sm:text-xl text-gray-500 mx-auto">
                        Delivering innovative and sustainable energy solutions for a brighter future
                    </p>
                </div>

                <div className="mt-10 sm:mt-16">
                    <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
                            <div className="p-6 sm:p-8">
                                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Indoor Lighting</h3>
                                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500">Energy-efficient LED solutions for all your indoor lighting needs, designed for comfort and sustainability.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
                            <div className="p-6 sm:p-8">
                                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                                    </svg>
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Outdoor Lighting</h3>
                                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500">Durable and bright outdoor lighting solutions that withstand any environment while saving energy.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
                            <div className="p-6 sm:p-8">
                                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                                    </svg>
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Solar Products</h3>
                                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500">Sustainable solar solutions for residential and commercial use, powering a greener tomorrow.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services