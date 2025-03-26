// product_types.js

import { SOLAR_PRODUCTS, ALL_PRODUCTS, INDOOR_PRODUCTS, OUTDOOR_PRODUCTS } from './products';

const PRODUCTS_MAP = {
  all: ALL_PRODUCTS,
  solar: SOLAR_PRODUCTS,    
  indoor: INDOOR_PRODUCTS,
  outdoor: OUTDOOR_PRODUCTS,
    // You can add more product categories here.
};

// Extract product types from the PRODUCTS_MAP keys
const PRODUCT_TYPES = Object.keys(PRODUCTS_MAP);

export { PRODUCTS_MAP, PRODUCT_TYPES };
