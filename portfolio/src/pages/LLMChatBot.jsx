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

const STATS = [
  { val: 'LOCAL', key: 'inference' },
  { val: 'PYTHON', key: 'stack' },
  { val: '0', key: 'cloud api calls' },
  { val: 'SWAPPABLE', key: 'personas' },
];

const TOOLS = [
  'Python',
  'discord.py',
  'LM Studio',
  'Local LLM',
  'Prompt Engineering',
  'JSON Config',
];

function LLMChatBot() {
  return (
    <motion.div className="container page" variants={stagger} initial="hidden" animate="visible">
      <motion.div variants={rise}>
        <p className="kicker mb-2">// project_file</p>
        <h1 className="page__title mb-3">
          <GlitchText text="LOCAL LLM DISCORD BOT" />
        </h1>
        <p className="mono mb-4" style={{ color: 'var(--faint)' }}>
          personal project · self-hosted · no cloud dependency
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
        <TerminalPanel title="~/projects/llm-bot/README.md" right="self-hosted">
          <div className="prose">
            <p>
              A fully self-hosted Discord bot wired to a local Large Language Model. Everything runs
              on personal hardware — <strong>no cloud API dependency</strong> — so server members can
              chat naturally while privacy and control stay on my side of the wire.
            </p>
            <p className="mb-0">
              End-to-end AI deployment in one script: model selection and quantization, server setup,
              Discord API integration, prompt engineering, and extensible tool usage. Local means low
              latency and zero data leaving the machine.
            </p>
          </div>
        </TerminalPanel>
      </motion.div>

      {/* ── Capabilities ─────────────────────────────────── */}
      <motion.div variants={rise} className="mb-5">
        <SectionHeading index="02" title="CAPABILITIES" />
        <ul className="cyber-list">
          <li>Local LLM inference powered by LM Studio</li>
          <li>Custom personalities — switch between character roles, tones, or expert modes</li>
          <li>
            Tool integration — the model can call custom functions and scripts (web search,
            calculations, file ops, game commands)
          </li>
          <li>discord.py / discord.js backend with real-time message handling</li>
          <li>Configurable through simple scripts or JSON for personalities, prompts, and tools</li>
        </ul>
      </motion.div>

      {/* ── Role ─────────────────────────────────────────── */}
      <motion.div variants={rise} className="mb-5">
        <SectionHeading index="03" title="MY ROLE" />
        <TerminalPanel title="~/projects/llm-bot/role.md" right="solo">
          <div className="prose">
            <p className="mb-0">
              Solo project, written entirely in <strong>Python</strong>. I designed and implemented
              every layer — from Discord message handling through to the LM Studio API integration.
              A small but complete script that intercepts Discord requests, passes them to a
              locally-running LLM, and returns the response to the server.
            </p>
          </div>
        </TerminalPanel>
      </motion.div>

      {/* ── Skills ───────────────────────────────────────── */}
      <motion.div variants={rise} className="mb-5">
        <SectionHeading index="04" title="SKILLS GAINED" />
        <ul className="cyber-list cyber-list--purple">
          <li>Prompt engineering — system prompts that shape model behavior, tone, and persona</li>
          <li>
            Local LLM deployment — running and optimizing quantized models on consumer hardware via
            LM Studio
          </li>
          <li>
            LM Studio&apos;s built-in OpenAI-compatible server — driving a local model through a
            familiar API surface
          </li>
          <li>
            Autonomous agent patterns — passing context and tool calls through an LLM in a
            lightweight, local setting
          </li>
          <li>Discord API — real-time message events and bot interactions via discord.py</li>
        </ul>
      </motion.div>

      {/* ── Resources ────────────────────────────────────── */}
      <motion.div variants={rise} className="mb-5">
        <SectionHeading index="05" title="RESOURCES" />
        <ul className="cyber-list">
          <li>Discord Developer Documentation — bot setup, event handling, and permissions</li>
          <li>LM Studio — local inference platform with a built-in OpenAI-compatible API server</li>
        </ul>
      </motion.div>

      <div className="rule-dash" />

      {/* ── Tooling ──────────────────────────────────────── */}
      <motion.div variants={rise}>
        <p className="kicker mb-2">// tooling</p>
        <div className="cyber-card__tags">
          {TOOLS.map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default LLMChatBot;
