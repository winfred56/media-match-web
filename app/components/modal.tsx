'use client'
import React from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {FiAlertCircle} from "react-icons/fi";

// Define the props for the Modal component
interface ModalProps {
    isVisible: boolean;  // Boolean to control the visibility of the modal
    onClose: () => void; // Function to handle closing the modal
    message: string;     // Message to be displayed in the modal
}

// Modal component definition
const Modal: React.FC<ModalProps> = ({isVisible, onClose, message}) => {
    // If the modal is not visible, return null (do not render anything)
    if (!isVisible) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    onClick={onClose}
                    className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-hidden cursor-pointer"
                >
                  <motion.div
                      initial={{scale: 0, rotate: "12.5deg"}}
                      animate={{scale: 1, rotate: "0deg"}}
                      exit={{scale: 0, rotate: "0deg"}}
                      onClick={(e) => e.stopPropagation()}
                      className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
                  >
                    <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24"/>
                    <div className="relative z-10">
                      <div
                          className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                        {/*<FiAlertCircle/>*/}
                        <svg className="h-12 w-12 text-primary" fill="none" stroke="currentColor"
                             viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <h3 className="text-3xl font-bold text-center mb-2">Upload successful!</h3>
                      <p className="text-center mb-6">
                        {message}
                      </p>
                      <div className="flex gap-2">
                        <button
                            onClick={onClose}
                            className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                        >
                          okay!
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
            )}
        </AnimatePresence>

    );
};

export default Modal;
