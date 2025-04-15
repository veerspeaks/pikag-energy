function Certifications() {
  return (
    <div className="py-12 sm:py-16 md:py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-10 sm:mb-16 px-4 text-center" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark mb-2 sm:mb-3">
            Certifications & Registrations
          </h2>
          <div className="h-1 w-16 sm:w-24 bg-primary rounded-full mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-md">
            Our commitment to excellence is backed by prestigious certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* ISO Certification */}
          <div
            className="bg-white p-5 sm:p-8 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-lg flex items-center justify-center mb-4 sm:mb-6">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-dark mb-2 sm:mb-4">
              ISO 9001:2015
            </h3>
            <p className="text-base text-gray-700">
              Certified for maintaining the highest standards in Quality Management System
            </p>
          </div>

          {/* Startup India */}
          <div
            className="bg-white p-5 sm:p-8 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-lg flex items-center justify-center mb-4 sm:mb-6">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-dark mb-2 sm:mb-4">
              Start-up India
            </h3>
            <p className="text-base text-gray-700">
              Recognized and registered under the Start-up India initiative, driving innovation in energy
            </p>
          </div>

          {/* BIS Certified */}
          <div
            className="bg-white p-5 sm:p-8 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-lg flex items-center justify-center mb-4 sm:mb-6">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-dark mb-2 sm:mb-4">
              BIS Certified
            </h3>
            <p className="text-base text-gray-700">
              Meeting and exceeding Bureau of Indian Standards requirements for quality and safety
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
