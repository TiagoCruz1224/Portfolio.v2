import React, { useState, useEffect } from 'react';
import useTheme from '../hooks/useTheme';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, toggleTheme] = useTheme();
  const { t, i18n } = useTranslation('header');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'pt' ? 'en' : 'pt');
  };

  return (
    <header
      className={`fixed w-full z-10 transition-all duration-300 ${
        scrolled ? 'bg-blue-600 dark:bg-gray-900 shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className='flex justify-end items-center py-4 px-8 text-gray-200 dark:text-gray-200'>
        <div className='flex items-center space-x-4'>
          <Link to='/' className='hover:font-medium dark:hover:font-medium'>
            {t('home')}
          </Link>
          <Link to='/about' className='hover:font-medium dark:hover:font-medium'>
            {t('about')}
          </Link>
          <Link to='/projects' className='hover:font-medium dark:hover:font-medium'>
            {t('projects')}
          </Link>
          <Link to='/contact' className='hover:font-medium dark:hover:font-medium'>
            {t('contact')}
          </Link>

          <button
            onClick={toggleTheme}
            className='flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full hover:scale-105 transition-transform duration-300'
            aria-label='Toggle Theme'
          >
            {theme === 'light' ? (
              <SunIcon className='w-5 h-5 text-yellow-500' />
            ) : (
              <MoonIcon className='w-5 h-5 text-blue-300' />
            )}
          </button>

          <button
            onClick={toggleLanguage}
            className='ml-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-full transition duration-300 hover:scale-105'
          >
            {i18n.language === 'pt' ? 'EN' : 'PT'}
          </button>
        </div>
      </nav>
    </header>
  );
}
