import React from 'react'

const CTA = () => {
    return (
        <div className="bg-gradient-to-r from-primary to-secondary py-10 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Ready to Transform Your Energy Solutions?</h2>
                <p className="text-white/90 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto">
                    Contact our team of experts today to discuss your specific requirements and discover how our products can benefit you.
                </p>
                <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-primary text-sm sm:text-base font-medium rounded-full hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    Request a Quote
                </button>
            </div>
        </div>
    )
}

export default CTA