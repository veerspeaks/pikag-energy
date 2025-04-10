import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';


import encoder from "../../../public/omron-solutions/material-handling/encoder.png";
import fiberSensor from "../../../public/omron-solutions/material-handling/fiber-sensor.png";
import hmi from "../../../public/omron-solutions/material-handling/hmi.png";
import materialHandling from "../../../public/omron-solutions/material-handling/material-handling.png";
import plc from "../../../public/omron-solutions/material-handling/plc.png";
import powerSupply from "../../../public/omron-solutions/material-handling/power-supply.png";
import proximitySensor from "../../../public/omron-solutions/material-handling/proximity-sensor.png";
import vfd from "../../../public/omron-solutions/material-handling/vfd.png";



const products = [
  {
    title: "Complete Solution for Material Handling",
    description: "Omron provides a complete solution for material handling with high-precision sensors and automation controllers.",
    largeImage: materialHandling,
    smallImages: [
      { image: encoder, name: "Encoder" },
      { image: fiberSensor, name: "Fiber Sensor" },
      { image: hmi, name: "HMI" },
      { image: plc, name: "PLC" },
      { image: powerSupply, name: "Power Supply" },
      { image: proximitySensor, name: "Proximity Sensor" },
      { image: vfd, name: "VFD" },
    ]
  },
  {
    title: "Complete Solution for Automobile",
    description: "Omron's automobile solution includes vision sensors, proximity sensors, and safety light curtains to automate manufacturing lines.",
    largeImage: "/mnt/data/WhatsApp Image 2025-04-10 at 12.47.19.jpeg",
    smallImages: [
      { image: "/mnt/data/WhatsApp Image 2025-04-10 at 12.47.19.jpeg", name: "Vision Sensors" },
      { image: "/mnt/data/WhatsApp Image 2025-04-10 at 12.47.19 (1).jpeg", name: "Safety Light Curtain" },
      { image: "/mnt/data/WhatsApp Image 2025-04-10 at 12.47.19 (2).jpeg", name: "Proximity Sensor" },
    ]
  },
  {
    title: "Complete Solution for Panels",
    description: "Omron’s panel solutions offer temperature controllers, human-machine interfaces, and more to provide complete automation solutions.",
    largeImage: "/mnt/data/WhatsApp Image 2025-04-10 at 12.47.19 (1).jpeg",
    smallImages: [
      { image: "/mnt/data/WhatsApp Image 2025-04-10 at 12.47.19.jpeg", name: "Temperature Controller" },
      { image: "/mnt/data/WhatsApp Image 2025-04-10 at 12.47.19 (1).jpeg", name: "Human Interface" },
      { image: "/mnt/data/WhatsApp Image 2025-04-10 at 12.47.19 (2).jpeg", name: "Switching Power Supplies" },
    ]
  },
];

const KeyProducts = () => {
  // State to hold the current large image
  const [currentImage, setCurrentImage] = useState(products[0].largeImage);

  const handleImageClick = (image) => {
    setCurrentImage(image); // Update the large image on click of small image
  }

  return (
    <section className="py-12 bg-light text-dark">
      <div className="max-w-6xl mx-auto text-center px-6 md:px-8">
        <div className="inline-block">
          <div className="flex items-center justify-center">
            <div className="w-8 h-1 bg-primary rounded-full"></div>
            <span className="mx-3 text-xs sm:text-sm uppercase tracking-wider text-primary font-semibold">Key Products</span>
            <div className="w-8 h-1 bg-primary rounded-full"></div>
          </div>
        </div>

        <Swiper
          spaceBetween={30} // Space between slides
          slidesPerView={1} // Show one slide at a time
          // autoplay={{
          //   delay: 5000, // 5 seconds between slides
          //   disableOnInteraction: false, // Continue autoplay even after user interaction
          // }}
          pagination={{
            clickable: true, // Allow clicking on pagination dots
            renderBullet: (index, className) => (
              `<span class="${className} bg-primary rounded-full w-2.5 h-2.5 mx-1 mt-8"></span>`
            ), // Customize pagination dot style
          }}
          modules={[Pagination, Autoplay]} // Use pagination and autoplay modules
          loop={true} // Infinite loop of slides
        >
          {/* Map through products to create individual SwiperSlide components */}
          {products.map((product, index) => (
            <SwiperSlide key={index} className='p-4'>
              <div className="flex flex-col justify-center items-center h-full bg-white rounded-lg shadow-lg">
                <div className="w-full p-4 text-center">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">{product.title}</h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-5 mx-auto">{product.description}</p>
                </div>
                <div className="flex justify-center items-center w-full">
                  <img
                    src={product.largeImage}
                    alt={product.title}
                    className="w-full sm:w-2/3 h-[150px] sm:h-[200px] object-contain mb-4"
                  />
                </div>
                <div className="flex justify-center items-center w-full">
                  {/* Loop through small images and display them */}
                  {product.smallImages.map((smallImage, imgIndex) => (
                    <div key={imgIndex} className="relative group">
                      <img
                        src={smallImage.image}
                        onClick={() => handleImageClick(smallImage.image)}
                        alt={smallImage.name}
                        className="size-25 object-cover mx-2 mb-2 cursor-pointer border-2 border-primary rounded-md transition-transform transform group-hover:scale-95 group-hover:translate-y-1"
                      />
                      {/* Displaying the name of the image on hover */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-60 text-white text-center py-1 rounded-b-md opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-xs">{smallImage.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default KeyProducts;
