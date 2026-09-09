import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import SkillBillboards from '../components/SkillBillboards';
import TerminalPanel from '../components/TerminalPanel';
import HackerOverlay from '../components/HackerOverlay';
import Typewriter from '../components/Typewriter';
import GlitchText from '../components/GlitchText';
import profile from '../assets/profile.jpg';

/* ── motion presets ───────────────────────────────────────── */
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.14 } },
};

const rise = {
  hidden: { y: 22, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 16 } },
};

const section = {
  hidden: { y: 28, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.55, ease: 'easeOut' } },
};

/* The original word-by-word subtitle animation, kept and restyled. */
const subtitleContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
};

const wordVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } },
};

const SUBTITLE = ['Computer Engineer', '·', 'Hardware', '·', 'Full-Stack', '·', 'ML'];

const BOOT_LINES = [
  'SystemVerilog / Bluetooth Link Layer',
  'VHDL / computer architecture',
  'C++ / model quantization',
  'React Native / application development',
];

const PROJECTS = [
  {
    id: '01',
    title: 'Open-Source ASIC Bluetooth Microcontroller',
    description:
      "Our nine-person senior design team is developing an open-source Bluetooth microcontroller on SKY130. I work on the Link Layer, Host Controller Interface, and software testing environment.",
    link: '/senior-design',
    tags: ['SystemVerilog', 'SKY130', 'Caravel', 'BLE 4.0'],
    status: 'live',
    statusLabel: 'IN PROGRESS',
  },
  {
    id: '02',
    title: 'Convolutional Hardware Accelerator',
    description:
      "A VHDL accelerator that processes a convolutional layer using four parallel multiply-accumulate units. I implemented the MAC and storage units, C++ quantization, and hardware interface.",
    link: '/ml-accelerator',
    tags: ['VHDL', 'C++', 'INT8', 'MAC Array'],
  },
  {
    id: '03',
    title: 'Three MIPS Processors',
    description:
      "Three MIPS processors that use the same instruction set with different execution strategies. I designed the top-level architecture and control logic, and led simulation debugging.",
    link: '/cpu-project',
    tags: ['VHDL', 'MIPS ASM', 'Pipelining', 'QuestaSim'],
  },
  {
    id: '04',
    title: 'Local LLM Discord Bot',
    description:
      "A Python bot that sends Discord messages to a quantized model running on my hardware. I built the message handling, LM Studio integration, and configurable personalities.",
    link: '/llm-chat-bot',
    tags: ['Python', 'LM Studio', 'discord.py'],
  },
  {
    id: '05',
    title: 'Goods & Service Finder',
    description:
      "An Android marketplace with listings, auctions, and live chat. As frontend lead, I built the screens and connected listing creation, updates, and deletion to the REST API.",
    link: '/android-project',
    tags: ['Java', 'Spring Boot', 'MySQL', 'WebSockets'],
  },
  {
    id: '06',
    title: 'Game Finder Web App',
    description:
      "A web app that recommends games through quizzes. I built the login page, home page, and game-entry template, and worked with the Express and MongoDB backend.",
    link: '/web-design-projects',
    tags: ['React', 'Express', 'MongoDB', 'JWT'],
  },
];

function Home() {
  const [hacked, setHacked] = useState(false);

  return (
    <motion.div variants={stagger} initial="hidden" animate="visible">
      {hacked && <HackerOverlay onClose={() => setHacked(false)} />}

      {/* ── Hero ─────────────────────────────────────────── */}
      <motion.section className="hero text-center" variants={rise}>
        <div className="container">
          <div className="hero__portrait-wrap">
            <span className="hero__ring" />
            <span className="hero__ring hero__ring--2" />
            <img src={profile} alt="Tyler Bibus" className="hero__portrait" />

            {/* Easter egg: the hotspot sits over the nose. */}
            <button
              type="button"
              className="hero__nose"
              onClick={() => setHacked(true)}
              aria-label="Secret: run the intrusion sequence"
              title=""
            />
          </div>

          <h1 className="hero__name">
            <GlitchText text="TYLER BIBUS" />
          </h1>

          <motion.div
            className="hero__roles"
            variants={subtitleContainer}
            initial="hidden"
            animate="visible"
          >
            {SUBTITLE.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className={word === '·' ? 'neon-m' : ''}
                style={{ color: word === '·' ? undefined : 'var(--lilac)' }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          <p className="hero__meta hero__activity mt-4 mb-1">
            <span className="neon-m">$</span> work:{' '}
            <Typewriter lines={BOOT_LINES} className="dim" />
          </p>
          <p className="hero__meta mb-1">Iowa State University · B.S. Computer Engineering · Dec 2026</p>
          <p className="hero__meta mb-4">tylerbibus@hotmail.com · 651-210-1342</p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a
              href="https://github.com/Tyler-Bibus"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/tyler-bibus-a63087248/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <Link to="/resume" className="hero__social" aria-label="Resume">
              <FaFileAlt size={18} />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* ── 01 · Mission (was "Career Objective") ────────── */}
      <motion.section
        className="container py-5"
        variants={section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionHeading index="01" title="MISSION" />

        <TerminalPanel title="~/about/mission.txt" right="read-only">
          <div className="prose" style={{ maxWidth: '90ch' }}>
            <p>
              I am studying Computer Engineering at Iowa State University, with an expected
              graduation date of <strong>December 2026</strong>. I am most interested in digital
              hardware design and verification. I like understanding how the individual components
              of a system work and how they fit together.
            </p>
            <p>
              At <strong>ARA Wireless</strong>, I worked with C and C++ to control a software-defined
              radio for an outdoor 5G testbed. At <strong>boisei labs</strong>, I have been the sole
              developer of a React Native application, including its backend, frontend, and testing.
              These projects have given me experience with both hardware and the software that uses it.
            </p>
            <p className="mb-0">
              I want to continue this work in an engineering role, preferably in RTL design,
              verification, or ASIC and FPGA development. I am also interested in software work
              where I can use that hardware background to understand and solve the problem.
            </p>
          </div>
        </TerminalPanel>
      </motion.section>

      {/* ── 02 · Projects (now above skills) ─────────────── */}
      <motion.section
        className="container py-5"
        variants={section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <SectionHeading index="02" title="PROJECTS" />

        <div className="row g-4">
          {PROJECTS.map((p) => (
            <div className="col-12 col-md-6 col-xl-4" key={p.id}>
              <ProjectCard {...p} visual={p.id} />
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── 03 · Skills as scrolling billboards ──────────── */}
      <motion.section
        className="container py-5"
        variants={section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <SectionHeading index="03" title="STACK" />
        <p className="mono mb-3" style={{ color: 'var(--faint)', fontSize: '.82rem', letterSpacing: '.08em' }}>
          Languages, tools, and platforms used across my projects.
        </p>
        <SkillBillboards />
      </motion.section>

      {/* ── Closing call to action ───────────────────────── */}
      <motion.section
        className="container pb-5 text-center"
        variants={section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="rule-dash" />
        <p className="kicker mb-3">// contact</p>
        <h2 className="mb-4" style={{ fontSize: 'clamp(1.2rem,3vw,1.8rem)' }}>
          Hardware and software opportunities · December 2026
        </h2>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a className="btn-cyber" href="mailto:tylerbibus@hotmail.com">
            Email Me
          </a>
          <Link className="btn-cyber btn-cyber--ghost" to="/work-experience">
            View Experience
          </Link>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default Home;
