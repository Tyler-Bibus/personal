import { motion } from 'framer-motion';

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
  { val: '130nm', key: 'SKY130 process' },
  { val: '9', key: 'engineers' },
  { val: 'BLE 4.0', key: 'link layer + HCI' },
  { val: 'Verilog', key: 'synthesizable RTL' },
];

const skills = [
  'ASIC fabrication fundamentals — SkyWater 130nm as an industry-standard open-source process design kit (PDK)',
  'Open-source ASIC toolchain — the Caravel harness and the open-source EDA tools around it',
  'Bluetooth 4.0 protocol — the Link Layer specification and Host Controller Interface at an implementation level',
  'Digital hardware simulation — BumbleSim and BabbleSim for Bluetooth protocol simulation and validation',
  'Large team engineering — coordinating across a 9-person cross-disciplinary team with client and advisor oversight',
  'Verilog for ASIC — writing synthesizable RTL that targets a real fabrication flow, not an FPGA',
];

const resources = [
  'Bluetooth Core Specification 4.0 — primary reference for Link Layer and HCI design requirements',
  'Caravel documentation and harness — open-source ASIC integration framework',
  'SkyWater SKY130 PDK — 130nm open-source process design kit used for fabrication-ready design',
  'BumbleSim / BabbleSim — Bluetooth simulation frameworks for protocol validation',
];

const tools = [
  'Verilog',
  'Caravel',
  'SkyWater SKY130',
  'LTSpice',
  'BumbleSim',
  'BabbleSim',
  'RISC-V Assembly',
];

const reports = [
  {
    label: 'Week 5 Report',
    src: 'https://sddec26-10.sd.ece.iastate.edu/week_5_report.pdf',
  },
  {
    label: 'Week 6 Report',
    src: 'https://sddec26-10.sd.ece.iastate.edu/week_6_report.pdf',
  },
];

function SeniorDesign() {
  return (
    <motion.div className="container page" variants={stagger} initial="hidden" animate="visible">
      {/* ── Masthead ─────────────────────────────────────── */}
      <motion.div variants={rise}>
        <p className="kicker mb-2">// senior_design</p>
        <h1 className="page__title mb-3">
          <GlitchText text="OPEN-SOURCE ASIC BLUETOOTH MICROCONTROLLER" />
        </h1>
        <p className="mono mb-4" style={{ color: 'var(--faint)' }}>
          <span className="pip pip--live" />
          in progress · Iowa State ECpE senior design · 9-engineer team · SkyWater SKY130
        </p>
        <hr />
      </motion.div>

      {/* ── Stat row ─────────────────────────────────────── */}
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
      <motion.div variants={rise} className="mb-5">
        <SectionHeading index="01" title="BRIEF" />
        <TerminalPanel title="~/sddec26-10/brief.md" right="silicon-proven target">
          <div className="prose">
            <p>
              The radio microcontroller market is dominated by closed-source silicon. This project
              is an <strong>open-source ASIC Bluetooth microcontroller</strong> — a complete,
              end-to-end, silicon-proven radio MCU built in the open.
            </p>
            <p>
              It is the capstone of my education at Iowa State: a full academic year working
              collaboratively with eight other engineers to design, develop, and deliver a finished
              part. Unlike the FPGA-oriented work in my computer architecture and machine learning
              courses, this is written in <strong>Verilog</strong> and never touches Questasim or
              Vivado — the flow is open-source EDA all the way to the SKY130 tapeout.
            </p>
          </div>
        </TerminalPanel>
      </motion.div>

      {/* ── 02 My role ───────────────────────────────────── */}
      <motion.div variants={rise} className="mb-5">
        <SectionHeading index="02" title="MY ROLE" />
        <TerminalPanel title="~/sddec26-10/role.md" right="digital design · team lead">
          <div className="prose">
            <p>
              I sit on the <strong>Digital Design team</strong>, owning the{' '}
              <strong>Link Layer and Host Controller Interface</strong> and acting largely as a lead
              for the team.
            </p>
            <p>
              My piece is the seam of the whole chip: I connect the physical layer to the rest of the
              project, bridging physical electrical circuits and software through the medium of
              digital hardware design.
            </p>
          </div>
        </TerminalPanel>
      </motion.div>

      {/* ── 03 Skills gained ─────────────────────────────── */}
      <motion.div variants={rise} className="mb-5">
        <SectionHeading index="03" title="SKILLS GAINED" />
        <ul className="cyber-list">
          {skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </motion.div>

      {/* ── 04 Resources ─────────────────────────────────── */}
      <motion.div variants={rise} className="mb-5">
        <SectionHeading index="04" title="RESOURCES" />
        <ul className="cyber-list cyber-list--purple">
          {resources.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </motion.div>

      {/* ── 05 Reports ───────────────────────────────────── */}
      <motion.div variants={rise} className="mb-5">
        <SectionHeading index="05" title="REPORTS" />

        <TerminalPanel title="~/sddec26-10/weekly" right="published as we go" className="mb-4">
          <div className="prose">
            <p className="mb-3">
              The team maintains a project website through Iowa State&apos;s ECpE Senior Design
              program. Weekly progress reports are published there as the project develops.
            </p>
          </div>
          <a
            className="btn-cyber"
            href="https://sddec26-10.sd.ece.iastate.edu/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project Site ▸
          </a>
        </TerminalPanel>

        {reports.map((r) => (
          <div className="mb-4" key={r.src}>
            <p className="mono mb-2" style={{ color: 'var(--lilac)' }}>
              $ open {r.label.toLowerCase().replace(/ /g, '_')}.pdf
            </p>
            <div className="doc-frame">
              <embed
                src={r.src}
                width="100%"
                height="800"
                type="application/pdf"
                title={`Senior design ${r.label}`}
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* ── Tools ────────────────────────────────────────── */}
      <motion.div variants={rise}>
        <div className="rule-dash" />
        <p className="kicker mb-2">// toolchain</p>
        <div className="cyber-card__tags">
          {tools.map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default SeniorDesign;
