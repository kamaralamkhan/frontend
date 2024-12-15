import { motion } from 'framer-motion';

const projects = [
  {
    title: "Forex Fundz",
    description: "Financial services platform",
    image: "/projects/forexfundz.png",
    url: "https://forexfundz.com"
  },
  {
    title: "CCIFS",
    description: "Legal services website",
    image: "/projects/ccifs.png",
    url: "https://ccifs.in"
  },
  {
    title: "Badhana Panchal",
    description: "Professional services website",
    image: "/projects/badhana.png",
    url: "https://badhana-panchal.com"
  },
  {
    title: "Tabish Sarosh Associates",
    description: "Legal consultancy firm website",
    image: "/projects/tabish.png",
    url: "https://tabishsaroshassociates.org"
  },
  {
    title: "One Logica",
    description: "Technology solutions company",
    image: "/projects/onelogica.png",
    url: "https://onelogica.com"
  },
  {
    title: "HealFast",
    description: "Healthcare platform",
    image: "/projects/healfast.png",
    url: "https://healfast.in"
  }
];

const ProjectCard = ({ title, description, image, url }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-[#181818] rounded-lg overflow-hidden"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
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

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-center text-4xl font-bold text-white mb-8">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;