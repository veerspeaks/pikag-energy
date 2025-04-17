import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const data = [
  { logo1: "/partners/lk.png", alternateText: "Lauritz Knudsen" },
  { logo1: "/partners/tp.svg", alternateText: "Tata Power", invert: true },
  { logo1: "/partners/omron.jpeg", alternateText: "Omron" },
  { logo1: "/partners/meveic.jpg", alternateText: "Maevic" },
  { logo1: "/partners/fuji.svg", alternateText: "Fuji Electronics" },
];

const Partners = () => {
  return (
    <div className="py-16 bg-white text-dark">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-12">
          Our <span className="text-primary">Partners</span>
        </h2>

        {/* Desktop grid view (4 logos per row) */}
        <div className="hidden lg:grid grid-cols-5 gap-8">
          {data.map((partner, index) => (
            <div
              key={index}
              className="flex size-50 justify-center p-6 transition transform hover:scale-105 hover:shadow-xl rounded-lg"
            >
              <img
                src={partner.logo1}
                alt={partner.alternateText}
                className="max-w-full h-auto object-contain"
                style={{ filter: partner.invert ? 'invert(1)' : 'none' }}
              />
            </div>
          ))}
        </div>

        {/* Mobile Swiper view */}
        <div className="lg:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={2}
            pagination={{ clickable: true }}
            loop={false}
            className="w-full"
          >
            {data.map((partner, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="p-4 h-40 w-full flex items-center justify-center mb-6 transition transform hover:scale-105 hover:shadow-xl rounded-lg">
                  <img
                    src={partner.logo1}
                    alt={partner.alternateText}
                    className="max-w-full h-auto object-contain"
                    style={{ filter: partner.invert ? 'invert(1)' : 'none' }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Partners;
