import React from 'react'
import collage from "../../../public/about-us.png"

const AboutUs = () => {
    return (
        <div className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="relative" data-aos="fade-right">
                        <div className="relative max-w-xl">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-6 sm:mb-8 leading-tight">Our Story</h2>
                            <div className="prose prose-base sm:prose-lg text-gray-700">
                                <p className="mb-6 text-base leading-relaxed">
                                    PIKAG ENERGY PRIVATE LIMITED was incorporated on 26/03/2018 under the companies Act, 2013. As a start-up organization, we are committed to endless business ethics and look to develop lasting associations with our clients, vendors, associates, and everyone we do business with.
                                </p>
                                <p className="text-base leading-relaxed">
                                    We place special emphasis on the "on-time and on-budget" delivery of solar power plants and LED lights, optimized to deliver superior output. With our subsidiaries, we have designed and built a significant volume of systems since our founding.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 lg:mt-0 relative" data-aos="fade-left">
                        <div className="relative rounded-lg overflow-hidden transform transition-transform duration-300">
                            <img
                                src={collage}
                                alt="Solar Panels"
                                className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs