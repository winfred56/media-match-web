import React from 'react';

// Define the props for the Modal component
interface ModalProps {
  isVisible: boolean;  // Boolean to control the visibility of the modal
  onClose: () => void; // Function to handle closing the modal
  message: string;     // Message to be displayed in the modal
}

// Modal component definition
const Modal: React.FC<ModalProps> = ({ isVisible, onClose, message }) => {
  // If the modal is not visible, return null (do not render anything)
  if (!isVisible) return null;

  return (
    // Modal background overlay
    <div className="fixed inset-0 flex items-center justify-center text-black bg-opacity-50 bg-black overflow-y-auto h-full w-full">
      {/* Modal content container */}
      <div className="bg-white p-6 rounded-lg shadow-lg mx-auto border w-96">
        {/* Modal header with success icon */}
        <div className="mt-3 text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100">
            <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-lg md:text-xl mt-2 text-black leading-6 font-medium mb-4">Success</h2>
        </div>
        {/* Message to be displayed in the modal */}
        <p className="text-center">{message}</p>
        {/* OK button to close the modal */}
        <div className="text-xs md:text-sm items-center px-4 py-3">
          <button
            id="ok-btn"
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-primary cta-btn text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
