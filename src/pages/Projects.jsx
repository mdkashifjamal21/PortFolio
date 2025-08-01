import { motion } from "framer-motion";

const projects = [
 {
    title: "Online Library Management System",
    description: "A web application for managing a digital library, allowing users to browse, borrow, and return books online.",
    tech: ["Reactjs", "Node.js", "MySQL Workbench","Tailwind CSS","REST API","Copilot AI tool"],
    github: "https://github.com/mdkashifjamal21",
    live: "https://onlinelibsystem.netlify.app/",
  },
  {
    title: "Portfolio Website",
    description: "A personal website to showcase my skills and projects.",
    tech: ["Reactjs", "Tailwind CSS","Copilot,ChatGpt,perplexity ai tool"],
    github: "https://github.com/mdkashifjamal21",
    live: "https://nimble-brigadeiros-d30206.netlify.app/",
  },
  {
    title: "To-Do App",
    description: "A simple and elegant task management app.",
    tech: ["Reactjs", "CSS", "Redux", "MongoDB", "REST API"],
    github: "https://github.com/mdkashifjamal21",
    live: "https://newlistodo.netlify.app/",
  },
   {
    title: "SolidWeb",
   description: "SolidWeb is a sleek, responsive Tailwind CSS SaaS template built for modern web and mobile apps. Ideal for startups and developers seeking a clean, professional UI.",
    tech: ["Reactjs", "Tailwind CSS"],
    github: "https://github.com/mdkashifjamal21",
    live: "https://solidstyle.netlify.app/",
  },
   {
   title: "Caffe Mastery",
    description: "Caffe Mastery is your go-to destination for refining your coffee experience. Whether you're a beginner or a connoisseur, we guide your journey with personalized services and a warm, inviting vibe.",
    tech: ["HTML", "CSS","JAVASCRIPT","BOOTSTRAP"],
    github: "https://github.com/mdkashifjamal21",
    live: "https://cafferetina.netlify.app/",
  },
  // ➕ Add more projects here
];

const Projects = () => {
  return (
    <section className="min-h-screen px-6 md:px-20 py-16 bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-10 text-center">
          My Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm text-teal-400 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm border border-teal-500 text-teal-400 px-4 py-2 rounded hover:bg-teal-500 hover:text-white transition duration-300"
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition duration-300"
                  >
                    Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
