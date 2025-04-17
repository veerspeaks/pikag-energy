import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
    const services = [
        
        {
            title: "Industrial Automation Solutions",
            description: "Advanced drive systems from top manufacturers that optimize performance, energy efficiency, and precision control.",
            image: "/products/ik/ac-drive/xd3000.png",
            link: "/solutions/industrial-automation"
        },
        {
            title: "Water management solutions",
            description: "High-performance industrial equipment from leading manufacturers, optimized for efficiency and reliability. Your Trust, Our Responsibility.",
            image: "/services/industrialmachinery.jpg",
            link: "/solutions/water-wastewater"
        },
        {
            title: "Robotics solutions",
            description: "Cutting-edge robotics solutions to streamline operations, increase productivity, and reduce operational costs.",
            image: "/services/robotics.jpg",
            link: "/solutions/robotics"
        },
        {
            title: "Renewable Energy Solutions",
            description: "Industry-leading solar panel systems that deliver sustainable energy and significant cost savings for your business.",
            image: "/services/solarsolution.jpg",
            link: "/solutions/renewable-energy"
        },
        {
            title: "Industrial IoT Solutions",
            description: "Connected solutions that provide real-time monitoring, analytics, and control to transform your operations and decision-making.",
            image: "/services/iot.jpg",
            link: "/solutions/iiot"
        }
    ];

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
                        {services.map((service, index) => (
                            <div 
                                key={index} 
                                className="group relative h-[400px] rounded-lg shadow-md overflow-hidden border border-gray-100" 
                                data-aos="fade-up" 
                                data-aos-delay={100 * (index + 1)}
                            >
                                {/* Image Section - Top */}
                                <div className="absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out ">
                                    <img 
                                        src={service.image} 
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                
                                {/* Content Section - Bottom */}
                                <div className="absolute bottom-0 w-full bg-white p-6 transition-all duration-500 ease-in-out ">
                                    {/* Title - Always Visible */}
                                    <h3 className="text-xl font-bold text-dark mb-2">
                                        {service.title}
                                    </h3>
                                    
                                    {/* Description - Visible on Hover */}
                                    <p className="text-base text-gray-700 leading-relaxed mt-2 mb-4">
                                        {service.description}
                                    </p>
                                    
                                    {/* Learn More Button */}
                                    <Link 
                                        to={service.link}
                                        className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300"
                                    >
                                        Learn More
                                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
          
           {/* Hidden on both mobile and desktop */}
                <div className="mt-16 sm:mt-20 hidden" data-aos="fade-up">
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