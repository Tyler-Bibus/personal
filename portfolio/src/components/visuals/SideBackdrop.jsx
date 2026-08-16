import { useEffect, useState } from 'react';
import RtlColumn from './columns/RtlColumn';
import RfColumn from './columns/RfColumn';
import MacColumn from './columns/MacColumn';

/**
 * Fills the empty margins either side of the text column with the
 * project's own subject matter.
 *
 * Each margin holds ONE continuous, seeded drawing that fills the whole
 * column — not a stack of repeated tiles — so there is no seam to spot.
 * The two margins use different seeds, so they never read as mirrors of
 * each other either. Fixed, non-interactive, and hidden entirely below a
 * wide desktop: it only ever occupies space the content was not using.
 *
 * @param {string[]} variants  'rtl' | 'rf' | 'mac'. More than one cross-fades.
 */

const COLUMNS = {
  rtl: RtlColumn,
  rf: RfColumn,
  mac: MacColumn,
};

function Column({ side, variants, active, seed }) {
  return (
    <div className={`side-bd__col side-bd__col--${side}`}>
      {variants.map((variant, vi) => {
        const Visual = COLUMNS[variant] ?? RtlColumn;
        return (
          <div
            key={variant}
            className={`side-bd__layer ${vi === active ? 'is-active' : ''}`.trim()}
          >
            <Visual seed={seed + vi * 97} />
          </div>
        );
      })}
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
      <Column side="l" variants={variants} active={active} seed={11} />
      <Column side="r" variants={variants} active={active} seed={4207} />
    </div>
  );
}

export default SideBackdrop;
