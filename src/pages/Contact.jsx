import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="min-h-screen px-6 md:px-20 py-16 bg-gray-900 text-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl space-y-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-teal-400 text-center">
          Get in Touch
        </h2>
        <form
          action="https://formspree.io/f/xgvzvnon" // ← Replace this with your actual Formspree form ID
          method="POST"
          className="bg-gray-800 p-6 rounded-2xl space-y-4 shadow-md"
        >
          <div>
            <label className="block text-sm mb-1 text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-300">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md transition"
          >
            Send Message
          </button>
        </form>
        <p className="text-center text-gray-400 text-sm">
          Or just email me directly at: <span className="text-teal-400">replitpython22@gmail.com</span>
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
