import { useEffect, useRef, useState } from 'react';
import './spinview.css';

const DRAG_STEP = 70;      // px of horizontal drag per picture
const AUTO_SPIN_MS = 2200; // auto-advance until the shopper interacts
const ZOOM = 2.6;          // lens magnification

// Product picture viewer that feels 3D: drag to "rotate" through the angles,
// hover (mouse) or tap (touch) to zoom into the embroidery.
export default function SpinView({ images, name }) {
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(null); // { x, y } in % when zoomed
  const [touched, setTouched] = useState(false);
  const drag = useRef(null);
  const n = images.length;

  // Gentle auto-spin as a hint, stops for good on the first interaction
  useEffect(() => {
    if (touched || n < 2) return;
    const t = setInterval(() => setIndex(i => (i + 1) % n), AUTO_SPIN_MS);
    return () => clearInterval(t);
  }, [touched, n]);

  // Preload every angle so spinning is instant
  useEffect(() => {
    images.forEach(src => { const img = new Image(); img.src = src; });
  }, [images]);

  function pointAt(e) {
    const r = e.currentTarget.getBoundingClientRect();
    return {
      x: Math.min(100, Math.max(0, ((e.clientX - r.left) / r.width) * 100)),
      y: Math.min(100, Math.max(0, ((e.clientY - r.top) / r.height) * 100)),
    };
  }

  function onPointerDown(e) {
    setTouched(true);
    drag.current = { startX: e.clientX, startIndex: index, moved: false, type: e.pointerType };
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e) {
    const d = drag.current;
    if (d) {
      const dx = e.clientX - d.startX;
      if (Math.abs(dx) > 8) {
        d.moved = true;
        setZoom(null);
        const steps = Math.round(dx / DRAG_STEP);
        setIndex(((d.startIndex - steps) % n + n) % n);
      }
    } else if (e.pointerType === 'mouse') {
      setTouched(true);
      setZoom(pointAt(e));
    }
  }

  function onPointerUp(e) {
    const d = drag.current;
    drag.current = null;
    if (!d || d.moved) return;
    if (d.type === 'mouse') setZoom(pointAt(e));
    else setZoom(z => (z ? null : pointAt(e))); // touch: tap toggles zoom
  }

  function onPointerLeave(e) {
    if (e.pointerType === 'mouse' && !drag.current) setZoom(null);
  }

  const current = images[index];

  return (
    <div className="spin">
      <div
        className={`spin-stage${zoom ? ' zoomed' : ''}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={() => { drag.current = null; }}
        onPointerLeave={onPointerLeave}
      >
        <img src={current} alt={`${name} view ${index + 1}`} className="spin-img" draggable="false" />

        {zoom && (
          <div
            className="spin-lens"
            style={{
              backgroundImage: `url("${current}")`,
              backgroundSize: `${ZOOM * 100}%`,
              backgroundPosition: `${zoom.x}% ${zoom.y}%`,
            }}
          />
        )}

        {n > 1 && !zoom && (
          <div className="spin-hint">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15">
              <path d="M21 12a9 9 0 1 1-3-6.7" /><polyline points="21 3 21 9 15 9" />
            </svg>
            360° · Drag to rotate · {index + 1}/{n}
          </div>
        )}
        {!zoom && <div className="spin-zoom-hint">Hover or tap to zoom</div>}
      </div>

      {n > 1 && (
        <div className="spin-thumbs">
          {images.map((src, i) => (
            <button
              key={src}
              className={`spin-thumb${i === index ? ' active' : ''}`}
              onClick={() => { setTouched(true); setIndex(i); }}
              aria-label={`Show view ${i + 1}`}
            >
              <img src={src} alt="" draggable="false" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
