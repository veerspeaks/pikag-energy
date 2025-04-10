import React from 'react';

const services = [
  {
    title: "Commissioning & Startup",
    description: "We assist in the initial setup of your systems, ensuring that everything runs smoothly from day one.",
    icon: "https://via.placeholder.com/64?text=1", // Placeholder for icon
  },
  {
    title: "Field Maintenance & Troubleshooting",
    description: "Our expert team provides field maintenance and troubleshooting services to keep your systems running efficiently.",
    icon: "https://via.placeholder.com/64?text=2", // Placeholder for icon
  },
  {
    title: "Training & Repair Services",
    description: "We offer training for your team to ensure proper handling of equipment, and provide repair services when necessary.",
    icon: "https://via.placeholder.com/64?text=3", // Placeholder for icon
  },
  {
    title: "Product Optimization Support",
    description: "We provide ongoing support to optimize the performance of your products and adapt to changing business needs.",
    icon: "https://via.placeholder.com/64?text=4", // Placeholder for icon
  }
];

const ServicesSupport = () => {
  return (
    <section className="py-16 bg-light text-dark">
      <div className="max-w-7xl mx-auto text-center px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          Comprehensive Service & Support
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12 mx-auto">
          We offer comprehensive support for all our products. From commissioning to optimization, Omron has you covered.
        </p>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <a
          href="#"
          className="mt-8 inline-block px-8 py-3 bg-primary text-white rounded-full text-lg font-semibold hover:bg-teal-600 transition-all"
        >
          Learn More About Our Services
        </a>
      </div>
    </section>
  );
}

export default ServicesSupport;
