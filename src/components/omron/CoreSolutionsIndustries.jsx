import React from 'react';

const industries = [
  {
    name: "Automobile Industry",
    description: "Omron provides innovative solutions to automate production lines and enhance vehicle manufacturing processes.",
    imageUrl: "https://via.placeholder.com/400x250?text=Automobile+Industry",
  },
  {
    name: "Material Handling",
    description: "From conveyors to robotics, Omron delivers powerful material handling solutions for various industries.",
    imageUrl: "https://via.placeholder.com/400x250?text=Material+Handling",
  },
  {
    name: "Packaging Industry",
    description: "Omron offers packaging solutions to increase speed, reliability, and quality across packaging lines.",
    imageUrl: "https://via.placeholder.com/400x250?text=Packaging+Industry",
  }
];

const CoreSolutionsIndustries = () => {
  return (
    <section className="py-16 bg-light text-dark">
      <div className="max-w-7xl mx-auto text-center px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          Core Solutions & Industries
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={industry.imageUrl}
                alt={industry.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{industry.name}</h3>
                <p className="text-gray-700 mb-4">{industry.description}</p>
                <a
                  href="#"
                  className="inline-block text-primary hover:text-teal-600 font-semibold"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreSolutionsIndustries;
