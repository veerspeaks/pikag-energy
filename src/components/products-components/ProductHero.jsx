import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ProductHero = ({pageName}) => {
    const navigate = useNavigate();

    const handleSolarClick = () => {
        navigate(`/products/${pageName}`, { state: { selectedTab: 'solar' } });
    };

    return (
        <div className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-8 sm:mt-10 mx-auto max-w-7xl px-4 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            <div className="text-center lg:text-left lg:max-w-2xl" data-aos="fade-right">
                                <h1 className="text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block">Discover Our</span>
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                        Premium Products
                                    </span>
                                </h1>
                                <p className="mt-3 text-sm sm:text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
                                    From cutting-edge solar solutions to energy-efficient LED lighting, explore our comprehensive range of sustainable energy products.
                                </p>
                                <div className="mt-6 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                                    
                                    <Link
                                        to={`/all-products/${pageName}`}
                                        className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-primary text-sm sm:text-base font-medium rounded-full text-primary hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-300"
                                    >
                                        View All
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-8 sm:mt-12 lg:mt-0 lg:ml-8" data-aos="fade-left">
                                <img
                                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=80"
                                    alt="Product Showcase"
                                    className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl transform hover:scale-105 transition-all duration-300"
                                />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default ProductHero