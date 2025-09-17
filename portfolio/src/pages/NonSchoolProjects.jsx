import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

function NonSchoolProjects() {
  return (
    <motion.div className="flex flex-col min-h-screen bg-dark text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="container mx-auto py-8" variants={itemVariants}>
        <br></br>
        <h1 className="text-3xl font-bold mb-4">Non-School Projects</h1>
        <hr></hr>

        <div className="mb-8">
          <h2 className="text-xl font-bold">Fitness App (Android)</h2>
          <p className="mt-2">
            A personal project to create a simple fitness tracker app before
            gaining major programming experience.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default NonSchoolProjects;
