import React from 'react';
import { motion } from 'framer-motion';

const ContentSection = ({ className = '', children, style }) => {
  return (
    <motion.div
      className={`bg-white rounded-xl shadow-lg max-w-7xl mx-auto p-16 animate-fadeIn space-y-8 ${className}`}
      style={style}
      initial={{ x:-1700, y: 20 }}
      animate={{ speed:-1 , x:0 , y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default ContentSection;
