// product_types.js

import { PIKAG_SOLAR_PRODUCTS, PIKAG_ALL_PRODUCTS, PIKAG_INDOOR_PRODUCTS, PIKAG_OUTDOOR_PRODUCTS } from './pikag.products';
import { OMRON_ROBOTICS_PRODUCTS } from './omron.product';

const PIKAG_PRODUCTS_MAP = {
  all: PIKAG_ALL_PRODUCTS,
  solar: PIKAG_SOLAR_PRODUCTS,    
  indoor: PIKAG_INDOOR_PRODUCTS,
  outdoor: PIKAG_OUTDOOR_PRODUCTS,
    // You can add more product categories here.
};

// Extract product types from the PRODUCTS_MAP keys
const PIKAG_PRODUCT_TYPES = Object.keys(PIKAG_PRODUCTS_MAP);

//For products page of OMRON

const OMRON_PRODUCTS_MAP = {
  robotics: OMRON_ROBOTICS_PRODUCTS,
};

const OMRON_PRODUCT_TYPES = Object.keys(OMRON_PRODUCTS_MAP);



export { PIKAG_PRODUCTS_MAP, PIKAG_PRODUCT_TYPES, OMRON_PRODUCTS_MAP, OMRON_PRODUCT_TYPES };


