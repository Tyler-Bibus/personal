import { useEffect, useState } from 'react';
import RtlTrace from './RtlTrace';
import WirelessLink from './WirelessLink';

/**
 * Fills the empty margins either side of the text column with the
 * project's own subject matter, tiled and mirrored so it reads as a die
 * floorplan rather than a repeated picture. Fixed, non-interactive, and
 * hidden entirely on anything narrower than a wide desktop — it only
 * ever occupies space the content was not using.
 *
 * @param {string[]} variants  'rtl' | 'rf'. More than one cross-fades.
 */

const TILES_PER_COLUMN = 3;

function renderTile(variant, index) {
  return variant === 'rf'
    ? <WirelessLink key={index} />
    : <RtlTrace key={index} seed={index} />;
}

function Column({ side, variants, active }) {
  return (
    <div className={`side-bd__col side-bd__col--${side}`}>
      {variants.map((variant, vi) => (
        <div
          key={variant}
          className={`side-bd__layer ${vi === active ? 'is-active' : ''}`.trim()}
        >
          {Array.from({ length: TILES_PER_COLUMN }, (_, i) => renderTile(variant, i + vi))}
        </div>
      ))}
    </div>
  );
}

function SideBackdrop({ variants = ['rtl'], intervalMs = 9000 }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (variants.length < 2) return undefined;
    const id = setInterval(() => setActive((n) => (n + 1) % variants.length), intervalMs);
    return () => clearInterval(id);
  }, [variants.length, intervalMs]);

  return (
    <div className="side-bd" aria-hidden="true">
      <Column side="l" variants={variants} active={active} />
      <Column side="r" variants={variants} active={active} />
    </div>
  );
}

export default SideBackdrop;
