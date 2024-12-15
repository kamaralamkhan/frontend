import React from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, image, url }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-[#181818] rounded-lg overflow-hidden"
    >
      {/* <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      /> */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400"
        >
          Visit Website →
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;