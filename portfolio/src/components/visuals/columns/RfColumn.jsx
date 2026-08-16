import { useMemo } from 'react';
import { mulberry32 } from '../rng';

/**
 * A radio mesh running the height of the margin. One continuous drawing:
 * a link spine crosses the column between nodes placed at seeded offsets,
 * wavefronts leave each node, and packets travel every hop. Nothing
 * repeats, so nothing tiles.
 */

const W = 220;
const H = 760;
const NODE_COUNT = 5;
const WAVES = [18, 32, 46];

function buildNodes(seed) {
  const rnd = mulberry32(seed);
  const step = H / NODE_COUNT;

  return Array.from({ length: NODE_COUNT }, (_, i) => ({
    x: i % 2 === 0 ? 52 + rnd() * 22 : 146 - rnd() * 22,
    y: step * i + step * 0.5 + (rnd() - 0.5) * 40,
    delay: rnd() * 2.4,
  }));
}

function RfColumn({ seed = 1 }) {
  const nodes = useMemo(() => buildNodes(seed), [seed]);

  const hops = nodes.slice(0, -1).map((n, i) => ({ from: n, to: nodes[i + 1], i }));

  return (
    <svg
      className="viz viz--col"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* link spine */}
      <g className="viz-rf__guide">
        {hops.map(({ from, to, i }) => (
          <line key={i} x1={from.x} y1={from.y} x2={to.x} y2={to.y} />
        ))}
      </g>

      {/* packets walking each hop */}
      <g className="viz-rf__hop">
        {hops.map(({ from, to, i }) => (
          <circle key={i} r="3.2" style={{ animationDelay: `${i * 1.1}s` }}>
            <animateMotion
              dur="3.6s"
              repeatCount="indefinite"
              begin={`${i * 1.1}s`}
              path={`M ${from.x},${from.y} L ${to.x},${to.y}`}
            />
          </circle>
        ))}
      </g>

      {nodes.map((n, i) => (
        <g key={i} transform={`translate(${n.x} ${n.y})`}>
          <g className="viz-rf__wave viz-rf__wave--omni">
            {WAVES.map((r, w) => (
              <circle
                key={r}
                r={r}
                style={{ animationDelay: `${n.delay + w * 0.6}s` }}
              />
            ))}
          </g>
          <rect className="viz-rf__body" x="-11" y="-15" width="22" height="30" rx="3" />
          <rect className="viz-rf__screen" x="-7" y="-11" width="14" height="16" rx="1.5" />
          <line className="viz-rf__ant" x1="0" y1="-15" x2="0" y2="-27" />
          <circle className="viz-rf__ant-tip" cx="0" cy="-29" r="2" />
        </g>
      ))}
    </svg>
  );
}

export default RfColumn;
