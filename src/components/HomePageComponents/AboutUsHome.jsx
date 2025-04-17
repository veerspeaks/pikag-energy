import React from 'react'
import { Link } from 'react-router-dom'

const AboutUsHome = () => {
    return (
        <div className="py-16 sm:py-24 md:py-28 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center" data-aos="fade-up" data-aos-duration="800">
                    <div className="inline-block mb-4">
                        <div className="flex items-center justify-center">
                            <div className="w-10 h-1 bg-primary rounded-full"></div>
                            <span className="mx-4 text-sm uppercase tracking-wider text-primary font-semibold">Est. 2018</span>
                            <div className="w-10 h-1 bg-primary rounded-full"></div>
                        </div>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-dark mb-6 sm:mb-8 leading-tight">
                        Who <span className="text-primary">We Are</span>
                    </h2>
                </div>

                <div className="prose prose-lg mx-auto text-center text-gray-700 mb-8" data-aos="fade-up" data-aos-delay="100">
                    <p className="mb-6 text-base sm:text-lg leading-relaxed">
                    Established in 1998, Pikag Group has become a key player in various sectors, headquartered in Bhilai. We strive to deliver innovative solutions and services that foster excellence and drive success in the industrial landscape.
                    </p>
                    <p className="text-base sm:text-lg leading-relaxed mb-6">
                        We place special emphasis on the "on-time and on-budget" delivery of solar power plants and LED lights, optimized to deliver superior output. With our subsidiaries, we have designed and built a significant volume of systems since our founding.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUsHome;