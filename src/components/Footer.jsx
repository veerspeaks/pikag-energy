import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-light text-gray-800 pt-16 pb-8 px-4 sm:px-6 md:px-8 border-t border-gray-200">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-y-12 md:gap-x-8">

                    {/* Contact Information Section */}
                    <div className="md:col-span-4 lg:col-span-6 max-w-md  mx-0 md:mx-auto md:mx-0 text-center md:text-left">
                        <h3 className="text-4xl font-bold mb-4 text-dark ">Contact <span className='text-primary'>Information</span></h3>
                        <p className="text-lg text-gray-600 mb-6">Reach out to us through any of these channels</p>

                        <div className="space-y-4">
                            <div className="flex justify-start">
                                <MapPin className=" text-primary me-2 w-1/12" />
                                <p className="text-lg text-gray-600 text-left w-11/12">Plot No 173, Engineering Park, Heavy Industrial Area, Hathkhoj, Bhilai, C.G.</p>
                            </div>

                            <div className="flex items-center justify-start">
                                <Phone className="text-primary me-2 w-1/12" />
                                <p className="text-lg text-gray-600 w-11/12">+91 9755021473</p>
                            </div>

                            <div className="flex items-center justify-start">
                                <Mail className=" text-primary me-2 w-1/12" />
                                <p className="text-lg text-gray-600 w-11/12">info@pikag.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Other Sections */}
                    <div className="hidden md:block md:col-span-1 lg:hidden"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 col-span-1 md:col-span-7 lg:col-span-6 gap-y-10 sm:gap-y-12 sm:gap-x-8 md:gap-x-8 lg:gap-x-10 mt-8 md:mt-4 text-center sm:text-left">
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary mb-5 sm:mb-6">Our Partners</h3>
                            <ul className="space-y-3">
                                <li><a href="https://www.lk-ea.com/" className="text-base hover:text-primary transition-colors">Laurtiz Knudsen</a></li>
                                <li><a href="https://automation.omron.com/en/mx/products/category/robotics" className="text-base hover:text-primary transition-colors">Omron</a></li>
                                <li><a href="https://waaree.com/" className="text-base hover:text-primary transition-colors">Tata Power</a></li>
                                <li><a href="https://www.maevic.com/" className="text-base hover:text-primary transition-colors">Maevic</a></li>
                                <li><a href="https://www.fujielectric.com/" className="text-base hover:text-primary transition-colors">Fuji Electric</a></li>
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
