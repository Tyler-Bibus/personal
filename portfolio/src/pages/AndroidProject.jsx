import { motion } from 'framer-motion';

import ImageGallery from '../components/ImageGallery';
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

const stats = [
  { val: '3', key: 'devs on team' },
  { val: 'ANDROID', key: 'java frontend' },
  { val: 'SPRING', key: 'boot backend' },
  { val: 'MYSQL', key: 'data store' },
];

const stack = [
  'Java',
  'Android XML',
  'Volley',
  'WebSockets',
  'Spring Boot',
  'MySQL',
  'REST',
  'Postman',
  'Agile',
];

const skills = [
  'Android Studio — project structure, emulator workflow, and fragment-based navigation',
  'XML UI design — responsive, performant layouts for Android',
  'CRUD operations — create/read/update/delete flows wired end-to-end against a REST backend',
  'Postman — testing and debugging API endpoints before and during frontend integration',
  'Agile development — structured sprints, user stories, and iteration on demo feedback',
  'Git — branching strategy, pull requests, and merge conflicts on a multi-developer codebase',
  'CI/CD — automated build and test pipelines to catch regressions across the team',
  'Java unit testing — writing and maintaining tests to validate app behavior',
];

const resources = [
  'Android Developer Documentation — primary reference for UI components, lifecycle management, and API integration patterns',
  'Code samples and tutorials from developer.android.com for Volley networking and WebSocket handling',
  'Postman — API exploration and endpoint validation',
  'Architecture block diagrams produced by the team to document system design',
];

function AndroidProject() {
  const images = [
    { src: '/personal/assets/309/ExampleListing.png', alt: 'Example Listing' },
    { src: '/personal/assets/309/loginScreen.png', alt: 'Login Screen' },
    { src: '/personal/assets/309/SignUpScreen.png', alt: 'Sign Up Screen' }
  ];

  return (
    <motion.div className="container page" variants={stagger} initial="hidden" animate="visible">
      {/* ── Header ───────────────────────────────────────── */}
      <motion.div variants={rise}>
        <p className="kicker mb-2">// project_record</p>
        <h1 className="page__title mb-3">
          <GlitchText text="GOODS AND SERVICE FINDER" />
        </h1>
        <p className="mono mb-4" style={{ color: 'var(--faint)' }}>
          ComS 309 · software development practices · team of 3
        </p>
      </motion.div>

      {/* ── Stats ────────────────────────────────────────── */}
      <motion.div variants={rise} className="row g-3 mb-5">
        {stats.map((s) => (
          <div className="col-6 col-md-3" key={s.key}>
            <div className="stat">
              <div className="stat__val">{s.val}</div>
              <div className="stat__key">{s.key}</div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* ── 01 Brief ─────────────────────────────────────── */}
      <motion.div variants={rise}>
        <SectionHeading index="01" title="BRIEF" />
        <TerminalPanel title="~/coms309/README.md" right="shipped">
          <div className="prose">
            <p>
              A marketplace app in the shape of eBay or Facebook Marketplace: users post{' '}
              <strong>listings</strong>, run <strong>auctions</strong>, and{' '}
              <strong>chat</strong> with each other about what is for sale.
            </p>
            <p className="mb-3">
              The Android frontend is written in Java, talking to the server over Volley for REST
              calls and WebSockets for live chat. Behind it sits a Spring Boot backend on a MySQL
              database.
            </p>
            <div className="cyber-card__tags mb-0">
              {stack.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </TerminalPanel>
      </motion.div>

      {/* ── 02 My role ───────────────────────────────────── */}
      <motion.div variants={rise} className="mt-5">
        <SectionHeading index="02" title="MY ROLE" />
        <TerminalPanel title="~/coms309/my_role.md" right="frontend lead">
          <ul className="cyber-list mb-0">
            <li>
              <strong style={{ color: 'var(--text)' }}>Frontend lead</strong> — implemented every UI
              element in the app using Android XML and fragment layouts.
            </li>
            <li>
              Owned the full CRUD lifecycle for listings: creating, reading, updating, and deleting
              entries through the RESTful API backend.
            </li>
            <li>
              Took a leadership role on the team — assigning tasks, tracking progress across Agile
              sprints, and keeping the project on schedule through the semester deadline.
            </li>
          </ul>
        </TerminalPanel>
      </motion.div>

      {/* ── 03 Skills gained ─────────────────────────────── */}
      <motion.div variants={rise} className="mt-5">
        <SectionHeading index="03" title="SKILLS GAINED" />
        <ul className="cyber-list cyber-list--purple">
          {skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </motion.div>

      {/* ── 04 Resources ─────────────────────────────────── */}
      <motion.div variants={rise} className="mt-5">
        <SectionHeading index="04" title="RESOURCES" />
        <ul className="cyber-list">
          {resources.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </motion.div>

      {/* ── 05 Architecture ──────────────────────────────── */}
      <motion.div variants={rise} className="mt-5">
        <SectionHeading index="05" title="ARCHITECTURE" />
        <div className="doc-frame mb-3">
          <embed
            src="/personal/assets/309/BlockDiagramGnSFinder.pdf"
            width="100%"
            height="800"
            type="application/pdf"
            title="Goods and Service Finder system architecture block diagram"
          />
        </div>
        <p className="mono" style={{ color: 'var(--faint)' }}>
          ▚ Block diagram of the app architecture — the Android client, the Spring Boot backend, and
          the MySQL database behind it.
        </p>
      </motion.div>

      {/* ── 06 Screens ───────────────────────────────────── */}
      <motion.div variants={rise} className="mt-5">
        <SectionHeading index="06" title="SCREENS" />
        <ImageGallery images={images} />

        <div className="rule-dash" />

        <a
          className="btn-cyber"
          href="https://github.com/Tyler-Bibus/Coms309-GSFinder"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </motion.div>
    </motion.div>
  );
}

export default AndroidProject;
