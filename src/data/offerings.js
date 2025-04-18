// offerings.js - Data structure for the Offerings dropdown and product pages

// partners
import lkLogo from "../../public/partners/lk.png";
import fuji from "../../public/partners/fuji.svg";
import tataPowerLogo from "../../public/partners/tata.png";
import omron from "../../public/partners/omron.jpeg";
import maestrotek from "../../public/partners/maestrotek.jpg";

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
              "Capacity: 0.1kW to 15kW",
              "Voltage: 200Vac / 400Vac",
              "Speed: 1500rpm/ 3000rpm",
              "Control: Pulse/Analog or Network",
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
              "HMI Range: Text Display",
              "4 inch to 15 inch TFT color LCD",
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
            imageUrl: "https://www.tatapower.com/adobe/dynamicmedia/deliver/dm-aid--44404488-72bb-43b3-98bd-065132dc6d12/banner-mobile-img2.png.webp?preferwebp=true&width=1440",
            partnerLogo: "/images/partners/tata-power-logo.png",
            description:
              "High-efficiency solar inverters for residential and commercial installations.",
            productPointers: [
              "Comprehensive rooftop solar solutions",
              "Optimized for residential and commercial buildings",
              "End-to-end installation and maintenance services",
              "Advanced monitoring system included",
            ],
            partnerUrl: "https://www.tatapower.com/solaroof",
          },
          {
            id: "Solar Microgrid",
            name: "Solar Microgrid",
            imageUrl: "https://www.tatapower.com/adobe/dynamicmedia/deliver/dm-aid--817533db-2eca-47c6-8736-9510f23572d5/Working.JPG.webp?width=4000&preferwebp=true",
            description:
              "Real-time monitoring solutions for solar power systems.",
            productPointers: [
              "Complete microgrid solutions for communities",
              "Integration of solar generation and battery storage",
              "Smart control systems for load management",
              "Scalable design for growing energy needs",
            ],
            partnerUrl: "https://www.tatapower.com/renewables/solar-microgrids",
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
      // {
      //   id: "Renewable Energy Solution by PikaG",
      //   title: "Renewable Energy Solution by PikaG",
      //   products: [
      //     {
      //       id: "battery-systems",
      //       name: "Battery Storage Systems",
      //       imageUrl: "/images/products/battery-systems.jpg",
      //       description:
      //         "Advanced battery storage solutions for renewable energy applications.",
      //       productPointers: [
      //         "High-capacity lithium-ion battery systems",
      //         "Modular design for flexible capacity",
      //         "Integrated battery management system",
      //         "Compatible with various renewable energy sources",
      //       ],
      //       partnerUrl: "https://www.pikag.com/battery-systems",
      //     },
      //   ],
      // },
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
            id: "Viper",
            name: "Viper",
            imageUrl: "https://assets.omron.com/m/1f2e67c869262df6/Square_M-Viper-s850-jpg.jpg",
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
              "https://automation.omron.com/en/mx/products/family/Viper",
          },
        ],
      },
      {
        id: "Collaborative Robots",
        title: "Collaborative Robots",
        products: [
          {
            id: "TM S Series Collaborative Robot",
            name: "TM S Series Collaborative Robot",
            imageUrl: "/images/products/vision-systems.jpg",
            description:
              "Machine vision systems for robotic guidance and inspection.",
            productPointers: [
              "Easy-to-use programming interface (Flowchart and Script programming language available)",
              "New Robot Stick and Teach Pendant for programming and operation",
              "31 certified Safety functions in compliance with ISO 13849-1, Cat.3, PLd, ISO 10218-1 Safety - - - - - Standards and UL/CSA certified",
              "Built-in vision and landmark tool for flexible and fast changeover",
              "Plug and play accessories for easy integration",
              "Anti-cutting oil corrosion joint covers",
            ],
            partnerUrl:
              "https://automation.omron.com/en/mx/products/family/Omron%20TM%20S%20Series%20Robots",
          },
          {
            id: "Omron TM Robots",
            name: "Omron TM Robots",
            imageUrl: "https://assets.omron.com/m/18a9722c037a30c6/Landscape_L-Collaborative_Robot_TM_Image-jpg.jpg",
            description:
              "High-speed collaborative robot for precise pick and place operations.",
            productPointers: [
              "Ast and simple programming",
              "Built-in intelligent vision",
              "This product complies with the combined scope of ISO 10218-1:2011 and ISO/TS-15066",
              "Fast changeover using TMvision and Landmark",
              "Advanced collaborative control",
              "External Camera Support: Optional software to support 2 additional GigE vision cameras",
            ],
            partnerUrl:
              "https://automation.omron.com/en/mx/products/family/Omron%20TM%20Robots",
          },
        ],
      },
      {
        id: "Mobile Robots",
        title: "Mobile Robots",
        products: [
          {
            id: "MD-Series Autonomous Mobile Robot",
            name: "MD-Series Autonomous Mobile Robot",
            imageUrl: "/images/products/mobile-robots.jpg",
            description:
              "Mobile robots for flexible and efficient material handling.",
            productPointers: [
              "High-precision positioning and navigation",
              "Flexible and efficient material handling",
              "Advanced safety features",
              "Easy integration with existing systems",
            ],
            partnerUrl:
              "https://automation.omron.com/en/mx/products/family/MD-Series%20Autonomous%20Mobile%20Robot",
          },
          {
            id: "HD-1500 Series Autonomous Mobile Robot",
            name: "HD-1500 Series Autonomous Mobile Robot",
            imageUrl: "https://assets.omron.com/m/1212d654503d93c3/Landscape_L-HD-1500_Product_image.jpg",
            description:
              "Mobile robots for flexible and efficient material handling.",
            productPointers: [
              "1,500 Kg large capacity payload",
              "Dynamic intelligent 360° safety",
              "Integrated automation controls",
            ],
            partnerUrl:
              "https://automation.omron.com/en/mx/products/family/HD",
          },
          {
            id: "LD Series Autonomous Mobile Robot",
            name: "LD Series Autonomous Mobile Robot",
            imageUrl: "https://assets.omron.com/m/438d82ed579472a4/Landscape_L-Mobile_Robot_Product-News-jpg.jpg",
            description:
              "Mobile robots for flexible and efficient material handling.",
            productPointers: [
              "Onboard laser sensing and navigation",
              "Rearward obstacle detection",
              "Automatic dock charging",
              "Power and control of custom topper units",
            ],
            partnerUrl:
              "https://automation.omron.com/en/mx/products/family/LD",
          },
          {
            id: "Mobile I/O Robots",
            name: "Mobile I/O Robots",
            imageUrl: "https://assets.omron.com/m/21a0befdeab91616/Landscape_L-Omron-IO-Blank-Screen-4478.jpg",
            description:
              "Mobile robots for flexible and efficient material handling.",
            productPointers: [
              "Provides ability to simultaneously call autonomous mobile robots (AMRs) and operate external devices",
              "Enables manual activation of devices connected to built-in outputs",
              "Backlit LCD display with intuitive UI communicates detailed call and I/O statuses",
              "Connection via wired or wireless connections",
            ],
            partnerUrl:
              "https://automation.omron.com/en/mx/products/family/Mobile%20Interfaces",
          },
          {
            id: "Mobile Planner Robot Management Software",
            name: "Mobile Planner Robot Management Software",
            imageUrl: "https://assets.omron.com/m/6f578f40b75957d7/Square_M-MobilePlanner_Tablet_edition.jpg",
            description:
              "Mobile robots for flexible and efficient material handling.",
            productPointers: [
              "Omron's MobilePlanner Tablet Edition is an easy to use, portable, monitoring and control user interface tool for Omron mobile robots.",
              "Omron also offers the MobilePlanner PC edition which provides full configuration and control capabilities for Omron mobile robots, Enterprise Manager with map editing and job administrations.",
            ],
            partnerUrl:
              "https://automation.omron.com/en/mx/products/family/Mobile%20Planner",
          },
        ],
      },
      {
        id: "Parallel Robots",
        title: "Parallel Robots",
        products: [
          {
            id: "Sysmac Delta",
            name: "Sysmac Delta",
            imageUrl: "https://assets.omron.com/m/4cadd908564c4a55/Landscape_L-Washdown_Delta_robot-jpg.jpg",
            description:
              "Parallel robots for precise and efficient assembly operations.",
            productPointers: [
              "Control of up to 8 robots by one controller",
              "Degrees of freedom: 3 + 1 (rotational axis optional)",
              "Up to 200 cycle per minute",
              "Model range from 450 to 1600 mm working range",
              "Payload range: 1 to 8 kg",
              "IP class range: IP65, IP67, IP69K",
            ],
            partnerUrl:
              "https://automation.omron.com/en/mx/products/family/Sysmac%20Delta",
          },
          {
            id: "Hornet Parallel Robot",
            name: "Hornet Parallel Robot",
            imageUrl: "https://assets.omron.com/m/18afb13e13b5f7d5/Landscape_L-Hornet_3-jpg.jpg",
            description:
              "Parallel robots for precise and efficient assembly operations.",
            productPointers: [
              "Hornet 565 requires no external control electronics, with all amplifiers and controls fully embedded into the robot",
              "Extended vertical reach allows for a 0.36 m3 (12.7 ft3) workspace, enabling a wider variety of packages to be used",
              "Industry-leading conveyor tracking capabilities allow for <5mm repeatability at all coveyor speeds (pending)",
            ],
            partnerUrl:
              "https://automation.omron.com/en/mx/products/family/Hornet",
          },
          {
            id: 'iX4 Parallel Robot',
            name: 'iX4 Parallel Robot',
            imageUrl: "https://assets.omron.com/m/786dfc9f729fae14/Landscape_L-iX4-800-View6.jpg",
            description:
              "Parallel robots for precise and efficient assembly operations.",
              
            productPointers: [
              "Built-in amplifiers and controls fully embedded into the robot",
              "EtherCAT connectivity to the Omron NJ501-R controller and programming through Sysmac Studio in the familiar IEC 61131-3 programming language or scripting (eV+)",
              "Integrated temperature sensors monitor heat in servo motors to prevent damage",
              "Diagnostic display on robot enables faster troubleshooting",
              "USDA and FDA accepted for primary food handling",
            ],
            partnerUrl:
              "https://automation.omron.com/en/mx/products/family/iX4",
          },
          {
            id: 'iX3 Parallel Robot',
            name: 'iX3 Parallel Robot',
            imageUrl: "https://assets.omron.com/m/7e1e068708678c6b/Landscape_L-iX3-565-3-Axis-View-7.jpg",
            description:
              "Parallel robots for precise and efficient assembly operations.",
            productPointers: [
              "Built-in amplifiers and controls fully embedded into the robot",
              "EtherCAT connectivity to the Omron NJ501-R controller and programming through Sysmac Studio in the familiar IEC 61131-3 programming language or scripting (eV+)",
              "Extended vertical reach allows for a 0.36 m3 (12.7 ft3) workspace, enabling a wider variety of packages to be used",
              "0.32 s cycle time enables higher product throughput and reduces cost per pick",
            ],
            partnerUrl:
              "https://automation.omron.com/en/mx/products/family/iX3",
          }
        ],
      },
      {
        id: "Part Feeder",
        title: "Part Feeder",
        products: [
          {
            id: "AnyFeeder Part Feeding Solution",
            name: "AnyFeeder Part Feeding Solution",
            imageUrl: "https://assets.omron.com/m/7259033778c62d41/Landscape_L-AnyFeeder_Product_Solution_Image-jpg.jpg",
            description:
              "Part feeder for precise and efficient assembly operations.",
            productPointers: [
              "Provide a complete solution with integrated components and software",
              "Feeds a multitude of products",
              "Eliminates multiple feeder systems on your line",
              "Perfect for lines requiring rapid and frequent changeovers",
              "No fixturing required",
              "Integrated vision refinement on the fly allows for vision verification of parts, increasing placement accuracy to within 17 microns",
              "Automatically flips and shakes parts to separate and position for fast pick up",
              "Dual configuration further increases productivity",
              "Feeds various material types including plastic, rubber, metal, glass, and others",
            ],
            partnerUrl:
              "https://automation.omron.com/en/mx/products/family/AnyFeeder",
          }
        ],
      },
      {
        id: "Robot Software",
        title: "Robot Software",
        products: [
          {
            id: "Omron TM Flow Software",
            name: "Omron TM Flow Software",
            imageUrl: "https://assets.omron.com/m/5ec327b951b4d595/Square_M-TMFlow_Software_Image.jpg",
            description:
              "Robot software for precise and efficient assembly operations.",
            productPointers: [
              "Omron TM Flow is a software solution for Omron robots that allows for easy programming and operation.",
              "It is a user-friendly software that allows for easy programming and operation.",
              "It is a software that allows for easy programming and operation.",
            ],
            partnerUrl:
              "https://automation.omron.com/en/mx/products/family/Omron%20TM%20Software",
          },
          {
            id: "IPC Application Controller",
            name: "IPC Application Controller",
            imageUrl: "https://assets.omron.com/m/3fa0612ad7773a65/Landscape_L-OMRON_I4L-0596.jpg",
            description:
              "Robot software for precise and efficient assembly operations.",
            productPointers: [
              "Built-in vision processor with 128GB SSD, optimized to process high resolution, high frame rate images, with ACE 4.X",
              "System configuration by PC, including Sysmac Studio",
              "Supports run-time control of ACE 'Manager' software packages such as Vision Manager, PackManager and RecipeManager",
              "Unique simplified thermal design to maximize uptime",
            ],
            partnerUrl:
              "https://automation.omron.com/en/mx/products/family/Application%20Controller",
          },
          {
            id: "Automation Control Environment",
            name: "Automation Control Environment",
            imageUrl: "https://assets.omron.com/m/57d14a06aac49fc2/Landscape_L-ACE-4-x.png",
            description:
              "Robot software for precise and efficient assembly operations.",
            productPointers: [
              "Fast emulation and 3D visualization for quick proof of concept",
              "Wizard-based user-friendly interface to teach, calibrate, and operate Omron robots",
              "Recipe Manager simplifies management of manufacturing process and handles a range of product variations, ideal for flexible automation to reduce changeover time",
              "Optional add-on 'Manager' packages further ACE capabilities with custom, application-specific tool sets that add functionality and reduce setup complexity",
            ],
            partnerUrl:
              "https://automation.omron.com/en/mx/products/family/Robot%20Software",
          }
        ],
      },
      {
        id: "SCARA Robots",
        title: "SCARA Robots",
        products: [
          {
            id: "i4L-Series",
            name: "i4L-Series",
            imageUrl: "https://assets.omron.com/m/2c1ef3166217b1fd/Landscape_L-i4L-0615.jpg",
            description:
              "SCARA robots for precise and efficient assembly operations.",
            productPointers: [
              "Fast cycle times with high duty ratings ensure sustained throughput performance",
              "Powerful servos motors handle payloads up to 5kg with ease",
              "Advanced and robust industrial design provides years of worry-free operation",
            ],
            partnerUrl:
              "https://automation.omron.com/en/mx/products/family/i4L",
          },
          {
            id: "i4H-Series",
            name: "i4H-Series",
            imageUrl: "https://assets.omron.com/m/1c8e4cbec5220acb/Landscape_L-i4H-group-1.jpg",
            description:
              "SCARA robots for precise and efficient assembly operations.",
            productPointers: [
              "High payload up to 15kg",
              "High-speed cycle times",
              "Highly repeatable ±0.015mm positioning (XY)",
              "Space saving built-in controller",
              "Intuitive robot mounted LCD status display and RGB light ring",
            ],
            partnerUrl:
              "https://automation.omron.com/en/mx/products/family/i4H",
          },
          {
            id: "e-Cobra  ",
            name: "e-Cobra",
            imageUrl: "https://assets.omron.com/m/1c238a6257f1977c/Landscape_L-eCobra-800-1400x400-jpg.jpg",
            description:
              "SCARA robots for precise and efficient assembly operations.",
            productPointers: [
              "Standalone and Integrated Controller versions available",
              "EtherCAT connectivity to the Omron NJ501-R controller and programming through Sysmac Studio in the familiar IEC 61131-3 programming language or scripting (eV+)",
              "Rapid deployment with ePLC Connect and ePLC I/O using familiar ladder logic programming languages of existing PLC (IEC 61131-3) for standalone models",
              "All amplifiers and controls are fully embedded into the robot to maximize valuable floor space and reduce installation costs (cables, control cabinets, labor, etc)",
            ],
            partnerUrl:
              "https://automation.omron.com/en/mx/products/family/e-Cobra",
          },
          {
            id: "Cobra",
            name: "Cobra",
            imageUrl: "https://assets.omron.com/m/29fdd5e309915f1b/Square_M-Cobra_650_Product_Image-jpg.jpg",
            description:
              "SCARA robots for precise and efficient assembly operations.",
            productPointers: [
              "High-speed, high-precision, and high-accuracy",
              "Compact and space-saving design",
              "High-speed, high-precision, and high-accuracy",
              "Compact and space-saving design",
            ],
            partnerUrl:
              "https://automation.omron.com/en/mx/products/family/Cobra",
          }
        ],
      },
    ],
  },
  {
    id: "iiot",
    title: "Industrial IoT Solutions",
    partnerLogo: maestrotek,
    subcategories: [
      {
        id: "industrial-iot",
        title: "Industrial IoT",
        products: [
          {
            id: "SP-1002-4S-AL",
            name: "SP-1002-4S-AL",
            imageUrl: "/products/maestro/sp-1002-4s-al.png",
            description:
              "Industrial IoT gateway devices for data collection and transmission.",
            productPointers: [
              "High speed 2GHz",
              "4G GSM Modem with SIM Slot",
              "WiFi 802.11 a/b/g/n (Optional)",
              "Data loss prevention and fail safe operation",
            ]
          },
          {
            id: "SP-1000 Series",
            name: "SP-1000 Series",
            imageUrl: "/products/maestro/sp-1000-series.png",
            description:
              "Connected sensor networks for industrial monitoring applications.",
            productPointers: [
              "4G GSM Modem with SIM Slot",
              "WiFi 802.11 a/b/g/n (Optional)s",
              "Data loss prevention and fail safe operation",
              "TLS 1.2 + encrypted cloud communication",
            ]
          },
          {
            id: "SP-2004",
            name: "SP-2004",
            imageUrl: "/products/maestro/sp-2004.png",
            description:
              "Connected sensor networks for industrial monitoring applications.",
            productPointers: [
              "64 bit (2.0 GHz/2.6GHz) Processor",
              "4GB RAM",
              "IEC61131-3 / Node-RED / Python",
              "TLS 1.2 + encrypted cloud communication",
            ]
          },
          {
            id: "CloudXTU-M3005",
            name: "CloudXTU-M3005",
            imageUrl: "/products/maestro/cloudxtu-m3005.png",
            description:
              "Connected sensor networks for industrial monitoring applications.",
            productPointers: [
              "CPU - Intel Atom E3845, Frequency - 1.91 GHz",
              "BIOS - AMI SPI Flash BIOS",
              "Watchdog timer 256 level time interval system reset, software programmable",
              "Microsoft Windows - Windows 7, Windows 7 Embedded Linux - Kernal 3.x",
            ]
          }
        ],
      }
      
    ],
  },
];

export default offerings;
