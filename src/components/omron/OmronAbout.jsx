import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const slidesData = [
  {
    title: "Our Mission",
    content: "Our mission is to contribute to society by providing advanced automation technology. We aim to be a trusted partner in delivering solutions that enhance the productivity and safety of businesses around the world.",
    backgroundImage: "/path/to/your/image1.jpg",  // Replace with actual image path
    textColor: "text-gray-900", // Set text color to white for dark background
  },
  {
    title: "Global Presence",
    content: "Omron operates in over 100 countries, with a strong presence in Asia, Europe, and the Americas. Our local expertise and global reach allow us to provide tailored solutions to meet the diverse needs of industries across the world.",
    backgroundImage: "/path/to/your/image2.jpg",  // Replace with actual image path
    textColor: "text-gray-900", // Set text color to dark gray for light background
  },
  {
    title: "Why Choose Omron?",
    content: (
      <ul className="list-disc text-left ml-6 space-y-2">
        <li>Innovative and cutting-edge automation solutions</li>
        <li>Comprehensive support, from design to post-sales</li>
        <li>Commitment to sustainability and safety</li>
        <li>Global expertise with localized solutions</li>
      </ul>
    ),
    backgroundImage: "/path/to/your/image3.jpg",  // Replace with actual image path
    textColor: "text-gray-900", // Set text color to white for dark background
  },
];

const OmronAbout = () => {
  return (
    <section className="py-16 bg-light text-dark">
      <div className="max-w-6xl mx-auto text-center px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-primary">
          About Omron Solutions
        </h2>
        <p className="text-lg md:text-xl mb-6 mx-auto">
          With a legacy of over 80 years, Omron is at the forefront of automation technology. 
          We deliver innovative solutions that transform industries, enhance productivity, 
          and improve the quality of life.
        </p>

        {/* Swiper Component for Sections */}
        <Swiper
          spaceBetween={50} // Space between slides
          slidesPerView={1} // Show one slide at a time
          autoplay={{
            delay: 5000, // 5 seconds between slides
            disableOnInteraction: false, // Continue autoplay even after user interaction
          }}
          pagination={{
            clickable: true, // Allow clicking on pagination dots
            renderBullet: (index, className) => (
              `<span class="${className} bg-primary rounded-full w-3 h-3 mx-1"></span>`
            ), // Customize pagination dot style
          }}
          modules={[Pagination, Autoplay]} // Use pagination and autoplay modules
          loop={true} // Infinite loop of slides
        >
          {/* Map over slidesData to generate slides dynamically */}
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex flex-col justify-center items-center h-full bg-cover bg-center p-6"
                style={{ backgroundImage: `url(${slide.backgroundImage})` }}
              >
                <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-xl text-center">
                  <h3 className={`text-3xl font-semibold ${slide.textColor} mb-4`}>
                    {slide.title}
                  </h3>
                  <p className={`text-lg ${slide.textColor}`}>
                    {typeof slide.content === 'string' ? slide.content : slide.content}
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

export default OmronAbout;
