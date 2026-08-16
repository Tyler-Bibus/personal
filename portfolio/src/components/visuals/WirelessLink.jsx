/**
 * Two radios talking to each other: a host controller on the left, a
 * peer on the right, concentric wavefronts leaving both, and packets
 * crossing the gap. Built for the Bluetooth senior design project.
 *
 * Square tile (320x320) to match RtlTrace so the two can cross-fade.
 */

const WAVES = [26, 46, 66, 86];

function Radio({ x, label, mirrored }) {
  const dir = mirrored ? -1 : 1;
  return (
    <g transform={`translate(${x} 160)`}>
      {/* device body */}
      <rect className="viz-rf__body" x="-26" y="-38" width="52" height="76" rx="4" />
      <rect className="viz-rf__screen" x="-18" y="-30" width="36" height="42" rx="2" />

      {/* die markings */}
      <g className="viz-rf__pin">
        {[-22, -8, 6, 20].map((dy) => (
          <line key={dy} x1={dir * 26} y1={dy} x2={dir * 34} y2={dy} />
        ))}
      </g>

      <text className="viz-rf__label" x="0" y="54">{label}</text>

      {/* Expanding wavefronts. Each arc scales about its own flat edge —
          the side facing the antenna — so it reads as leaving the device
          rather than ballooning from the middle of the diagram. */}
      <g className={`viz-rf__wave ${mirrored ? 'viz-rf__wave--mir' : ''}`.trim()}>
        {WAVES.map((r, i) => (
          <path
            key={r}
            d={`M ${dir * 30},${-r * 0.72} A ${r},${r} 0 0 ${mirrored ? 0 : 1} ${dir * 30},${r * 0.72}`}
            style={{ animationDelay: `${i * 0.55}s` }}
          />
        ))}
      </g>
    </g>
  );
}

function WirelessLink({ opacity = 1 }) {
  return (
    <svg
      viewBox="0 0 320 320"
      className="viz viz--rf"
      style={{ opacity }}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* channel guides */}
      <g className="viz-rf__guide">
        <line x1="70" y1="160" x2="250" y2="160" />
        <line x1="70" y1="128" x2="250" y2="128" />
        <line x1="70" y1="192" x2="250" y2="192" />
      </g>

      <Radio x={52} label="HOST / HCI" />
      <Radio x={268} label="PEER" mirrored />

      {/* packets crossing the air gap */}
      <g className="viz-rf__packet">
        <rect y="124" width="16" height="8" rx="1" style={{ animationDelay: '0s' }} />
        <rect y="156" width="12" height="8" rx="1" style={{ animationDelay: '1.4s' }} />
        <rect y="188" width="20" height="8" rx="1" style={{ animationDelay: '2.6s' }} />
      </g>

    </svg>
  );
}

export default WirelessLink;
