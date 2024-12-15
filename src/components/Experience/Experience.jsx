import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from './experienceData';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-4xl font-bold text-white mb-8 text-center">Work Experience</h2>
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-8 bg-[#1c1c1c] p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>
            <h4 className="text-xl text-blue-500 mb-2">{exp.position}</h4>
            <p className="text-gray-400 mb-4">{exp.period}</p>
            <ul className="list-disc list-inside text-gray-300">
              {exp.description.map((item, idx) => (
                <li key={idx} className="mb-2">{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;