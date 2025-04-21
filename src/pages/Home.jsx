
import Hero from '../components/Hero';
import Services from '../components/HomePageComponents/Services';
import Partners from '../components/Partners';
import CTA from '../components/HomePageComponents/CTA';
import AboutUsHome from '../components/HomePageComponents/AboutUsHome';
import Milestones from '../components/HomePageComponents/Milestones';


function Home() {
  return (
    <>
      <Hero />
      <AboutUsHome /> 
      <Services />
      <Partners />
      {/* <Milestones />  */}
      <CTA />

      

    </>
  );
}

export default Home;