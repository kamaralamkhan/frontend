import React from 'react';
import { motion } from 'framer-motion';

const SkillTag = ({ skill }) => (
  <motion.span
    whileHover={{ scale: 1.1 }}
    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-sm font-medium m-1"
  >
    {skill}
  </motion.span>
);

export default SkillTag;