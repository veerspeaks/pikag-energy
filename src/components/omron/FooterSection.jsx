import React from 'react';

const FooterSection = () => {
  return (
    <section className="py-12 bg-primary  text-white">
      <div className="max-w-7xl mx-auto text-center px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Stay Connected with Omron
        </h2>
        
        <p className="text-lg mb-4 mx-auto">
          Contact us at: <a href="mailto:info@omron.com" className="text-white">info@omron.com</a>
        </p>
        <p className="text-lg mb-6 mx-auto">
          Follow us on social media for updates and news
        </p>

        {/* Social Media Links */}
        {/* <div className="flex justify-center space-x-6 mb-8">
          <a href="https://www.linkedin.com/company/omron" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-teal-400">
            <i className="fab fa-linkedin"></i> 
          </a>
          <a href="https://twitter.com/OmronCorporation" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-teal-400">
            <i className="fab fa-twitter"></i> 
          </a>
          <a href="https://www.facebook.com/OmronCorporation" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-teal-400">
            <i className="fab fa-facebook"></i> 
          </a>
        </div> */}
        
      </div>
    </section>
  );
}

export default FooterSection;
