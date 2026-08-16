/**
 * Replaces the old pill cloud. Each skill category becomes a neon
 * billboard whose contents scroll continuously — alternating direction
 * and speed so the stack reads like a strip of storefront signage.
 * Hovering a billboard pauses it so the skills stay readable.
 */

const BILLBOARDS = [
  {
    label: 'Languages',
    duration: '34s',
    items: ['C', 'C++', 'Java', 'JavaScript', 'Python', 'Verilog', 'VHDL', 'MIPS ASM', 'RISC-V ASM', 'SQL'],
  },
  {
    label: 'Frameworks',
    duration: '40s',
    reverse: true,
    items: ['React', 'Spring Boot', 'Express', 'Android SDK', 'TensorFlow', 'Docker', 'Kubernetes', 'CI/CD', 'Vite'],
  },
  {
    label: 'Hardware',
    duration: '30s',
    items: ['FPGA', 'ASIC', 'VLSI', 'SKY130 PDK', 'Caravel', 'SDR', 'QuestaSim', 'ModelSim', 'LTSpice', 'AutoCAD LT'],
  },
  {
    label: 'Platforms',
    duration: '44s',
    reverse: true,
    items: ['Linux', 'Git', 'MongoDB', 'MySQL', 'Unity', 'Postman', 'Mender', 'LM Studio'],
  },
];

function Billboard({ label, items, duration, reverse }) {
  // The track is duplicated so the -50% translate loops seamlessly.
  const doubled = [...items, ...items];

  return (
    <div className={`bb ${reverse ? 'bb--rtl' : ''}`.trim()}>
      <span className="bb__rail bb__rail--top" />
      <span className="bb__rail bb__rail--bot" />
      <span className="bb__label">{label}</span>

      <div className="bb__viewport">
        <div className="bb__track" style={{ '--bb-dur': duration }}>
          {doubled.map((item, i) => (
            <span className="bb__item" key={`${item}-${i}`} aria-hidden={i >= items.length}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillBillboards() {
  return (
    <div className="bb-stack">
      {BILLBOARDS.map((b) => (
        <Billboard key={b.label} {...b} />
      ))}
    </div>
  );
}

export default SkillBillboards;
