import { useMemo } from 'react';
import { mulberry32, clamp } from '../rng';

/**
 * A continuous RTL floorplan for the page margins.
 *
 * Deliberately NOT tiled: four bus channels run the full height of one
 * drawing, and the blocks, stubs and jumpers hanging off them are placed
 * by a seeded PRNG. There is no repeating unit and therefore no seam.
 * Each column gets its own seed so the two margins never mirror.
 */

const W = 220;
const H = 760;
const CHANNELS = [26, 78, 130, 182];

const LABELS = [
  'REGFILE', 'ALU', 'STALL', 'FWD', 'JUMP', 'ADDR GEN', 'DMEM', 'IMEM',
  'WB', 'PC', 'HAZARD', 'MUX', 'SHIFT', 'CTRL', 'SIGN EXT', 'BR CMP',
];

/** Orthogonal hop between two channels with a 45° chamfer at the turn. */
function jumper(x1, y1, x2, y2) {
  const sx = Math.sign(x2 - x1) || 1;
  const sy = Math.sign(y2 - y1) || 1;
  return `M ${x1},${y1} H ${x2 - sx * 10} l ${sx * 10},${sy * 10} V ${y2}`;
}

function buildLayout(seed) {
  const rnd = mulberry32(seed);
  const blocks = [];
  const stubs = [];
  const vias = [];
  const jumpers = [];

  // blocks hanging off the channels, walking down the column
  let y = 34;
  while (y < H - 30) {
    const cx = CHANNELS[Math.floor(rnd() * CHANNELS.length)];
    const side = rnd() > 0.5 ? 1 : -1;
    const w = 48 + Math.floor(rnd() * 30);
    const label = LABELS[Math.floor(rnd() * LABELS.length)];

    const rawX = side > 0 ? cx + 15 : cx - 15 - w;
    const x = clamp(rawX, 3, W - w - 3);
    const midY = y + 9;

    blocks.push({ x, y, w, h: 18, label });
    stubs.push(`M ${cx},${midY} H ${side > 0 ? x : x + w}`);
    vias.push([cx, midY]);

    y += 48 + Math.floor(rnd() * 52);
  }

  // lateral hops between neighbouring channels
  for (let i = 0; i < CHANNELS.length - 1; i += 1) {
    let jy = 50 + rnd() * 130;
    while (jy < H - 60) {
      const dy = rnd() > 0.5 ? 32 : -32;
      jumpers.push(jumper(CHANNELS[i], jy, CHANNELS[i + 1], jy + dy));
      jy += 140 + rnd() * 170;
    }
  }

  return { blocks, stubs, vias, jumpers };
}

function RtlColumn({ seed = 1 }) {
  const { blocks, stubs, vias, jumpers } = useMemo(() => buildLayout(seed), [seed]);

  return (
    <svg
      className="viz viz--col"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        {/* a real SVG pattern tiles without seams, unlike stacked copies */}
        <pattern id={`rtlGrid${seed}`} width="22" height="22" patternUnits="userSpaceOnUse">
          <path d="M 22 0 L 0 0 0 22" fill="none" stroke="rgba(176,38,255,.10)" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width={W} height={H} fill={`url(#rtlGrid${seed})`} />

      {/* full-height buses — the reason the column reads as continuous */}
      <g className="viz-rtl__copper">
        {CHANNELS.map((cx) => (
          <path key={cx} d={`M ${cx},0 V ${H}`} />
        ))}
        {jumpers.map((d, i) => <path key={`j${i}`} d={d} />)}
        {stubs.map((d, i) => <path key={`s${i}`} d={d} />)}
      </g>

      <g className="viz-rtl__flow">
        {CHANNELS.map((cx, i) => (
          <path key={cx} d={`M ${cx},0 V ${H}`} style={{ animationDelay: `${i * 0.8}s` }} />
        ))}
        {jumpers.map((d, i) => (
          <path key={`jf${i}`} d={d} style={{ animationDelay: `${(i % 5) * 0.6}s` }} />
        ))}
      </g>

      <g className="viz-rtl__via">
        {vias.map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r="2.6" />)}
      </g>

      <g className="viz-rtl__block">
        {blocks.map((b, i) => (
          <g key={i} style={{ animationDelay: `${(i % 7) * 0.7}s` }}>
            <rect x={b.x} y={b.y} width={b.w} height={b.h} />
            <text x={b.x + b.w / 2} y={b.y + b.h / 2 + 3}>{b.label}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

export default RtlColumn;
