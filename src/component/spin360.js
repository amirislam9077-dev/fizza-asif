import { useEffect, useRef, useState } from 'react';
import './viewer3d.css';

const AUTO_SPIN_MS = 140;
const PX_PER_FRAME = 12;
const MIN_ZOOM = 1, MAX_ZOOM = 3;

// Full-screen 360° view built from photos taken all around the product:
// drag to turn it, scroll / pinch (or the + − buttons) to zoom, drag while zoomed to move.
export default function Spin360({ frames, title, onClose }) {
  const [index, setIndex] = useState(0);
  const [spinning, setSpinning] = useState(true);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const drag = useRef(null);
  const pinch = useRef(null);
  const stageRef = useRef(null);
  const n = frames.length;

  useEffect(() => {
    frames.forEach(src => { const img = new Image(); img.src = src; });
  }, [frames]);

  useEffect(() => {
    if (!spinning) return;
    const t = setInterval(() => setIndex(i => (i + 1) % n), AUTO_SPIN_MS);
    return () => clearInterval(t);
  }, [spinning, n]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') { setSpinning(false); setIndex(i => (i - 1 + n) % n); }
      if (e.key === 'ArrowRight') { setSpinning(false); setIndex(i => (i + 1) % n); }
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
      setSpinning(false);
      changeZoom(e.deltaY < 0 ? 0.25 : -0.25);
    }
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  function changeZoom(step) {
    setZoom(z => {
      const next = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z + step));
      if (next === 1) setPan({ x: 0, y: 0 });
      return next;
    });
  }

  function onPointerDown(e) {
    setSpinning(false);
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { x: e.clientX, y: e.clientY, index, pan };
  }

  function onPointerMove(e) {
    const d = drag.current;
    if (!d || pinch.current) return;
    const dx = e.clientX - d.x, dy = e.clientY - d.y;
    if (zoom > 1) {
      setPan({ x: d.pan.x + dx / zoom, y: d.pan.y + dy / zoom });
    } else {
      const steps = Math.round(dx / PX_PER_FRAME);
      setIndex(((d.index - steps) % n + n) % n);
    }
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
    const next = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, pinch.current.zoom * dist / pinch.current.dist));
    setZoom(next);
    if (next === 1) setPan({ x: 0, y: 0 });
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
            style={{ transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)` }}
          />

          <div className="s360-controls" onPointerDown={e => e.stopPropagation()}>
            <button onClick={() => setSpinning(s => !s)} aria-label={spinning ? 'Pause' : 'Play'}>
              {spinning ? '❚❚' : '▶'}
            </button>
            <button onClick={() => changeZoom(-0.5)} aria-label="Zoom out">−</button>
            <span className="s360-deg">{deg}°</span>
            <button onClick={() => changeZoom(0.5)} aria-label="Zoom in">+</button>
          </div>
        </div>

        <p className="v3d-hint">Drag to turn · Scroll or pinch to zoom · Drag to move when zoomed</p>
      </div>
    </div>
  );
}
