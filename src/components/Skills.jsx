import { motion } from 'framer-motion';

const skills = {
  technical: [
    "React", "Django", "Node.js", "JavaScript",
    "Python", "HTML5", "CSS3", "PostgreSQL",
    "MongoDB", "Azure", "PHP", "MySQL"
  ],
  soft: [
    "Problem-solving",
    "Continuous Learning",
    "Innovation"
  ]
};

const SkillTag = ({ skill }) => (
  <motion.span
    whileHover={{ scale: 1.1 }}
    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-sm font-medium m-1"
  >
    {skill}
  </motion.span>
);

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