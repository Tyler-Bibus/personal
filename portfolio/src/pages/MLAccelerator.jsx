import ProjectVisual from '../components/ProjectVisual';
import { motion } from 'framer-motion';

import SectionHeading from '../components/SectionHeading';
import TerminalPanel from '../components/TerminalPanel';
import GlitchText from '../components/GlitchText';
import EyeOfSilicon from '../components/visuals/EyeOfSilicon';
import SideBackdrop from '../components/visuals/SideBackdrop';

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const rise = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 16 } },
};

const stats = [
  { val: '8-bit', key: 'quantization' },
  { val: '4', key: 'parallel MACs' },
  { val: '64×64×3', key: 'image input' },
  { val: '5×5', key: 'convolution kernel' },
];

const pipeline = [
  {
    id: 'U0',
    name: 'Index Generator',
    desc:
      'Walks the output-stationary dataflow and drives the fetch addressing — which slice of the 64×64×3 input and the 5×5×3×32 filter each MAC sees, cycle by cycle.',
    tags: ['VHDL', 'Fetch', 'Dataflow'],
  },
  {
    id: 'U1',
    name: 'MAC Units',
    desc:
      'Four parallel multiply-accumulate lanes. 8-bit quantized weights and activations feed fixed-point multiplication into int32 accumulators.',
    tags: ['VHDL', 'Fixed-point', 'int32'],
  },
  {
    id: 'U2',
    name: 'Dequantization Unit',
    desc:
      'Scales the int32 accumulator results back out of the quantized domain so the layer output matches the reference model, with optional ReLU applied on the way out.',
    tags: ['VHDL', 'ReLU', 'Scaling'],
  },
  {
    id: 'U3',
    name: 'Output Storage',
    desc:
      'Buffers and writes back the 60×60×32 layer-1 output volume, including the optional 2×2 max-pooling stage before results leave the accelerator.',
    tags: ['VHDL', 'Max-pool', 'Writeback'],
  },
];

const skills = [
  'ML model quantization — implementing 8-bit quantization in C++',
  'Hardware/software co-design — writing C++ that interfaces directly with custom VHDL hardware',
  'CNN architecture — understanding convolution deeply enough to accelerate it in hardware',
  'MAC unit design — building the core multiply-accumulate block of neural network inference in VHDL',
  'Python for ML debugging — scripting visualization tools to inspect and validate model outputs at each stage',
  'Performance analysis — comparing quantization sizes and multiplier designs, benchmarking against naive x86',
  'Technical presentation — demonstrating findings and connecting project work to published research papers',
];

const resources = [
  'CPRE 4870/5870 course materials — accelerator template, design specifications, and dataflow requirements',
  'Published research papers on fast multiplier architectures and quantization techniques (used for benchmarking comparison)',
  'TensorFlow / model reference implementations — used to validate quantized output against a known-good baseline',
];

const tools = ['VHDL', 'C++', 'Python', 'TensorFlow'];

