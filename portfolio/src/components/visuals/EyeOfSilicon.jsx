/**
 * The classifier, drawn as an eye. Concentric iris rings stand in for
 * the feature maps, a 5x5 kernel window sweeps across the retina the way
 * the accelerator's convolution actually walks the input, and the slit
 * pupil breathes. Purely decorative, but it is the right decoration for
 * a hardware accelerator built to look at pictures.
 */

const RING_RADII = [78, 64, 50, 36];
const KERNEL = Array.from({ length: 25 }, (_, i) => [i % 5, Math.floor(i / 5)]);

function EyeOfSilicon() {
  return (
    <svg
      viewBox="0 0 420 260"
      className="viz viz--eye"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <clipPath id="eyeClip">
          <path d="M 12,130 C 112,24 308,24 408,130 C 308,236 112,236 12,130 Z" />
        </clipPath>
        <radialGradient id="irisGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#ff2bd6" stopOpacity="0.55" />
          <stop offset="55%"  stopColor="#b026ff" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#b026ff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g clipPath="url(#eyeClip)">
        {/* sclera: the raw input plane */}
        <rect className="viz-eye__field" x="0" y="0" width="420" height="260" />
        <g className="viz-eye__scan">
          {Array.from({ length: 26 }, (_, i) => (
            <line key={i} x1="0" y1={i * 10} x2="420" y2={i * 10} />
          ))}
        </g>

        {/* iris glow */}
        <circle cx="210" cy="130" r="92" fill="url(#irisGlow)" />

        {/* feature-map rings, each turning at its own rate */}
        <g className="viz-eye__rings">
          {RING_RADII.map((r, i) => (
            <circle
              key={r}
              cx="210"
              cy="130"
              r={r}
              className={`viz-eye__ring viz-eye__ring--${i % 2 === 0 ? 'cw' : 'ccw'}`}
              style={{ animationDuration: `${14 + i * 7}s`, strokeDasharray: `${4 + i * 3} ${7 + i * 2}` }}
            />
          ))}
        </g>

        {/* the 5x5 convolution window, walking the input */}
        <g className="viz-eye__kernel">
          {KERNEL.map(([kx, ky], i) => (
            <rect
              key={i}
              x={kx * 13}
              y={ky * 13}
              width="10"
              height="10"
              style={{ animationDelay: `${((kx + ky) % 5) * 0.18}s` }}
            />
          ))}
        </g>

        {/* pupil */}
        <ellipse className="viz-eye__pupil" cx="210" cy="130" rx="15" ry="56" />
        <ellipse className="viz-eye__pupil-core" cx="210" cy="130" rx="6" ry="30" />
      </g>

      {/* lid outline + radiating lashes */}
      <path
        className="viz-eye__lid"
        d="M 12,130 C 112,24 308,24 408,130 C 308,236 112,236 12,130 Z"
      />
      <g className="viz-eye__lash">
        {Array.from({ length: 24 }, (_, i) => {
          const a = (i / 24) * Math.PI * 2;
          const inner = { x: 210 + Math.cos(a) * 100, y: 130 + Math.sin(a) * 62 };
          const outer = { x: 210 + Math.cos(a) * 118, y: 130 + Math.sin(a) * 74 };
          return (
            <line
              key={i}
              x1={inner.x}
              y1={inner.y}
              x2={outer.x}
              y2={outer.y}
              style={{ animationDelay: `${(i % 6) * 0.3}s` }}
            />
          );
        })}
      </g>
    </svg>
  );
}

export default EyeOfSilicon;
