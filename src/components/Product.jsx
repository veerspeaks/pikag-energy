import React from 'react'

const Product = ({id, product}) => {
    return (
        <div key={id} className="min-w-[300px] sm:min-w-[350px] p-4">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 h-full">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                />
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600">{product.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Product