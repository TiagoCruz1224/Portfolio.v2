import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function SocialIcons() {
  return (
    <div className='flex justify-center space-x-6 py-4 text-gray-600 dark:text-gray-400'>
      <a
        href='https://www.instagram.com/tiagocruz1224/'
        target='_blank'
        rel='noopener noreferrer'
        className='hover:text-gray-200 dark:hover:text-blue-500'
      >
        <FaInstagram size={20} />
      </a>
      <a
        href='https://github.com/TiagoCruz1224'
        target='_blank'
        rel='noopener noreferrer'
        className='hover:text-gray-200 dark:hover:text-blue-500'
      >
        <FaGithub size={20} />
      </a>
      <a
        href='https://www.linkedin.com/in/tiagocruz1224/'
        target='_blank'
        rel='noopener noreferrer'
        className='hover:text-gray-200 dark:hover:text-blue-500'
      >
        <FaLinkedin size={20} />
      </a>
    </div>
  );
}
