import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50'
      onClick={onClose}
    >
      <motion.div
        className='bg-white p-5 rounded-lg w-3/5 max-w-4xl shadow-lg dark:bg-gray-800 dark:text-white'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className='text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100'>{title}</h3>
        <div className='text-gray-900 dark:text-gray-200 max-h-[60vh] overflow-y-auto pr-2'>
          {content}
        </div>
        <button
          className='mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
          onClick={onClose}
        >
          Fechar
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;
