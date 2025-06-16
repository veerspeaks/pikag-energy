import React, { useState } from 'react';
import Certifications from '../components/Credentials/Certifications';
import Testimonials from '../components/Credentials/Testimonials';
import AwardsAndRewards from '../components/Credentials/AwardsAndRewards';
import Partners from '../components/Partners';

const Downloads = () => {
  // Sample initial catalog data
  const [catalogs, setCatalogs] = useState([
    {
      id: 1,
      title: 'LK Industrial Automation Products Catalog',
      description: 'Complete overview of our product lineup from LK Industrial Automation',
      downloadUrl: '/pdfs/lk.pdf',
      fileType: 'PDF',
      fileSize: '3.2 MB'
    },
    {
      id: 2,
      title: 'IIOT Products Catalog',
      description: 'Detailed technical specifications for all products',
      downloadUrl: '/pdfs/Maestrotek_Profile_June2021.pdf',
      fileType: 'PDF',
      fileSize: '2.8 MB'
    },
    {
      id: 3,
      title: 'Omron Industrial Robotics Products Catalog',
      description: 'Step-by-step installation instructions',
      downloadUrl: '/pdfs/industrial robots_i822-e1_14_1_csm1050308.pdf',
      fileType: 'PDF',
      fileSize: '1.5 MB'
    },
    {
      id: 4,
      title: 'Fuji Electric Pressure Transmitters Catalog',
      description: 'Step-by-step installation instructions',
      downloadUrl: '/pdfs/21A1-E-0114.pdf',
      fileType: 'PDF',
      fileSize: '1.5 MB'
    },
    {
      id: 5,
      title: 'Fuji Electric Temperature Controllers Catalog',
      description: 'Step-by-step installation instructions',
      downloadUrl: '/pdfs/21B1-E-0075_zqheiahm58.pdf',
      fileType: 'PDF',
      fileSize: '1.5 MB'
    },
    {
      id: 6,
      title: 'Fuji Electric Ultrasonic Flow Meters Catalog',
      description: 'Step-by-step installation instructions',
      downloadUrl: '/pdfs/21A1-E-0006d_udu0n8hgir.pdf',
      fileType: 'PDF',
      fileSize: '1.5 MB'
    }
  ]);
  return (
    <div className="bg-light min-h-screen">
      {/* Downloads Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Downloads & Credentials
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access our product catalogs, technical documentation, installation guides, and learn about our credentials.
          </p>
        </div>

        {/* Tab navigation for Downloads and Credentials */}
        <div className="border-b border-gray-200 mb-8">
          <div className="flex space-x-8">
            <button className="border-b-2 border-primary text-primary font-medium py-4 px-1 focus:outline-none">
              Downloads
            </button>
          </div>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {catalogs.map(catalog => (
            <div 
              key={catalog.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{catalog.title}</h3>
                <p className="text-gray-600 mb-4">{catalog.description}</p>
                
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    <span>{catalog.fileType}</span>
                    <span>•</span>
                    <span>{catalog.fileSize}</span>
                  </div>
                  
                  <a 
                    href={catalog.downloadUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Information */}
        <div className="mt-16 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Need Additional Resources?</h2>
          <p className="text-gray-600">
            If you can't find what you're looking for, or need access to specific documentation,
            please contact our support team at{' '}
            <a href="mailto:info@pikag.com" className="text-primary hover:underline">
              info@pikag.com
            </a>
          </p>
        </div>
      </div>

      {/* Credentials Section */}
      <div className=" pb-8">
        
        
        {/* Certifications Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Certifications />
        </div>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Partners Section */}
        <Partners />

        {/* Awards and Rewards Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <AwardsAndRewards />
        </div>
      </div>
    </div>
  );
};

export default Downloads; 