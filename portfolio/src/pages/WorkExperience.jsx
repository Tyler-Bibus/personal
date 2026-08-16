import { useState } from 'react';
import { motion } from 'framer-motion';

import experienceData from '../assets/experience.json';
import SectionHeading from '../components/SectionHeading';
import TerminalPanel from '../components/TerminalPanel';
import GlitchText from '../components/GlitchText';

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const rise = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 16 } },
};

function ExperienceNode({ job }) {
  const [openSoft, setOpenSoft] = useState(false);

  return (
    <motion.article
      className={`tl__node ${job.current ? 'tl__node--current' : ''}`.trim()}
      variants={rise}
    >
      <h3 className="tl__role mb-0">
        {job.title}
        {job.company && (
          <>
            <span className="mono" style={{ color: 'var(--faint)' }}> @ </span>
            <span className="tl__org">{job.company}</span>
          </>
        )}
      </h3>

      <div className="tl__meta">
        <span>{job.date}</span>
        {job.location && <span>◇ {job.location}</span>}
        {job.current && <span className="neon-m">◇ current</span>}
      </div>

      {job.summary && (
        <p className="mb-3" style={{ color: 'var(--lilac)', fontSize: '1rem' }}>
          {job.summary}
        </p>
      )}

      {job.highlight && (
        <div className="d-inline-block mb-3">
          <span className="stat__val mono" style={{ fontSize: '1.05rem' }}>
            &gt;&gt; {job.highlight}
          </span>
        </div>
      )}

      <ul className="cyber-list mb-3">
        {job.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      {job.tags?.length > 0 && (
        <div className="cyber-card__tags mb-2">
          {job.tags.map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>
      )}

      {job.soft?.length > 0 && (
        <>
          <button
            type="button"
            className="btn-cyber btn-cyber--ghost mt-2"
            style={{ fontSize: '.7rem', padding: '.35rem .8rem' }}
            aria-expanded={openSoft}
            onClick={() => setOpenSoft((v) => !v)}
          >
            {openSoft ? '− ' : '+ '} soft skills
          </button>

          {openSoft && (
            <motion.ul
              className="cyber-list cyber-list--purple mt-3"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              style={{ overflow: 'hidden' }}
            >
              {job.soft.map((s, i) => (
                <li key={i} style={{ fontSize: '.94rem' }}>{s}</li>
              ))}
            </motion.ul>
          )}
        </>
      )}
    </motion.article>
  );
}

function WorkExperience() {
  const jobs = experienceData;
  const years = new Set(jobs.flatMap((j) => j.date.match(/\d{4}/g) || []));

  return (
    <motion.div className="container page" variants={stagger} initial="hidden" animate="visible">
      <motion.div variants={rise}>
        <p className="kicker mb-2">// personnel_file</p>
        <h1 className="page__title mb-3">
          <GlitchText text="WORK EXPERIENCE" />
        </h1>
        <p className="mono mb-4" style={{ color: 'var(--faint)' }}>
          {jobs.length} records · {Math.min(...years)}–present · hardware, research, teaching, and one detailing business
        </p>
        <hr />
      </motion.div>

      {/* ── Timeline ─────────────────────────────────────── */}
      <motion.div variants={rise}>
        <SectionHeading index="01" title="TIMELINE" />
      </motion.div>

      <div className="tl">
        {jobs.map((job) => (
          <ExperienceNode key={`${job.company}-${job.title}`} job={job} />
        ))}
      </div>

      {/* ── Presentation ─────────────────────────────────── */}
      <motion.div variants={rise} className="mt-5">
        <SectionHeading index="02" title="PRESENTATIONS" />

        <TerminalPanel
          title="~/ara/srsRAN_outdoor_poster.pdf"
          right="summer 2025"
          className="mb-4"
        >
          <h3 className="mb-2" style={{ fontSize: '1.05rem' }}>
            Field-Deployable Open Source 5G Software Stack on ARA
          </h3>
          <p className="mb-0" style={{ color: 'var(--dim)' }}>
            Poster presented at the close of the ARA Wireless REU program. It documents the
            end-to-end deployment of an open-source 5G stack (srsRAN) on the ARA outdoor wireless
            living lab: the amplifier modifications, the GPIO-driven SDR output tuning that produced
            the 48 dB improvement, the field deployment itself, and the throughput and latency
            measured on the platform.
          </p>
        </TerminalPanel>

        <div className="doc-frame">
          <embed
            src="/personal/assets/srsRAN_Outdoor_Poster.pdf"
            width="100%"
            height="820"
            type="application/pdf"
            title="ARA Wireless srsRAN outdoor deployment poster"
          />
        </div>
      </motion.div>

      {/* ── Evaluations ──────────────────────────────────── */}
      <motion.div variants={rise} className="mt-5">
        <SectionHeading index="03" title="EVALUATIONS" />
        <TerminalPanel title="~/records/evaluations" right="empty">
          <p className="mono mb-0" style={{ color: 'var(--faint)' }}>
            $ ls ./evaluations
            <br />
            <span style={{ color: 'var(--dim)' }}>
              no formal written performance evaluations on file for these positions.
            </span>
          </p>
        </TerminalPanel>
      </motion.div>
    </motion.div>
  );
}

export default WorkExperience;
