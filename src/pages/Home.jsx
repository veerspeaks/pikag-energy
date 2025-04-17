
import Hero from '../components/Hero';
import Stats from '../components/HomePageComponents/Stats';
import Services from '../components/HomePageComponents/Services';
// import Solution from '../components/HomePageComponents/SolutionHome';
import Partners from '../components/Partners';
import CTA from '../components/HomePageComponents/CTA';
import AboutUsHome from '../components/HomePageComponents/AboutUsHome';
import Milestones from '../components/HomePageComponents/Milestones';
import FAQ from '../components/FAQ';
import Clients from '../components/Clients';


function Home() {
  return (
    <>
      <Hero />
      <AboutUsHome /> 
      <Services />
      {/* <Solution /> */}
      <Partners />
      {/* <Clients /> */}
      {/* <Stats />  */}
      {/* <Milestones />  */}
      {/* <FAQ /> */}
      <CTA />

      

    </>
  );
}

export default Home;