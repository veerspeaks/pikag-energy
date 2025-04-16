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
      'Complete solutions for Solar, LED Lighting, PCB and Industrial range. Setting global standards with endless solutions for our clients and our planet.',
    desktopImage: '/hero/industrial-automation.jpeg',
    desktopImage: '/hero/industrial-automation.jpeg',
    partnerLogo: '/partners/lk.png',
  },
  {
    titleTop: 'The Future of',
    titleBottom: 'Water and Waste Water Management',
    highlightColor: 'secondary',
    buttonColor: 'secondary',
    description:
      'Innovative solutions in energy, automation, semiconductors, and infrastructure. Advancing sustainability and efficiency for industries and communities worldwide.',
    desktopImage: '/hero/wate-and-waste-water.jpeg',
    partnerLogo: '/partners/fuji.svg',
  },
  {
    titleTop: 'The Future of',
    titleBottom: 'Renewable Energy',
    highlightColor: 'primary',
    buttonColor: 'primary',
    description:
      "Integrated energy solutions across solar, wind, hydro, and thermal power. Empowering communities and driving India's transition to sustainable energy.",
    desktopImage: '/hero/renewable.jpeg',
    partnerLogo: '/partners/tp.svg',
    invert: true,
  },
  {
    titleTop: 'The Future of',
    titleBottom: 'Industrial Robotics',
    highlightColor: 'secondary',
    buttonColor: 'secondary',
    description:
      'Innovative automation, healthcare, and electronic solutions enhancing lives and advancing technology worldwide.',
    desktopImage: '/hero/robotics.jpeg',
    partnerLogo: '/partners/omron.jpeg',
  },
  {
    titleTop: 'The Future of',
    titleBottom: 'Industrial IOT',
    highlightColor: 'primary',
    buttonColor: 'primary',
    description:
      'Advanced industrial computing and connectivity solutions, including Panel PCs, IoT Edge Gateways, and Network Switches, engineered for performance, reliability, and innovation.',
    desktopImage: '/hero/iot.jpeg',
    partnerLogo: '/partners/meveic.jpeg',
  },
];

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
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <HeroSlide {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero;
