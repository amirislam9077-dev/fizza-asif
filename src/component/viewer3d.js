import { useEffect, useState } from 'react';
import './viewer3d.css';

// Full-screen 3D viewer for a product's .glb model (rotate, zoom, and AR on phones).
// The model-viewer library (~1 MB) is only downloaded the first time a viewer opens.
export default function Viewer3D({ src, poster, title, onClose }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    import('@google/model-viewer').then(() => { if (!cancelled) setReady(true); });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="v3d-overlay" onClick={onClose}>
      <div className="v3d-panel" onClick={e => e.stopPropagation()}>
        <div className="v3d-header">
          <span className="v3d-title">{title} · 3D View</span>
          <button className="v3d-close" onClick={onClose} aria-label="Close 3D view">✕</button>
        </div>

        <div className="v3d-stage">
          {ready ? (
            <model-viewer
              src={src}
              poster={poster}
              alt={`3D model of ${title}`}
              camera-controls
              auto-rotate
              auto-rotate-delay="1500"
              touch-action="pan-y"
              shadow-intensity="1"
              exposure="1"
              ar
              ar-modes="webxr scene-viewer quick-look"
              style={{ width: '100%', height: '100%', background: '#f5f2ee' }}
            >
              <button slot="ar-button" className="v3d-ar-btn">VIEW IN YOUR ROOM</button>
            </model-viewer>
          ) : (
            <div className="v3d-loading">Loading 3D view…</div>
          )}
        </div>

        <p className="v3d-hint">Drag to rotate · Scroll or pinch to zoom · On phones, tap “View in your room”</p>
      </div>
    </div>
  );
}
