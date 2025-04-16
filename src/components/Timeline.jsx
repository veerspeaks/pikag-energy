import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    year: "2007",
    title: "Started working with BCH",
    description: "Began our journey in the Industrial automation field, working with BCH to provide cutting-edge automation solutions.",
    imagePlaceholder: "https://placehold.co/600x400/3eba85/FFFFFF/png?text=2007+BCH+Partnership"
  },
  {
    year: "2008",
    title: "Started working with C&S",
    description: "Expanded our industrial automation expertise by partnering with C&S, strengthening our position in the market.",
    imagePlaceholder: "https://placehold.co/600x400/3eba85/FFFFFF/png?text=2008+C%26S+Partnership"
  },
  {
    year: "2009",
    title: "Partnered with Siemens and L&T",
    description: "Became authorized dealer of Industrial Automation solutions for Siemens and L&T, bringing world-class technology to our clients.",
    imagePlaceholder: "https://placehold.co/600x400/3eba85/FFFFFF/png?text=2009+Siemens+%26+L%26T"
  },
  {
    year: "2011",
    title: "Major milestone achievement",
    description: "Successfully executed high-profile industrial automation projects for JSPL, NALCO and other major industrial players.",
    imagePlaceholder: "https://placehold.co/600x400/3eba85/FFFFFF/png?text=2011+Major+Projects"
  },
  {
    year: "2018",
    title: "Entered Renewable Energy Market",
    description: "Expanded into renewable energy solutions, becoming a trusted system integrator for CREDA (Chhattisgarh Renewable Energy Development Agency).",
    imagePlaceholder: "https://placehold.co/600x400/3eba85/FFFFFF/png?text=2018+Renewable+Energy"
  },
  {
    year: "2020",
    title: "Solar & LED manufacturing expansion",
    description: "Executed numerous solar pumps, rooftops and power plant projects. Established an industrial LED manufacturing unit in Bhilai, Chhattisgarh.",
    imagePlaceholder: "https://placehold.co/600x400/3eba85/FFFFFF/png?text=2020+Solar+%26+LED"
  },
  {
    year: "2023",
    title: "ISP & Telecommunications entry",
    description: "Entered the ISP market through the BBNL project, establishing strategic collaborations with BSNL and other major telecommunications players in Odisha.",
    imagePlaceholder: "https://placehold.co/600x400/3eba85/FFFFFF/png?text=2023+ISP+Market"
  }
];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef(null);
  const progressRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // Handle autoplay
  useEffect(() => {
    if (autoplay) {
      // Clear any existing intervals
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
      
      // Set up progress animation
      let progressValue = 0;
      progressRef.current = setInterval(() => {
        progressValue += 1;
        setProgress(Math.min(progressValue, 100));
      }, 50); // Update every 50ms for smooth animation
      
      // Set up interval to change slides
      autoplayRef.current = setInterval(() => {
        setProgress(0);
        setActiveIndex((prevIndex) => (prevIndex + 1) % timelineData.length);
      }, 5000); // Change slide every 5 seconds
    }
    
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [autoplay, activeIndex]);

  const handleYearClick = (index) => {
    setActiveIndex(index);
    setProgress(0);
    
    // Reset autoplay timer when manually changing
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    
    if (autoplay) {
      let progressValue = 0;
      progressRef.current = setInterval(() => {
        progressValue += 1;
        setProgress(Math.min(progressValue, 100));
      }, 50);
      
      autoplayRef.current = setInterval(() => {
        setProgress(0);
        setActiveIndex((prevIndex) => (prevIndex + 1) % timelineData.length);
      }, 5000);
    }
  };

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10" data-aos="fade-up" data-aos-duration="800">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center">
              <div className="w-10 h-1 bg-primary rounded-full"></div>
              <span className="mx-4 text-sm uppercase tracking-wider text-primary font-semibold">Our Journey</span>
              <div className="w-10 h-1 bg-primary rounded-full"></div>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">
            Our <span className="text-primary">Story</span>
          </h2>
        </div>

        <div className="relative lg:flex lg:items-stretch">
          {/* Years column */}
          <div className="hidden lg:block lg:w-48 border-r border-gray-200 pr-6 relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 ml-5 -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative cursor-pointer group`}
                  onClick={() => handleYearClick(index)}
                >
                  {/* Year marker */}
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 
                      ${activeIndex === index ? 'bg-primary text-white' : 'bg-white border border-gray-300 text-gray-500'}
                      transition-all duration-300`}
                    >
                      <div className={`${activeIndex === index ? 'w-3 h-3 bg-white' : 'w-2 h-2 bg-gray-300 group-hover:bg-primary'} rounded-full transition-all duration-300`}></div>
                    </div>
                    <div className={`ml-3 text-xl font-bold 
                      ${activeIndex === index ? 'text-primary' : 'text-gray-500 group-hover:text-gray-800'} 
                      transition-colors duration-300`}
                    >
                      {item.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile years selector */}
          <div className="lg:hidden flex justify-around mb-6 overflow-x-auto pb-2 space-x-3">
            {timelineData.map((item, index) => (
              <div 
                key={index} 
                onClick={() => handleYearClick(index)}
                className={`flex-shrink-0 py-1.5 px-3 rounded-full cursor-pointer transition-colors duration-300 text-sm ${
                  activeIndex === index ? 'bg-primary text-white font-bold' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {item.year}
              </div>
            ))}
          </div>

          {/* Content area */}
          <div className="lg:flex-1 lg:pl-8 relative">
            {/* Progress bar */}
            <div className="w-full h-0.5 bg-gray-100 mb-6">
              <div 
                className="h-full bg-primary transition-all duration-50"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="h-[500px] relative overflow-hidden">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: activeIndex === index ? 1 : 0,
                    y: activeIndex === index ? 0 : 20,
                    zIndex: activeIndex === index ? 10 : 0
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ 
                    display: activeIndex === index || activeIndex === index - 1 ? 'block' : 'none'
                  }}
                >
                  <div className="flex flex-col">
                    {/* Image at the top */}
                    <div className="mb-6">
                      <div className="rounded-lg overflow-hidden shadow-md">
                        <img 
                          src={item.imagePlaceholder} 
                          alt={item.title} 
                          className="w-full h-64 sm:h-72 lg:h-80 object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Description at the bottom */}
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                      <p className="text-gray-700 text-base mb-4">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Controls */}
            <div className="flex justify-between mt-4">
              <button 
                onClick={() => handleYearClick(activeIndex === 0 ? timelineData.length - 1 : activeIndex - 1)}
                className="p-2 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-600 transition border border-gray-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => setAutoplay(!autoplay)}
                className="p-2 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-600 transition border border-gray-200"
              >
                {autoplay ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </button>
              <button 
                onClick={() => handleYearClick((activeIndex + 1) % timelineData.length)}
                className="p-2 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-600 transition border border-gray-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline; 