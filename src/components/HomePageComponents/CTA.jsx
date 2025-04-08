import React from 'react'
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <div className="bg-primary">
            <div className="max-w-7xl mx-auto py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <div className="lg:max-w-xl">
                    <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-4xl text-center lg:text-left leading-tight">
                        <span className="block">Ready to get started?</span>
                        <span className="block text-white/90 mt-2 text-xl sm:text-2xl font-semibold">Contact us today for a free consultation.</span>
                    </h2>
                </div>
                <div className="mt-8 flex justify-center lg:mt-0 lg:flex-shrink-0 lg:justify-start">
                    <div className="rounded-md shadow">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-lg font-medium rounded-md text-primary bg-white hover:bg-gray-50 transform hover:scale-101 transition-all duration-300"
                        >
                            Get in touch
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA