import React from 'react';
import { motion } from 'framer-motion';

const importImages = import.meta.glob('../../public/clients/*.{png,jpg,jpeg,svg}', { eager: true });

const clients = Object.keys(importImages).map((fileName) => {
    const name = fileName.split('/').pop().split('.')[0]; 
    return {
        id: name,
        src: `/clients/${fileName}`, 
        alt: name.toUpperCase() 
    };
});

// const clients = [
//     { id: 1, src: nova, alt: 'Nova' },
//     { id: 2, src: pwd, alt: 'PWD' },
//     { id: 3, src: raipur_dev_authority, alt: 'Raipur Development Authority' },
//     { id: 4, src: indian_railways, alt: 'Indian Railways' },
//     { id: 5, src: creda, alt: 'CREDA' }
// ];

const Clients = () => {
    return (
        <motion.div
            className="p-10"
            initial="hidden"
            animate="visible"
        >
            <div className="container mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-center mb-10 tracking-wider"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 30, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                    Our <span className='text-primary'>Clients</span>
                </motion.h2>

                <div className="grid grid-cols-5 gap-1 md:gap-4">
                    {clients.map(client => (
                        <motion.div
                            key={client.id}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="flex justify-center items-center p-1 md:p-4  rounded-lg hover:scale-105  hover:shadow-lg transition-transform duration-300 "
                        >
                            <img src={client.src} alt={client.alt} className="max-h-10 md:max-h-[100px]" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Clients;
