import React, { useState } from 'react';
import ContactModal from '../components/ContactModal';

const EnquiryButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
                <button
                    className="relative w-12 h-44 bg-[#7ac943] text-white font-medium tracking-widest text-sm rounded-l-xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out hover:bg-[#66b33c] hover:shadow-[0_0_12px_3px_rgba(122,201,67,0.5)] hover:scale-105"
                    style={{
                        writingMode: 'vertical-rl',
                        textOrientation: 'upright',
                    }}
                    onClick={() => setIsOpen(true)}
                >
                    <span className="py-1">ENQUIRY</span>
                </button>
            </div>

            {/* Modal */}
            <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
};

export default EnquiryButton;
