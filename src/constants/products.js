// products.js

const INDOOR_PRODUCTS = [
  {
    name: "LED Spike Light",
    image:
      "https://images.unsplash.com/photo-1590608897129-79d2766a5da8?w=800&auto=format&fit=crop&q=80",
    description:
      "5W with 420lm luminous flux, dimension Φ58x75mm. Perfect for accent lighting.",
  },
  {
    name: "LED Surface Light (Square)",
    image:
      "https://images.unsplash.com/photo-1499358517822-d8578907a095?w=800&auto=format&fit=crop&q=80",
    description:
      "Available from 6W (360lm, 122x122x35mm) to 24W (1800lm, 300x300x35mm).",
  },
  {
    name: "LED Panel Light (Square)",
    image:
      "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=800&auto=format&fit=crop&q=80",
    description:
      "Ranges from 3W (150lm, 85x85x21mm) to 24W (1800lm, 300x300x21mm).",
  },
  {
    name: "LED Down Light",
    image:
      "https://images.unsplash.com/photo-1507149833265-60c372daea22?w=800&auto=format&fit=crop&q=80",
    description: "9W producing 900lm, size 90x70mm with a hole size of 75mm.",
  },
  {
    name: "LED Surface Light (Round)",
    image:
      "https://images.unsplash.com/photo-1590608897129-79d2766a5da8?w=800&auto=format&fit=crop&q=80",
    description:
      "Variants from 6W (360lm, 122x35mm) to 24W (1800lm, 300x35mm).",
  },
  {
    name: "Rechargeable Bulb",
    image:
      "https://images.unsplash.com/photo-1499358517822-d8578907a095?w=800&auto=format&fit=crop&q=80",
    description: "9W bulb with backup of 4 hours, producing 900lm.",
  },
  {
    name: "Slim/Backlit Panel Light",
    image:
      "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=800&auto=format&fit=crop&q=80",
    description:
      "Available in multiple sizes from 2ft to 4ft, over 90% driver efficiency.",
  },
  {
    name: "DC Rechargeable Tube Light",
    image:
      "https://images.unsplash.com/photo-1507149833265-60c372daea22?w=800&auto=format&fit=crop&q=80",
    description:
      "5W tube light with a battery backup, solar panel included, 115 lm/W efficacy.",
  },
];

const OUTDOOR_PRODUCTS = [
  {
    name: "AC LED Street Lights",
    image:
      "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2f6?w=800&auto=format&fit=crop&q=80",
    description:
      "Robust street lights ranging from 15W to 150W, designed for city roads, highways, and residential complexes.",
  },
  {
    name: "AC LED Flood Lights (Down Choke & Back Choke)",
    image:
      "https://images.unsplash.com/photo-1507246207829-732ed643ea6f?w=800&auto=format&fit=crop&q=80",
    description:
      "High-performance flood lights available from 20W to 250W, suitable for wide area lighting.",
  },
  {
    name: "AC LED High Bay Lights",
    image:
      "https://images.unsplash.com/photo-1594382551103-d9b6dcf2c86d?w=800&auto=format&fit=crop&q=80",
    description:
      "Ideal for industrial environments, available from 70W to 250W.",
  },
  {
    name: "AC LED Well Glass Lights",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&auto=format&fit=crop&q=80",
    description:
      "Durable and robust well glass lights perfect for harsh environments.",
  },
  {
    name: "Solar Integrated Street Light",
    image:
      "https://images.unsplash.com/photo-1572099606223-6e29045d2a9f?w=800&auto=format&fit=crop&q=80",
    description:
      "Self-sustaining street lighting with integrated solar panels for efficient dusk to dawn lighting.",
  },
  {
    name: "Solar All-in-one Street Light",
    image:
      "https://images.unsplash.com/photo-1611346717951-32c702c578cc?w=800&auto=format&fit=crop&q=80",
    description:
      "Compact and easy to install solar street lights with a complete all-in-one design.",
  },
  {
    name: "Solar All-in-two Street Light",
    image:
      "https://images.unsplash.com/photo-1623177223515-3bbd608ae03d?w=800&auto=format&fit=crop&q=80",
    description:
      "Versatile solar street lighting system featuring separate panel and light for optimized placement.",
  },
];

const SOLAR_PRODUCTS = [
  {
    name: "Solar Panel - High Efficiency",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=80",
    description:
      "High-efficiency monocrystalline solar panels for residential and commercial use.",
  },
  {
    name: "Solar Inverter System",
    image:
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&auto=format&fit=crop&q=80",
    description:
      "State-of-the-art inverter technology for optimal energy conversion.",
  },
  {
    name: "Solar Home System",
    image:
      "https://images.unsplash.com/photo-1611346717951-32c702c578cc?w=800&auto=format&fit=crop&q=80",
    description:
      "Complete solar solution for residential properties with battery storage.",
  },
  {
    name: "Solar Street Light",
    image:
      "https://images.unsplash.com/photo-1623177223515-3bbd608ae03d?w=800&auto=format&fit=crop&q=80",
    description:
      "Autonomous solar-powered street lighting with dusk-to-dawn operation.",
  },
  {
    name: "Solar Water Pump",
    image:
      "https://images.unsplash.com/photo-1628917996825-3b8cc981aad1?w=800&auto=format&fit=crop&q=80",
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
    image:
      "https://images.unsplash.com/photo-1565819428385-cf377321357b?w=800&auto=format&fit=crop&q=80",
    description: "Energy-efficient LED panel lighting for commercial spaces.",
  },
  {
    name: "Industrial LED High Bay",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&auto=format&fit=crop&q=80",
    description:
      "High-output LED lighting solutions for industrial facilities and warehouses.",
  },
  {
    name: "Smart LED Bulb",
    image:
      "https://images.unsplash.com/photo-1560435650-41c3c3ed5417?w=800&auto=format&fit=crop&q=80",
    description:
      "IoT-enabled smart LED bulbs with remote control and scheduling capabilities.",
  },
  {
    name: "PCB Manufacturing Service",
    image:
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&auto=format&fit=crop&q=80",
    description:
      "Custom PCB design and manufacturing services for electronics projects.",
  },
  {
    name: "Energy Monitoring System",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=80",
    description:
      "Advanced monitoring systems for tracking and optimizing energy consumption.",
  },
];

export { SOLAR_PRODUCTS, ALL_PRODUCTS, INDOOR_PRODUCTS, OUTDOOR_PRODUCTS };
