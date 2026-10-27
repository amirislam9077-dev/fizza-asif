import './Modern.css';

export default function Modern({ onCollectionClick }) {
  return (
    <section className="modern-section">
      {/* Left — whole picture (uncropped) with a blurred copy filling the sides */}
      <div className="modern-left">
        <img
          src="https://www.ammarakhan.com/cdn/shop/files/D-04_3.jpg?format=webp&v=1744195342&width=1200"
          alt=""
          aria-hidden="true"
          className="modern-img-bg"
        />
        <img
          src="https://www.ammarakhan.com/cdn/shop/files/D-04_3.jpg?format=webp&v=1744195342&width=1200"
          alt="Modern Elegance"
          className="modern-img"
          onError={e => { e.target.style.background = '#2a2018'; e.target.style.opacity = 0; }}
        />
      </div>

      {/* Right — white panel with text */}
      <div className="modern-right">
        <h2 className="modern-title">
          "<span className="modern-highlight">Modern</span> elegance, timeless allure"
        </h2>
        <p className="modern-desc">
          Our demi couture collection is a canvas where tradition meets contemporary brilliance
        </p>
        <button
          className="modern-btn"
          style={{ border: 'none', cursor: 'pointer' }}
          onClick={() => onCollectionClick && onCollectionClick()}
        >
          EXPLORE
        </button>
      </div>
    </section>
  );
}
