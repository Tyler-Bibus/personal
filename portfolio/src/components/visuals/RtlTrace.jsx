/**
 * A datapath floorplan drawn as PCB-style traces — the blocks you'd
 * actually find in a pipelined MIPS core, wired together with chamfered
 * orthogonal routing and animated signal flow.
 *
 * Square tile (320x320) so it works both as a side-margin backdrop
 * (stacked and mirrored) and as a panel on the home page.
 */

const BLOCKS = [
  { x: 18,  y: 18,  w: 52, h: 24, label: 'PC' },
  { x: 96,  y: 18,  w: 66, h: 24, label: 'IMEM' },
  { x: 190, y: 18,  w: 92, h: 24, label: 'REGFILE' },
  { x: 30,  y: 108, w: 58, h: 26, label: 'ALU' },
  { x: 122, y: 108, w: 62, h: 24, label: 'FWD' },
  { x: 212, y: 108, w: 70, h: 24, label: 'STALL' },
  { x: 18,  y: 200, w: 88, h: 24, label: 'ADDR GEN' },
  { x: 138, y: 200, w: 66, h: 24, label: 'DMEM' },
  { x: 232, y: 200, w: 58, h: 24, label: 'JUMP' },
  { x: 128, y: 276, w: 74, h: 24, label: 'WB' },
];

/* Chamfered orthogonal routing — `l 8,8` corners read as 45° bends. */
const TRACES = [
  'M 70,30 H 96',
  'M 162,30 H 190',
  'M 44,42 V 92 l 8,8 V 108',
  'M 236,42 V 62 l -8,8 H 68 l -8,8 V 108',
  'M 88,121 H 122',
  'M 184,120 H 212',
  'M 59,134 V 178 l 8,8 H 163 l 8,8 V 200',
  'M 171,224 V 258 l -8,8 H 165 V 276',
  'M 247,120 V 74 l -8,-8 H 52 l -8,-8 V 42',
  'M 261,200 V 166 l 8,-8 H 300 V 30 l -8,-8 H 282',
  'M 106,212 H 138',
  'M 204,212 H 232',
];

/* Vias — the little plated holes where traces change layer. */
const VIAS = [
  [44, 92], [236, 62], [59, 178], [171, 258], [247, 74], [300, 158], [269, 158],
];

function RtlTrace({ opacity = 1, seed = 0 }) {
  return (
    <svg
      viewBox="0 0 320 320"
      className="viz viz--rtl"
      style={{ opacity }}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* faint substrate grid */}
      <g className="viz-rtl__grid">
        {Array.from({ length: 15 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 22} x2="320" y2={i * 22} />
        ))}
        {Array.from({ length: 15 }, (_, i) => (
          <line key={`v${i}`} x1={i * 22} y1="0" x2={i * 22} y2="320" />
        ))}
      </g>

      {/* static copper */}
      <g className="viz-rtl__copper">
        {TRACES.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>

      {/* animated signal flowing along the same routes */}
      <g className="viz-rtl__flow">
        {TRACES.map((d, i) => (
          <path key={i} d={d} style={{ animationDelay: `${((i + seed) % 6) * 0.45}s` }} />
        ))}
      </g>

      <g className="viz-rtl__via">
        {VIAS.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" />
        ))}
      </g>

      <g className="viz-rtl__block">
        {BLOCKS.map((b, i) => (
          <g key={b.label} style={{ animationDelay: `${((i + seed) % 5) * 0.8}s` }}>
            <rect x={b.x} y={b.y} width={b.w} height={b.h} />
            <text x={b.x + b.w / 2} y={b.y + b.h / 2 + 4}>{b.label}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

export default RtlTrace;
