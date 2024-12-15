import React from 'react';
import { motion } from 'framer-motion';
import { education, certifications } from './educationData';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Education & Certifications</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-6 bg-[#1c1c1c] p-6 rounded-lg"
            >
              <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
              <p className="text-blue-500 mb-2">{edu.institution}</p>
              <p className="text-gray-400">{edu.period}</p>
            </motion.div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1c1c1c] p-4 rounded-lg text-white"
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;