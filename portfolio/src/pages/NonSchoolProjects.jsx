import { motion } from 'framer-motion';

import SectionHeading from '../components/SectionHeading';
import GlitchText from '../components/GlitchText';

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const rise = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 16 } },
};

function NonSchoolProjects() {
  return (
    <motion.div className="container page" variants={stagger} initial="hidden" animate="visible">
      <motion.div variants={rise}>
        <p className="kicker mb-2">// side_builds</p>
        <h1 className="page__title mb-3">
          <GlitchText text="NON-SCHOOL PROJECTS" />
        </h1>
        <p className="mono mb-4" style={{ color: 'var(--faint)' }}>
          1 record · built outside coursework
        </p>
        <hr />
      </motion.div>

      <motion.div variants={rise}>
        <SectionHeading index="01" title="ARCHIVE" />

        <div className="row g-4">
          <div className="col-12 col-md-6">
            <div className="cyber-card">
              <div className="cyber-card__id">
                <span>PRJ-001</span>
                <span>
                  <span className="pip pip--archive" />
                  archive
                </span>
              </div>
              <h3 className="cyber-card__title">Fitness App (Android)</h3>
              <p className="cyber-card__desc">
                A personal project to build a simple fitness tracker app, written before I had any
                major programming experience.
              </p>
              <div className="cyber-card__tags">
                <span className="tag">Android</span>
                <span className="tag">Personal</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default NonSchoolProjects;
