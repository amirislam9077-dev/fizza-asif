import './Timeless.css';
import { products } from '../data/products';

export default function Timeless({ onCollectionClick }) {
  return (
    <section id="new-arrivals" className="timeless-section" onClick={() => onCollectionClick && onCollectionClick()} style={{ cursor: 'pointer' }}>
      {/* Left — black panel with text + small image */}
      <div className="timeless-left">
        <p className="timeless-exclusive">JUST IN</p>
        <h2 className="timeless-title">
          <span className="timeless-highlight">New</span> Arrivals
        </h2>
        <p className="timeless-quote">
          "Fresh from our atelier — the latest couture, luxury and lawn pieces,
          crafted with the same dedication to artisanal detail"
        </p>
        <div className="timeless-thumb-wrap">
          <img
            src={products['gilded-nikah-bridal-d-06'].images[0]}
            alt="New arrival detail"
            className="timeless-thumb"
            onError={e => { e.target.style.display = 'none'; }}
          />
        </div>
        <span className="timeless-explore">EXPLORE</span>
      </div>

      {/* Right — whole picture (uncropped) with a blurred copy filling the sides */}
      <div className="timeless-right">
        <img
          src={products['the-coral-bloom-d-03'].images[0]}
          alt=""
          aria-hidden="true"
          className="timeless-main-bg"
        />
        <img
          src={products['the-coral-bloom-d-03'].images[0]}
          alt="New Arrivals"
          className="timeless-main-img"
          onError={e => { e.target.style.background = '#c0a898'; e.target.style.opacity = 0; }}
        />
      </div>
    </section>
  );
}
