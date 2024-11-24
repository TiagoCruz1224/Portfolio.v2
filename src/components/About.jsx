import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Modal from './Modal';
import { FaPhp, FaJs, FaGit } from 'react-icons/fa';
import { SiLaravel, SiSymfony, SiReact, SiTailwindcss } from 'react-icons/si';
import SocialIcons from '../hooks/SocialIcons';

export default function About() {
  const { t } = useTranslation('about');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });

  const openModal = (title, content) => {
    const processedContent =
      typeof content === 'string' ? (
        <div>
          {content.split('\n').map((paragraph, index) =>
            paragraph.startsWith('###') ? (
              <h4 key={index} className='text-lg font-semibold mb-2'>
                {paragraph.replace('### ', '')}
              </h4>
            ) : (
              <p key={index} className='mb-4'>
                {paragraph}
              </p>
            )
          )}
        </div>
      ) : (
        content
      );

    setModalContent({ title, content: processedContent });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const skillsContent = (
    <div>
      {/* Linguagens */}
      <div className='mt-8'>
        <h4 className='text-2xl font-semibold text-center mb-4'>{t('languages')}</h4>
        <ul className='grid grid-cols-3 gap-8 mt-4 font-normal'>
          <li className='flex justify-center text-lg'>
            <span className='flex items-center hover:text-blue-700 dark:hover:text-blue-700  transition-colors'>
              <FaPhp className='mr-2 text-xl' /> PHP
            </span>
          </li>
          <li className='flex justify-center text-lg'>
            <span className='flex items-center hover:text-yellow-500  dark:hover:text-yellow-400 transition-colors'>
              <FaJs className='mr-2 text-xl' /> JavaScript
            </span>
          </li>
          <li className='flex justify-center text-lg'>
            <span className='flex items-center hover:text-orange-600  dark:hover:text-orange-400 transition-colors'>
              <FaGit className='mr-2 text-xl' /> Git
            </span>
          </li>
        </ul>
      </div>

      {/* Frameworks */}
      <div className='mt-8'>
        <h4 className='text-2xl font-semibold text-center mb-4'>{t('frameworks')}</h4>
        <ul className='grid grid-cols-2 gap-8 mt-4 font-normal'>
          <li className='flex justify-center text-lg'>
            <span className='flex items-center hover:text-red-500 dark:hover:text-red-600 transition-colors'>
              <SiLaravel className='mr-2 text-xl' /> Laravel
            </span>
          </li>
          <li className='flex justify-center text-lg'>
            <span className='flex items-center hover:font-bold dark:hover:font-bold transition-colors'>
              <SiSymfony className='mr-2 text-xl' /> Symfony
            </span>
          </li>
          <li className='flex justify-center text-lg'>
            <span className='flex items-center hover:text-blue-500 dark:hover:text-blue-400 transition-colors'>
              <SiReact className='mr-2 text-xl' /> React
            </span>
          </li>
          <li className='flex justify-center text-lg'>
            <span className='flex items-center hover:text-teal-400 dark:hover:text-teal-300 transition-colors'>
              <SiTailwindcss className='mr-2 text-xl' /> TailwindCSS
            </span>
          </li>
        </ul>
      </div>

      {/* Outras Competências */}
      <div className='mt-8'>
        <h4 className='text-2xl font-semibold text-center mb-4'>{t('other_skills')}</h4>
        <ul className='flex justify-center gap-8 mt-4 font-normal text-lg'>
          <li className='hover:text-emerald-400 dark:hover:text-emerald-600 transition-colors'>
            <span>REST API</span>
          </li>
          <li className='hover:text-emerald-400 dark:hover:text-emerald-600 transition-colors'>
            <span>Responsive Websites</span>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <motion.section
      id='about'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-blue-600 to-blue-400 text-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 dark:text-gray-100'
    >
      {/* Caixas clicáveis */}
      <div className='grid grid-cols-2 gap-8 max-w-4xl w-full'>
        {/* Caixa Sobre Mim */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='cursor-pointer bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl'
          onClick={() => openModal(t('about_me'), t('about_me_description'))}
        >
          <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-100'>
            {t('about_me')}
          </h3>
        </motion.div>

        {/* Caixa Educação */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='cursor-pointer bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl'
          onClick={() => openModal(t('education'), t('education_description'))}
        >
          <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-100'>
            {t('education')}
          </h3>
        </motion.div>

        {/* Caixa Experiência */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className='cursor-pointer bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl'
          onClick={() => openModal(t('experience'), t('experience_description'))}
        >
          <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-100'>
            {t('experience')}
          </h3>
        </motion.div>

        {/* Caixa Competências */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className='cursor-pointer bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl'
          onClick={() => openModal(t('skills'), skillsContent)}
        >
          <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-100'>{t('skills')}</h3>
        </motion.div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalContent.title}
        content={modalContent.content}
      />
      <div className='mt-8'>
        <SocialIcons />
      </div>
    </motion.section>
  );
}
