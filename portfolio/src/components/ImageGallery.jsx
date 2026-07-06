import { useState, useCallback, useEffect } from 'react';

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
    <div className="flex flex-col items-center gap-2">

      {/* Caption */}
      <p className="text-graytext text-sm w-full text-center">{images[current].alt || ''}</p>

      {/* Carousel: [prev] [image] [next] in a row, dots below */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>

        {/* Row: prev arrow — image frame — next arrow */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px' }}>

          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Previous image"
            className="text-white transition-colors duration-200"
            style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: 'rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              lineHeight: 1,
              flexShrink: 0,
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#DC143C'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)'}
          >
            ‹
          </button>

          {/* Image frame */}
          <div
            className="rounded-2xl overflow-hidden flex items-center justify-center"
            style={{ width: '260px', height: '480px', backgroundColor: '#1e1e2e' }}
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
            className="text-white transition-colors duration-200"
            style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: 'rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              lineHeight: 1,
              flexShrink: 0,
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#DC143C'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)'}
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
                  borderRadius: '9999px',
                  backgroundColor: i === current ? '#DC143C' : '#6b7280',
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
