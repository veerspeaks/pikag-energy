import HeroSlide from './HomePageComponents/HeroSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const slides = [
  {
    titleTop: 'The Future of',
    titleBottom: 'Energy Generation',
    highlightColor: 'primary',
    buttonColor: 'primary',
    description:
      'Complete solutions for Solar, LED Lighting, PCB and Industrial range. Setting global standards with endless solutions for our clients and our planet.',
    desktopImage: '/hero-banner.png',
    mobileImage: '/hero-banner2.jpg',
  },
  {
    titleTop: 'The Future of',
    titleBottom: 'Energy Generation',
    highlightColor: 'secondary',
    buttonColor: 'secondary',
    description:
      'Complete solutions for Solar, LED Lighting, PCB and Industrial range. Setting global standards with endless solutions for our clients and our planet.',
    desktopImage:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=80',
  },
  {
    titleTop: 'The Future of',
    titleBottom: 'Energy Generation',
    highlightColor: 'primary',
    buttonColor: 'primary',
    description:
      'Complete solutions for Solar, LED Lighting, PCB and Industrial range. Setting global standards with endless solutions for our clients and our planet.',
    desktopImage: '/hero-banner.png',
    mobileImage: '/hero-banner2.jpg',
  },
  {
    titleTop: 'The Future of',
    titleBottom: 'Energy Generation',
    highlightColor: 'secondary',
    buttonColor: 'secondary',
    description:
      'Complete solutions for Solar, LED Lighting, PCB and Industrial range. Setting global standards with endless solutions for our clients and our planet.',
    desktopImage:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=80',
  },
  {
    titleTop: 'The Future of',
    titleBottom: 'Energy Generation',
    highlightColor: 'primary',
    buttonColor: 'primary',
    description:
      'Complete solutions for Solar, LED Lighting, PCB and Industrial range. Setting global standards with endless solutions for our clients and our planet.',
    desktopImage: '/hero-banner.png',
    mobileImage: '/hero-banner2.jpg',
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
