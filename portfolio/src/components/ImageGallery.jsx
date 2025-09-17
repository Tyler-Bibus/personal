import { useState, useCallback, useEffect } from 'react';

// A reusable image grid + modal lightbox component.
// Props: images: Array<{ src: string, alt?: string }>
export default function ImageGallery({ images = [] }) {
  const [isOpen, setIsOpen] = useState(true);
  const [current, setCurrent] = useState(0);

  const openAt = useCallback((index) => {
    setCurrent(index);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    function handler(e) {
      if (!isOpen) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    }
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, close, next, prev]);

  if (!images || images.length === 0) return null;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => openAt(i)}
            className="relative rounded-xl overflow-hidden shadow-2xl focus:outline-none"
          >
            {/* Thumbnail: cover but confined to a consistent aspect ratio/height */}
            {/* <img
              src={img.src}
              alt={img.alt || ''}
              className="w-full h-full object-cover"
              style={{ width: '100%', height: '100%' }}
            /> */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </button>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={close}>
          <div className="relative max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <button onClick={close} className="absolute top-2 right-2 text-white bg-black/40 p-2 rounded">✕</button>
            <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/40 p-2 rounded">◀</button>
            <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/40 p-2 rounded">▶</button>
            {/* Modal image: cap max dimensions to avoid very large renders */}
            <img
              src={images[current].src}
              alt={images[current].alt || ''}
              className="mx-auto object-contain"
              style={{ maxWidth: '90vw', maxHeight: '80vh', width: 'auto', height: 'auto' }}
            />
            <p className="text-center text-gray-200 mt-2">{images[current].alt || ''} ({current + 1}/{images.length})</p>
          </div>
        </div>
      )}
    </div>
  );
}
