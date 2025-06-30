import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ children, className = '' }) => {
  return (
    <motion.h2
      className={`text-3xl font-bold mb-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.h2>
  );
};

export default SectionTitle;
