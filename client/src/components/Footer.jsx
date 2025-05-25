import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 text-gray-700 py-10 px-4 mt-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
        
        {/* Name and Tagline */}
        <div>
          <h3 className="text-3xl font-bold">Aman Dhiman</h3>
          <p className="text-lg">Building modern, responsive web experiences.</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-5 text-xl">
          <a
            href="https://github.com/Aman-Dhiman-vishwakarma"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-blue-600 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-6">
        &copy; {new Date().getFullYear()} Aman Dhiman. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
