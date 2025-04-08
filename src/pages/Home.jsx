
import Hero from '../components/Hero';
import Stats from '../components/HomePageComponents/Stats';
import Services from '../components/HomePageComponents/Services';
import CTA from '../components/HomePageComponents/CTA';
import AboutUs from '../components/HomePageComponents/AboutUs';
import Milestones from '../components/HomePageComponents/Milestones';


function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Milestones />
      <CTA />

    </>
  );
}

export default Home;