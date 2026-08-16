import { useEffect, useRef, useState } from 'react';

/**
 * Easter egg. Triggered by clicking the hotspot over the nose in the
 * hero portrait. Full-screen character rain (magenta/purple, never the
 * usual green) behind a typed intrusion log. Click or press Esc to exit.
 */

const GLYPHS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789<>[]{}/\\|=+*#$%&@ABCDEF';

const LOG_LINES = [
  '> ssh tyler@portfolio.local -p 2077',
  '  [ok] handshake accepted — key: ed25519/BIBUS',
  '> mount /dev/persona --readonly',
  '  scanning 6 project partitions ................ done',
  '  decrypting résumé blob ....................... done',
  '  indexing 5 roles / 4 years ................... done',
  '> cat ./secrets/whoami.txt',
  '  "I like the parts of the stack most people skip:',
  '   the RTL under the driver, the driver under the app."',
  '> ./deploy --target=december-2026 --status',
  '  [ok] graduating on schedule. now hiring me is trivial.',
  '> echo "nothing was actually hacked. nice find."',
];

function HackerOverlay({ onClose }) {
  const canvasRef = useRef(null);
  const [visibleLines, setVisibleLines] = useState(0);

  /* ── character rain ─────────────────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext('2d');
    const fontSize = 16;
    let columns = 0;
    let drops = [];
    let frame;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      columns = Math.ceil(window.innerWidth / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * -60);
    };

    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      // translucent wash instead of a clear, which leaves the trails
      ctx.fillStyle = 'rgba(2, 0, 6, 0.08)';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.font = `${fontSize}px "Share Tech Mono", monospace`;

      for (let i = 0; i < drops.length; i += 1) {
        const char = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // leading glyph burns bright, the tail fades to purple
        ctx.fillStyle = Math.random() > 0.94 ? '#ffffff' : '#ff2bd6';
        ctx.shadowColor = '#ff2bd6';
        ctx.shadowBlur = 8;
        ctx.fillText(char, x, y);

        ctx.shadowBlur = 0;
        ctx.fillStyle = 'rgba(176, 38, 255, 0.55)';
        ctx.fillText(GLYPHS[Math.floor(Math.random() * GLYPHS.length)], x, y - fontSize);

        if (y > window.innerHeight && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 1;
      }

      frame = requestAnimationFrame(draw);
    };

    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  /* ── typed log ──────────────────────────────────────── */
  useEffect(() => {
    if (visibleLines >= LOG_LINES.length) return undefined;
    const t = setTimeout(() => setVisibleLines((n) => n + 1), visibleLines === 0 ? 260 : 420);
    return () => clearTimeout(t);
  }, [visibleLines]);

  /* ── dismissal ──────────────────────────────────────── */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const done = visibleLines >= LOG_LINES.length;

  return (
    <div
      className="hack"
      role="dialog"
      aria-modal="true"
      aria-label="Easter egg: simulated intrusion terminal"
      onClick={onClose}
    >
      <canvas ref={canvasRef} className="hack__canvas" />

      <div className="hack__hud">
        <div className="hack__title">ACCESS GRANTED</div>
        <pre className="hack__log">
          {LOG_LINES.slice(0, visibleLines).join('\n')}
          {!done && <span className="caret" />}
        </pre>
        <div className="hack__hint">{done ? 'click anywhere or press esc to exit' : 'decrypting…'}</div>
      </div>
    </div>
  );
}

export default HackerOverlay;
