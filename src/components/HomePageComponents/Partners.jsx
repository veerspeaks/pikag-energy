import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const slidesData = [
  {
    title: "Omron Automation",
    content: "Provides innovative automation solutions to enhance safety and productivity across industries. Operating globally with over 80 years of expertise in automation and control systems.",
  },
  {
    title: "Tata Power Solar",
    content: "Provides reliable, efficient pumps for sustainable irrigation in remote areas, supporting eco-friendly farming. Empowering farmers with green energy solutions across India.",
  },
  {
    title: "Pikag Energy Private Limited",
    content: "Provides solar and automation solutions for efficient, sustainable energy use. Focused on delivering smarter energy systems for residential and commercial sectors.",
  },
  {
    title: "Meveic Technologies LLP",
    content: "Provides industrial computing and IoT solutions for connected automation systems. Specializes in high-performance panel PCs, edge gateways, and smart industrial tech.",
  },
];

const Partners = () => {
  return (
    <section className="py-16 bg-light text-dark">
      <div className="max-w-6xl mx-auto text-center px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-primary">
          Our Trusted Partners
        </h2>
        <p className="text-lg md:text-xl mb-6 mx-auto">
          We collaborate with industry leaders to deliver innovative, efficient, and future-ready solutions 
          for automation, energy, and sustainability.
        </p>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => (
              `<span class="${className} bg-primary rounded-full w-3 h-3 mx-1"></span>`
            ),
          }}
          modules={[Pagination, Autoplay]}
          loop={true}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center h-full bg-cover bg-center p-6">
                <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-xl text-center">
                  <h3 className="text-3xl font-semibold text-dark mb-4">
                    {slide.title}
                  </h3>
                  <p className="text-lg text-dark">
                    {slide.content}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Partners;
