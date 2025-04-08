import React from 'react'
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <div className="bg-gradient-to-r from-primary to-secondary">
            <div className="max-w-7xl mx-auto py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-2xl  font-extrabold tracking-tight text-white sm:text-4xl text-center lg:text-left">
                    <span className="block">Ready to get started?</span>
                    <span className="block text-white/90 mt-1 text-xl sm:text-2xl font-semibold">Contact us today for a free consultation.</span>
                </h2>
                <div className="mt-8 flex justify-center lg:mt-0 lg:flex-shrink-0 lg:justify-start">
                    <div className="inline-flex rounded-md shadow">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 transform hover:scale-105 transition-all duration-300"
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