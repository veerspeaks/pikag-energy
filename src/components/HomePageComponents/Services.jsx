import React from 'react'

const Services = () => {
    return (
        <div className="py-14 sm:py-20 bg-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
                    <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Our Services</h2>
                    <p className="mt-3 text-2xl sm:text-3xl md:text-4xl leading-tight font-extrabold tracking-tight text-dark">
                        Comprehensive Energy Solutions
                    </p>
                    <p className="mt-4 sm:mt-5 text-lg sm:text-xl text-gray-700 mx-auto">
                        Delivering innovative and sustainable energy solutions for a brighter future
                    </p>
                </div>

                <div className="mt-12 sm:mt-16">
                    <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-102 transition-all duration-300 border border-gray-100" data-aos="fade-up" data-aos-delay="100">
                            <div className="p-7 sm:p-8">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-dark mb-2">Indoor Lighting</h3>
                                <p className="text-base text-gray-700 leading-relaxed">Energy-efficient LED solutions for all your indoor lighting needs, designed for comfort and sustainability.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-102 transition-all duration-300 border border-gray-100" data-aos="fade-up" data-aos-delay="200">
                            <div className="p-7 sm:p-8">
                                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-5">
                                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-dark mb-2">Outdoor Lighting</h3>
                                <p className="text-base text-gray-700 leading-relaxed">Durable and bright outdoor lighting solutions that withstand any environment while saving energy.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-102 transition-all duration-300 border border-gray-100" data-aos="fade-up" data-aos-delay="300">
                            <div className="p-7 sm:p-8">
                                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-dark mb-2">Solar Products</h3>
                                <p className="text-base text-gray-700 leading-relaxed">Sustainable solar solutions for residential and commercial use, powering a greener tomorrow.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services