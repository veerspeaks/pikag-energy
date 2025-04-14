import React from 'react'

const Solution = () => {
    const services = [
        {
            title: "⁠Industrial automation solutions",
            company: "| ​Lauritz Knudsen ",
            description: "Delivers reliable, innovative electrical solutions with strong industry performance and legacy.",
            image: "/services/industrialmachinery.jpg",
        },
        {
            title: "Renewable energy solutions",
            company: "| Tata Power Solar",
            description: "They provide efficient, reliable pumps for sustainable irrigation in remote areas, supporting eco-friendly farming.",
            image: "/services/robotics.jpg",
        },
        {
            title: "Engineered Panel system",
            company: "| Pikag Energy Private Limited",
            description: "Provides advanced solar and automation solutions for efficient, sustainable energy use.",
            image: "/Home/Solution/Pika-Energy-Inverter.webp",
        },
        {
            title: " ⁠IoT solution ",
            company: "| Meveic Technologies LLP",
            description: "Provides industrial computing and IoT solutions for efficient, connected automation systems.",
            image: "/Home/Solution/iot.png",
        },
    ];

    return (
        <div className="py-14 sm:py-20 bg-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
                    <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Solutions</h2>
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
                                        {service.title}<br />
                                        <span className="text-primary text-lg">{service.company}</span>
                                    </h3>
                                    
                                    {/* Description - Visible on Hover */}
                                    <p className="text-base text-gray-700 leading-relaxed mt-2  ">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solution;