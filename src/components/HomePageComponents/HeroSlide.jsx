import { Link } from 'react-router-dom';

const HeroSlide = ({
  titleTop,
  titleBottom,
  highlightColor = 'primary',
  description,
  desktopImage,
  mobileImage,
  buttonColor = 'primary'
}) => {
  return (
    <div className="relative w-full h-full">
      {/* Desktop layout */}
      <div className="hidden lg:flex w-full h-full">
        {/* Text section */}
        <div className="w-1/2 py-12 px-8 flex items-center">
          <div className="lg:max-w-2xl ml-auto" data-aos="fade-right">
            <h1 className="text-4xl tracking-tight font-extrabold text-dark sm:text-5xl md:text-6xl leading-[1.1]">
              <span className="block mb-1">{titleTop}</span>
              <span className={`block text-${highlightColor}`}>
                {titleBottom}
              </span>
            </h1>
            <p className="mt-5 text-base text-gray-700 sm:mt-6 sm:text-lg sm:max-w-xl md:mt-6 md:text-xl leading-relaxed">
              {description}
            </p>
            <div className="mt-8 flex gap-6">
              <Link
                to="/products"
                className={`inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-${buttonColor} hover:bg-${buttonColor}/90 transform hover:scale-101 transition-all duration-300 shadow-md`}
              >
                View Products
              </Link>
              <Link
                to="/contact"
                className={`inline-flex items-center px-8 py-3 border-2 border-${buttonColor} text-base font-medium rounded-md text-${buttonColor} hover:bg-${buttonColor}/10 transform hover:scale-101 transition-all duration-300`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="w-1/2">
          <img
            src={desktopImage}
            alt={titleBottom}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Mobile layout */}
      <div className="flex flex-col h-full lg:hidden">
        {/* Image */}
        <div className="relative h-[40%]">
          <img
            src={mobileImage || desktopImage}
            alt={titleBottom}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="px-4 py-8 h-[50%] flex flex-col justify-center">
          <div data-aos="fade-up">
            <h1 className="text-4xl tracking-tight font-extrabold text-dark sm:text-5xl">
              <span className="block">{titleTop}</span>
              <span className={`block text-${highlightColor}`}>
                {titleBottom}
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-${buttonColor} hover:bg-${buttonColor}/90 transform hover:scale-101 transition-all duration-300 shadow-md`}
              >
                View Products
              </Link>
              <Link
                to="/contact"
                className={`inline-flex items-center px-6 py-3 border-2 border-${buttonColor} text-base font-medium rounded-md text-${buttonColor} hover:bg-${buttonColor}/10 transform hover:scale-101 transition-all duration-300`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
