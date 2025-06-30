import React from 'react';
import { motion } from 'framer-motion';

const AnimatedTitleExample = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-3xl font-bold"
    >
      Animated Section Title
    </motion.h1>
  );
};

export default AnimatedTitleExample;
