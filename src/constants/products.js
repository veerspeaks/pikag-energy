// products.js

import solar_panel from "../../public/products/solar-panel.png";
import solarpumps from "../../public/products/solarpumps.png";



// indoor products
import ledspikelight from "../../public/products/ledspikelight.png";
import ledsurfacelight from "../../public/products/ledsurfacelight.png";
import ledpanellight from "../../public/products/ledpanellight.png";
import leddownlight from "../../public/products/leddownlight.png";
import ledsurfacelight2 from "../../public/products/ledsurfacelight2.png";
import ledpanellight_round from "../../public/products/ledpanellight-round.png";
import rechargablebulb from "../../public/products/rechargablebulb.png";
import rechargabletubelight from "../../public/products/rechargabletubelight.png";
import slim_backlit_panel_light from "../../public/products/slim-backlit-panel-light.png";


// outdoor products
import ledstreetlight from "../../public/products/ledstreetlight.png";
import ac_led_flood_lights from "../../public/products/ac-led-flood-lights.png";
import ledhighbaylight from "../../public/products/ledhighbaylight.png";
import ledwellglasslight from "../../public/products/ledwellglasslight.png";
import solarintegratedstreetlight from "../../public/products/solarintegratedstreetlight.png";
import solar_all_in_one_stree_lights from "../../public/products/solar-all-in-one-stree-lights.png";
import solarintegratedstreetlight2 from "../../public/products/solarintegratedstreetlight2.png";


const INDOOR_PRODUCTS = [
  {
    name: "LED Spike Light",
    image: ledspikelight,
    description:
      "5W with 420lm luminous flux, dimension Φ58x75mm. Perfect for accent lighting.",
  },
  {
    name: "LED Surface Light (Square)",
    image: ledsurfacelight,
    description:
      "Available from 6W (360lm, 122x122x35mm) to 24W (1800lm, 300x300x35mm).",
  },
  {
    name: "LED Panel Light (Square)",
    image:ledpanellight,
    description:
      "Ranges from 3W (150lm, 85x85x21mm) to 24W (1800lm, 300x300x21mm).",
  },
  {
    name: "LED Down Light",
    image:leddownlight,
    description: "9W producing 900lm, size 90x70mm with a hole size of 75mm.",
  },
  {
    name: "LED Surface Light (Round)",
    image:ledsurfacelight2,
    description:
      "Variants from 6W (360lm, 122x35mm) to 24W (1800lm, 300x35mm).",
  },
  {
    name: "Rechargeable Bulb",
    image: rechargablebulb,
    description: "9W bulb with backup of 4 hours, producing 900lm.",
  },
  {
    name: "Slim/Backlit Panel Light",
    image:slim_backlit_panel_light,
    description:
      "Available in multiple sizes from 2ft to 4ft, over 90% driver efficiency.",
  },
  {
    name: "DC Rechargeable Tube Light",
    image: rechargabletubelight,
    description:
      "5W tube light with a battery backup, solar panel included, 115 lm/W efficacy.",
  },
];

const OUTDOOR_PRODUCTS = [
  {
    name: "AC LED Street Lights",
    image: ledstreetlight,
    description:
      "Robust street lights ranging from 15W to 150W, designed for city roads, highways, and residential complexes.",
  },
  {
    name: "AC LED Flood Lights (Down Choke & Back Choke)",
    image: ac_led_flood_lights,
    description:
      "High-performance flood lights available from 20W to 250W, suitable for wide area lighting.",
  },
  {
    name: "AC LED High Bay Lights",
    image: ledhighbaylight,
    description:
      "Ideal for industrial environments, available from 70W to 250W.",
  },
  {
    name: "AC LED Well Glass Lights",
    image: ledwellglasslight,
    description:
      "Durable and robust well glass lights perfect for harsh environments.",
  },
  {
    name: "Solar Integrated Street Light",
    image: solarintegratedstreetlight,
    description:
      "Self-sustaining street lighting with integrated solar panels for efficient dusk to dawn lighting.",
  },
  {
    name: "Solar All-in-one Street Light",
    image: solar_all_in_one_stree_lights,
    description:
      "Compact and easy to install solar street lights with a complete all-in-one design.",
  },
  {
    name: "Solar All-in-two Street Light",
    image: solarintegratedstreetlight2,
    description:
      "Versatile solar street lighting system featuring separate panel and light for optimized placement.",
  },
];

const SOLAR_PRODUCTS = [
  {
    name: "Solar Panel - High Efficiency",
    image: solar_panel,
    description:
      "High-efficiency monocrystalline solar panels for residential and commercial use.",
  },
  // {
  //   name: "Solar Inverter System",
  //   image:
  //     "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&auto=format&fit=crop&q=80",
  //   description:
  //     "State-of-the-art inverter technology for optimal energy conversion.",
  // },
  // {
  //   name: "Solar Home System",
  //   image:
  //     "https://images.unsplash.com/photo-1611346717951-32c702c578cc?w=800&auto=format&fit=crop&q=80",
  //   description:
  //     "Complete solar solution for residential properties with battery storage.",
  // },
  {
    name: "Solar Street Light",
    image: solarintegratedstreetlight,
    description:
      "Autonomous solar-powered street lighting with dusk-to-dawn operation.",
  },
  {
    name: "Solar Water Pump",
    image: solarpumps,
    description:
      "Energy-efficient solar water pumping solutions for agriculture and residential use.",
  },
];

const ALL_PRODUCTS = [
  ...SOLAR_PRODUCTS,
  ...INDOOR_PRODUCTS,
  ...OUTDOOR_PRODUCTS,
  {
    name: "LED Panel Light",
    image: ledpanellight_round,
    description: "Energy-efficient LED panel lighting for commercial spaces.",
  },
  {
    name: "Industrial LED High Bay",
    image: ledhighbaylight ,
    description:
      "High-output LED lighting solutions for industrial facilities and warehouses.",
  },
  {
    name: "Smart LED Bulb",
    image: rechargablebulb,
    description:
      "IoT-enabled smart LED bulbs with remote control and scheduling capabilities.",
  },
  // {
  //   name: "PCB Manufacturing Service",
  //   image:
  //     "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&auto=format&fit=crop&q=80",
  //   description:
  //     "Custom PCB design and manufacturing services for electronics projects.",
  // },
  // {
  //   name: "Energy Monitoring System",
  //   image:
  //     "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=80",
  //   description:
  //     "Advanced monitoring systems for tracking and optimizing energy consumption.",
  // },
];

export { SOLAR_PRODUCTS, ALL_PRODUCTS, INDOOR_PRODUCTS, OUTDOOR_PRODUCTS };