function MLAccelerator() {
  return (
    <motion.div className="container page" variants={stagger} initial="hidden" animate="visible">
      {/* The MAC array running in the margins — same multiply-accumulate
          wave the accelerator does, just bigger and slower. */}
      <SideBackdrop variants={['mac']} />

      {/* ── Masthead ─────────────────────────────────────── */}
      <motion.div variants={rise}>
        <p className="kicker mb-2">// cpre_4870_5870</p>
        <h1 className="page__title mb-3">
          <GlitchText text="CONVOLUTIONAL HARDWARE ACCELERATOR" />
        </h1>
        <p className="mono mb-4" style={{ color: 'var(--faint)' }}>
          <span className="pip pip--done" />
          complete · advanced computer architecture · VHDL + C++ · output-stationary dataflow
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

      {/* ── The classifier, looking back ─────────────────── */}
      <motion.figure variants={rise} className="eye-stage mb-5">
        <EyeOfSilicon />
        <figcaption className="mono text-center mt-2" style={{ color: 'var(--faint)', fontSize: '.76rem', letterSpacing: '.16em' }}>
          5×5 KERNEL · WALKING A 64×64×3 INPUT · 4 MACS WIDE
        </figcaption>
      </motion.figure>

      <ProjectVisual kind="02" detail />

      {/* ── 01 Brief ─────────────────────────────────────── */}
      <motion.div variants={rise} className="mb-5">
        <SectionHeading index="01" title="BRIEF" />
        <TerminalPanel title="~/cnn_accel/brief.md" right="layer 1 conv">
          <div className="prose">
            <p>
              For CPRE 4870/5870 (Advanced Computer Architecture) I worked with partners to design
              and implement a <strong>convolutional hardware accelerator</strong> for our CNN model —
              four VHDL subcomponents integrated into the course accelerator template.
            </p>
            <p>
              The design runs <strong>8-bit quantization</strong> for weights and activations with
              int32 accumulators and fixed-point multiplication, on an{' '}
              <strong>output-stationary dataflow with 4 parallel MACs</strong>. It targets the first
              convolutional layer: 64×64×3 input, 5×5×3×32 filter, 60×60×32 output, with optional
              ReLU and 2×2 max-pooling.
            </p>
            <p className="mb-0">
              We compared the accelerator with a naive x86 implementation and a GPU. It performed
              better than the naive x86 implementation, but did not exceed GPU performance. The
              architecture and project results are included in the documentation below.
            </p>
          </div>
        </TerminalPanel>
      </motion.div>

      {/* ── 02 Pipeline ──────────────────────────────────── */}
      <motion.div variants={rise} className="mb-5">
        <SectionHeading index="02" title="PIPELINE" />
        <div className="row g-4">
          {pipeline.map((p) => (
            <div className="col-12 col-md-6" key={p.id}>
              <div className="cyber-card">
                <div className="cyber-card__id">
                  <span>{p.id}</span>
                  <span>vhdl</span>
                </div>
                <h3 className="cyber-card__title">{p.name}</h3>
                <p className="cyber-card__desc">{p.desc}</p>
                <div className="cyber-card__tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── 03 My role ───────────────────────────────────── */}
      <motion.div variants={rise} className="mb-5">
        <SectionHeading index="03" title="MY ROLE" />

        <div className="row g-4">
          <div className="col-12 col-lg-6">
            <TerminalPanel title="~/cnn_accel/hardware" right="vhdl">
              <div className="prose">
                <p>
                  The team split roughly along the hardware/software boundary, though most components
                  were jointly developed.
                </p>
              </div>
              <ul className="cyber-list">
                <li>Implemented the original <strong>MAC unit</strong> in VHDL</li>
                <li>Implemented the <strong>Storage Unit</strong> in VHDL</li>
                <li>Contributed heavily to the <strong>Fetch Unit</strong>, conceptually and in debugging</li>
                <li>Supported the <strong>Dequantization Unit</strong> — mostly conceptual work and debugging</li>
              </ul>
            </TerminalPanel>
          </div>

          <div className="col-12 col-lg-6">
            <TerminalPanel title="~/cnn_accel/software" right="c++ · python">
              <div className="prose">
                <p>
                  I was responsible for the C++ implementation and Python debugging scripts.
                </p>
              </div>
              <ul className="cyber-list cyber-list--purple">
                <li>Solely responsible for the <strong>C++ implementation</strong></li>
                <li>Wrote the <strong>quantization logic</strong> for our CNN model</li>
                <li>Built the <strong>interface layer</strong> connecting C++ to the hardware accelerator</li>
                <li>Wrote all <strong>Python scripts</strong> used to debug outputs and visualize model results</li>
              </ul>
            </TerminalPanel>
          </div>
        </div>
      </motion.div>

      {/* ── 04 Skills gained ─────────────────────────────── */}
      <motion.div variants={rise} className="mb-5">
        <SectionHeading index="04" title="SKILLS GAINED" />
        <ul className="cyber-list">
          {skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </motion.div>

      {/* ── 05 Resources ─────────────────────────────────── */}
      <motion.div variants={rise} className="mb-5">
        <SectionHeading index="05" title="RESOURCES" />
        <ul className="cyber-list cyber-list--purple">
          {resources.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </motion.div>

      {/* ── Report ───────────────────────────────────────── */}
      <motion.div variants={rise} className="mb-5">
        <p className="mono mb-2" style={{ color: 'var(--lilac)' }}>
          $ open cnn_accelerator.pdf
        </p>
        <div className="doc-frame">
          <a className="doc-frame__link" href="/personal/assets/cnn_accelerator.pdf" target="_blank" rel="noopener noreferrer">Open PDF in a new tab ↗</a>
              <embed
            src="/personal/assets/cnn_accelerator.pdf"
            width="100%"
            height="800"
            type="application/pdf"
            title="Convolutional hardware accelerator report"
          />
        </div>
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

export default MLAccelerator;
