import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 z-[999] flex items-center justify-center overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white w-full max-w-6xl mx-auto my-10 rounded-xl shadow-2xl overflow-hidden"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={onClose}
                className="text-2xl text-gray-500 hover:text-red-500 font-bold"
              >
                &times;
              </button>
            </div>

            {/* Heading */}
            <div className="text-center px-4 sm:px-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-2">
                Get in <span className="text-primary">Touch</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
                Have questions? Fill out the form below and we’ll be in touch!
              </p>
            </div>

            {/* Content */}
            <div className="lg:grid lg:grid-cols-5 mt-6">
              {/* Info */}
              <div className="bg-light py-8 px-6 lg:col-span-2 lg:px-8 lg:py-12">
                <h3 className="text-xl font-semibold text-dark mb-4">Contact Information</h3>
                <p className="text-gray-700 text-sm mb-6">Reach out to us through any of these channels</p>

                <ul className="space-y-4 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Plot No 173, Engineering Park, Heavy Industrial Area, Hathkhoj, Bhilai, C.G.
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91 9755021473
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@pikag.com
                  </li>
                </ul>
              </div>

              {/* Form */}
              <div className="py-8 px-6 bg-white lg:col-span-3 lg:py-12 lg:px-10">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { label: 'Full name', name: 'name', type: 'text' },
                    { label: 'Email', name: 'email', type: 'email' },
                    { label: 'Phone', name: 'phone', type: 'tel' }
                  ].map(({ label, name, type }) => (
                    <div key={name}>
                      <label className="block text-sm font-medium text-gray-700">{label}</label>
                      <input
                        type={type}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-sm px-3 py-2 focus:ring-primary focus:border-primary"
                        required={name !== 'phone'}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-sm px-3 py-2 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-md text-sm font-medium transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
