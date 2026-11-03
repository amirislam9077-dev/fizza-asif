import { useEffect, useRef, useState } from 'react';
import './viewer3d.css';

const PX_PER_FRAME = 14; // touch drag distance for one frame
const MIN_ZOOM = 1, MAX_ZOOM = 3;

// Full-screen 360° view built from photos taken all around the product.
// Mouse: move left / right over the picture to turn it; when zoomed, the picture follows the mouse.
// Touch: drag to turn, pinch to zoom, drag to move when zoomed.
export default function Spin360({ frames, title, onClose }) {
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [origin, setOrigin] = useState({ x: 50, y: 50 }); // zoom focus in %
  const drag = useRef(null);
  const pinch = useRef(null);
  const stageRef = useRef(null);
  const n = frames.length;

  useEffect(() => {
    frames.forEach(src => { const img = new Image(); img.src = src; });
  }, [frames]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setIndex(i => (i - 1 + n) % n);
      if (e.key === 'ArrowRight') setIndex(i => (i + 1) % n);
    }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, n]);

  // Wheel zoom needs a non-passive listener so the page does not scroll
  useEffect(() => {
    const el = stageRef.current;
    function onWheel(e) {
      e.preventDefault();
      changeZoom(e.deltaY < 0 ? 0.25 : -0.25);
    }
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  function changeZoom(step) {
    setZoom(z => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z + step)));
  }

  function pointInStage(e) {
    const r = stageRef.current.getBoundingClientRect();
    return {
      x: Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)),
      y: Math.min(1, Math.max(0, (e.clientY - r.top) / r.height)),
    };
  }

  function onPointerMove(e) {
    const p = pointInStage(e);
    if (e.pointerType === 'mouse') {
      if (zoom > 1) setOrigin({ x: p.x * 100, y: p.y * 100 });
      else setIndex(Math.min(n - 1, Math.floor(p.x * n)));
      return;
    }
    const d = drag.current;
    if (!d || pinch.current) return;
    const dx = e.clientX - d.x, dy = e.clientY - d.y;
    if (zoom > 1) {
      const r = stageRef.current.getBoundingClientRect();
      setOrigin({
        x: Math.min(100, Math.max(0, d.origin.x - (dx / r.width) * 100)),
        y: Math.min(100, Math.max(0, d.origin.y - (dy / r.height) * 100)),
      });
    } else {
      const steps = Math.round(dx / PX_PER_FRAME);
      setIndex(((d.index - steps) % n + n) % n);
    }
  }

  function onPointerDown(e) {
    if (e.pointerType === 'mouse') return;
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { x: e.clientX, y: e.clientY, index, origin };
  }

  function onPointerUp() { drag.current = null; }

  function onTouchStart(e) {
    if (e.touches.length === 2) {
      const [a, b] = e.touches;
      pinch.current = { dist: Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY), zoom };
    }
  }

  function onTouchMove(e) {
    if (!pinch.current || e.touches.length !== 2) return;
    const [a, b] = e.touches;
    const dist = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
    setZoom(Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, pinch.current.zoom * dist / pinch.current.dist)));
  }

  function onTouchEnd(e) { if (e.touches.length < 2) pinch.current = null; }

  const deg = Math.round((index / n) * 360);

  return (
    <div className="v3d-overlay" onClick={onClose}>
      <div className="v3d-panel" onClick={e => e.stopPropagation()}>
        <div className="v3d-header">
          <span className="v3d-title">{title} · 360° View</span>
          <button className="v3d-close" onClick={onClose} aria-label="Close 360 view">✕</button>
        </div>

        <div
          ref={stageRef}
          className={`v3d-stage s360-stage${zoom > 1 ? ' is-zoomed' : ''}`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <img
            src={frames[index]}
            alt={`${title}, view ${index + 1} of ${n}`}
            className="s360-img"
            draggable={false}
            style={{ transform: `scale(${zoom})`, transformOrigin: `${origin.x}% ${origin.y}%` }}
          />

          <div className="s360-controls" onPointerDown={e => e.stopPropagation()} onPointerMove={e => e.stopPropagation()}>
            <button onClick={() => setIndex(i => (i - 1 + n) % n)} aria-label="Turn left">‹</button>
            <button onClick={() => changeZoom(-0.5)} aria-label="Zoom out">−</button>
            <span className="s360-deg">{deg}°</span>
            <button onClick={() => changeZoom(0.5)} aria-label="Zoom in">+</button>
            <button onClick={() => setIndex(i => (i + 1) % n)} aria-label="Turn right">›</button>
          </div>
        </div>

        <p className="v3d-hint">
          <span className="s360-hint-mouse">Move the mouse left / right to turn · Scroll to zoom</span>
          <span className="s360-hint-touch">Drag to turn · Pinch to zoom</span>
        </p>
      </div>
    </div>
  );
}
