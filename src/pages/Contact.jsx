import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-light">
        <div className="max-w-7xl mx-auto py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark sm:text-5xl md:text-6xl">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-700">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative bg-white">
        <div className="absolute inset-0 hidden lg:block">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-light"></div>
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className="bg-light py-10 sm:py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-dark sm:text-3xl">
                Contact Information
              </h2>
              <p className="mt-2 sm:mt-3 text-base sm:text-lg leading-6 text-gray-700">
                Reach out to us through any of these channels
              </p>
              <dl className="mt-6 sm:mt-8 text-base text-gray-700">
                <div className="mt-4 sm:mt-6">
                  <dt className="sr-only">Address</dt>
                  <dd className="flex">
                    <svg className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="flex items-center text-sm sm:text-base text-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5  text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      />Plot No 173, Engineering Park, Heavy Industrial Area, Hathkhoj, Bhilai, C.G.
                    </span>

                  </dd>
                </div>
                <div className="mt-4 sm:mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <svg className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="ml-3 text-sm sm:text-base">+91 9755021473</span>
                  </dd>
                </div>
                <div className="mt-4 sm:mt-6">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <svg className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="ml-3 text-sm sm:text-base">info@pikag.com</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-white py-10 sm:py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-4 sm:gap-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="py-2 sm:py-3 px-3 sm:px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="py-2 sm:py-3 px-3 sm:px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="py-2 sm:py-3 px-3 sm:px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md text-sm sm:text-base"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="py-2 sm:py-3 px-3 sm:px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md text-sm sm:text-base"
                      required
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex justify-center py-2.5 sm:py-3 px-5 sm:px-6 border border-transparent shadow-sm text-sm sm:text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Regional Offices Section */}
      <div className="bg-light py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-dark">
              Our Regional <span className="text-primary">Offices</span>
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-base sm:text-lg text-gray-700">
              Find the PikaG Energy office nearest to you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Mumbai Office */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]">
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-dark">Mumbai</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start">
                    <svg className="flex-shrink-0 h-5 w-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="ml-3 text-sm sm:text-base text-gray-700">
                      603, Quantum Tower, Andheri East, Mumbai, Maharashtra 400059
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg className="flex-shrink-0 h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="ml-3 text-sm sm:text-base text-gray-700">+91 8723456901</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="flex-shrink-0 h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="ml-3 text-sm sm:text-base text-gray-700">mumbai@pikag.com</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bhubaneswar Office */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]">
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-dark">Bhubaneswar</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start">
                    <svg className="flex-shrink-0 h-5 w-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="ml-3 text-sm sm:text-base text-gray-700">
                      204, Tech Park, Patia, Bhubaneswar, Odisha 751024
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg className="flex-shrink-0 h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="ml-3 text-sm sm:text-base text-gray-700">+91 9834567290</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="flex-shrink-0 h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="ml-3 text-sm sm:text-base text-gray-700">bbsr@pikag.com</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Raipur Office */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]">
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-dark">Raipur</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start">
                    <svg className="flex-shrink-0 h-5 w-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="ml-3 text-sm sm:text-base text-gray-700">
                      501, Magneto Mall, GE Road, Raipur, Chhattisgarh 492001
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg className="flex-shrink-0 h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="ml-3 text-sm sm:text-base text-gray-700">+91 9245678013</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="flex-shrink-0 h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="ml-3 text-sm sm:text-base text-gray-700">raipur@pikag.com</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bhilai Office */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]">
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-dark">Bhilai</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start">
                    <svg className="flex-shrink-0 h-5 w-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="ml-3 text-sm sm:text-base text-gray-700">
                      Plot No 173, Engineering Park, Heavy Industrial Area, Hathkhoj, Bhilai, Chhattisgarh 490026
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg className="flex-shrink-0 h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="ml-3 text-sm sm:text-base text-gray-700">+91 9755021473</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="flex-shrink-0 h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="ml-3 text-sm sm:text-base text-gray-700">bhilai@pikag.com</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bangalore Office */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]">
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-dark">Bangalore</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start">
                    <svg className="flex-shrink-0 h-5 w-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="ml-3 text-sm sm:text-base text-gray-700">
                      315, Whitefield Main Road, EPIP Zone, Bangalore, Karnataka 560066
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg className="flex-shrink-0 h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="ml-3 text-sm sm:text-base text-gray-700">+91 8956781234</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="flex-shrink-0 h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="ml-3 text-sm sm:text-base text-gray-700">bangalore@pikag.com</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Delhi Office */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]">
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-dark">Delhi</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start">
                    <svg className="flex-shrink-0 h-5 w-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="ml-3 text-sm sm:text-base text-gray-700">
                      706, Cyber Hub, DLF Cyber City, Gurugram, Delhi NCR 122002
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg className="flex-shrink-0 h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="ml-3 text-sm sm:text-base text-gray-700">+91 9367845120</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="flex-shrink-0 h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="ml-3 text-sm sm:text-base text-gray-700">delhi@pikag.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <iframe
              title="PikaG Energy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2612996807205!2d73.91455991442687!3d18.562253287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1655286860574!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="sm:h-[450px]"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;