import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SocialIcons from '../hooks/SocialIcons';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t } = useTranslation('home');

  return (
    <motion.section
      id='home'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-blue-700 to-blue-500 text-gray-200 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 dark:text-gray-100 px-4'
    >
      {/* Greeting com animação de escrita */}
      <div className='text-6xl lg:text-5xl md:text-5xl sm:text-4xl font-extrabold mb-4'>
        <Typewriter
          options={{
            strings: [t('greeting')],
            autoStart: true,
            delay: 100,
            deleteSpeed: Infinity,
            cursor: '',
          }}
        />
      </div>

      {/* Description com animação de escrita */}
      <div className='text-2xl lg:text-2xl md:text-xl sm:text-lg max-w-2xl'>
        <Typewriter
          options={{
            strings: [t('description')],
            autoStart: true,
            loop: false,
            delay: 50,
            deleteSpeed: Infinity,
            cursor: '',
          }}
        />
      </div>

      {/* Botão para projetos */}
      <Link
        to='/projects'
        className='mt-6 px-8 py-3 text-base lg:text-lg md:px-10 md:py-4 md:text-lg bg-gray-200 text-blue-600 font-semibold rounded-full hover:bg-gray-300 dark:bg-blue-600 dark:text-gray-200 dark:hover:bg-blue-700 transition duration-300'
      >
        {t('seeProjects')}
      </Link>

      {/* Social Icons */}
      <div className='mt-8'>
        <SocialIcons />
      </div>
    </motion.section>
  );
}
