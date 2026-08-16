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
  { val: '3', key: 'processors built' },
  { val: '5', key: 'pipeline stages' },
  { val: 'VHDL', key: 'hdl of record' },
  { val: 'MIPS', key: 'instruction set' },
];

const builds = [
  {
    id: 'BUILD_01',
    title: 'Single-Cycle MIPS Processor',
    desc:
      'Every instruction completes in one clock. The baseline design — fetch, decode, execute, memory, and writeback all resolve inside a single long cycle, which makes the datapath easy to reason about and the clock period brutal.',
    tags: ['VHDL', 'DATAPATH', 'CONTROL UNIT'],
  },
  {
    id: 'BUILD_02',
    title: 'Software-Scheduled 5-Stage Pipeline',
    desc:
      'The same ISA split across five overlapping stages, with hazards left to the compiler. Correctness depends on the assembly itself scheduling around dependencies — no hardware safety net.',
    tags: ['PIPELINING', 'MIPS ASM', 'HAZARDS'],
  },
  {
    id: 'BUILD_03',
    title: 'Hardware-Scheduled 5-Stage Pipeline',
    desc:
      'The full build: hazard detection and forwarding units resolve data and control hazards in hardware, so unscheduled assembly runs correctly. Stalls only where forwarding cannot cover the dependency.',
    tags: ['FORWARDING', 'HAZARD DETECT', 'STALL LOGIC'],
  },
];

const skills = [
  'Computer architecture fundamentals — fetch, decode, execute, memory, and writeback as discrete pipeline stages',
  'Pipelining — overlapping instruction execution and the throughput-vs-complexity tradeoff it buys',
  'Hazard detection and forwarding — spotting data and control hazards and resolving them in hardware',
  'Performance analysis — measuring CPI and comparing single-cycle against pipelined designs quantitatively',
  'VHDL — design patterns, component instantiation, and testbench development',
  'MIPS assembly — writing and reading assembly to verify processor correctness',
  'Hardware debugging — reading simulation waveforms to trace signal-level issues',
  'Technical documentation — datapath diagrams that communicate a hardware design',
];

const resources = [
  <>
    <em>Computer Organization and Design</em>, Patterson &amp; Hennessy — primary reference for MIPS
    architecture and pipelining
  </>,
  <>
    <em>Free Range VHDL</em> — main textbook for VHDL syntax, design patterns, and testbench
    methodology
  </>,
  'AutoCAD LT — used to draw the final pipelined datapath diagram',
  'QuestaSim / ModelSim — simulation environment for waveform-based hardware debugging',
  'CprE 381 course materials — lab specifications and MIPS instruction set reference',
];

const tools = ['AutoCAD LT', 'VHDL', 'MIPS Assembly', 'QuestaSim'];

function CpuProject() {
  return (
    <motion.div className="container page" variants={stagger} initial="hidden" animate="visible">
      {/* ── Header ───────────────────────────────────────── */}
      <motion.div variants={rise}>
        <p className="kicker mb-2">// project_record</p>
        <h1 className="page__title mb-3">
          <GlitchText text="MIPS CPU ARCHITECTURE" />
        </h1>
        <p className="mono mb-4" style={{ color: 'var(--faint)' }}>
          CprE 381 · computer architecture · built with one partner
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
        <TerminalPanel title="~/cpre381/README.md" right="complete">
          <div className="prose">
            <p>
              Three MIPS-based processors, designed and implemented in VHDL over a single semester.
              Each one runs the same instruction set through a different execution strategy, from a
              single long clock cycle to a fully interlocked five-stage pipeline.
            </p>
            <p className="mb-0">
              Every design demanded careful planning around instruction fetch, decode, execution,
              memory access, and writeback. Each processor is backed by top-level diagrams and
              written documentation.
            </p>
          </div>
        </TerminalPanel>
      </motion.div>

      {/* ── 02 The three builds ──────────────────────────── */}
      <motion.div variants={rise} className="mt-5">
        <SectionHeading index="02" title="THE THREE BUILDS" />
        <div className="row g-4">
          {builds.map((b) => (
            <div className="col-12 col-lg-4" key={b.id}>
              <div className="cyber-card">
                <div className="cyber-card__id">
                  <span>{b.id}</span>
                  <span>
                    <span className="pip pip--done" />
                    built
                  </span>
                </div>
                <h3 className="cyber-card__title">{b.title}</h3>
                <p className="cyber-card__desc">{b.desc}</p>
                <div className="cyber-card__tags">
                  {b.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── 03 My role ───────────────────────────────────── */}
      <motion.div variants={rise} className="mt-5">
        <SectionHeading index="03" title="MY ROLE" />
        <TerminalPanel title="~/cpre381/my_role.md" right="2 devs">
          <ul className="cyber-list mb-0">
            <li>
              Owned the <strong style={{ color: 'var(--text)' }}>top-level architecture</strong>{' '}
              across all three processor implementations.
            </li>
            <li>
              Designed the control unit and control-flow logic that coordinates instruction execution
              at each stage.
            </li>
            <li>
              Drove the majority of the debugging effort — tracing signal propagation through
              simulation to isolate timing and correctness bugs.
            </li>
            <li>
              Produced the AutoCAD LT architectural diagram for the final hardware-scheduled
              pipeline, documenting the complete datapath with its hazard detection and forwarding
              units.
            </li>
          </ul>
        </TerminalPanel>
      </motion.div>

      {/* ── 04 Skills gained ─────────────────────────────── */}
      <motion.div variants={rise} className="mt-5">
        <SectionHeading index="04" title="SKILLS GAINED" />
        <ul className="cyber-list cyber-list--purple">
          {skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </motion.div>

      {/* ── 05 Resources ─────────────────────────────────── */}
      <motion.div variants={rise} className="mt-5">
        <SectionHeading index="05" title="RESOURCES" />
        <ul className="cyber-list">
          {resources.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </motion.div>

      {/* ── 06 Datapath ──────────────────────────────────── */}
      <motion.div variants={rise} className="mt-5">
        <SectionHeading index="06" title="DATAPATH" />
        <div className="doc-frame mb-3">
          <embed
            src="/personal/assets/CPUDiagram.pdf"
            width="100%"
            height="800"
            type="application/pdf"
            title="Hardware-scheduled 5-stage MIPS pipeline datapath diagram"
          />
        </div>
        <p className="mono" style={{ color: 'var(--faint)' }}>
          ▚ Final hardware-scheduled pipelined datapath, drawn in AutoCAD LT — all five stages plus
          the hazard detection and forwarding units.
        </p>

        <div className="rule-dash" />

        <div className="cyber-card__tags mb-4">
          {tools.map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>

        <a
          className="btn-cyber"
          href="https://github.com/Tyler-Bibus/ComputerArchitecture"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </motion.div>
    </motion.div>
  );
}

export default CpuProject;
