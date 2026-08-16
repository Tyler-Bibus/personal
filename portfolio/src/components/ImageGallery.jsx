import { useState, useCallback, useEffect } from 'react';

const ARROW_BASE = {
  width: '2.5rem',
  height: '2.5rem',
  border: '1px solid var(--line-hot)',
  cursor: 'pointer',
  backgroundColor: 'rgba(8, 3, 18, .8)',
  color: 'var(--lilac)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2rem',
  lineHeight: 1,
  flexShrink: 0,
  transition: 'background-color .2s, color .2s, box-shadow .2s',
  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
};

function arrowOn(el) {
  el.style.backgroundColor = 'var(--magenta)';
  el.style.color = '#08030f';
  el.style.boxShadow = '0 0 22px rgba(255, 43, 214, .5)';
}

function arrowOff(el) {
  el.style.backgroundColor = 'rgba(8, 3, 18, .8)';
  el.style.color = 'var(--lilac)';
  el.style.boxShadow = 'none';
}

// Props: images: Array<{ src: string, alt?: string }>
export default function ImageGallery({ images = [] }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft')  prev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev]);

  if (!images.length) return null;

  return (
    <div className="d-flex flex-column align-items-center">

      {/* Caption */}
      <p
        className="mono text-center w-100 mb-2"
        style={{ color: 'var(--faint)', fontSize: '.85rem', letterSpacing: '.08em' }}
      >
        {images[current].alt || ''}
      </p>

      {/* Carousel: [prev] [image] [next] in a row, dots below */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>

        {/* Row: prev arrow — image frame — next arrow */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px' }}>

          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Previous image"
            style={ARROW_BASE}
            onMouseEnter={(e) => arrowOn(e.currentTarget)}
            onMouseLeave={(e) => arrowOff(e.currentTarget)}
          >
            ‹
          </button>

          {/* Image frame */}
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              width: '260px',
              height: '480px',
              overflow: 'hidden',
              backgroundColor: 'var(--panel)',
              border: '1px solid var(--line-hot)',
              boxShadow: '0 0 24px rgba(176, 38, 255, .18)',
              clipPath:
                'polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))',
            }}
          >
            <img
              src={images[current].src}
              alt={images[current].alt || ''}
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            />
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="Next image"
            style={ARROW_BASE}
            onMouseEnter={(e) => arrowOn(e.currentTarget)}
            onMouseLeave={(e) => arrowOff(e.currentTarget)}
          >
            ›
          </button>

        </div>

        {/* Dot indicators — centered below the full row */}
        {images.length > 1 && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to image ${i + 1}`}
                style={{
                  width:  i === current ? '20px' : '10px',
                  height: '10px',
                  backgroundColor: i === current ? 'var(--magenta)' : 'var(--faint)',
                  boxShadow: i === current ? '0 0 10px rgba(255, 43, 214, .7)' : 'none',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  padding: 0,
                }}
              />
            ))}
          </div>
        )}

      </div>

    </div>
  );
}
