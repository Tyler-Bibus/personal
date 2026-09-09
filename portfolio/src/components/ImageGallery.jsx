import { useState } from 'react';

export default function ImageGallery({ images = [], layout = 'portrait' }) {
  const [current, setCurrent] = useState(0);
  if (!images.length) return null;
  const index = current % images.length;
  const move = (step) => setCurrent((value) => (value + step + images.length) % images.length);

  return (
    <figure className={`gallery gallery--${layout}`} aria-label="Project screenshots">
      <div className="gallery__frame">
        <img src={images[index].src} alt={images[index].alt || 'Project screenshot'} loading="lazy" />
      </div>
      <figcaption className="gallery__controls" aria-live="polite">
        <button className="btn-cyber" onClick={() => move(-1)} aria-label="Previous image">←</button>
        <span className="mono text-center">{images[index].alt}<br />{index + 1} / {images.length}</span>
        <button className="btn-cyber" onClick={() => move(1)} aria-label="Next image">→</button>
      </figcaption>
    </figure>
  );
}
