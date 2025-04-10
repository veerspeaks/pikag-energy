
import Hero from '../components/Hero';
import Stats from '../components/HomePageComponents/Stats';
import Services from '../components/HomePageComponents/Services';
import CTA from '../components/HomePageComponents/CTA';
import AboutUs from '../components/HomePageComponents/AboutUs';
import Milestones from '../components/HomePageComponents/Milestones';
import FAQ from '../components/FAQ';
import Clients from '../components/Clients';


function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Stats /> 
      <Services />
      <Milestones /> 
      <FAQ />
      <CTA />

      

    </>
  );
}

export default Home;