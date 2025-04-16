import { Link } from 'react-router-dom';

const HeroSlide = ({
  titleTop,
  titleBottom,
  highlightColor = 'primary',
  description,
  desktopImage,
  mobileImage,
  buttonColor = 'primary',
  partnerLogo,
  invert = false,
}) => {
  return (
    <div className="relative w-full h-full">
      {/* Desktop layout */}
      <div className="hidden lg:flex w-full h-full">
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
            <div className="mt-8 flex gap-6 items-center">
              {partnerLogo && (
                <div className="flex flex-col items-start justify-center">
                  <p className="text-sm text-gray-500 mb-1">Partner</p>
                  <img
                    src={partnerLogo}
                    alt="Partner Logo"
                    className="h-8 max-w-[150px] object-contain"
                    style={{ filter: invert ? 'invert(1)' : 'none' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}

              <Link
                to="/products"
                className={`inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-${buttonColor} hover:bg-${buttonColor}/90 transform hover:scale-101 transition-all duration-300 shadow-md`}
              >
                View Products
              </Link>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <img
            src={desktopImage}
            alt={titleBottom}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Mobile layout */}
      <div className="h-full lg:hidden">
        <div className="relative h-[250px] overflow-hidden">
          <img
            src={mobileImage || desktopImage}
            alt={titleBottom}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="px-4 py-6 flex flex-col justify-center">
          <div data-aos="fade-up">
            <h1 className="text-3xl tracking-tight font-extrabold text-dark sm:text-4xl">
              <span className="block">{titleTop}</span>
              <span className={`block text-${highlightColor}`}>
                {titleBottom}
              </span>
            </h1>
            <p className="mt-3 text-sm text-gray-600 sm:text-base sm:max-w-xl">
              {description}
            </p>

            {/* Icon and Button in one row */}
            <div className="mt-6 flex items-center gap-6 flex-wrap">
              {partnerLogo && (
                <div className="flex flex-col items-start justify-center">
                  <p className="text-sm text-gray-500 mb-1">Partner</p>
                  <img
                    src={partnerLogo}
                    alt="Partner Logo"
                    className="h-7 max-w-[120px] object-contain"
                    style={{ filter: invert ? 'invert(1)' : 'none' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}

              <Link
                to="/products"
                className={`inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-${buttonColor} hover:bg-${buttonColor}/90 transform hover:scale-101 transition-all duration-300 shadow-md`}
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
