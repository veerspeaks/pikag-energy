import React from 'react';
import { motion } from 'framer-motion';

const importImages = import.meta.glob('../../public/clients/*.{png,jpg,jpeg,svg}', { eager: true });

const clients = Object.keys(importImages).map((fileName) => {
    const name = fileName.split('/').pop().split('.')[0];
    const extension = fileName.split('.').pop();
    return {
        id: name,
        src: `/clients/${name}.${extension}`,
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
        >
            <div className="container mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-center mb-10 tracking-wider"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Our <span className='text-primary'>Clients</span>
                </motion.h2>

                <div className="grid grid-cols-5 gap-1 md:gap-4">
                    {clients.map(client => (
                        <motion.div
                            key={client.id}
                            className="flex justify-center items-center p-1 md:p-4  rounded-lg hover:scale-105  hover:shadow-lg transition-transform duration-300 "
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
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
