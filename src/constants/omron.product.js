// omron.product.js

import articulatedrobots from '../../public/omron_products/articulatedrobots.png';
import collabrobots from '../../public/omron_products/collabrobots.png';
import mobilerobots from '../../public/omron_products/mobilerobots.png';
import parallelrobots from '../../public/omron_products/parallelrobots.png';
import partfeeders from '../../public/omron_products/partfeeders.png';
import scararobots from '../../public/omron_products/scararobots.png';

const OMRON_ROBOTICS_PRODUCTS = [
  {
    name: "Articulated Robots",
    image: articulatedrobots,
    description:
      "The speed and precision of articulated robots make them ideal for a wide range of applications, from assembly to packaging.",
  },
  {
    name: "Collaborative Robots",
    image: collabrobots,
    description:
      "Omron's collaborative robots are easy to train on new tasks and capable of adapting to a wide range of applications.",
  },
  {
    name: "Mobile Robots",
    image: mobilerobots,
    description:
      "Omron solves a variety of material transports issues with its innovative mobile robots that self-navigate and adapt to changing environments.",
  },
  {
    name: "Parallel Robots",
    image: parallelrobots,
    description:
      "High-speed robots with parallel linkage design, perfect for rapid pick-and-place operations in packaging and assembly lines.",
  },
  {
    name: "Part Feeders",
    image: partfeeders,
    description:
      "Omron's part feeders are designed to sort and orient parts for robotic pick-up, ensuring continuous supply in automated production cells.",
  },
  {
    name: "SCARA Robots",
    image: scararobots,
    description:
      "Omron's SCARA Robots offiers a compnact system footprint, saving valuable floor space while minimizing installation, cost and complexity.",
  },
];

// All products are robotics in this case
const OMRON_ALL_PRODUCTS = [
  ...OMRON_ROBOTICS_PRODUCTS,
];

export { OMRON_ROBOTICS_PRODUCTS, OMRON_ALL_PRODUCTS };