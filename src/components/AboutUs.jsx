import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
    return (
        <div className="pt-16 sm:pt-24 md:pt-28 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center" data-aos="fade-up" data-aos-duration="800">
                    <div className="inline-block mb-4">
                        <div className="flex items-center justify-center">
                            <div className="w-10 h-1 bg-primary rounded-full"></div>
                            <span className="mx-4 text-sm uppercase tracking-wider text-primary font-semibold">Est. 2018</span>
                            <div className="w-10 h-1 bg-primary rounded-full"></div>
                        </div>
                    </div>
                    {/* <h2 className="text-3xl sm:text-5xl font-extrabold text-dark mb-6 sm:mb-8 leading-tight">
                        Who <span className="text-primary">We Are</span>
                    </h2> */}
                </div>

                <div className="prose prose-lg mx-auto text-center text-gray-700 mb-8" data-aos="fade-up" data-aos-delay="100">
                    <p className="mb-6 text-base sm:text-lg leading-relaxed">
                        PIKAG ENERGY PRIVATE LIMITED was incorporated on 26/03/2018 under the companies Act, 2013. As a start-up organization, we are committed to endless business ethics and look to develop lasting associations with our clients, vendors, associates, and everyone we do business with.
                    </p>
                    <p className="text-base sm:text-lg leading-relaxed mb-6">
                        We cover the gap between the demand and supply of energy
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="bg-light p-6 rounded-lg border-l-4 border-primary">
                        <h4 className="font-bold text-dark text-lg mb-2">Our Green Revolution Mission</h4>
                        <p className="text-sm sm:text-base text-gray-700">
                            Empowering communities with clean, renewable energy solutions that drive environmental stewardship and energy independence.
                        </p>
                    </div>
                    <div className="bg-light p-6 rounded-lg border-l-4 border-primary">
                        <h4 className="font-bold text-dark text-lg mb-2">Our Future-Forward Vision</h4>
                        <p className="text-sm sm:text-base text-gray-700">
                            To accelerate the global shift toward sustainable energy through cutting-edge technology, innovation, and a deep commitment to a greener planet.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs