import React from 'react';
import { motion } from 'framer-motion';
import nova from '../../public/clients/nova.png';
import pwd from '../../public/clients/pwd.png';
import raipur_dev_authority from '../../public/clients/raipur-dev-authority.png';
import indian_railways from '../../public/clients/indian-railways.png';
import creda from '../../public/clients/creda.png';

const Clients = () => {
    // Data array for client logos
    const clients = [
        { id: 1, src: nova, alt: 'Nova' },
        { id: 2, src: pwd, alt: 'PWD' },
        { id: 3, src: raipur_dev_authority, alt: 'Raipur Development Authority' },
        { id: 4, src: indian_railways, alt: 'Indian Railways' },
        { id: 5, src: creda, alt: 'CREDA' }
    ];

    // Animation settings
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            className="p-10"
            variants={containerVariants}
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
                            className="flex justify-center items-center p-1 md:p-4 hover:scale-105 transition-transform duration-300"
                            variants={itemVariants}
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
