import React from 'react';

const CustomerBenefits = () => {
  return (
    <section className="py-16 bg-light text-dark">
      <div className="max-w-7xl mx-auto text-center px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Customer Benefits</h2>
        <p className="text-lg md:text-xl mb-12 text-gray-700 mx-auto">
          Discover the advantages of choosing Omron for your automation needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">Innovation & Technology</h3>
            <p className="text-gray-700">
              Omron delivers cutting-edge automation solutions powered by the latest in
              machine learning, robotics, and vision technology.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">Global Support</h3>
            <p className="text-gray-700">
              Our global presence ensures local support and services, helping you maximize
              productivity with minimal downtime.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">Custom Solutions</h3>
            <p className="text-gray-700">
              Omron works closely with clients to develop tailored automation solutions
              that perfectly align with your unique business needs.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">Sustainability</h3>
            <p className="text-gray-700">
              We are committed to sustainable practices, ensuring that our products and
              solutions contribute to a greener future for all.
            </p>
          </div>

          {/* Benefit 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">Improved Efficiency</h3>
            <p className="text-gray-700">
              Our automation solutions streamline operations, reduce errors, and increase
              overall production efficiency, allowing you to stay competitive in a fast-paced market.
            </p>
          </div>

          {/* Benefit 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">Expertise & Experience</h3>
            <p className="text-gray-700">
              With over 80 years in the industry, Omron has a deep understanding of various
              industries and offers expertise that is unparalleled in the field of automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomerBenefits;
