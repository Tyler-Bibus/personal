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
            <h2 className="text-xl font-bold">Technical Skills</h2>
            <div className="mt-2 text-base text-gray-200">
              {skillsEntry.bullets.map((b, i) => (
                <p key={i} className="mb-1">
                  • {b}
                </p>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div className="mb-8" variants={itemVariants}>
          <h2 className="text-xl font-bold mb-3">Soft Skills by Position</h2>
          <div className="space-y-4 text-gray-200">
            <div>
              <h3 className="font-semibold text-white">CPRE 3810 Teaching Assistant</h3>
              <ul className="list-disc ml-6 mt-1">
                <li>Communication — explaining complex computer architecture concepts clearly to students at varying skill levels</li>
                <li>Mentorship — guiding 46 students through hands-on lab work with patience and adaptability</li>
                <li>Attention to detail — maintaining accuracy while converting course curriculum from MIPS to RISC-V</li>
                <li>Time management — balancing TA responsibilities alongside coursework and other commitments</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white">Undergraduate Researcher – ARA Wireless</h3>
              <ul className="list-disc ml-6 mt-1">
                <li>Collaboration — working directly under a graduate mentor in a structured research environment</li>
                <li>Self-directed learning — rapidly acquiring domain knowledge in 5G networking and SDR systems</li>
                <li>Adaptability — troubleshooting real-world outdoor deployments where conditions are unpredictable</li>
                <li>Technical communication — presenting research findings to the broader ARA team via formal poster presentation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white">Small Business Owner – Big B's Detailing</h3>
              <ul className="list-disc ml-6 mt-1">
                <li>Entrepreneurship — building and managing a business independently from the ground up</li>
                <li>Customer relations — maintaining client satisfaction in a service-oriented, face-to-face environment</li>
                <li>Marketing — designing and executing a social media and print campaign to generate leads</li>
                <li>Financial management — pricing, tracking margins, and managing expenses to achieve 78% profitability</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white">Undergraduate Research Programmer – CSAFE / EviHunter</h3>
              <ul className="list-disc ml-6 mt-1">
                <li>Remote collaboration — coordinating effectively with a geographically distributed research team</li>
                <li>Cross-disciplinary communication — bridging software engineering and forensic research domains</li>
                <li>Problem-solving under pressure — recovering a production MongoDB database after an unplanned system wipe</li>
                <li>Initiative — independently scoping and building a web crawler to fill a critical data gap in the project</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white">CAD Technician – Americom</h3>
              <ul className="list-disc ml-6 mt-1">
                <li>Client communication — coordinating with sales and design teams to meet installation and client standards</li>
                <li>Attention to detail — producing over 150 technical drawings where accuracy directly affects field work</li>
                <li>Professional documentation — delivering consistent, high-quality technical output under production timelines</li>
              </ul>
            </div>
          </div>
        </motion.div>
        <hr />

        <motion.div className="mb-8" variants={itemVariants}>
          <h2 className="text-xl font-bold mb-2">Evaluations</h2>
          <p className="text-gray-400 italic">
            No formal written performance evaluations are available for these positions.
          </p>
        </motion.div>
        <hr />

        <motion.div className="mb-8" variants={itemVariants}>
          <h2 className="text-xl font-bold mb-3">Presentations</h2>
          <h3 className="font-semibold text-white mb-1">
            Field-Deployable Open Source 5G Software Stack on ARA
          </h3>
          <p className="text-gray-300 mb-4">
            Poster presented at the conclusion of the ARA Wireless REU program, summer 2025. The poster
            documents the end-to-end deployment of an open-source 5G software stack (srsRAN) on the ARA
            outdoor wireless living lab, including the signal amplifier modifications, GPIO-driven SDR
            output tuning that achieved a 48 dB signal improvement, field deployment setup, and
            throughput and latency measurements collected on the ARA platform.
          </p>
          <div className="flex justify-center">
            <embed
              src="/personal/assets/srsRAN_Outdoor_Poster.pdf"
              width="100%"
              height="900"
              type="application/pdf"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default WorkExperience;
