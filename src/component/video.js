import './video.css';

export default function VideoSection({ onExplore }) {
  return (
    <section className="video-section">
      <div className="video-wrap">
        {/* Full-HD runway clip (Kling watermark painted out); muted + playsInline let it autoplay on phones */}
        <video
          className="video-player"
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/runway-poster.jpg"
        >
          <source src="/videos/runway.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay" />
        <div className="video-content">
          <p className="video-label">THE NEW COLLECTION</p>
          <h2 className="video-title">Fizza Asif</h2>
          <a
            href="#newarrivals"
            className="video-cta"
            onClick={e => { e.preventDefault(); onExplore && onExplore(); }}
          >
            EXPLORE NOW
          </a>
        </div>
      </div>
    </section>
  );
}
