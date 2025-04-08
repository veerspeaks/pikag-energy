import React from 'react'

const Stats = () => {
    return (
        <div className="bg-white py-10 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 md:grid-cols-4 text-center" data-aos="fade-up">
                    <div className="p-3 sm:p-4">
                        <p className="text-3xl sm:text-4xl font-bold text-primary">5+</p>
                        <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">Years Experience</p>
                    </div>
                    <div className="p-3 sm:p-4">
                        <p className="text-3xl sm:text-4xl font-bold text-primary">100+</p>
                        <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">Projects Completed</p>
                    </div>
                    <div className="p-3 sm:p-4">
                        <p className="text-3xl sm:text-4xl font-bold text-primary">50+</p>
                        <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">Happy Clients</p>
                    </div>
                    <div className="p-3 sm:p-4">
                        <p className="text-3xl sm:text-4xl font-bold text-primary">24/7</p>
                        <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">Support</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats