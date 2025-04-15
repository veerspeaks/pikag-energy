import React from 'react';
import Certifications from '../components/Credentials/Certifications'; 
import Testimonials from '../components/Credentials/Testimonials';
import AwardsAndRewards from '../components/Credentials/AwardsAndRewards';

const Credentials = () => {
  return (
    <div className="bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">      
        <Certifications />
        <Testimonials />
        <AwardsAndRewards />
      </div>
    </div>
  );
};

export default Credentials;
