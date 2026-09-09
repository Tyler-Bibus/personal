import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Types a list of strings out one character at a time, then deletes and
 * moves to the next. Used for the boot line under the hero.
 */
function Typewriter({ lines, typeMs = 55, deleteMs = 28, holdMs = 1900, className = '' }) {
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [len, setLen] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const current = lines[index % lines.length];

  useEffect(() => {
    if (reducedMotion) return undefined;
    if (!deleting && len === current.length) {
      const t = setTimeout(() => setDeleting(true), holdMs);
      return () => clearTimeout(t);
    }
    if (deleting && len === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % lines.length);
      return undefined;
    }
    const t = setTimeout(() => setLen((n) => n + (deleting ? -1 : 1)), deleting ? deleteMs : typeMs);
    return () => clearTimeout(t);
  }, [reducedMotion, len, deleting, current, lines.length, typeMs, deleteMs, holdMs]);

  return (
    <span className={className} aria-live="off">
      {reducedMotion ? lines[0] : current.slice(0, len)}
      <span className="caret" />
    </span>
  );
}

export default Typewriter;
