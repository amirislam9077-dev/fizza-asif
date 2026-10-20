import { useState } from 'react';
import './best.css';
import { getCollectionProducts } from '../data/products';

const products = getCollectionProducts('bestsellers');

const VISIBLE = 4;

export default function BestSellers({ onProductClick, onViewAll }) {
  const [start, setStart] = useState(0);

  const prev = () => setStart(s => Math.max(0, s - 1));
  const next = () => setStart(s => Math.min(products.length - VISIBLE, s + 1));

  const visible = products.slice(start, start + VISIBLE);

  return (
    <section className="best-section">
      {/* Header */}
      <div className="best-header">
        <div className="best-header-left">
          <h2 className="best-title">BEST SELLERS</h2>
          <span className="best-viewall" onClick={onViewAll} style={{ cursor: 'pointer' }}>View all products</span>
        </div>
        <div className="best-arrows">
          <button className="best-arrow" onClick={prev} disabled={start === 0}>&#8592;</button>
          <button className="best-arrow" onClick={next} disabled={start >= products.length - VISIBLE}>&#8594;</button>
        </div>
      </div>

      {/* Product grid — 4 visible */}
      <div className="best-grid">
        {visible.map(p => (
          <div key={p.id} className="best-card" onClick={() => onProductClick(p.id)} style={{ cursor: 'pointer' }}>
            <div className="best-img-wrap">
              {p.soldOut && <span className="best-badge">SOLD OUT</span>}
              <img
                src={p.images[0]}
                alt={p.name}
                className="best-img"
                onError={e => { e.target.style.background = '#e8e0d8'; e.target.style.opacity = 0; }}
              />
            </div>
            <div className="best-info">
              <p className="best-name">{p.name}</p>
              <p className="best-price">{p.soldOut ? <s>{p.price}</s> : p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
