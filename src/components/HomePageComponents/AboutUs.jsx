import React from 'react'
import collage from "../../../public/about-us.png"

const AboutUs = () => {
    return (
        <div className="py-12 sm:py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="relative" data-aos="fade-right">
                        <div className="absolute -inset-2">
                            <div className="w-full h-full mx-auto opacity-30 blur-lg filter"></div>
                        </div>
                        <div className="relative">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-8">Our Story</h2>
                            <div className="prose prose-base sm:prose-lg text-gray-600">
                                <p className="mb-4 sm:mb-6 text-sm sm:text-base">
                                    PIKAG ENERGY PRIVATE LIMITED was incorporated on 26/03/2018 under the companies Act, 2013. As a start-up organization, we are committed to endless business ethics and look to develop lasting associations with our clients, vendors, associates, and everyone we do business with.
                                </p>
                                <p className="text-sm sm:text-base">
                                    We place special emphasis on the "on-time and on-budget" delivery of solar power plants and LED lights, optimized to deliver superior output. With our subsidiaries, we have designed and built a significant volume of systems since our founding.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-0 relative group" data-aos="fade-left">
                        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-300">
                            <div className="absolute"></div>
                            <img
                                src={collage}
                                alt="Solar Panels"
                                className="w-full h-[200px] sm:h-[250px] md:h-[450px] object-cover rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs