import React from 'react'


import Hero from '../components/omron/Hero'
import OmronAbout from '../components/omron/OmronAbout'
import CoreSolutionsIndustries from '../components/omron/CoreSolutionsIndustries'
import OmronAutomationCenter from '../components/omron/OmronAutomationCenter'
import KeyProducts from '../components/omron/KeyProducts'
import CustomerBenefits from '../components/omron/CustomerBenefits'
import ServicesSupport from '../components/omron/ServicesSupport'
import FooterSection from '../components/omron/FooterSection'


const OmronSolutionsPage = () => {
  return (
    <section className='bg-white text-gray-900'>
      <Hero />
      <OmronAbout />
      <CoreSolutionsIndustries />
      {/* <OmronAutomationCenter /> */}
      <KeyProducts />
      <CustomerBenefits />
      <ServicesSupport />
      <FooterSection />
    </section>
  )
}

export default OmronSolutionsPage