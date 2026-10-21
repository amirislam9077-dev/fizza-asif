import './new.css';
import { products } from '../data/products';

// Each card shows one product's own picture and opens that product's detail page
const categories = [
  {
    id: 1,
    productId: 'veil-of-dawn-br-05',
    gradient: 'linear-gradient(135deg, #3a3028 0%, #7a6a58 100%)',
    label: "Bridal Couture '26",
  },
  {
    id: 2,
    productId: 'silver-siren-d-01',
    gradient: 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)',
    label: 'Luxury Formals',
  },
  {
    id: 3,
    productId: 'the-ivory-muse-d-02',
    // Plays instead of the product picture (cleaned-up 1080x1920 version of the WhatsApp clip)
    video: '/videos/demi-couture.mp4',
    poster: '/videos/demi-couture-poster.jpg',
    gradient: 'linear-gradient(135deg, #1e1e2a 0%, #3a3a5a 100%)',
    label: 'Demi Couture',
  },
];

export default function NewArrivals({ onProductClick }) {
  return (
    <section className="new-arrivals">
      <h2 className="new-arrivals-title">Latest Arrivals</h2>
      <div className="new-arrivals-grid">
        {categories.map(cat => (
          <div
            key={cat.id}
            className="new-card"
            onClick={() => onProductClick && onProductClick(cat.productId)}
            style={{ cursor: 'pointer' }}
          >
            <div className="new-card-inner" style={{ background: cat.gradient }}>
              {cat.video ? (
                // Whole (uncropped) clip in front, a blurred copy behind fills the sides.
                // muted + playsInline are required for autoplay on phones (iPhone especially).
                <div className="new-card-video-wrap">
                  <video
                    src={cat.video}
                    poster={cat.poster}
                    className="new-card-video-bg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-hidden="true"
                  />
                  <video
                    src={cat.video}
                    poster={cat.poster}
                    className="new-card-video-fg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-label={cat.label}
                  />
                </div>
              ) : (
                <img
                  src={products[cat.productId].images[0]}
                  alt={products[cat.productId].name}
                  className="new-card-img"
                  onError={e => { e.target.style.display = 'none'; }}
                />
              )}
              <div className="new-card-overlay" />
              <span className="new-card-label">{cat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
