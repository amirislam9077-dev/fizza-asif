import './pro2.css';
import { products } from '../data/products';

const promos = [
  {
    id: 1,
    image: 'https://www.ammarakhan.com/cdn/shop/files/67_ce7863ec-27b7-46f3-bb5d-1be94d58ca44.webp',
    gradient: 'linear-gradient(160deg, #7a2020 0%, #c0392b 100%)',
    tag: 'TRENDING',
    title: 'AK Kaftan',
    cta: 'Make it yours',
    collectionKey: 'kaftan',
  },
  {
    id: 2,
    // A portrait lawn-print picture from the collection itself, same shape as the Kaftan card
    image: products['floral-hush-d-07'].images[0],
    gradient: 'linear-gradient(160deg, #8a7a60 0%, #c4a87a 100%)',
    tag: 'FOREVER BEST SELLERS',
    title: 'Luxury Prints',
    cta: 'Shop Now',
    collectionKey: 'prints',
  },
];

export default function Pro2({ onCollectionClick }) {
  return (
    <section className="pro2-section">
      <p className="pro2-quote">
        "Originality, exquisite craftsmanship and extraordinary attention to detail, define us".
      </p>
      <div className="pro2-grid">
        {promos.map(p => (
          <div
            key={p.id}
            className="pro2-card"
            onClick={() => onCollectionClick && onCollectionClick(p.collectionKey)}
            style={{ cursor: 'pointer' }}
          >
            <div className="pro2-card-inner" style={{ background: p.gradient }}>
              <img
                src={p.image}
                alt={p.title}
                className="pro2-img"
                onError={e => { e.target.style.display = 'none'; }}
              />
              <div className="pro2-content">
                <span className="pro2-tag">{p.tag}</span>
                <h3 className="pro2-title">{p.title}</h3>
                <span className="pro2-cta">{p.cta}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
