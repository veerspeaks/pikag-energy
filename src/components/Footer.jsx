import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-white text-gray-800 pt-16 pb-8 px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-y-12 md:gap-x-8">
                    <div className="md:col-span-4 lg:col-span-6 max-w-md">
                        <h3 className="text-2xl font-normal mb-6 leading-tight text-gray-900">Keep up to date with our quarterly newsletter,
                            "You've got mail."</h3>
                        <div className="mt-4 space-y-4">
                            <input type="email" placeholder="Enter email address..." className="newsletter-input w-full px-4 py-3 bg-gray-100 rounded text-gray-900 border border-gray-300 focus:outline-none focus:border-gray-400" />
                                <button className="bg-gray-900 text-white px-6 py-2.5 rounded-full flex items-center font-medium hover:bg-gray-800 transition-colors">
                                    Subscribe
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                        </div>
                    </div>
                    <div className="hidden md:block md:col-span-1 lg:hidden"></div>
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 col-span-1 md:col-span-7 lg:col-span-6 gap-y-12 sm:gap-x-8 md:gap-x-8 lg:gap-x-10">
                        <div>
                            <h3 className="text-sm font-normal uppercase tracking-wide text-gray-600 mb-5">Get in Touch</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-sm hover:text-gray-500 transition-colors">Start a Project</a></li>
                                <li><a href="#" className="text-sm hover:text-gray-500 transition-colors">Join the Team</a></li>
                                <li><a href="#" className="text-sm hover:text-gray-500 transition-colors">Press & Media</a></li>
                                <li><a href="#" className="text-sm hover:text-gray-500 transition-colors">Drop Us a Note</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-normal uppercase tracking-wide text-gray-600 mb-5">See More</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-sm hover:text-gray-500 transition-colors">Home</a></li>
                                <li><a href="#" className="text-sm hover:text-gray-500 transition-colors">Work</a></li>
                                <li><a href="#" className="text-sm hover:text-gray-500 transition-colors">Services</a></li>
                                <li><a href="#" className="text-sm hover:text-gray-500 transition-colors">Latest</a></li>
                                <li><a href="#" className="text-sm hover:text-gray-500 transition-colors">About</a></li>
                                <li><a href="#" className="text-sm hover:text-gray-500 transition-colors">Careers</a></li>
                                <li><a href="#" className="text-sm hover:text-gray-500 transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
                            <h3 className="text-sm font-normal uppercase tracking-wide text-gray-600 mb-5">Follow Us</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-sm hover:text-gray-500 transition-colors">Instagram</a></li>
                                <li><a href="#" className="text-sm hover:text-gray-500 transition-colors">LinkedIn</a></li>
                                <li><a href="#" className="text-sm hover:text-gray-500 transition-colors">Twitter</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-16 pt-6 border-t border-gray-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex space-x-6 mb-4 md:mb-0">
                            <a href="#" className="text-xs text-gray-600 hover:text-gray-500">Sitemap</a>
                            <a href="#" className="text-xs text-gray-600 hover:text-gray-500">Privacy Policy</a>
                        </div>
                        <div className="text-xs text-gray-600">
                            © 2025, Site. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>



    )
}

export default Footer
