

import xd1000 from "../../public/products/ik/ac-drive/xd1000.png";
import xd2000 from "../../public/products/ik/ac-drive/xd2000.png";
import xd3000 from "../../public/products/ik/ac-drive/xd3000.png";
import xd4000 from "../../public/products/ik/ac-drive/xd4000.png";
import sx2000 from "../../public/products/ik/ac-drive/sx2000.png";
import fx2000 from "../../public/products/ik/ac-drive/fx2000.png";
import hx2000 from "../../public/products/ik/ac-drive/hx2000.png";
import nx2000 from "../../public/products/ik/ac-drive/nx2000.png";
import nx2000plus from "../../public/products/ik/ac-drive/nx2000plus.png";


const AC_DRIVE = [
    {
        name: "xD1000 AC Drives",
        image: "/products/xd1000.png",
        description: "The xD1000 series is a compact, high-performance AC drive designed for a wide range of applications. It features advanced control algorithms, built-in safety functions, and a user-friendly interface."
    },
    {
        name: "xD2000 AC Drives",
        image: "/products/xd2000.png",
        description: "The xD2000 series offers enhanced precision and control for variable speed applications. It integrates seamlessly with industrial networks and provides exceptional durability and scalability."
    },
    {
        name: "xD3000 AC Drives",
        image: "/products/xd3000.png",
        description: "The xD3000 series is engineered for complex and demanding applications. It supports multiple motor types and provides energy-efficient solutions, ensuring optimal performance with robust protection features."
    },
    {
        name: "xD4000 AC Drives",
        image: "/products/xd4000.png",
        description: "Ideal for heavy-duty industrial environments, the xD4000 series drives offer superior torque control, extensive IO options, and are built to withstand extreme conditions while maintaining high efficiency."
    },
    {
        name: "Sx2000 AC Drives",
        image: "/products/sx2000.png",
        description: "Sx2000 drives are designed for applications requiring high start-up torque and precision speed regulation. Their robust design ensures reliable operation in harsh industrial settings."
    },
    {
        name: "Fx2000 AC Drives",
        image: "/products/fx2000.png",
        description: "Fx2000 series drives are focused on functionality and affordability, with flexible control options and simple integration into existing systems, ideal for general-purpose applications."
    },
    {
        name: "Hx2000 AC Drives",
        image: "/products/hx2000.png",
        description: "Hx2000 drives cater specifically to HVAC applications, offering specialized functions like fire mode operation, multi-motor control, and energy-saving features to optimize building management systems."
    },
    {
        name: "Nx2000 AC Drives",
        image: "/products/nx2000.png",
        description: "The Nx2000 series provides advanced control for high-speed applications, including cranes, centrifuges, and extruders, with robust overload protection and high dynamic response capabilities."
    },
    {
        name: "Nx2000+ AC Drives",
        image: "/products/nx2000plus.png",
        description: "Building on the Nx2000 series, the Nx2000+ offers additional capabilities for the most demanding applications, including enhanced power ranges and configurable digital and analog IO options."
    }
]



// Importing images - these paths need to match where your actual images are stored
import xs1000 from "../../public/products/ik/soft-starters/xs1000.png";
import xs2000 from "../../public/products/ik/soft-starters/xs2000.png";
import xs3000 from "../../public/products/ik/soft-starters/xs3000.png";
import xs4000 from "../../public/products/ik/soft-starters/xs4000.png";

const SOFT_STARTERS = [
    {
        name: "XS1000 Soft Starters",
        image: xs1000,
        description: "The XS1000 series offers smooth startups and stops for motors, reducing mechanical stress and increasing the lifespan of the motor and the connected equipment."
    },
    {
        name: "XS2000 Soft Starters",
        image: xs2000,
        description: "XS2000 series enhances the control over motor's acceleration and deceleration. Ideal for pumps, fans, and compressors, ensuring efficient energy management."
    },
    {
        name: "XS3000 Soft Starters",
        image: xs3000,
        description: "Designed for medium to high power applications, the XS3000 provides advanced soft start and stop capabilities with comprehensive protective features for industrial uses."
    },
    {
        name: "XS4000 Soft Starters",
        image: xs4000,
        description: "The XS4000 is tailored for heavy-duty applications, offering robust performance with integrated bypass and advanced start/stop profiles, suitable for complex industrial systems."
    },
    {
        name: "CSX (Discontinued)",
        image: "/products/csx_discontinued.png", // Path needs to be updated
        description: "CSX series was known for its reliability and simplicity in operation, suitable for a wide range of applications but has been discontinued."
    }
]

import xtHmi from "../../public/products/ik/hmi/xt.png";

const HUMAN_MACHINE_INTERFACE_HMI = [
    {
        name: "XT Series HMI",
        image: xtHmi,
        description: "The XT Series HMI panels are engineered for intuitive operation and robust performance. These interfaces offer customizable displays, superior connectivity, and are designed to maximize user efficiency in complex industrial environments."
    }
]

import m5Servo from "../../public/products/ik/servo/m5.png";

const SERVO = [
    {
        name: "M5 Series Servo Motors",
        image: m5Servo,
        description: "The M5 series servo motors are designed for precision control in various automation applications. They offer high torque density, exceptional efficiency, and are equipped with advanced feedback systems for precise motion control."
    }
]