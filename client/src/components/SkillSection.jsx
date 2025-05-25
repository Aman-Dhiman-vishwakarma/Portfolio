import { motion } from "framer-motion";
import { FaCode, FaTools, FaDatabase, FaLayerGroup } from "react-icons/fa";

const skills = {
  Languages: ["JavaScript", "JAVA"],
  Frontend: ["React", "HTML", "CSS", "Tailwind"],
  Backend: ["Node.js", "Express.js", "Spring Boot"],
  Database: ["MongoDB", "MySQL"],
  Tools: ["Git", "GitHub", "Postman", "VSCode", "Render"],
  Familiar: ["Redux Toolkit", "Docker"],
};

const SkillSection = () => {
  return (
    <section id="skills" className="py-16 px-6 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-6"
        >
          Technical Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto"
        >
          Here are the technologies I’ve worked with across frontend, backend,
          databases, and tools.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
                {category === "Languages" && <FaCode />}
                {category === "Frontend" && <FaLayerGroup />}
                {category === "Backend" && <FaCode />}
                {category === "Database" && <FaDatabase />}
                {category === "Tools" && <FaTools />}
                {category === "Familiar" && <FaCode />}
                {category}
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
