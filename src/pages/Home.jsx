// Example: Home.jsx
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-20 bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Hey, I’m <span className="text-teal-400">Mohammad Kashif Jamal</span>
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto text-gray-300">
         I'm a passionate frontend developer building modern, responsive websites using React and Tailwind CSS. I’ve also worked with Bootstrap, REST APIs, and MongoDB, and I’m familiar with Firebase. On the programming side, I’ve honed my skills in JavaScript and Python.</p>
        <div className="space-x-4">
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-xl font-medium transition duration-300">
            Contact Me
          </button>
          <button className="border border-teal-500 hover:bg-teal-500 hover:text-white text-teal-400 px-6 py-3 rounded-xl font-medium transition duration-300">
            Download CV
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
