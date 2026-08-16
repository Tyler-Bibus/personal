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

const STATS = [
  { val: 'JWT', key: 'auth' },
  { val: 'MERN', key: 'stack' },
  { val: 'REST', key: 'api' },
  { val: 'COMS 319', key: 'course' },
];

const STACK = ['React', 'TailwindCSS', 'Node.js', 'Express.js', 'MongoDB'];

function WebDesignProjects() {
  return (
    <motion.div className="container page" variants={stagger} initial="hidden" animate="visible">
      <motion.div variants={rise}>
        <p className="kicker mb-2">// project_file</p>
        <h1 className="page__title mb-3">
          <GlitchText text="GAME FINDER WEB APP" />
        </h1>
        <p className="mb-4" style={{ color: 'var(--lilac)', fontSize: '1.05rem' }}>
          A full-stack application that helps users discover their perfect game through interactive
          quizzes.
        </p>
      </motion.div>

      {/* ── Stats ────────────────────────────────────────── */}
      <motion.div variants={rise} className="row g-3 mb-5">
        {STATS.map((s) => (
          <div className="col-6 col-md-3" key={s.key}>
            <div className="stat">
              <div className="stat__val">{s.val}</div>
              <div className="stat__key">{s.key}</div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* ── Brief ────────────────────────────────────────── */}
      <motion.div variants={rise} className="mb-5">
        <SectionHeading index="01" title="BRIEF" />
        <TerminalPanel title="~/projects/game-finder/README.md" right="coms 319 · iowa state">
          <div className="prose">
            <p>
              Built for <strong>COMS 319</strong> at Iowa State University, this is a full-stack web
              app assembled from modern tooling and pointed squarely at user experience: intuitive
              navigation and a sleek, responsive interface.
            </p>
            <p className="mb-0">
              Express.js and MongoDB handle data on the backend; React and TailwindCSS drive a
              dynamic frontend on top of it.
            </p>
          </div>
        </TerminalPanel>
      </motion.div>

      {/* ── Features ─────────────────────────────────────── */}
      <motion.div variants={rise} className="mb-5">
        <SectionHeading index="02" title="FEATURES" />
        <ul className="cyber-list">
          <li>Secure user authentication with a JWT-based login system</li>
          <li>Interactive Buzzfeed-style quizzes for personalized game recommendations</li>
          <li>Responsive, mobile-first design with TailwindCSS</li>
          <li>RESTful API integration with an Express.js backend</li>
        </ul>
      </motion.div>

      {/* ── Stack ────────────────────────────────────────── */}
      <motion.div variants={rise} className="mb-5">
        <SectionHeading index="03" title="STACK" />
        <div className="row g-3">
          {STACK.map((tech) => (
            <div className="col-6 col-md-4 col-lg" key={tech}>
              <div className="cyber-card text-center" style={{ padding: '1rem .75rem' }}>
                <div className="cyber-card__title mb-0" style={{ fontSize: '.95rem' }}>
                  {tech}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Role ─────────────────────────────────────────── */}
      <motion.div variants={rise} className="mb-5">
        <SectionHeading index="04" title="MY ROLE" />
        <TerminalPanel title="~/projects/game-finder/role.md" right="team project">
          <div className="prose">
            <p className="mb-0">
              A team project with the frontend pages split evenly. I owned the{' '}
              <strong>login page</strong>, the <strong>home page</strong>, and the{' '}
              <strong>template used for each individual game entry</strong>. Beyond my assigned
              pages, this was my first real exposure to full-stack development — hands-on time with
              the Express.js + MongoDB backend I never touched during the Android project, where I
              worked purely on the frontend.
            </p>
          </div>
        </TerminalPanel>
      </motion.div>

      {/* ── Skills ───────────────────────────────────────── */}
      <motion.div variants={rise} className="mb-5">
        <SectionHeading index="05" title="SKILLS GAINED" />
        <ul className="cyber-list cyber-list--purple">
          <li>React — component-based UI architecture, hooks, state management, and routing</li>
          <li>TailwindCSS — utility-first styling and responsive design patterns</li>
          <li>HTML — semantic markup as the foundation of a web interface</li>
          <li>
            Backend fundamentals — RESTful API design, Express.js routing, and MongoDB data modeling
          </li>
          <li>JWT authentication — implementing secure login flows end-to-end</li>
          <li>Full-stack integration — wiring a React frontend to a Node/Express backend via REST</li>
        </ul>
      </motion.div>

      {/* ── Resources ────────────────────────────────────── */}
      <motion.div variants={rise} className="mb-5">
        <SectionHeading index="06" title="RESOURCES" />
        <ul className="cyber-list">
          <li>Bootstrap documentation — component reference and layout system</li>
          <li>COMS 319 course slides — foundational concepts and project specifications</li>
        </ul>

        <div className="mt-4">
          <a
            className="btn-cyber"
            href="https://github.com/Tyler-Bibus/coms319-final"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </motion.div>

      <div className="rule-dash" />

      {/* ── Gallery ──────────────────────────────────────── */}
      <motion.div variants={rise}>
        <p className="kicker mb-3">// screenshots</p>
        <ImageGallery
          images={[
            { src: '/personal/assets/319/coms319Screenshot1.png', alt: 'Game Finder Screenshot 1' },
            { src: '/personal/assets/319/coms319Screenshot2.png', alt: 'Game Finder Screenshot 2' },
          ]}
        />
      </motion.div>
    </motion.div>
  );
}

export default WebDesignProjects;
