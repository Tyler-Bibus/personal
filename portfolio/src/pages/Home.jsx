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
import EyeOfSilicon from '../components/visuals/EyeOfSilicon';
import RtlTrace from '../components/visuals/RtlTrace';
import WirelessLink from '../components/visuals/WirelessLink';
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
  'writing verilog that ends up on real silicon',
  'squeezing 48 dB out of a software-defined radio',
  'quantizing a CNN down to 8 bits, then building the hardware for it',
  'shipping the frontend too, because someone has to',
];

const PROJECTS = [
  {
    id: '01',
    title: 'Open-Source ASIC Bluetooth Microcontroller',
    description:
      'Senior design. Nine engineers building a silicon-proven BLE radio microcontroller on SKY130. I work on the Link Layer and Host Controller Interface, and lead the software testing environment.',
    link: '/senior-design',
    tags: ['Verilog', 'SKY130', 'Caravel', 'BLE 4.0'],
    status: 'live',
    statusLabel: 'IN PROGRESS',
  },
  {
    id: '02',
    title: 'Convolutional Hardware Accelerator',
    description:
      'An output-stationary CNN accelerator in VHDL with 4 parallel MACs, plus the C++ quantization and driver layer that feeds it. Beats naive x86; does not beat a GPU, and that is fine.',
    link: '/ml-accelerator',
    tags: ['VHDL', 'C++', 'INT8', 'MAC Array'],
  },
  {
    id: '03',
    title: 'Three MIPS Processors',
    description:
      'Single-cycle, software-scheduled pipeline, and a hardware-scheduled 5-stage pipeline with full hazard detection and forwarding. I owned the control path and most of the debugging.',
    link: '/cpu-project',
    tags: ['VHDL', 'MIPS ASM', 'Pipelining', 'QuestaSim'],
  },
  {
    id: '04',
    title: 'Local LLM Discord Bot',
    description:
      'A self-hosted Discord bot wired to a quantized model running on my own hardware. Swappable personalities, tool calls, no cloud API and no data leaving the box.',
    link: '/llm-chat-bot',
    tags: ['Python', 'LM Studio', 'discord.py'],
  },
  {
    id: '05',
    title: 'Goods & Service Finder',
    description:
      'A marketplace app for Android backed by Spring Boot — listings, auctions, and live chat. I was frontend lead and owned the full CRUD lifecycle against the REST API.',
    link: '/android-project',
    tags: ['Java', 'Spring Boot', 'MySQL', 'WebSockets'],
  },
  {
    id: '06',
    title: 'Game Finder Web App',
    description:
      'Full-stack game discovery with JWT auth and quiz-driven recommendations. My first real trip below the frontend into Express and MongoDB.',
    link: '/web-design-projects',
    tags: ['React', 'Express', 'MongoDB', 'JWT'],
  },
];

/* A visual index of the three hardware projects — each card runs the
   same diagram that lives on the project page it links to. */
const VISUALS = [
  {
    to: '/senior-design',
    label: 'BLE ASIC',
    sub: 'BLE 4.0 · LINK LAYER + HCI',
    render: () => <WirelessLink />,
  },
  {
    to: '/ml-accelerator',
    label: 'CNN Hardware Accelerator',
    sub: '5×5 KERNEL · 4 MACS · INT8',
    render: () => <EyeOfSilicon />,
  },
  {
    to: '/cpu-project',
    label: 'Pipelined Datapath',
    sub: 'FETCH → DECODE → EX → MEM → WB',
    render: () => <RtlTrace />,
  },
];

/* Rolled once per page load, not per render — so it changes on reload
   and stays put while you are reading. */
const TAGLINES = [
  'Looking for a new grad engineer who can go up and down the stack?',
  'Need someone who reads the datasheet and writes the frontend?',
  'Got a hard problem somewhere between the transistor and the browser?',
  'Hiring for a role that touches both silicon and software?',
  'Want an engineer who is comfortable one layer lower than the job description?',
  'Need someone who will actually open the waveform viewer?',
  'Looking for an engineer who can take a project from RTL to release?',
];

const TAGLINE = TAGLINES[Math.floor(Math.random() * TAGLINES.length)];

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

          <p className="hero__meta mt-4 mb-1">
            <span className="neon-m">$</span> currently:{' '}
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

      {/* ── Visual index of the hardware work ────────────── */}
      <motion.section
        className="container py-4"
        variants={section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="row g-3">
          {VISUALS.map((v) => (
            <div className="col-12 col-md-4" key={v.to}>
              <Link to={v.to} className="viz-card">
                <div className="viz-card__stage">{v.render()}</div>
                <p className="viz-card__label">{v.label}</p>
                <p className="viz-card__sub">{v.sub}</p>
              </Link>
            </div>
          ))}
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
              I build the layer most people never see — the RTL under the driver, the driver under
              the app — and I want it pointed at problems that actually matter. At{' '}
              <strong className="neon-m">ARA Wireless</strong> that meant writing C and C++ to drive
              the output pins on a software-defined radio, pulling <strong>48 dB</strong> of extra
              signal out of the hardware so rural Iowa could get real broadband. Technically
              stubborn, genuinely consequential. That is the shape of work I'm after.
            </p>
            <p>
              The other half of the picture is software, and I spent this year proving it out at{' '}
              <strong className="neon-m">boisei labs</strong>, a tech-for-good venture backing
              environmentally sustainable technology. I was the{' '}
              <strong>sole developer on a full-stack React Native application</strong> —
              architecture, backend, frontend, and testing, all of it mine — and got it near
              production-ready inside the internship term. I also designed and deployed custom AI
              agent workflows into the team's build and test process, and shipped features into a
              production React web app alongside the rest of engineering. Solo when a project needed
              an owner, on a team when it needed a team.
            </p>
            <p className="mb-0">
              What I want next is technical engineering work where the problem is genuinely hard. My
              preference runs <strong>hardware first</strong> — RTL, verification, ASIC and FPGA work
              is where I'm happiest — then software, but I care more about the problem than the layer
              it lives on, and I have now shipped at both ends. Graduating{' '}
              <strong>December 2026</strong>.
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
              <ProjectCard {...p} />
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
          // hover a marquee to hold it still
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
        <p className="kicker mb-3">// end of transmission</p>
        <h2 className="mb-4" style={{ fontSize: 'clamp(1.2rem,3vw,1.8rem)' }}>
          {TAGLINE}
        </h2>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a className="btn-cyber" href="mailto:tylerbibus@hotmail.com">
            Send Transmission
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
