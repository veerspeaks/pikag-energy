import React from 'react'

const Stats = () => {
    return (
        < div className="bg-white py-8 sm:py-12 -mt-8 sm:-mt-12 relative z-10" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8" data-aos="fade-up">
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-center transform hover:scale-105 transition-transform duration-300">
                        <div className="text-2xl sm:text-3xl font-bold text-primary">18+</div>
                        <div className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">Years of Excellence</div>
                    </div>
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-center transform hover:scale-105 transition-transform duration-300">
                        <div className="text-2xl sm:text-3xl font-bold text-primary">100+</div>
                        <div className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">Projects Delivered</div>
                    </div>
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-center transform hover:scale-105 transition-transform duration-300">
                        <div className="text-2xl sm:text-3xl font-bold text-primary">5</div>
                        <div className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">Different Industries</div>
                    </div>
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-center transform hover:scale-105 transition-transform duration-300">
                        <div className="text-2xl sm:text-3xl font-bold text-primary">10+</div>
                        <div className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">Clients Served</div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Stats