/**
 * mulberry32 — small deterministic PRNG.
 *
 * The backdrop layouts are generated rather than hand-drawn, but they
 * must be stable: a fresh layout on every React render would make the
 * whole column twitch. Seeding with a fixed integer per column gives a
 * layout that looks random and never moves.
 */
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function next() {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
