import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


function Hero() {
  return (
    <div className="relative  overflow-hidden">
      <Swiper spaceBetween={50} slidesPerView={1} pagination={true} modules={[Pagination]}   pagination loop={true} autoplay={{
        delay: 3000,     
        disableOnInteraction: false,  
      }}>
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
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:max-w-2xl" data-aos="fade-right">
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
                    className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transform hover:scale-101 transition-all duration-300 shadow-lg"
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
              <div className="mx-auto" data-aos="fade-left">
                <img
                  src="/hero-banner.png"
                  alt="Mumbai Indians"
                  className="w-full max-w-5xl rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}


function Slide2() {
  return (
    <>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:max-w-2xl" data-aos="fade-right">
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
              <div className="mt-12 lg:mt-0 lg:ml-8" data-aos="fade-left">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=80"
                  alt="Solar Energy"
                  className="w-full max-w-xl rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Hero;