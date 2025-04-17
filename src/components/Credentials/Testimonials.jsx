import React from 'react';

const testimonials = [
  {
    name: 'Lauritz Knudsen',
    logo: '/partners/lk.png',
    review:
      'PikaG Energy has been a reliable partner in delivering cutting-edge electrical automation solutions tailored to meet our evolving business needs.',
  },
  {
    name: 'Tata Power',
    logo: '/partners/tata.png',
    review:
      'Their innovative approach and strong commitment to sustainability align perfectly with our long-term goals in energy infrastructure and green growth.',
  },
  {
    name: 'Omron',
    logo: '/partners/omron.jpeg',
    review:
      'Exceptional technical expertise and flawless execution from the PikaG Energy team have enabled consistent and future-ready automation results.',
  },
  {
    name: 'Meveic',
    logo: '/partners/meveic.jpg',
    review:
      'They consistently deliver outstanding performance and excellence in energy solutions while maintaining transparent collaboration and efficiency.',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark mb-4">
            What Our Partners Say
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-xl mx-auto">
            Trusted by industry leaders across automation, power, and innovation sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-light pt-12 pb-5 px-4 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 flex flex-col items-center text-center min-h-[300px]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Logo Circle */}
              <div className="absolute -top-10 w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center">
                <img
                  src={testimonial.logo}
                  alt={testimonial.name}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Review */}
              <p className="text-gray-700 text-[15px] italic leading-snug mb-6 px-2">
                <span className="text-accent text-lg font-bold mr-1">“</span>
                {testimonial.review}
                <span className="text-accent text-lg font-bold ml-1">”</span>
              </p>

              {/* Name */}
              <h4 className="text-dark font-semibold text-base sm:text-lg mt-auto">
                {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
