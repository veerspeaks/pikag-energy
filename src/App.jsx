import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import AllProducts from './pages/AllProducts';
import Footer from "./components/Footer";


import { PIKAG_PRODUCTS_MAP, PIKAG_PRODUCT_TYPES } from './constants/product_types';
import { OMRON_PRODUCTS_MAP, OMRON_PRODUCT_TYPES } from './constants/product_types';

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
        <Route path="/products/pikag" element={<Products productsMap={PIKAG_PRODUCTS_MAP} productTypes={PIKAG_PRODUCT_TYPES} pageName="pikag" />} />
        <Route path="/products/omron" element={<Products productsMap={OMRON_PRODUCTS_MAP} productTypes={OMRON_PRODUCT_TYPES} pageName="omron" />} />
        <Route path="/all-products/pikag" element={<AllProducts productsMap={PIKAG_PRODUCTS_MAP} productTypes={PIKAG_PRODUCT_TYPES} pageName="pikag" />} />
        <Route path="/all-products/omron" element={<AllProducts productsMap={OMRON_PRODUCTS_MAP} productTypes={OMRON_PRODUCT_TYPES} pageName="omron" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;