import { useState } from 'react';
import './bridal.css';
import { products } from '../data/products';

// Bridal pieces shown on the home page (different from the Latest Arrivals pictures)
const bridalProductIds = [
  'grand-champagne-bridal-gown-br-01',
  'reception-bridal-gown-and-veil-br-11',
  'ak24-br-09',
  'ak24-br-10',
  'akb24-br-04-r',
  'the-gold-whisper-br-06',
];

export default function Bridal({ onCollectionClick, onProductClick }) {
  const [start, setStart] = useState(0);
  const visible = bridalProductIds.slice(start, start + 3).map(id => products[id]);

  const prev = () => setStart(s => Math.max(0, s - 1));
  const next = () => setStart(s => Math.min(bridalProductIds.length - 3, s + 1));

  return (
    <section id="timeless-bridal" className="bridal-section">
      {/* Header row */}
      <div className="bridal-header">
        <div className="bridal-header-left">
          <h2 className="bridal-title">Timeless Bridal Couture</h2>
          <span className="bridal-viewall" onClick={() => onCollectionClick && onCollectionClick()} style={{ cursor: 'pointer' }}>View all collections</span>
        </div>
        <div className="bridal-arrows">
          <button className="bridal-arrow" onClick={prev} disabled={start === 0}>&#8249;</button>
          <button className="bridal-arrow" onClick={next} disabled={start >= bridalProductIds.length - 3}>&#8250;</button>
        </div>
      </div>

      {/* 3 portrait cards */}
      <div className="bridal-grid">
        {visible.map(product => (
          <div
            key={product.id}
            className="bridal-card"
            style={{ cursor: 'pointer' }}
            onClick={() => onProductClick && onProductClick(product.id)}
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="bridal-img"
              onError={e => { e.target.style.background = '#c9b8a8'; e.target.style.opacity = 0; }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
