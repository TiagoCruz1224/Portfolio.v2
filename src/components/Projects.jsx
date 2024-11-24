import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Projects() {
  const { t, i18n } = useTranslation('projects');

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8000/projects', {
        headers: {
          'Accept-Language': i18n.language,
        },
      })
      .then((response) => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch projects');
        setLoading(false);
        toast.error(t('toast.error_failed'));
      });
  }, [i18n.language]);

  return (
    <motion.section
      id='projects'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-blue-600 to-blue-400 text-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 dark:text-gray-100'
    >
      <h2 className='text-3xl font-bold text-gray-100 mb-8 dark:text-blue-400'>{t('title')}</h2>
      <div className='flex flex-wrap justify-center gap-8'>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='bg-white shadow-lg rounded-lg p-6 max-w-sm dark:bg-gray-800 dark:text-white'
          >
            <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-100'>
              {project.title}
            </h3>
            <p className='text-gray-600 dark:text-gray-300'>{project.description}</p>
            <a
              href={project.url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 hover:underline dark:text-blue-400'
            >
              {t('see_more')}
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
