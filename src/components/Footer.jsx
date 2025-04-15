import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-light text-gray-800 pt-16 pb-8 px-4 sm:px-6 md:px-8 border-t border-gray-200">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-y-12 md:gap-x-8">

                    {/* Contact Information Section */}
                    <div className="md:col-span-4 lg:col-span-6 max-w-md mx-auto md:mx-0 text-center md:text-left">
                        <h3 className="text-4xl font-bold mb-4 text-dark ">Contact <span className='text-primary'>Information</span></h3>
                        <p className="text-lg text-gray-600 mb-6">Reach out to us through any of these channels</p>

                        <div className="space-y-4">
                            <div className="flex items-center justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 3H5a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2h-6M9 18l-3-3 3-3m8 6l-3-3 3-3" />
                                </svg>
                                <p className="text-lg text-gray-600">Plot No 173, Engineering Park, Heavy Industrial Area, Hathkhoj, Bhilai, C.G.</p>
                            </div>

                            <div className="flex items-center justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l5-5 5 5M3 16l5 5 5-5M14 4h6a2 2 0 012 2v12a2 2 0 01-2 2h-6M6 4H4a2 2 0 00-2 2v12a2 2 0 002 2h2" />
                                </svg>
                                <p className="text-lg text-gray-600">+91 9755021473</p>
                            </div>

                            <div className="flex items-center justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 5l7 7-7 7M8 5l-7 7 7 7" />
                                </svg>
                                <p className="text-lg text-gray-600">info@pikag.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Other Sections */}
                    <div className="hidden md:block md:col-span-1 lg:hidden"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 col-span-1 md:col-span-7 lg:col-span-6 gap-y-10 sm:gap-y-12 sm:gap-x-8 md:gap-x-8 lg:gap-x-10 mt-8 md:mt-0 text-center sm:text-left">
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary mb-5 sm:mb-6">Our Partners</h3>
                            <ul className="space-y-3">
                                <li><a href="https://www.lk-ea.com/" className="text-base hover:text-primary transition-colors">Laurtiz Knudsen</a></li>
                                <li><a href="https://automation.omron.com/en/mx/products/category/robotics" className="text-base hover:text-primary transition-colors">Omron</a></li>
                                <li><a href="https://waaree.com/" className="text-base hover:text-primary transition-colors">Warree</a></li>
                            </ul>
                        </div>
                        <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary mb-5 sm:mb-6">Follow Us</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-base hover:text-primary transition-colors">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
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
