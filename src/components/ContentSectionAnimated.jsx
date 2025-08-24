import React from 'react';
import { motion } from 'framer-motion';

const ContentSectionAnimated = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`max-w-7xl mx-auto px-8 py-16 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default ContentSectionAnimated;
