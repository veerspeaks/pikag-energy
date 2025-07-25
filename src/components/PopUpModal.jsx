import React from 'react';

const PopUpModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <img src="https://firebasestorage.googleapis.com/v0/b/pikag-318b9.firebasestorage.app/o/WhatsApp%20Image%202025-07-25%20at%2017.34.49.jpeg?alt=media&token=fc09a278-a099-42df-9f82-c65f5e93274f" alt="Popup" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default PopUpModal;
