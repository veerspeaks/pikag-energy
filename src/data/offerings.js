// offerings.js - Data structure for the Offerings dropdown and product pages

const offerings = [
  {
    id: 'industrial-automation',
    title: 'Industrial Automation Solutions',
    subcategories: [
      {
        id: 'AC Drives',
        title: 'AC Drives',
        products: [
          {
            id: 'XD1000',
            name: 'XD1000',
            imageUrl: '/images/products/XD1000.jpg',
            partnerLogo: '/images/partners/lk-logo.png',
            description: 'Supervisory Control and Data Acquisition systems for industrial process monitoring and control.',
            productPointers: [
              'High-performance AC drive with exceptional torque control',
              'Built-in EMC filter reduces installation costs',
              'Compact design saves panel space',
              'Advanced energy-saving functions'
            ],
            partnerUrl: 'https://www.lk-ea.com/products/industrial-automation-control/ac-drive/xd1000?_gl=1*vlzhb4*_up*MQ..*_gs*MQ..&gclid=CjwKCAjwwe2_BhBEEiwAM1I7sc5YVJbbt3oT-ZCWrLgcmjZaY6kKuf_UIOwwIv8dyCeSKfDUEGXlTRoCyJwQAvD_BwE'
          },
          {
            id: 'XD2000',
            name: 'XD2000',
            imageUrl: '/images/products/XD2000.jpg',
            partnerLogo: '/images/partners/omron-logo.png',
            description: 'Programmable Logic Controllers for automation and control applications.',
            productPointers: [
              'Advanced motor control capabilities',
              'Wide power range to suit various applications',
              'Integrated safety functions',
              'Intuitive programming interface'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/controllers'
          },
          {
            id: 'XD3000',
            name: 'XD3000',
            imageUrl: '/images/products/XD3000.jpg',
            description: 'Programmable Logic Controllers for automation and control applications.',
            productPointers: [
              'High-speed processing for demanding applications',
              'Expanded I/O capacity',
              'Enhanced communication options',
              'Improved reliability and durability'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/controllers'
          },
          {
            id: 'XD4000',
            name: 'XD4000',
            imageUrl: '/images/products/XD4000.jpg',
            description: 'Programmable Logic Controllers for automation and control applications.',
            partnerLogo: '/images/partners/lk-logo.png',
            productPointers: [
              'Premium performance for high-demand applications',
              'Extended temperature range operation',
              'Reduced installation and maintenance costs',
              'Comprehensive diagnostic capabilities'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/controllers'
          },
          {
            id: 'Sx2000',
            name: 'Sx2000',
            imageUrl: '/images/products/Sx2000.jpg',
            description: 'Programmable Logic Controllers for automation and control applications.',
            partnerLogo: '/images/partners/lk-logo.png',
            productPointers: [
              'Compact size for space-constrained installations',
              'Fanless design for increased reliability',
              'Flexible mounting options',
              'Extended maintenance intervals'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/controllers'
          },
          {
            id: 'Fx2000',
            name: 'Fx2000',
            imageUrl: '/images/products/Fx2000.jpg',
            description: 'Programmable Logic Controllers for automation and control applications.',
            partnerLogo: '/images/partners/lk-logo.png',
            productPointers: [
              'Optimized for small to medium applications',
              'Quick setup and commissioning',
              'Modular design for future expansion',
              'Cost-effective automation solution'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/controllers'
          },
          {
            id: 'Hx2000',
            name: 'Hx2000',
            imageUrl: '/images/products/Hx2000.jpg',
            description: 'Programmable Logic Controllers for automation and control applications.',
            partnerLogo: '/images/partners/lk-logo.png',
            productPointers: [
              'High-speed I/O processing for time-critical applications',
              'Enhanced network connectivity options',
              'Ruggedized design for harsh environments',
              'Advanced motion control capabilities'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/controllers'
          },
          {
            id: 'Nx2000',
            name: 'Nx2000',
            imageUrl: '/images/products/Nx2000.jpg',
            description: 'Programmable Logic Controllers for automation and control applications.', 
            partnerLogo: '/images/partners/lk-logo.png',
            productPointers: [
              'Next-generation controller with enhanced performance',
              'Integrated security features',
              'Wide temperature range operation',
              'Reduced engineering time with intuitive software'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/controllers'
          },
          {
            id: 'Nx2000+',
            name: 'Nx2000+',
            imageUrl: '/images/products/Nx2000plus.jpg',
            description: 'Programmable Logic Controllers for automation and control applications.',
            partnerLogo: '/images/partners/lk-logo.png',
            productPointers: [
              'Premium controller with maximum performance',
              'Future-proof design with expansion capabilities',
              'Industry-leading data handling capacity',
              'Comprehensive integrated safety functions'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/controllers'
          }
        ]
      },
      {
        id: 'soft-starters',
        title: 'Soft Starters',
        products: [
          {
            id: 'xS1000',
            name: 'xS1000',
            imageUrl: '/images/products/xS1000.jpg',
            description: 'High-precision servo drive and motor solutions for accurate positioning applications.',
            partnerLogo: '/images/partners/lk-logo.png',
            productPointers: [
              'Smooth motor starting and stopping',
              'Reduced mechanical stress on equipment',
              'Lower peak current demands',
              'Simple installation and setup'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/drives-motion'
          },
          {
            id: 'xS2000',
            name: 'xS2000',
            imageUrl: '/images/products/xS2000.jpg',
            description: 'High-precision servo drive and motor solutions for accurate positioning applications.',
            partnerLogo: '/images/partners/lk-logo.png',
            productPointers: [
              'Advanced torque control during starting and stopping',
              'Built-in bypass contactors',
              'Integrated motor protection',
              'Energy-saving operation modes'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/drives-motion'
          },
          {
            id: 'xS3000',
            name: 'xS3000',
            imageUrl: '/images/products/xS3000.jpg',
            description: 'High-precision servo drive and motor solutions for accurate positioning applications.',
            partnerLogo: '/images/partners/lk-logo.png',
            productPointers: [
              'Advanced soft starting algorithms',
              'Multiple starting and stopping profiles',
              'Comprehensive protection features',
              'Expandable I/O capabilities'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/drives-motion'
          },
          {
            id: 'xS4000',
            name: 'xS4000',
            imageUrl: '/images/products/xS4000.jpg',
            description: 'High-precision servo drive and motor solutions for accurate positioning applications.',
            partnerLogo: '/images/partners/lk-logo.png',
            productPointers: [
              'Premium soft starter with enhanced control',
              'Sophisticated pump control features',
              'Advanced event logging and diagnostics',
              'Wide range of communication options'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/drives-motion'
          }
        ]
      },
      {
        id: 'servo-drives',
        title: 'Servo Drives',
        products: [
          {
            id: 'M5',
            name: 'M5',
            imageUrl: '/images/products/M5.jpg',
            description: 'High-precision servo drive and motor solutions for accurate positioning applications.',
            partnerLogo: '/images/partners/lk-logo.png',
            productPointers: [
              'High-performance servo system for precise motion control',
              'Compact design for space-critical applications',
              'Advanced tuning algorithms',
              'Multiple feedback options'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/drives-motion'
          },
          
        ]
      },
      {
        id: 'Human-Machine-Interface',
        title: 'Human-Machine Interface',
        products: [
          {
            id: 'XT',
            name: 'XT',
            imageUrl: '/images/products/XT.jpg',
            description: 'High-precision servo drive and motor solutions for accurate positioning applications.',
            partnerLogo: '/images/partners/lk-logo.png',
            productPointers: [
              'Intuitive touchscreen interface',
              'Rugged design for industrial environments',
              'Multiple display sizes available',
              'Comprehensive visualization capabilities'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/hmi'
          }
        ]
      }
    ]
  },
  {
    id: 'water-wastewater',
    title: 'Water and Wastewater Management Solutions',
    subcategories: [
      {
        id: 'Temperature-Controllers',
        title: 'Temperature Controllers',
        products: [
          {
            id: 'PXF',
            name: 'PXF',
            imageUrl: '/images/products/PXF.jpg',
            partnerLogo: '/images/partners/fuji-electric-logo.png',
            description: 'Precision flow monitoring solutions for water treatment applications.',
            productPointers: [
              'High-accuracy temperature measurement',
              'PID control with auto-tuning',
              'Multiple input types supported',
              'Compact panel-mount design'
            ],
            partnerUrl: 'https://www.fujielectric.com/products/sensors_measurements/instruments/product_series/controller.html#PXF'
          },
          {
            id: 'PXR3',
            name: 'PXR3',
            imageUrl: '/images/products/PXR3.jpg',
            description: 'Reliable level sensing solutions for water tanks and reservoirs.',
            productPointers: [
              'Micro-controller format for space-saving installation',
              'Dual display for better visibility',
              'Multiple alarm outputs',
              'Simple operation with minimal setup'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/temperature-controllers'
          },
          {
            id: 'PXE',
            name: 'PXE',
            imageUrl: '/images/products/PXE.jpg',
            description: 'Reliable level sensing solutions for water tanks and reservoirs.',
            productPointers: [
              'Economy series with essential functions',
              'Cost-effective temperature control',
              'Simplified programming',
              'Universal input for various sensor types'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/temperature-controllers'
          },
          {
            id: 'PXH',
            name: 'PXH',
            imageUrl: '/images/products/PXH.jpg',
            description: 'Reliable level sensing solutions for water tanks and reservoirs.',
            productPointers: [
              'High-performance model with advanced features',
              'Multiple control loops available',
              'Customizable display',
              'Extended communication options'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/temperature-controllers'
          },
          {
            id: 'PUM',
            name: 'PUM',
            imageUrl: '/images/products/PUM.jpg',
            description: 'Reliable level sensing solutions for water tanks and reservoirs.',
            productPointers: [
              'Multi-loop controller for complex processes',
              'Expandable I/O architecture',
              'Comprehensive data logging',
              'Advanced networking capabilities'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/temperature-controllers'
          },
          {
            id: 'PXR3 thermostat',
            name: 'PXR3 thermostat',
            imageUrl: '/images/products/PXR3-thermostat.jpg',
            description: 'Reliable level sensing solutions for water tanks and reservoirs.',
            productPointers: [
              'Specialized thermostat variant',
              'Simple temperature control',
              'Fixed differential settings',
              'Quick installation and setup'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/temperature-controllers'
          }
        ]
      },
      {
        id: 'Ultrasonic Flow Meters',
        title: 'Ultrasonic Flow Meters',
        products: [
          {
            id: 'FSZ',
            name: 'FSZ',
            imageUrl: '/images/products/FSZ.jpg',
            description: 'Complete control panel solutions for water treatment facilities.',
            productPointers: [
              'High-accuracy ultrasonic flow measurement',
              'Non-invasive clamp-on design',
              'No pressure loss or moving parts',
              'Suitable for large pipe diameters'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/ultrasonic-flow-meters'
          },
          {
            id: 'FSJ',
            name: 'FSJ',
            imageUrl: '/images/products/FSJ.jpg',
            description: 'Complete control panel solutions for water treatment facilities.',
            productPointers: [
              'Portable flow meter for field measurements',
              'Battery-powered operation',
              'Data logging capabilities',
              'Quick setup for temporary monitoring'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/ultrasonic-flow-meters'
          },
          {
            id: 'FSC',
            name: 'FSC',
            imageUrl: '/images/products/FSC.jpg',
            description: 'Complete control panel solutions for water treatment facilities.',
            productPointers: [
              'Compact design for small pipe applications',
              'Integrated display and controls',
              'Multiple output options',
              'Low maintenance requirements'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/ultrasonic-flow-meters'
          },
          {
            id: 'FSV',
            name: 'FSV',
            imageUrl: '/images/products/FSV.jpg',
            description: 'Complete control panel solutions for water treatment facilities.',
            productPointers: [
              'High-precision flow measurement',
              'Multi-channel capability',
              'Advanced signal processing',
              'Ethernet connectivity options'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/ultrasonic-flow-meters'
          },
          {
            id: 'FSVL',
            name: 'FSVL',
            imageUrl: '/images/products/FSVL.jpg',
            description: 'Complete control panel solutions for water treatment facilities.',
            productPointers: [
              'Large pipe diameter measurements',
              'Extended range capability',
              'Specialized for water utility applications',
              'Robust design for outdoor installations'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/ultrasonic-flow-meters'
          },
          {
            id: 'FLR',
            name: 'FLR',
            imageUrl: '/images/products/FLR.jpg',
            description: 'Complete control panel solutions for water treatment facilities.',
            productPointers: [
              'Liquid flow meter for precise measurements',
              'Small diameter pipe applications',
              'Compact and lightweight design',
              'Easy installation and configuration'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/ultrasonic-flow-meters'
          },
          
        ]
      },
      {
        id: 'Pressure Transmitters',
        title: 'Pressure Transmitters',
        products: [
          {
            id: 'FCX-AIV',
            name: 'FCX-AIV',
            imageUrl: '/images/products/FCX-AIV.jpg',
            description: 'Complete control panel solutions for water treatment facilities.',
            productPointers: [
              'High-accuracy pressure measurement',
              'Advanced differential pressure sensing',
              'Resistant to corrosive environments',
              'Multiple mounting options'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/pressure-transmitters'
          },
          {
            id: 'FFN/FFP',
            name: 'FFN/FFP',
            imageUrl: '/images/products/FFN-FFP.jpg',
            description: 'Complete control panel solutions for water treatment facilities.',
            productPointers: [
              'Compact pressure transmitter design',
              'Suitable for limited space applications',
              'Fast response time',
              'Multiple process connection options'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/pressure-transmitters'
          },
          {
            id: 'FXW',
            name: 'FXW',
            imageUrl: '/images/products/FXW.jpg',
            description: 'Complete control panel solutions for water treatment facilities.',
            productPointers: [
              'Waterproof design for submersible applications',
              'Specialized for level measurement',
              'High overload resistance',
              'Extended temperature range operation'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/pressure-transmitters'
          },
          {
            id: 'FVs',
            name: 'FVs',
            imageUrl: '/images/products/FVs.jpg',
            description: 'Complete control panel solutions for water treatment facilities.',
            productPointers: [
              'Variable range pressure transmitter',
              'Field-adjustable settings',
              'Digital display option',
              'Advanced diagnostics features'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/pressure-transmitters'
          }
        ]
      }
    ]
  },
  {
    id: 'renewable-energy',
    title: 'Renewable Energy Solutions',
    subcategories: [
      {
        id: 'Reneweable Energy Solution by Tata Power',
        title: 'Reneweable Energy Solution by Tata Power',
        products: [
          {
            id: 'Solar Rooftop',
            name: 'Solar Rooftop',
            imageUrl: '/images/products/solar-rooftop.jpg',
            partnerLogo: '/images/partners/tata-power-logo.png',
            description: 'High-efficiency solar inverters for residential and commercial installations.',
            productPointers: [
              'Comprehensive rooftop solar solutions',
              'Optimized for residential and commercial buildings',
              'End-to-end installation and maintenance services',
              'Advanced monitoring system included'
            ],
            partnerUrl: 'https://www.pikag.com/solar-inverters'
          },
          {
            id: 'Solar Microgrid',
            name: 'Solar Microgrid',
            imageUrl: '/images/products/solar-microgrid.jpg',
            description: 'Real-time monitoring solutions for solar power systems.',
            productPointers: [
              'Complete microgrid solutions for communities',
              'Integration of solar generation and battery storage',
              'Smart control systems for load management',
              'Scalable design for growing energy needs'
            ],
            partnerUrl: 'https://www.pikag.com/solar-monitoring'
          },
          {
            id: 'Solar Energy Storage',
            name: 'Solar Energy Storage',
            imageUrl: '/images/products/solar-energy-storage.jpg',
            description: 'Real-time monitoring solutions for solar power systems.',
            productPointers: [
              'Advanced battery storage systems',
              'Compatible with multiple solar installations',
              'Intelligent energy management',
              'Backup power during grid outages'
            ],
            partnerUrl: 'https://www.pikag.com/solar-monitoring'
          },
        ]
      },
      {
        id: 'Renewable Energy Solution by PikaG',
        title: 'Renewable Energy Solution by PikaG',
        products: [
          {
            id: 'battery-systems',
            name: 'Battery Storage Systems',
            imageUrl: '/images/products/battery-systems.jpg',
            description: 'Advanced battery storage solutions for renewable energy applications.',
            productPointers: [
              'High-capacity lithium-ion battery systems',
              'Modular design for flexible capacity',
              'Integrated battery management system',
              'Compatible with various renewable energy sources'
            ],
            partnerUrl: 'https://www.pikag.com/battery-systems'
          }
        ]
      }
    ]
  },
  {
    id: 'robotics',
    title: 'Robotics Solutions',
    subcategories: [
      {
        id: 'Artculated Robots',
        title: 'Artculated Robots',
        products: [
          {
            id: 'Articulated Robots',
            name: 'Articulated Robots',
            imageUrl: '/images/products/articulated-robots.jpg',
            partnerLogo: '/images/partners/omron-logo.png',
            description: 'Collaborative robots designed to work safely alongside humans.',
            productPointers: [
              'Multi-axis articulated robot arm systems',
              'Flexible programming options',
              'Variety of payload capacities available',
              'Precise positioning and repeatability'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/collaborative-robots'
          },
          {
            id: 'Delta Robots',
            name: 'Delta Robots',
            imageUrl: '/images/products/delta-robots.jpg',
            description: 'High-speed parallel robots for picking and packaging applications.',
            productPointers: [
              'High-speed pick and place operations',
              'Parallel kinematic structure for precision',
              'Compact work envelope',
              'Ideal for packaging and assembly applications'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/delta-robots'
          }
        ]
      },
      {
        id: 'robot-accessories',
        title: 'Robot Accessories',
        products: [
          {
            id: 'vision-systems',
            name: 'Vision Systems',
            imageUrl: '/images/products/vision-systems.jpg',
            description: 'Machine vision systems for robotic guidance and inspection.',
            productPointers: [
              'Integrated vision systems for robots',
              'Part identification and location',
              'Quality inspection capabilities',
              'Easy integration with robotic controllers'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/vision-systems'
          }
        ]
      }
    ]
  },
  {
    id: 'iot',
    title: 'IoT Solutions',
    subcategories: [
      {
        id: 'industrial-iot',
        title: 'Industrial IoT',
        products: [
          {
            id: 'iot-gateways',
            name: 'IoT Gateways',
            imageUrl: '/images/products/iot-gateways.jpg',
            description: 'Industrial IoT gateway devices for data collection and transmission.',
            productPointers: [
              'Edge computing capability',
              'Multiple protocol support',
              'Secure data transmission',
              'Rugged design for industrial environments'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/iot-gateways'
          },
          {
            id: 'sensors-network',
            name: 'Sensor Networks',
            imageUrl: '/images/products/sensor-networks.jpg',
            description: 'Connected sensor networks for industrial monitoring applications.',
            productPointers: [
              'Wireless sensor network solutions',
              'Long battery life for remote deployments',
              'Wide range of sensor types available',
              'Scalable for large facility monitoring'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/sensors'
          }
        ]
      },
      {
        id: 'iot-software',
        title: 'IoT Software Platforms',
        products: [
          {
            id: 'cloud-platform',
            name: 'Cloud Monitoring Platform',
            imageUrl: '/images/products/cloud-platform.jpg',
            description: 'Cloud-based monitoring and analytics platform for industrial IoT applications.',
            productPointers: [
              'Real-time data visualization',
              'Advanced analytics and reporting',
              'Remote system management',
              'Custom dashboard creation'
            ],
            partnerUrl: 'https://industrial.omron.us/en/products/cloud-platform'
          }
        ]
      }
    ]
  }
];

export default offerings; 