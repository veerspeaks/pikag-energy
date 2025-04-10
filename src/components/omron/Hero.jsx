import React from 'react';
import hero_bg from "../../../public/omron-solutions/hero-bg.jpg"; // Ensure the image path is correct

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center py-32 flex items-center justify-center"
      style={{ backgroundImage: `url(${hero_bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Welcome to Omron Solutions
        </h1>
        <p className="text-lg md:text-xl text-white mb-6">
          Your partner in automation and innovation.
        </p>
        <a
          href="#solutions"
          className="inline-block bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-teal-600 transition-all"
        >
          Explore Our Solutions
        </a>
      </div>
    </section>
  );
}

export default Hero;
