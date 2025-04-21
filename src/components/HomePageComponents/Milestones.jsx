import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CHAPTERS = [
  {
    title: "India, a greenfield market",
    description: "Learn the basics of React, including components, props, and state.",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc",
    link: "https://example.com/chapter1",
  },
  {
    title: "Driven by Demand",
    description: "Learn how to use React Router for navigation in your React app.",
    image: "https://plus.unsplash.com/premium_photo-1716762544373-77789a03d6c7",
    link: "https://example.com/chapter2",
  },
  {
    title: "Habitats deployed for you",
    description: "Learn how to manage state in your React app using Redux.",
    image: "https://images.unsplash.com/photo-1590496794008-383c8070b257",
    link: "https://example.com/chapter3",
  },
  {
    title: "Build your Telecom Empire",
    description: "Learn how to style your React components using CSS and styled-components.",
    image: "https://images.unsplash.com/photo-1525646489322-bc1024bb5d58",
    link: "https://example.com/chapter4",
  },
];

// Increased the duration to 8 seconds (8000ms) to slow down the carousel
const SLIDE_DURATION = 8000;

const Milestones = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const progressIntervalRef = useRef(null);
  
  // Direction of transition
  const [[page, direction], setPage] = useState([0, 0]);

  // Setup progress timer
  useEffect(() => {
    const startProgressTimer = () => {
      // Clear any existing progress interval
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      
      // Reset progress
      setProgress(0);
      
      // Update progress every 50ms for smooth animation
      const updateInterval = 50;
      const steps = SLIDE_DURATION / updateInterval;
      let currentStep = 0;
      
      progressIntervalRef.current = setInterval(() => {
        if (!isPaused) {
          currentStep++;
          const newProgress = (currentStep / steps) * 100;
          setProgress(Math.min(newProgress, 100));
          
          if (newProgress >= 100) {
            clearInterval(progressIntervalRef.current);
          }
        }
      }, updateInterval);
    };
    
    startProgressTimer();
    
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [selectedIndex, isPaused]);

  // Setup carousel auto-rotation
  useEffect(() => {
    const startCarousel = () => {
      intervalRef.current = setInterval(() => {
        if (!isPaused) {
          setSelectedIndex(prevIndex => {
            const newIndex = (prevIndex + 1) % CHAPTERS.length;
            // Set page with forward direction (1)
            setPage([newIndex, 1]);
            return newIndex;
          });
        }
      }, SLIDE_DURATION);
    };

    startCarousel();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  const handleTabChange = (index) => {
    // Get direction based on current index vs new index
    const newDirection = index > selectedIndex ? 1 : -1;
    setPage([index, newDirection]);
    setSelectedIndex(index);
    
    // Reset the progress
    setProgress(0);
    
    // Reset the interval when manually changing
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    // Restart the interval
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setSelectedIndex(prevIndex => {
          const newIndex = (prevIndex + 1) % CHAPTERS.length;
          setPage([newIndex, 1]);
          return newIndex;
        });
      }
    }, SLIDE_DURATION);
  };

  // Variants for page transitions
  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  // Swipe handlers
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10" data-aos="fade-up">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center">
              <div className="w-10 h-1 bg-primary rounded-full"></div>
              <span className="mx-4 text-sm uppercase tracking-wider text-primary font-semibold">Journey</span>
              <div className="w-10 h-1 bg-primary rounded-full"></div>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark">
            Our <span className="text-primary">Milestones</span>
          </h2>
        </div>

        <div 
          className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] rounded-xl shadow-xl overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Simple progress bar at the top */}
          <div className="absolute top-0 left-0 right-0 z-20 h-1 bg-black/10">
            <motion.div 
              className="h-full bg-green-500"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            ></motion.div>
          </div>

          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full h-full flex flex-col"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                
                if (swipe < -swipeConfidenceThreshold) {
                  // Swipe left, go to next
                  const newIndex = (selectedIndex + 1) % CHAPTERS.length;
                  handleTabChange(newIndex);
                } else if (swipe > swipeConfidenceThreshold) {
                  // Swipe right, go to previous
                  const newIndex = selectedIndex === 0 ? CHAPTERS.length - 1 : selectedIndex - 1;
                  handleTabChange(newIndex);
                }
              }}
            >
              {/* Background image overlay with dark gradient */}
              <div className="absolute inset-0 z-10">
                <img 
                  src={CHAPTERS[page].image} 
                  alt={CHAPTERS[page].title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
              </div>
              
              {/* Chapter content */}
              <div className="relative z-20 flex flex-col h-full justify-end p-6 sm:p-8 text-white">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">{CHAPTERS[page].title}</h3>
                <p className="text-sm sm:text-base opacity-90 mb-6 max-w-lg">{CHAPTERS[page].description}</p>
                
                {/* Chapter indicators/controls at the bottom */}
                <div className="flex items-center space-x-2">
                  {CHAPTERS.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleTabChange(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === page ? 'bg-primary w-10' : 'bg-white/60 hover:bg-white/80'}`}
                      aria-label={`Go to chapter ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Milestones;
