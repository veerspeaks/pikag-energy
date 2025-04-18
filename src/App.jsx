import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EnquiryButton from './components/EnquiryButton';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Credentials from './pages/Credentials';
import OmronSolutionsPage from './pages/OmronSolutionsPage';
import ProductDetail from './pages/ProductDetail';
import { PIKAG_PRODUCTS_MAP, PIKAG_PRODUCT_TYPES } from './constants/product_types';
import { OMRON_PRODUCTS_MAP, OMRON_PRODUCT_TYPES } from './constants/product_types';
import { LK_PRODUCTS_MAP, LK_PRODUCT_TYPES } from './constants/product_types';

// Import the new solution pages
import IndustrialAutomationSolution from './pages/IndustrialAutomationSolution';
import WaterWastewaterSolution from './pages/WaterWastewaterSolution';
import RoboticsSolution from './pages/RoboticsSolution';
import RenewableEnergySolution from './pages/RenewableEnergySolution';
import IoTSolution from './pages/IoTSolution';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="font-poppins">
      <Navbar />
      <EnquiryButton />
      <ScrollToTop />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/credentials" element={<Credentials />} />
          <Route path="/products/laurtiz-knudsen" element={<Products productsMap={LK_PRODUCTS_MAP} productTypes={LK_PRODUCT_TYPES} pageName="laurtiz-knudsen" />} />
          <Route path="/products/pikag" element={<Products productsMap={PIKAG_PRODUCTS_MAP} productTypes={PIKAG_PRODUCT_TYPES} pageName="pikag" />} />
          <Route path="/products/omron" element={<Products productsMap={OMRON_PRODUCTS_MAP} productTypes={OMRON_PRODUCT_TYPES} pageName="omron" />} />
          <Route path="/omron-solutions" element={<OmronSolutionsPage />} />
          
          {/* New offerings routes */}
          <Route path="/offerings/:categoryId/:subcategoryId/:productId" element={<ProductDetail />} />

          {/* New solution pages */}
          <Route path="/solutions/industrial-automation" element={<IndustrialAutomationSolution />} />
          <Route path="/solutions/water-wastewater" element={<WaterWastewaterSolution />} />
          <Route path="/solutions/robotics" element={<RoboticsSolution />} />
          <Route path="/solutions/renewable-energy" element={<RenewableEnergySolution />} />
          <Route path="/solutions/iiot" element={<IoTSolution />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;