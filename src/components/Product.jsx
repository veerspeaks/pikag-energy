import React from 'react'

const Product = ({id, product}) => {
    return (
        <div key={id} className="min-w-[200px] xs:min-w-[250px] sm:min-w-[350px] p-2 sm:p-4">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 h-full">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-36 sm:h-48 md:h-64 object-cover"
                />
                <div className="p-3 sm:p-4 md:p-6">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2 line-clamp-1">{product.name}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 line-clamp-2 sm:line-clamp-3">{product.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Product