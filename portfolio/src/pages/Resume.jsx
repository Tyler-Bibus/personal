import { motion } from 'framer-motion';

import GlitchText from '../components/GlitchText';

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const rise = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 16 } },
};

function Resume() {
  return (
    <motion.div className="container page" variants={stagger} initial="hidden" animate="visible">
      <motion.div variants={rise}>
        <p className="kicker mb-2">// personnel_record</p>
        <h1 className="page__title mb-3">
          <GlitchText text="RESUME" />
        </h1>
        <p className="mono mb-4" style={{ color: 'var(--faint)' }}>
          Resume-Bibus.pdf · application/pdf
        </p>

        <div className="mb-4">
          <a
            className="btn-cyber"
            href="/personal/assets/Resume-Bibus.pdf"
            download
          >
            Download PDF
          </a>
        </div>

        <hr />
      </motion.div>

      <motion.div variants={rise} className="doc-frame">
        <a className="doc-frame__link" href="/personal/assets/Resume-Bibus.pdf" target="_blank" rel="noopener noreferrer">Open PDF in a new tab ↗</a>
              <embed
          src="/personal/assets/Resume-Bibus.pdf"
          width="100%"
          height="900"
          type="application/pdf"
          title="Tyler Bibus resume"
        />
      </motion.div>
    </motion.div>
  );
}

export default Resume;
