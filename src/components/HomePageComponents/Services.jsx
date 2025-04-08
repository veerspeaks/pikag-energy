import React from 'react'

const Services = () => {
    return (
        <div className="py-14 sm:py-20 bg-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
                    <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Our Services</h2>
                    <p className="mt-3 text-2xl sm:text-3xl md:text-4xl leading-tight font-extrabold tracking-tight text-dark">
                        Premium Industry Solutions
                    </p>
                    <p className="mt-4 sm:mt-5 text-lg sm:text-xl text-gray-700 mx-auto">
                        Delivering world-class technological solutions from renowned manufacturers to drive your business forward
                    </p>
                </div>

                <div className="mt-12 sm:mt-16">
                    <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-102 transition-all duration-300 border border-gray-100" data-aos="fade-up" data-aos-delay="100">
                            <div className="p-7 sm:p-8">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-dark mb-2">Industrial Machinery</h3>
                                <p className="text-base text-gray-700 leading-relaxed">High-performance industrial equipment from leading manufacturers, optimized for efficiency and reliability.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-102 transition-all duration-300 border border-gray-100" data-aos="fade-up" data-aos-delay="200">
                            <div className="p-7 sm:p-8">
                                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-5">
                                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-dark mb-2">Robotics & Automation</h3>
                                <p className="text-base text-gray-700 leading-relaxed">Cutting-edge robotics solutions to streamline operations, increase productivity, and reduce operational costs.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-102 transition-all duration-300 border border-gray-100" data-aos="fade-up" data-aos-delay="300">
                            <div className="p-7 sm:p-8">
                                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-dark mb-2">Solar Solutions</h3>
                                <p className="text-base text-gray-700 leading-relaxed">Industry-leading solar panel systems that deliver sustainable energy and significant cost savings for your business.</p>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-102 transition-all duration-300 border border-gray-100" data-aos="fade-up" data-aos-delay="400">
                            <div className="p-7 sm:p-8">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-dark mb-2">Motor Drives & Controls</h3>
                                <p className="text-base text-gray-700 leading-relaxed">Advanced drive systems from top manufacturers that optimize performance, energy efficiency, and precision control.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-102 transition-all duration-300 border border-gray-100" data-aos="fade-up" data-aos-delay="500">
                            <div className="p-7 sm:p-8">
                                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-5">
                                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-dark mb-2">IoT & Smart Devices</h3>
                                <p className="text-base text-gray-700 leading-relaxed">Connected solutions that provide real-time monitoring, analytics, and control to transform your operations and decision-making.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 sm:mt-20" data-aos="fade-up">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                        <div className="p-8 sm:p-10">
                            <h3 className="text-2xl font-bold text-dark mb-6 text-center">Why Choose Us</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-lg font-semibold text-primary mb-3">Strategic Partnerships</h4>
                                    <p className="text-gray-700 mb-6">We maintain exclusive partnerships with leading global manufacturers, giving your business access to premium solutions not readily available elsewhere.</p>
                                    
                                    <h4 className="text-lg font-semibold text-primary mb-3">Industry Expertise</h4>
                                    <p className="text-gray-700">Our team of specialists brings decades of combined experience across multiple industries, ensuring you receive solutions perfectly tailored to your specific needs.</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-primary mb-3">End-to-End Support</h4>
                                    <p className="text-gray-700 mb-6">From initial consultation to implementation and ongoing maintenance, we provide comprehensive support at every stage to maximize your investment.</p>
                                    
                                    <h4 className="text-lg font-semibold text-primary mb-3">Business Growth Focus</h4>
                                    <p className="text-gray-700">We don't just sell products – we deliver solutions designed to optimize efficiency, reduce costs, and create sustainable competitive advantages for your business.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services