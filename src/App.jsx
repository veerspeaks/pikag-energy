import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Footer from "./components/Footer";
import OmronSolutionsPage from './pages/OmronSolutionsPage';


import { PIKAG_PRODUCTS_MAP, PIKAG_PRODUCT_TYPES } from './constants/product_types';
import { OMRON_PRODUCTS_MAP, OMRON_PRODUCT_TYPES } from './constants/product_types';
import { LK_PRODUCTS_MAP, LK_PRODUCT_TYPES } from './constants/product_types';
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/laurtiz-knudsen" element={<Products productsMap={LK_PRODUCTS_MAP} productTypes={LK_PRODUCT_TYPES} pageName="laurtiz-knudsen" />} />
        <Route path="/products/pikag" element={<Products productsMap={PIKAG_PRODUCTS_MAP} productTypes={PIKAG_PRODUCT_TYPES} pageName="pikag" />} />
        <Route path="/products/omron" element={<Products productsMap={OMRON_PRODUCTS_MAP} productTypes={OMRON_PRODUCT_TYPES} pageName="omron" />} />
        <Route path="/omron-solutions" element={<OmronSolutionsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;