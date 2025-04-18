import HeroSlide from './HomePageComponents/HeroSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const slides = [
  {
    titleTop: 'The Future of',
    titleBottom: 'Industrial Automation',
    highlightColor: 'primary',
    buttonColor: 'primary',
    description:
      'Complete solution for Industrial Automation, drivers, servo, motion, and PLC. Let us help you build a better business, a better future and a better world. Years of expertise and trust of thousands. ',
    desktopImage: '/hero/industrial-automation.jpeg',
    partnerLogo: '/partners/lk.png',
    link: '/solutions/industrial-automation'
  },
  {
    titleTop: 'The Future of',
    titleBottom: 'Water & Waste Water Management',
    highlightColor: 'secondary',
    buttonColor: 'secondary',
    description:
      'Complete solution for Water and Waste Water Management, field monitoring and control instruments. Join us, build better.',
    desktopImage: '/hero/wate-and-waste-water.jpeg',
    partnerLogo: '/partners/fuji.svg',
    link: '/solutions/water-wastewater'
  },
  {
    titleTop: 'The Future of',
    titleBottom: 'Renewable Energy',
    highlightColor: 'primary',
    buttonColor: 'primary',
    description:
      'Complete solution for Solar rooftop, solar power plant, and solar grid. Let us help you build a better business, a better future and a better world. Years of expertise and trust of thousands.',
    desktopImage: '/hero/renewable.jpeg',
    partnerLogo: '/partners/tp.svg',
    invert: true,
    link: '/solutions/renewable-energy'
  },
  {
    titleTop: 'The Future of',
    titleBottom: 'Industrial Robotics',
    highlightColor: 'secondary',
    buttonColor: 'secondary',
    description:
      'Complete solution for Industrial Robotics, automation, and manufacturing. Let us help you build a better business, a better future and a better world. Years of expertise and trust of thousands.',
    desktopImage: '/hero/robotics.jpeg',
    partnerLogo: '/partners/omron.jpeg',
    link: '/solutions/robotics'
  },
  {
    titleTop: 'The Future of',
    titleBottom: 'Industrial IOT',
    highlightColor: 'primary',
    buttonColor: 'primary',
    description:
      'Complete solution for Industrial IOT, including Panel PCs, IoT Edge Gateways, and Network Switches. Let us help you build a better business, a better future and a better world. Years of expertise and trust of thousands.',
    desktopImage: '/hero/iot.jpeg',
    partnerLogo: '/partners/meveic.jpg',
    link: '/solutions/iiot'
  },
];

function Hero() {
  return (
    <div className="relative overflow-hidden">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="h-auto lg:h-[500px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="h-full">
            <HeroSlide {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero;
