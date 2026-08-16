import { useMemo } from 'react';
import { mulberry32 } from '../rng';

/**
 * The MAC array, as a systolic grid. Weights stream down the columns,
 * activations across the rows, and each cell fires on the diagonal
 * wavefront — which is how the accelerator actually walks a convolution.
 *
 * A uniform grid is seamless by construction: there is no tile boundary
 * to spot because every cell is a cell. Only the values differ, and those
 * come from a seeded PRNG so they stay put between renders.
 */

const W = 220;
const CELL = 44;
const COLS = 5;
const ROWS = 18;
const H = ROWS * CELL;
const WAVE_STEPS = 8;

const HEX = '0123456789ABCDEF';

function buildValues(seed) {
  const rnd = mulberry32(seed);
  return Array.from({ length: COLS * ROWS }, () =>
    HEX[Math.floor(rnd() * 16)] + HEX[Math.floor(rnd() * 16)]
  );
}

function MacColumn({ seed = 1 }) {
  const values = useMemo(() => buildValues(seed), [seed]);

  const cells = [];
  for (let r = 0; r < ROWS; r += 1) {
    for (let c = 0; c < COLS; c += 1) {
      cells.push({ r, c, v: values[r * COLS + c] });
    }
  }

  return (
    <svg
      className="viz viz--col"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* weight streams descending each column of the array */}
      <g className="viz-mac__stream">
        {Array.from({ length: COLS }, (_, c) => (
          <path
            key={c}
            d={`M ${c * CELL + CELL / 2},0 V ${H}`}
            style={{ animationDelay: `${c * 0.5}s` }}
          />
        ))}
      </g>

      <g className="viz-mac__cell">
        {cells.map(({ r, c, v }) => (
          <g
            key={`${r}-${c}`}
            style={{ animationDelay: `${((r + c) % WAVE_STEPS) * 0.26}s` }}
          >
            <rect x={c * CELL + 5} y={r * CELL + 5} width={CELL - 10} height={CELL - 10} />
            <text x={c * CELL + CELL / 2} y={r * CELL + CELL / 2 + 3}>{v}</text>
          </g>
        ))}
      </g>

      {/* accumulation ripple travelling along the same diagonal */}
      <g className="viz-mac__acc">
        {cells
          .filter(({ r, c }) => (r + c) % WAVE_STEPS === 0)
          .map(({ r, c }) => (
            <rect
              key={`a${r}-${c}`}
              x={c * CELL + 5}
              y={r * CELL + 5}
              width={CELL - 10}
              height={CELL - 10}
              style={{ animationDelay: `${((r * 3 + c) % 6) * 0.42}s` }}
            />
          ))}
      </g>
    </svg>
  );
}

export default MacColumn;
