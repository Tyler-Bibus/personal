import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiExpress } from 'react-icons/si';

function WebDesignProjects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-600">
              Game Finder Web App
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A full-stack application designed to help users discover their perfect game through interactive quizzes
            </p>
          </motion.div>

          {/* Project Image */}
          <motion.div variants={itemVariants} className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
            <img
              src="https://via.placeholder.com/1200x600?text=Game+Finder+Screenshot"
              alt="Game Finder Screenshot"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </motion.div>

          {/* Project Details */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✅</span>
                  Secure user authentication with JWT-based login system
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✅</span>
                  Interactive Buzzfeed-style quizzes for personalized game recommendations
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✅</span>
                  Responsive, mobile-first design with TailwindCSS
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✅</span>
                  RESTful API integration with Express.js backend
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-gray-300 mb-4">
                Developed for COMS 319 at Iowa State University, this project showcases a full-stack web application built with modern web technologies. The app focuses on user experience, featuring intuitive navigation and a sleek, responsive design.
              </p>
              <p className="text-gray-300">
                The backend leverages Express.js and MongoDB for efficient data management, while the frontend uses React and TailwindCSS for a dynamic and visually appealing interface.
              </p>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants} className="text-center relative z-10 bg-gray-800/50">
            <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
            <div className="flex justify-center gap-6 flex-wrapbg-gray-800/50">
              <div className="flex flex-col items-center">
                <FaReact className="text-4xl text-blue-400 justify-center" />
                <span className="mt-2">React</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTailwindcss className="text-4xl text-cyan-400" />
                <span className="mt-2">TailwindCSS</span>
              </div>
              <div className="flex flex-col items-center">
                <FaNodeJs className="text-4xl text-green-400" />
                <span className="mt-2">Node.js</span>
              </div>
              <div className="flex flex-col items-center">
                <SiExpress className="text-4xl text-gray-400" />
                <span className="mt-2">Express.js</span>
              </div>
              <div className="flex flex-col items-center bg-gray-800/50">
                <FaDatabase className="text-4xl text-purple-400" />
                <span className="mt-2">MongoDB</span>
              </div>
            </div>
          </motion.div>

          {/* Project Links */}
          <motion.div variants={itemVariants} className="text-center relative z-10">
            <a
              href="https://github.com/Tyler-Bibus/coms319-final"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              View on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default WebDesignProjects;
