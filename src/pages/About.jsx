function About() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-primary/5 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              Powering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Future</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-600 leading-relaxed">
              Since 2018, PikaG Energy has been at the forefront of sustainable energy solutions, setting global standards in solar power and LED technology.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" data-aos="fade-up">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="mt-2 text-gray-600">Years of Excellence</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="mt-2 text-gray-600">Projects Delivered</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="mt-2 text-gray-600">Happy Clients</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="mt-2 text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative" data-aos="fade-right">
              <div className="absolute -inset-2">
                <div className="w-full h-full mx-auto opacity-30 blur-lg filter bg-gradient-to-r from-primary to-secondary"></div>
              </div>
              <div className="relative">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Our Story</h2>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-6">
                    PIKAG ENERGY PRIVATE LIMITED was incorporated on 26/03/2018 under the companies Act, 2013. As a start-up organization, we are committed to endless business ethics and look to develop lasting associations with our clients, vendors, associates, and everyone we do business with.
                  </p>
                  <p>
                    We place special emphasis on the "on-time and on-budget" delivery of solar power plants and LED lights, optimized to deliver superior output. With our subsidiaries, we have designed and built a significant volume of systems since our founding.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 relative group" data-aos="fade-left">
              <div className="relative rounded-2xl overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 mix-blend-overlay"></div>
                <img 
                  src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&auto=format&fit=crop&q=80" 
                  alt="Solar Panels" 
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Certifications & Registrations</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            <p className="mt-6 text-xl text-gray-600">Our commitment to excellence is backed by prestigious certifications</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ISO 9001:2015</h3>
              <p className="text-gray-600">Certified for maintaining the highest standards in Quality Management System</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Start-up India</h3>
              <p className="text-gray-600">Recognized and registered under the Start-up India initiative, driving innovation in energy</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">BIS Certified</h3>
              <p className="text-gray-600">Meeting and exceeding Bureau of Indian Standards requirements for quality and safety</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;