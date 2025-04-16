// offerings.js - Data structure for the Offerings dropdown and product pages

// partners
import lkLogo from "../../public/partners/lk.png";
import fuji from "../../public/partners/fuji.svg";
import tataPowerLogo from "../../public/partners/tata.png";
import omron from "../../public/partners/omron.jpeg";
import meveic from "../../public/partners/meveic.jpeg";

const offerings = [
  {
    id: "industrial-automation",
    title: "Industrial Automation Solutions",
    partnerLogo: lkLogo,
    subcategories: [
      {
        id: "AC Drives",
        title: "AC Drives",
        products: [
          {
            id: "XD1000",
            name: "XD1000",
            imageUrl: "/products/ik/ac-drive/xd1000.png",
            partnerLogo: lkLogo,
            description:
              "The xD1000 Drive is a compact, versatile VFD ideal for general-purpose applications like pumps, fans, conveyors, and compressors, offering advanced motor control for energy efficiency and reliability across various industries and machine applications.",
            productPointers: [
              "Built in PID with 4 preset PID references, Wake up & sleep mode, PID predictive speed",
              "Auxiliary pump function (1 master + 1 slave)",
              "Catch on the fly (speed search / flying start)",
              "Fast stop ramp divider",
            ],
            partnerUrl:
              "https://www.lk-ea.com/products/industrial-automation-control/ac-drive/xd1000",
          },
          {
            id: "XD2000",
            name: "XD2000",
            imageUrl: "/products/ik/ac-drive/xd2000.png",
            partnerLogo: lkLogo,
            description:
              "The xD2000 Drive is a high-performance VFD offering advanced control, energy-saving modes, and seamless integration into automation systems, making it ideal for utility applications and both new installations and upgrades.",
            productPointers: [
              "Inbuilt DC Reactor",
              "Busbar plating to avoid chemical gas corrosion",
              "Control of Permanent Magnet Synchronous Motors",
              "Inbuilt EMC filter",
            ],
            partnerUrl:
              "https://www.lk-ea.com/products/industrial-automation-control/ac-drive/xd2000",
          },
          {
            id: "XD3000",
            name: "XD3000",
            imageUrl: "/products/ik/ac-drive/xd3000.png",
            description:
              "The xD3000 Drive is a compact, high-performance VFD with advanced motor control, energy efficiency, and seamless integration, ideal for OEM applications, new installations, and retrofits.",
            productPointers: [
              "Control of Permanent Magnet Synchronous Motors",
              "Motor surge limit function for Old, Poor quality, Rewound Motors",
              "Delinearization for Analog Inputs",
              "High frequency range up to 599Hz for high-speed motors",
            ],
            partnerUrl:
              "https://www.lk-ea.com/products/industrial-automation-control/ac-drive/xd3000",
          },
          {
            id: "XD4000",
            name: "XD4000",
            imageUrl: "/products/ik/ac-drive/xd4000.png",
            description:
              "The xD4000 Drive is an advanced VFD providing precise control, energy savings, and seamless integration for demanding industrial applications.",
            partnerLogo: "/images/partners/lk-logo.png",
            productPointers: [
              "Inbuilt EMC Filter C2 & C3",
              "Inbuilt DC Reactor entire range",
              "Inbuilt braking transistor upto 160kW HD",
              "Abundant multifunctional IOs for field interface",
            ],
            partnerUrl:
              "https://www.lk-ea.com/products/industrial-automation-control/ac-drive/xd4000",
          },
          {
            id: "Sx2000",
            name: "Sx2000",
            imageUrl: "/products/ik/ac-drive/sx2000.png",
            description:
              "The Sx2000 drives provide reliable, efficient motor control with advanced features, easy integration, and flexibility for various industrial applications.",
            partnerLogo: "/images/partners/lk-logo.png",
            productPointers: [
              "The integrated EMC filter minimizes electromagnetic interference, ensuring smoother operation. ",
              "The built-in DC reactor enhances energy efficiency and reduces harmonic distortion. ",
              "Output voltage control allows for precise adjustments to meet specific application requirements. ",
              "The KEB and Flying Start feature facilitates smooth restarts under dynamic loads without the need to reset. ",
            ],
            partnerUrl:
              "https://www.lk-ea.com/products/industrial-automation-control/ac-drive/sx2000",
          },
          {
            id: "Fx2000",
            name: "Fx2000",
            imageUrl: "/products/ik/ac-drive/fx2000.png",
            description:
              "The Fx2000 drives offer robust construction, energy efficiency, and advanced control, making them ideal for industrial motor control applications and enhancing operational efficiency.",
            partnerLogo: "/images/partners/lk-logo.png",
            productPointers: [
              "Brake control manages braking mechanisms efficiently, ensuring quick and safe stops that enhance operational safety and reduce wear on the system. ",
              "Kinetic energy buffering captures and reuses energy, which enhances overall efficiency during dynamic operations and reduces power consumption. ",
              "Output voltage control allows for precise voltage adjustments, optimising motor performance and ensuring optimal energy use. ",
            ],
            partnerUrl:
              "https://www.lk-ea.com/products/industrial-automation-control/ac-drive/fx2000",
          },
          {
            id: "Hx2000",
            name: "Hx2000",
            imageUrl: "/products/ik/ac-drive/hx2000.png",
            description:
              "The Hx2000 AC drives offer precision, advanced control, and energy efficiency, making them ideal for HVAC applications and improving operational effectiveness and sustainability.",
            partnerLogo: "/images/partners/lk-logo.png",
            productPointers: [
              "The pre-defined MACRO feature simplifies setup, accelerating deployment and reducing downtime.",
              "Integrated EMC filtering improves stability, reduces interference, and ensures compliance with standards.",
              "Time Event Scheduling and Real Time Clock automate operations, optimizing processes and system efficiency.",
            ],
            partnerUrl:
              "https://www.lk-ea.com/products/industrial-automation-control/ac-drive/hx2000",
          },
          {
            id: "Nx2000",
            name: "Nx2000",
            imageUrl: "/products/ik/ac-drive/nx2000.png",
            description:
              "The Nx2000 AC drives offer unmatched performance, precision, and reliability with advanced features, ensuring optimal efficiency and safety across various industrial applications.",
            partnerLogo: "/images/partners/lk-logo.png",
            productPointers: [
              "DIN rail mounting up to 2.2kW offers flexible, space-efficient installation.",
              "Integrated EMC filter ensures stable, reliable operation.",
              "Side-by-side installation allows compact, safe drive placement.",
              "Remote expansion keypad improves accessibility and ease of use",
            ],
            partnerUrl:
              "https://www.lk-ea.com/products/industrial-automation-control/ac-drive/nx2000",
          },
          {
            id: "Nx2000+",
            name: "Nx2000+",
            imageUrl: "/products/ik/ac-drive/nx2000plus.png",
            description:
              "The Nx2000+ drives offer advanced sensorless vector control, precise power adjustments, and enhanced efficiency, making them ideal for optimizing motor performance and energy usage across industrial applications.",
            partnerLogo: "/images/partners/lk-logo.png",
            productPointers: [
              "Flexible DIN rail mounting up to 4kW for space-efficient installation",
              "Increased control flexibility with two relay outputs",
              "Enhanced connectivity with dual port Ethernet",
              "Convenient remote operation with expansion keypad",
              "Stable operation with integrated EMC filter",
            ],
            partnerUrl:
              "https://www.lk-ea.com/products/industrial-automation-control/ac-drive/nx2000-plus",
          },
        ],
      },
      {
        id: "soft-starters",
        title: "Soft Starters",
        products: [
          {
            id: "xS1000",
            name: "xS1000",
            imageUrl: "/products/ik/soft-starters/xs1000.png",
            description:
              "The xS1000 Soft Starter offers controlled motor starting, advanced protection, energy-efficient performance, and seamless integration for diverse industrial applications.",
            partnerLogo: "/images/partners/lk-logo.png",
            productPointers: [
              "Compact design, small footprint",
              "Built-in bypass contactor",
              "Easy installation and operation",
              "Complements existing motor protection",
            ],
            partnerUrl:
              "https://www.lk-ea.com/products/industrial-automation-control/soft-starters/xs1000",
          },
          {
            id: "xS2000",
            name: "xS2000",
            imageUrl: "/products/ik/soft-starters/xs1000.png",
            description:
              "The xS2000 Soft Starter ensures smooth motor control, advanced protection, and energy-efficient operation, mitigating inrush currents and mechanical stress across various industrial applications.",
            partnerLogo: "/images/partners/lk-logo.png",
            productPointers: [
              "Compact design, small footprint",
              "Built-in bypass contactor",
              "Complements existing motor protection",
              "Easy installation and operation",
            ],
            partnerUrl:
              "https://www.lk-ea.com/products/industrial-automation-control/soft-starters/xs2000",
          },
          {
            id: "xS3000",
            name: "xS3000",
            imageUrl: "/products/ik/soft-starters/xs3000.png",
            description:
              "The LK-EA xS3000 Soft Starter provides efficient control for three-phase motors, minimizing mechanical stress, enhancing system longevity, and offering energy-efficient performance with advanced protection and monitoring features.",
            partnerLogo: "/images/partners/lk-logo.png",
            productPointers: [
              "Built-in bypass contractor",
              "Versatile starting & stopping methodsVersatile starting & stopping methods",
              "Screw-less design for easy and fast servicing",
              "USB port for easy and fast commissioning and data extraction",
            ],
            partnerUrl:
              "https://www.lk-ea.com/products/industrial-automation-control/soft-starters/xs3000",
          },
          {
            id: "xS4000",
            name: "xS4000",
            imageUrl: "/products/ik/soft-starters/xs4000.png",
            description:
              "The xS4000 Soft Starter offers seamless motor control with advanced features, energy optimization, communication options, and built-in protection, ensuring reliable performance and minimized wear across industrial applications.",
            partnerLogo: "/images/partners/lk-logo.png",
            productPointers: [
              "Built-in bypass contractor",
              "Versatile starting & stopping methods",
              "Screw-less design for easy and fast servicing",
              "Full graphical display with multi-languages support",
            ],
            partnerUrl:
              "https://www.lk-ea.com/products/industrial-automation-control/soft-starters/xs4000",
          },
        ],
      },
      {
        id: "servo-drives",
        title: "Servo Drives",
        products: [
          {
            id: "M5",
            name: "M5",
            imageUrl: "/products/ik/servo/m5.png",
            description:
              "The M5 Series Servo System offers high-speed, high-precision control with EtherCAT, IP65 protection, versatile positioning, and advanced features like resonance suppression and frequency analysis, ensuring robust, reliable performance in industrial applications.",
            partnerLogo: "/images/partners/lk-logo.png",
            productPointers: [
              "High-speed, high-precision control enhances machine performance and efficiency",
              "Multiple control options and robust protection for diverse industrial environments",
              "Real-time frequency analysis improves reliability",
              "PC tool simplifies configuration, tuning, and debugging",
            ],
            partnerUrl:
              "https://www.lk-ea.com/products/industrial-automation-control/servo/m5",
          },
        ],
      },
      {
        id: "Human-Machine-Interface",
        title: "Human-Machine Interface",
        products: [
          {
            id: "XT",
            name: "XT",
            imageUrl: "/products/ik/hmi/xt.png",
            description:
              "The XT series HMIs provide advanced visualisation and control for industrial processes, offering user-friendly software with pre-built graphics and programming blocks for efficient interface creation across various applications.",
            partnerLogo: "/images/partners/lk-logo.png",
            productPointers: [
              "Increased efficiency by reducing development time and effort",
              "Seamless integration with systems and devices through extensive connectivity",
              "Enhanced automation with features like datalogging and custom scripting",
            ],
            partnerUrl:
              "https://www.lk-ea.com/products/industrial-automation-control/human-machine-interface-hmi/xt",
          },
        ],
      },
    ],
  },
  {
    id: "water-wastewater",
    title: "Water and Wastewater Management Solutions",
    partnerLogo: fuji,
    subcategories: [
      {
        id: "Temperature-Controllers",
        title: "Temperature Controllers",
        products: [
          {
            id: "PXF",
            name: "PXF",
            imageUrl: "/products/fuji/pxf.png",
            partnerLogo: "/images/partners/fuji-electric-logo.png",
            description:
              "The PXF Series Digital Temperature Controller by Fuji Electric offers high-speed, precise temperature control with versatile input options and compact design for efficient industrial applications",
            productPointers: [
              "Fast processing speed of 50 ms with improved accuracy of ±0.2%",
              "Universal input compatibility with RTD, thermocouples, voltage, current, and mV",
              "Compact design, 36% smaller than conventional models, with easy setup and parameter change",
            ],
            partnerUrl:
              "https://www.fujielectric.com/products/sensors_measurements/instruments/product_detail/controller_pxf.html",
          },
          {
            id: "PXR3",
            name: "PXR3",
            imageUrl: "/products/fuji/pxr3.png",
            description:
              "The PXR3 Digital Thermostat by Fuji Electric offers precise overheat detection with flexible input options, alarm outputs, and a compact design for efficient temperature control.",
            productPointers: [
              "Accepts thermocouple or thermistor input for versatile temperature monitoring",
              "Provides configurable alarm settings with high/low limit alarms and optional relay outputs",
              "Compact 24 × 48 mm design with easy setup, UL and C-UL certified",
            ],
            partnerUrl:
              "https://www.fujielectric.com/products/sensors_measurements/instruments/product_detail/controller_pxr3_dt.html",
          },
          {
            id: "PXE",
            name: "PXE",
            imageUrl: "/products/fuji/pxe.png",
            description:
              "The PXE Digital Temperature Controller by Fuji Electric is a compact, versatile solution offering precise control, flexible input options, and advanced alarm features for industrial applications.",
            productPointers: [
              "Compact 48 x 48 mm design with IP66 waterproof front panel.",
              "Flexible control modes including On-off, PID, fuzzy, and two-degree-of-freedom PID with auto-tuning.",
              "Dual alarm outputs, customizable alarm settings, and relay or SSR drive output.",
            ],
            partnerUrl:
              "https://www.fujielectric.com/products/sensors_measurements/instruments/product_detail/controller_pxe.html",
          },
          {
            id: "PXH",
            name: "PXH",
            imageUrl: "/products/fuji/pxh.png",
            description:
              "The PXH Digital Controller by Fuji Electric offers high-speed, precise control with versatile input options and advanced communication features, making it ideal for process control applications.",
            productPointers: [
              "50 ms input sampling with 0.1% accuracy and 5-digit display for precise control.",
              "Supports various inputs, including thermocouple, RTD, and DC voltage/current",
              "IP66 front structure, easy parameter setting, and RS-485 communication for remote access.",
              ,
            ],
            partnerUrl:
              "https://www.fujielectric.com/products/sensors_measurements/instruments/product_detail/controller_pxh.html",
          },
          {
            id: "PUM",
            name: "PUM",
            imageUrl: "/products/fuji/pum.png",
            description:
              "The PUM Series Module Type Temperature Controller by Fuji Electric offers a flexible, multi-loop solution with fast control, extensive I/O options, and easy integration for diverse industrial applications.",
            productPointers: [
              "Supports up to 4 channels per module with programless communication.",
              "Fast control response within 100 ms and ramp soak functionality",
              "Expandable with multiple modules for tailored temperature control systems",
            ],
            partnerUrl:
              "https://www.fujielectric.com/products/sensors_measurements/instruments/product_detail/controller_pum.html",
          },
          {
            id: "PXR3 thermostat",
            name: "PXR3 thermostat",
            imageUrl: "/products/fuji/pxr3.png",
            description:
              "The PXR3 Digital Thermostat by Fuji Electric offers precise overheat detection with flexible input options, alarm outputs, and a compact design for efficient temperature control.",
            productPointers: [
              "Accepts thermocouple or thermistor input for versatile temperature monitoring",
              "Provides configurable alarm settings with high/low limit alarms and optional relay outputs",
              "Compact 24 × 48 mm design with easy setup, UL and C-UL certified",
            ],
            partnerUrl:
              "https://www.fujielectric.com/products/sensors_measurements/instruments/product_detail/controller_pxr3_dt.html",
          },
        ],
      },
      {
        id: "Ultrasonic Flow Meters",
        title: "Ultrasonic Flow Meters",
        products: [
          {
            id: "FSZ",
            name: "FSZ",
            imageUrl: "/products/fuji/fsz.png",
            description:
              "The FSZ Integral Ultrasonic Flowmeter by Fuji Electric provides easy installation, space-saving design, and precise flow measurement with advanced communication and temperature monitoring capabilities.",
            productPointers: [
              "Clamp-on type installation with no pipe modification required, reducing labor and installation costs.",
              "Integrated flow transmitter and detector in a compact design, 76% smaller than conventional models.",
              "RS-485 communication for real-time flow rate and temperature data output.",
            ],
            partnerUrl:
              "https://www.fujielectric.com/products/sensors_measurements/instruments/product_detail/flow_ultra_fsz.html",
          },
          {
            id: "FSJ",
            name: "FSJ",
            imageUrl: "/products/fuji/fsj.png",
            description:
              "The FSJ Ultrasonic Flowmeter by Fuji Electric offers accurate steam flow measurement with no plumbing required, low maintenance, and high adaptability for energy optimization in industrial applications",
            productPointers: [
              "Clamp-on installation with no need for pipe cutting, reducing downtime",
              "No pressure loss, ensuring seamless steam flow measurement",
              "Can convert to mass flow rate using density and temperature corrections",
            ],
            partnerUrl:
              "https://www.fujielectric.com/products/sensors_measurements/instruments/product_detail/flow_ultra_fsj.html",
          },
          {
            id: "FSC",
            name: "FSC",
            imageUrl: "/products/fuji/fsc.png",
            description:
              "The FSC Portable Ultrasonic Flowmeter offers high-accuracy flow measurement, data storage, and flexible features for various liquid flow applications in a compact, battery-powered design.",
            productPointers: [
              "Accuracy of ±1.0% of rate with fast response time ≤1s.",
              "Battery-powered for 12 hours of continuous operation with data storage on SD card",
              "Includes options for flow velocity profile measurement, consumed energy calculation, and USB connectivity for PC data transfer",
            ],
            partnerUrl:
              "https://www.fujielectric.com/products/sensors_measurements/instruments/product_detail/flow_ultra_fsc_fld_fsd.html",
          },
          {
            id: "FSV",
            name: "FSV",
            imageUrl: "/products/fuji/fsv.png",
            description:
              "The FSV Ultrasonic Flowmeter by Fuji Electric offers high-accuracy, fast-response liquid flow measurement with excellent anti-bubble performance and RS-485 communication for real-time data transfer.",
            productPointers: [
              "Accuracy of ±1% of rate with fast 0.2-second response.",
              "Compact design with easy operation from the front panel",
              "Supports a wide pipe range from 13 mm to 6000 mm, with RS-485 communication option",
            ],
            partnerUrl:
              "https://www.fujielectric.com/products/sensors_measurements/instruments/product_detail/flow_ultra_fsv.html",
          },
          {
            id: "FSVL",
            name: "FSVL",
            imageUrl: "/products/fuji/fsvl.png",
            description:
              "The FSVL Ultrasonic Flowmeter offers highly accurate, non-contact flow measurement with advanced features like energy calculation, dual-channel math functions, and dual-pipe measurement capabilities.",
            productPointers: [
              "Accuracy of 1.0% of rate with dual-path measurement for improved precision",
              "Energy consumption calculation and dual-pipe simultaneous measurement.",
              "RS-485 communication for real-time data and easy system integration.",
            ],
            partnerUrl:
              "https://www.fujielectric.com/products/sensors_measurements/instruments/product_detail/flow_ultra_fsv2.html",
          },
          {
            id: "FLR",
            name: "FLR",
            imageUrl: "/products/fuji/flr.png",
            description:
              "The FLR Ultrasonic Flowmeter by Fuji Electric offers accurate, non-intrusive flow measurement with advanced anti-bubble performance and fast response, ideal for a wide range of pipe sizes.",
            productPointers: [
              "Accuracy of ±1.5% of rate, with options for high accuracy (±1.0%).",
              "Supports pipe sizes from 25 mm to 1200 mm with extendable detectors.",
              "Fast response time of 0.2 seconds and RS-485 communication for real-time data.",
            ],
            partnerUrl:
              "https://www.fujielectric.com/products/sensors_measurements/instruments/product_detail/flow_ultra_flr_fls.html",
          },
        ],
      },
      {
        id: "Pressure Transmitters",
        title: "Pressure Transmitters",
        products: [
          {
            id: "FCX-AIV",
            name: "FCX-AIV",
            imageUrl: "/products/fuji/fcx.png",
            description:
              "The FCX-AⅣ Series Pressure and Differential Pressure Transmitters by Fuji Electric offer high-accuracy measurement, functional safety certification, and robust performance for various industrial applications.",
            productPointers: [
              "40ms high-speed measurement cycle with ±0.04% accuracy (optional).",
              "IEC 61508 SIL2/SIL3 functional safety certification for reliable operation.",
              "Wide temperature range (-40 to 120°C) and configurable output signals with HART protocol.",
            ],
            partnerUrl:
              "https://www.fujielectric.com/products/sensors_measurements/instruments/product_detail/flow_trans_fcx-aiii.html",
          },
          {
            id: "FFN/FFP",
            name: "FFN/FFP",
            imageUrl: "/products/fuji/ffn.png",
            description:
              "The FFN & FFP Equalizing Valves by Fuji Electric provide reliable pressure regulation for differential pressure transmitters, enhancing system stability in various industrial applications",
            productPointers: [
              "Operating pressures of 16 MPa and 42 MPa with Teflon gaskets for durability",
              "Fluid temperature range from -40°C to 120°C for diverse environmental conditions.",
              "Various process connections including Rc1/2, Rc1/4, NPT options for flexible integration.",
            ],
            partnerUrl:
              "https://www.fujielectric.com/products/sensors_measurements/instruments/product_detail/flow_trans_ffn_ffp.html",
          },
          {
            id: "FXW",
            name: "FXW",
            imageUrl:"/products/fuji/fxw.png",
            description:
              "The FXW Hand-Held Communicator by Fuji Electric enables efficient communication with transmitters, featuring a 16-digit LCD, rechargeable battery, and optional printing for on-site data handling.",
            productPointers: [
              "16-digit, 4-line LCD for clear display of transmitter data",
              "Built-in rechargeable battery with approximately 24 hours of battery life",
              "Optional printer for 24-digit thermal paper printing, ideal for on-site documentation",
            ],
            partnerUrl:
              "https://www.fujielectric.com/products/sensors_measurements/instruments/product_detail/flow_trans_fxw.html",
          },
          {
            id: "FVs",
            name: "FVs",
            imageUrl: "/products/fuji/fvs.png",
            description:
              "The FVS Orifice Plates by Fuji Electric provide reliable, accurate flow measurement for liquids, vapors, and gases, designed to meet JIS and ISO standards for various industrial applications",
            productPointers: [
              "Available in different types (FVA, FVB, FVC) for versatile applications.",
              "Supports a wide range of pipe diameters, from 25 mm to 1500 mm",
              "Constructed with durable materials like SUS304, SUS316, and PVC for long-lasting performance",
            ],
            partnerUrl:
              "https://www.fujielectric.com/products/sensors_measurements/instruments/product_detail/flow_trans_fvs.html",
          },
        ],
      },
    ],
  },
  {
    id: "renewable-energy",
    title: "Renewable Energy Solutions",
    partnerLogo: tataPowerLogo,
    subcategories: [
      {
        id: "Reneweable Energy Solution by Tata Power",
        title: "Reneweable Energy Solution by Tata Power",
        products: [
          {
            id: "Solar Rooftop",
            name: "Solar Rooftop",
            imageUrl: "/images/products/solar-rooftop.jpg",
            partnerLogo: "/images/partners/tata-power-logo.png",
            description:
              "High-efficiency solar inverters for residential and commercial installations.",
            productPointers: [
              "Comprehensive rooftop solar solutions",
              "Optimized for residential and commercial buildings",
              "End-to-end installation and maintenance services",
              "Advanced monitoring system included",
            ],
            partnerUrl: "https://www.pikag.com/solar-inverters",
          },
          {
            id: "Solar Microgrid",
            name: "Solar Microgrid",
            imageUrl: "/images/products/solar-microgrid.jpg",
            description:
              "Real-time monitoring solutions for solar power systems.",
            productPointers: [
              "Complete microgrid solutions for communities",
              "Integration of solar generation and battery storage",
              "Smart control systems for load management",
              "Scalable design for growing energy needs",
            ],
            partnerUrl: "https://www.pikag.com/solar-monitoring",
          },
          {
            id: "Solar Energy Storage",
            name: "Solar Energy Storage",
            imageUrl: "/images/products/solar-energy-storage.jpg",
            description:
              "Real-time monitoring solutions for solar power systems.",
            productPointers: [
              "Advanced battery storage systems",
              "Compatible with multiple solar installations",
              "Intelligent energy management",
              "Backup power during grid outages",
            ],
            partnerUrl: "https://www.pikag.com/solar-monitoring",
          },
        ],
      },
      {
        id: "Renewable Energy Solution by PikaG",
        title: "Renewable Energy Solution by PikaG",
        products: [
          {
            id: "battery-systems",
            name: "Battery Storage Systems",
            imageUrl: "/images/products/battery-systems.jpg",
            description:
              "Advanced battery storage solutions for renewable energy applications.",
            productPointers: [
              "High-capacity lithium-ion battery systems",
              "Modular design for flexible capacity",
              "Integrated battery management system",
              "Compatible with various renewable energy sources",
            ],
            partnerUrl: "https://www.pikag.com/battery-systems",
          },
        ],
      },
    ],
  },
  {
    id: "robotics",
    title: "Robotics Solutions",
    partnerLogo: omron,
    subcategories: [
      {
        id: "Artculated Robots",
        title: "Artculated Robots",
        products: [
          {
            id: "Articulated Robots",
            name: "Articulated Robots",
            imageUrl: "/images/products/articulated-robots.jpg",
            partnerLogo: "/images/partners/omron-logo.png",
            description:
              "Collaborative robots designed to work safely alongside humans.",
            productPointers: [
              "Multi-axis articulated robot arm systems",
              "Flexible programming options",
              "Variety of payload capacities available",
              "Precise positioning and repeatability",
            ],
            partnerUrl:
              "https://industrial.omron.us/en/products/collaborative-robots",
          },
          {
            id: "Delta Robots",
            name: "Delta Robots",
            imageUrl: "/images/products/delta-robots.jpg",
            description:
              "High-speed parallel robots for picking and packaging applications.",
            productPointers: [
              "High-speed pick and place operations",
              "Parallel kinematic structure for precision",
              "Compact work envelope",
              "Ideal for packaging and assembly applications",
            ],
            partnerUrl: "https://industrial.omron.us/en/products/delta-robots",
          },
        ],
      },
      {
        id: "robot-accessories",
        title: "Robot Accessories",
        products: [
          {
            id: "vision-systems",
            name: "Vision Systems",
            imageUrl: "/images/products/vision-systems.jpg",
            description:
              "Machine vision systems for robotic guidance and inspection.",
            productPointers: [
              "Integrated vision systems for robots",
              "Part identification and location",
              "Quality inspection capabilities",
              "Easy integration with robotic controllers",
            ],
            partnerUrl:
              "https://industrial.omron.us/en/products/vision-systems",
          },
        ],
      },
    ],
  },
  {
    id: "iot",
    title: "IoT Solutions",
    partnerLogo: meveic,
    subcategories: [
      {
        id: "industrial-iot",
        title: "Industrial IoT",
        products: [
          {
            id: "iot-gateways",
            name: "IoT Gateways",
            imageUrl: "/images/products/iot-gateways.jpg",
            description:
              "Industrial IoT gateway devices for data collection and transmission.",
            productPointers: [
              "Edge computing capability",
              "Multiple protocol support",
              "Secure data transmission",
              "Rugged design for industrial environments",
            ],
            partnerUrl: "https://industrial.omron.us/en/products/iot-gateways",
          },
          {
            id: "sensors-network",
            name: "Sensor Networks",
            imageUrl: "/images/products/sensor-networks.jpg",
            description:
              "Connected sensor networks for industrial monitoring applications.",
            productPointers: [
              "Wireless sensor network solutions",
              "Long battery life for remote deployments",
              "Wide range of sensor types available",
              "Scalable for large facility monitoring",
            ],
            partnerUrl: "https://industrial.omron.us/en/products/sensors",
          },
        ],
      },
      {
        id: "iot-software",
        title: "IoT Software Platforms",
        products: [
          {
            id: "cloud-platform",
            name: "Cloud Monitoring Platform",
            imageUrl: "/images/products/cloud-platform.jpg",
            description:
              "Cloud-based monitoring and analytics platform for industrial IoT applications.",
            productPointers: [
              "Real-time data visualization",
              "Advanced analytics and reporting",
              "Remote system management",
              "Custom dashboard creation",
            ],
            partnerUrl:
              "https://industrial.omron.us/en/products/cloud-platform",
          },
        ],
      },
    ],
  },
];

export default offerings;
