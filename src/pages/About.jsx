import collage from '../../public/about-us.png';
import AboutUs from '../components/AboutUs';
function About() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-light">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-primary/5"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-dark">
              Powering the <span className="text-primary">Future</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
              Since 2018, PikaG Energy has been at the forefront of sustainable energy solutions, setting global standards in solar power and LED technology.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-8 sm:py-12 -mt-8 sm:-mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8" data-aos="fade-up">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-primary">5+</div>
              <div className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">Years of Excellence</div>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-primary">100+</div>
              <div className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">Projects Delivered</div>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-primary">50+</div>
              <div className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">Happy Clients</div>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-primary">24/7</div>
              <div className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Overview / Our Story */}
      {/* <div className="py-16 sm:py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1" data-aos="fade-right" data-aos-duration="800">
              <div className="relative">
                <div className="inline-block mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-1 bg-primary rounded-full"></div>
                    <span className="ml-4 text-sm uppercase tracking-wider text-primary font-semibold">Est. 2018</span>
                  </div>
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-dark mb-6 sm:mb-8 leading-tight">
                  Our <span className="text-primary">Story</span>
                </h2>
                <div className="prose prose-lg text-gray-700 max-w-none">
                  <p className="mb-6 text-base sm:text-lg leading-relaxed">
                    PIKAG ENERGY PRIVATE LIMITED was incorporated on 26/03/2018 under the companies Act, 2013. As a start-up organization, we are committed to endless business ethics and look to develop lasting associations with our clients, vendors, associates, and everyone we do business with.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed mb-8">
                    We place special emphasis on the "on-time and on-budget" delivery of solar power plants and LED lights, optimized to deliver superior output. With our subsidiaries, we have designed and built a significant volume of systems since our founding.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start gap-4 mt-6">
                    <div className="bg-light p-4 rounded-lg border-l-4 border-primary">
                      <h4 className="font-bold text-dark mb-1">Our Mission</h4>
                      <p className="text-sm text-gray-700">To provide sustainable energy solutions that power communities while protecting our planet.</p>
                    </div>
                    <div className="bg-light p-4 rounded-lg border-l-4 border-primary">
                      <h4 className="font-bold text-dark mb-1">Our Vision</h4>
                      <p className="text-sm text-gray-700">To lead the transition to a clean energy future through innovation and excellence.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-10 lg:mb-0 order-1 lg:order-2 relative" data-aos="fade-left" data-aos-duration="800">
              <div className="relative rounded-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500 shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-primary/40 to-transparent opacity-60 mix-blend-overlay"></div>
                <img 
                  src={collage}
                  alt="PikaG Energy Story" 
                  className="w-full h-[300px] sm:h-[450px] md:h-[550px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="flex space-x-4">
                    <div className="text-white">
                      <div className="text-2xl sm:text-3xl font-bold">5+</div>
                      <div className="text-xs sm:text-sm">Years of Excellence</div>
                    </div>
                    <div className="text-white">
                      <div className="text-2xl sm:text-3xl font-bold">100+</div>
                      <div className="text-xs sm:text-sm">Projects Completed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <AboutUs />

      {/* Certifications */}
      <div className="py-12 sm:py-16 md:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark mb-3 sm:mb-4">Certifications & Registrations</h2>
            <div className="w-16 sm:w-24 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700">Our commitment to excellence is backed by prestigious certifications</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white p-5 sm:p-8 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-dark mb-2 sm:mb-4">ISO 9001:2015</h3>
              <p className="text-base text-gray-700">Certified for maintaining the highest standards in Quality Management System</p>
            </div>

            <div className="bg-white p-5 sm:p-8 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-dark mb-2 sm:mb-4">Start-up India</h3>
              <p className="text-base text-gray-700">Recognized and registered under the Start-up India initiative, driving innovation in energy</p>
            </div>

            <div className="bg-white p-5 sm:p-8 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-dark mb-2 sm:mb-4">BIS Certified</h3>
              <p className="text-base text-gray-700">Meeting and exceeding Bureau of Indian Standards requirements for quality and safety</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;