import { motion } from 'framer-motion';
import experienceData from "../assets/experience.json";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { y: 12, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

function WorkExperience() {
  const skillsEntry = experienceData.find((e) => e.title === 'Skills');

  return (
    <motion.div
      className="d-flex flex-column bg-dark text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container py-8 flex-grow-1">
        <br />
        <h1 className="text-4xl font-bold mb-4">Work Experience</h1>
        <hr />

        {experienceData
          .filter((e) => e.title !== 'Skills')
          .map((experience, index) => (
            <motion.div className="mb-8" key={index} variants={itemVariants}>
              <h2 className="text-xl font-bold">
                {experience.title}
                {experience.company ? ` – ${experience.company}` : ''}
              </h2>
              <p className="italic">
                {experience.date}
                {experience.date && experience.location ? ' | ' : ''}
                {experience.location}
              </p>

              {experience.bullets ? (
                <ul className="list-disc ml-6 mt-2 text-base text-gray-200">
                  {experience.bullets.map((b, i) => (
                    <li key={i} className="mb-1">
                      {b}
                    </li>
                  ))}
                </ul>
              ) : (
                experience.description && <p>{experience.description}</p>
              )}

              <hr className="mt-3" />
            </motion.div>
          ))}

        {skillsEntry && (
          <motion.div className="mb-8" variants={itemVariants}>
            <h2 className="text-xl font-bold">Skills</h2>
            <div className="mt-2 text-base text-gray-200">
              {skillsEntry.bullets.map((b, i) => (
                <p key={i} className="mb-1">
                  • {b}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
