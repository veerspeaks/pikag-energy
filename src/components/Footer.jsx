import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-light text-gray-800 pt-16 pb-8 px-4 sm:px-6 md:px-8 border-t border-gray-200">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-y-12 md:gap-x-8">
                    <div className="md:col-span-4 lg:col-span-6 max-w-md mx-auto md:mx-0 text-center md:text-left">
                        <h3 className="text-xl sm:text-2xl font-normal mb-5 sm:mb-6 leading-tight text-dark">Keep up to date with our quarterly newsletter,
                            "You've got mail."</h3>
                        <div className="mt-6 space-y-4">
                            <input 
                                type="email" 
                                placeholder="Enter email address..." 
                                className="newsletter-input w-full px-4 py-3 bg-white rounded-md text-gray-900 border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" 
                            />
                            <button className="w-full sm:w-auto bg-primary text-white px-6 py-3 rounded-md flex items-center justify-center sm:justify-start font-medium hover:bg-primary/90 transition-colors">
                                Subscribe
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="hidden md:block md:col-span-1 lg:hidden"></div>
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 col-span-1 md:col-span-7 lg:col-span-6 gap-y-10 sm:gap-y-12 sm:gap-x-8 md:gap-x-8 lg:gap-x-10 mt-8 md:mt-0 text-center sm:text-left">
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary mb-5 sm:mb-6">Get in Touch</h3>
                            <ul className="space-y-3">
                                <li><Link to="/contact" className="text-base hover:text-primary transition-colors">Start a Project</Link></li>
                                <li><Link to="/contact" className="text-base hover:text-primary transition-colors">Join the Team</Link></li>
                                <li><Link to="/contact" className="text-base hover:text-primary transition-colors">Press & Media</Link></li>
                                <li><Link to="/contact" className="text-base hover:text-primary transition-colors">Drop Us a Note</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary mb-5 sm:mb-6">See More</h3>
                            <ul className="space-y-3">
                                <li><Link to="/" className="text-base hover:text-primary transition-colors">Home</Link></li>
                                <li><Link to="/products/pikag" className="text-base hover:text-primary transition-colors">Products</Link></li>
                                <li><Link to="/about" className="text-base hover:text-primary transition-colors">About</Link></li>
                                <li><Link to="/contact" className="text-base hover:text-primary transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary mb-5 sm:mb-6">Follow Us</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-base hover:text-primary transition-colors">Instagram</a></li>
                                <li><a href="#" className="text-base hover:text-primary transition-colors">LinkedIn</a></li>
                                <li><a href="#" className="text-base hover:text-primary transition-colors">Twitter</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex justify-center sm:justify-start space-x-6 mb-4 sm:mb-0">
                            <a href="#" className="text-sm text-gray-600 hover:text-primary">Sitemap</a>
                            <a href="#" className="text-sm text-gray-600 hover:text-primary">Privacy Policy</a>
                        </div>
                        <div className="text-sm text-gray-600 text-center sm:text-right">
                            © 2023 PikaG Energy. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
