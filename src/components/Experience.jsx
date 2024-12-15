import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Tabish Sarosh & Associates",
    position: "Web Developer",
    period: "Jan 2022 – Jan 2024",
    description: [
      "Developed and maintained responsive websites using PHP, SQL, WordPress, and JavaScript",
      "Managed CMS tools and resolved technical issues to improve functionality and stability"
    ]
  },
  {
    company: "Onelogica",
    position: "Web Developer",
    period: "Sep 2023 – Nov 2023",
    description: [
      "Created a dynamic landing page with React and a document upload platform using Django",
      "Integrated Azure for machine learning-based data extraction",
      "Managed databases with PostgreSQL and MongoDB"
    ]
  },
  {
    company: "IBM",
    position: "Web Developer Intern",
    period: "",
    description: [
      "Contributed to feature development using modern technologies",
      "Collaborated with senior developers",
      "Gained experience in HTML, CSS, TailwindCSS, Bootstrap, and JavaScript"
    ]
  }
];

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