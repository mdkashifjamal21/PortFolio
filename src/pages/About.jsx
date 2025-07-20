import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen px-6 md:px-20 py-16 bg-gray-900 text-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-teal-400">
          About Me
        </h2>
        <div className="pt-8 flex flex-wrap justify-center gap-6">
  {[
    { name: "React", icon: "⚛️" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Bootstrap", icon: "🎨" },
    { name: "REST API", icon: "🔗" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Firebase", icon: "🔥" },
    { name: "JavaScript", icon: "🟨" },
    { name: "Python", icon: "🐍" },
  ].map((tech, i) => (
    <div
      key={i}
      className="bg-gray-800 text-white px-4 py-2 rounded-xl shadow hover:scale-105 transition"
    >
      <span className="text-xl">{tech.icon}</span> {tech.name}
    </div>
  ))}
</div>
<p className="text-lg text-gray-300 leading-relaxed">
  I'm Kashif, a self-taught frontend developer passionate about crafting clean and modern web experiences. I specialize in building responsive interfaces using React and Tailwind CSS.
</p>
<p className="text-lg text-gray-400 leading-relaxed mt-4">
  Along the way, I've worked with Bootstrap, REST APIs, MongoDB, and explored Firebase for authentication and backend services. I primarily code in JavaScript and Python, and I love learning by building real-world projects.
</p>
<p className="text-lg text-gray-400 leading-relaxed mt-4">
  I actively leverage the power of AI tools to boost my productivity, write cleaner code, and solve problems faster. This allows me to deliver high-quality work more efficiently while staying focused on what matters most—building meaningful user experiences.
</p>

      </motion.div>
    </section>
  );
};

export default About;
