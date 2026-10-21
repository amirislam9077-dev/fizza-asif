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
    video: '/videos/ak-kaftan.mp4', // plays instead of the product picture
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
                // muted + playsInline are required for autoplay on phones (iPhone especially)
                <video
                  src={cat.video}
                  className="new-card-img new-card-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={cat.label}
                />
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
