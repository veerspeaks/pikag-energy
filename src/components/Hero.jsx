import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';


function Hero() {
  return (
    <div className="relative overflow-hidden">
      <Swiper 
        spaceBetween={50} 
        slidesPerView={1} 
        pagination={true} 
        modules={[Pagination, Autoplay]} 
        loop={true} 
        autoplay={{
          delay: 3000,     
          disableOnInteraction: false,  
        }}
        className="h-[700px] lg:h-[500px]"
      >
        <SwiperSlide>
          <Slide1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide2 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

function Slide1() {
  return (
    <>
      <div className="relative w-full h-full">
        {/* Desktop layout */}
        <div className="hidden lg:flex w-full h-full">
          {/* Left section - Text */}
          <div className="w-1/2 relative z-10 py-12 px-8 flex items-center">
            <div className="lg:max-w-2xl ml-auto" data-aos="fade-right">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">The Future of</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Energy Generation
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
                Complete solutions for Solar, LED Lighting, PCB and Industrial range. Setting global standards with endless solutions for our clients and our planet.
              </p>
              <div className="mt-8 flex gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium  rounded-full text-white bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transform hover:scale-101 transition-all duration-300 shadow-lg"
                >
                  View Products
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-primary text-base font-medium rounded-full text-primary hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right section - Image */}
          <div className="w-2/3 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10"></div>
            <img
              src="/hero-banner.png"
              alt="Mumbai Indians"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        
        {/* Mobile layout */}
        <div className="flex flex-col h-full lg:hidden">
          {/* Top - Image */}
          <div className="relative h-[40%]">
            <img
              src="/hero-banner2.jpg"
              alt="Mumbai Indians"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
          </div>
          
          {/* Bottom - Text */}
          <div className="px-4 py-8 relative z-10 h-[50%] flex flex-col justify-center">
            <div data-aos="fade-up">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl">
                <span className="block">The Future of</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Energy Generation
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl">
                Complete solutions for Solar, LED Lighting, PCB and Industrial range. Setting global standards with endless solutions for our clients and our planet.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transform hover:scale-101 transition-all duration-300 shadow-lg"
                >
                  View Products
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-primary text-base font-medium rounded-full text-primary hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Slide2() {
  return (
    <>
      <div className="relative w-full h-full">
        {/* Desktop layout */}
        <div className="hidden lg:flex w-full h-full">
          {/* Left section - Text */}
          <div className="w-1/2 relative z-10 py-12 px-8 flex items-center">
            <div className="lg:max-w-2xl ml-auto" data-aos="fade-right">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">The Future of</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Energy Generation
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
                Complete solutions for Solar, LED Lighting, PCB and Industrial range. Setting global standards with endless solutions for our clients and our planet.
              </p>
              <div className="mt-8 flex gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  View Products
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-primary text-base font-medium rounded-full text-primary hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right section - Image */}
          <div className="w-2/3 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=80"
              alt="Solar Energy"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        
        {/* Mobile layout */}
        <div className="flex flex-col h-full lg:hidden">
          {/* Top - Image */}
          <div className="relative h-[40%]">
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=80"
              alt="Solar Energy"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
          </div>
          
          {/* Bottom - Text */}
          <div className="px-4 py-8 relative z-10 h-[50%] flex flex-col justify-center">
            <div data-aos="fade-up">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl">
                <span className="block">The Future of</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Energy Generation
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl">
                Complete solutions for Solar, LED Lighting, PCB and Industrial range. Setting global standards with endless solutions for our clients and our planet.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  View Products
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-primary text-base font-medium rounded-full text-primary hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;