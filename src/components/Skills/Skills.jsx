import React from 'react';
import SkillTag from './SkillTag';
import { skills } from './skillsData';

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Skills</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-4">Technical Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.technical.map((skill, index) => (
              <SkillTag key={index} skill={skill} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.soft.map((skill, index) => (
              <SkillTag key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;