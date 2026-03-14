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
    <div className="flex flex-col items-center gap-4">

      {/* Image — fixed portrait frame */}
      <div
        className="bg-surface rounded-2xl overflow-hidden flex items-center justify-center"
        style={{ width: '260px', height: '480px' }}
      >
        <img
          src={images[current].src}
          alt={images[current].alt || ''}
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
      </div>

      {/* Caption */}
      <p className="text-graytext text-sm">{images[current].alt || ''}</p>

      {/* Prev | dots | Next */}
      <div className="flex items-center justify-center gap-4">

        <button
          onClick={prev}
          aria-label="Previous image"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-surface hover:bg-crimson text-white transition-colors duration-200"
          style={{ fontSize: '2rem', lineHeight: 1 }}
        >
          ‹
        </button>

        {images.length > 1 && (
          <div className="flex items-center gap-2">
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

        <button
          onClick={next}
          aria-label="Next image"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-surface hover:bg-crimson text-white transition-colors duration-200"
          style={{ fontSize: '2rem', lineHeight: 1 }}
        >
          ›
        </button>

      </div>

    </div>
  );
}
