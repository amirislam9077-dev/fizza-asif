import './video.css';

export default function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-wrap">
        <video
          className="video-player"
          autoPlay
          muted
          loop
          playsInline
          poster="https://www.ammarakhan.com/cdn/shop/files/1000x1000_87d72021-fd47-47df-a976-8825da0f55de.jpg"
        >
          <source src="/video/collection.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay" />
        <div className="video-content">
          <p className="video-label">THE NEW COLLECTION</p>
          <h2 className="video-title">Fizza Asif</h2>
          <a href="#" className="video-cta">EXPLORE NOW</a>
        </div>
      </div>
    </section>
  );
}
