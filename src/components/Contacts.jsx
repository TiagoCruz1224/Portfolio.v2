import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const { t } = useTranslation('contact');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error(t('toast.error_missing_fields'));
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/contact/create', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        toast.success(t('toast.success'));
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        toast.error(t('toast.error_failed_send'));
      }
    } catch (error) {
      toast.error(t('toast.error_generic'));
    }
  };

  return (
    <motion.section
      id='contact'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-blue-700 to-blue-500 text-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 dark:text-gray-100'
    >
      <h2 className='text-3xl font-bold text-gray-200 mb-4 dark:text-blue-400'>{t('title')}</h2>
      <p className='text-gray-200 mb-8 dark:text-gray-300'>{t('subtitle')}</p>

      <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
        {/* Nome */}
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder={t('name_placeholder')}
          className='w-full mb-4 p-3 border rounded-lg text-gray-800 dark:text-white dark:bg-gray-700 dark:border-gray-600'
        />

        {/* E-mail */}
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder={t('email_placeholder')}
          className='w-full mb-4 p-3 border rounded-lg text-gray-800 dark:text-white dark:bg-gray-700 dark:border-gray-600'
        />

        {/* Mensagem */}
        <textarea
          name='message'
          value={formData.message}
          onChange={handleChange}
          placeholder={t('message_placeholder')}
          className='w-full mb-4 p-3 border rounded-lg text-gray-800 dark:text-white dark:bg-gray-700 dark:border-gray-600'
        ></textarea>

        {/* Botão */}
        <button
          type='submit'
          className='px-6 py-2 bg-gray-100 text-blue-600 rounded-lg hover:bg-gray-300 dark:text-gray-200 dark:bg-blue-500 dark:hover:bg-blue-600 mb-4'
        >
          {t('submit_button')}
        </button>
      </form>
    </motion.section>
  );
}
