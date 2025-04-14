import React, { useState, useEffect } from 'react';
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



import automobile from "../../../public/omron-solutions/automobile/automobile.png";
import colorSensors from "../../../public/omron-solutions/automobile/color-sensors.png";
import industrialNetwork from "../../../public/omron-solutions/automobile/industrial-network.png";
import machineAutomationController from "../../../public/omron-solutions/automobile/machine-automation-controller.png";
import photoelectricSensor from "../../../public/omron-solutions/automobile/photoelectric-sensor.png";
// import proximitySensor from "../../../public/omron-solutions/automobile/proximity-sensor.png";
import safetyDoorSwitch from "../../../public/omron-solutions/automobile/safety-door-switch.png";
import safetyLightCurtain from "../../../public/omron-solutions/automobile/safety-light-curtain.png";
import visionSensors from "../../../public/omron-solutions/automobile/vision-sensors.png";

import monitoringController from "../../../public/omron-solutions/panels/monitoring-controller.png";
import inverters from "../../../public/omron-solutions/panels/inverters.png";
import panelHmi from "../../../public/omron-solutions/panels/panel-hmi.png";
import panels from "../../../public/omron-solutions/panels/panels.png";
import programmableControllers from "../../../public/omron-solutions/panels/programmable-controllers.png";
import relays from "../../../public/omron-solutions/panels/relays.png";
import solidStateRelays from "../../../public/omron-solutions/panels/solid-state-relays.png";
import switches from "../../../public/omron-solutions/panels/switches.png";
import switchingPowerSupplies from "../../../public/omron-solutions/panels/switching-power-supplies.png";
import temperatureControllers from "../../../public/omron-solutions/panels/temperature-controllers.png";
import timerCounter from "../../../public/omron-solutions/panels/timer-counter.png";



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
    largeImage: automobile,  // This is the large image for the automobile section
    smallImages: [
      { image: visionSensors, name: "Vision Sensors" },
      { image: safetyLightCurtain, name: "Safety Light Curtain" },
      { image: proximitySensor, name: "Proximity Sensor" },
      { image: industrialNetwork, name: "Industrial Network" },
      { image: machineAutomationController, name: "Machine Automation Controller" },
      { image: photoelectricSensor, name: "Photoelectric Sensor" },
      { image: safetyDoorSwitch, name: "Safety Door Switch" },
      { image: colorSensors, name: "Color Sensors" },
    ]
  },
  {
    title: "Complete Solution for Panels",
    description: "Omron’s panel solutions offer temperature controllers, human-machine interfaces, and more to provide complete automation solutions.",
    largeImage: panels, // This is the large image for the panels section
    smallImages: [
      { image: temperatureControllers, name: "Temperature Controller" },
      { image: panelHmi, name: "Human Interface" },
      { image: switchingPowerSupplies, name: "Switching Power Supplies" },
      { image: programmableControllers, name: "Programmable Controllers" },
      { image: relays, name: "Relays" },
      { image: solidStateRelays, name: "Solid State Relays" },
      { image: switches, name: "Switches" },
      { image: monitoringController, name: "Monitoring Controller" },
      { image: inverters, name: "Inverters" },
      { image: timerCounter, name: "Timer Counter" }
    ]
  },
];

const KeyProducts = () => {
  // Track active product images
  const [activeImages, setActiveImages] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Initialize default active images
    const initialActiveImages = {};
    products.forEach((product, idx) => {
      initialActiveImages[idx] = product.largeImage;
    });
    setActiveImages(initialActiveImages);

    // Check if the device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleImageClick = (image, productIndex) => {
    setActiveImages(prev => ({
      ...prev,
      [productIndex]: image
    }));
  };

  return (
    <section className="py-8 sm:py-12 bg-light text-dark">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 md:px-8">
        <div className="inline-block mb-4 sm:mb-6">
          <div className="flex items-center justify-center">
            <div className="w-6 sm:w-8 h-1 bg-primary rounded-full"></div>
            <span className="mx-2 sm:mx-3 text-xs sm:text-sm uppercase tracking-wider text-primary font-semibold">Key Products</span>
            <div className="w-6 sm:w-8 h-1 bg-primary rounded-full"></div>
          </div>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => (
              `<span class="${className} bg-primary rounded-full w-2 h-2 sm:w-2.5 sm:h-2.5 mx-1 mt-4 sm:mt-8"></span>`
            ),
          }}
          modules={[Pagination, Autoplay]}
          loop={true}
          className="product-swiper"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index} className="p-2 sm:p-4">
              <div className="flex flex-col justify-center items-center h-full bg-white rounded-lg shadow-lg p-3 sm:p-4">
                <div className="w-full text-center">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">{product.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-3 sm:mb-5 mx-auto">{product.description}</p>
                </div>
                
                {/* Main machine/solution image */}
                <div className="flex justify-center items-center w-full mb-3 sm:mb-4">
                  <img
                    src={activeImages[index] || product.largeImage}
                    alt={product.title}
                    className="w-full max-w-[220px] sm:max-w-[300px] md:max-w-[400px] h-[120px] sm:h-[180px] md:h-[200px] object-contain"
                  />
                </div>
                
                {/* Component parts images - scrollable on mobile */}
                <div className={`w-full ${isMobile ? 'overflow-x-auto pb-2 flex snap-x snap-mandatory' : 'flex flex-wrap justify-center'}`}>
                  <div className={`${isMobile ? 'flex space-x-2 px-2 min-w-max' : 'flex flex-wrap justify-center gap-2 sm:gap-3'}`}>
                    {product.smallImages.map((smallImage, imgIndex) => (
                      <div 
                        key={imgIndex} 
                        className={`relative group ${isMobile ? 'snap-start' : ''}`}
                      >
                        <img
                          src={smallImage.image}
                          onClick={() => handleImageClick(smallImage.image, index)}
                          alt={smallImage.name}
                          className={`
                            object-cover cursor-pointer rounded-md transition-all 
                            ${isMobile ? 'w-[60px] h-[60px]' : 'w-[70px] h-[70px] sm:w-[80px] sm:h-[80px]'}
                            ${activeImages[index] === smallImage.image 
                              ? 'border-2 border-primary' 
                              : 'border border-gray-300'}
                            hover:opacity-90 active:scale-95
                          `}
                        />
                        
                        {/* Name tooltip on hover for non-mobile */}
                        {!isMobile && (
                          <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white text-center py-1 rounded-b-md opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-xs">{smallImage.name}</span>
                          </div>
                        )}
                        
                        {/* Always visible name label for mobile */}
                        {isMobile && (
                          <div className="mt-1 text-center">
                            <span className="text-[10px] text-gray-700">{smallImage.name}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Scroll indicator for mobile */}
                {isMobile && product.smallImages.length > 3 && (
                  <div className="w-full text-center mt-2">
                    <span className="text-[10px] text-gray-500 italic">Swipe to see more components →</span>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default KeyProducts;
