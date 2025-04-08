
import Hero from '../components/Hero';
import Stats from '../components/HomePageComponents/Stats';
import Services from '../components/HomePageComponents/Services';
import CTA from '../components/HomePageComponents/CTA';
import AboutUs from '../components/HomePageComponents/AboutUs';


function Home() {
  return (
    <>
      <Hero />
      
      

      {/* Stats Section */}
      <Stats />

      {/* Services Section */}
      <Services />

      {/* CTA Section */}
      <CTA />

    </>
  );
}

export default Home;