import { useEffect, useRef } from 'react';

const SEQUENCE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a',
];

/**
 * Fires `onUnlock` when the Konami code is entered. Ignores keystrokes
 * typed into inputs so it never hijacks a form.
 */
export default function useKonami(onUnlock) {
  const progress = useRef(0);
  const handler = useRef(onUnlock);
  handler.current = onUnlock;

  useEffect(() => {
    const onKey = (e) => {
      const tag = e.target?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target?.isContentEditable) return;

      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === SEQUENCE[progress.current]) {
        progress.current += 1;
        if (progress.current === SEQUENCE.length) {
          progress.current = 0;
          handler.current();
        }
      } else {
        // a mismatch may still be the start of a fresh attempt
        progress.current = key === SEQUENCE[0] ? 1 : 0;
      }
    };

    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);
}
