import { useState } from 'react';
import './timelesspro.css';
import Footer from './footer';
import { collections, getCollectionProducts } from '../data/products';

const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low'];

function priceValue(p) {
  return parseInt(String(p.price).replace(/[^\d]/g, ''), 10) || 0;
}

// Subtle 3D tilt of a card's picture towards the mouse
const TILT_DEG = 7;

function tiltCard(e) {
  const wrap = e.currentTarget.querySelector('.tlp-tilt');
  if (!wrap) return;
  const r = wrap.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  wrap.style.transform = `perspective(900px) rotateY(${x * TILT_DEG * 2}deg) rotateX(${-y * TILT_DEG * 2}deg) scale(1.02)`;
}

function resetTilt(e) {
  const wrap = e.currentTarget.querySelector('.tlp-tilt');
  if (wrap) wrap.style.transform = '';
}

export default function Collection({ collectionKey, onBack, onHome, onProductClick }) {
  const [sort, setSort] = useState('Featured');
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  const title = collections[collectionKey]?.title || '';
  let items = getCollectionProducts(collectionKey);
  if (inStockOnly) items = items.filter(p => !p.soldOut);
  if (sort === 'Price: Low to High') items = [...items].sort((a, b) => priceValue(a) - priceValue(b));
  if (sort === 'Price: High to Low') items = [...items].sort((a, b) => priceValue(b) - priceValue(a));

  return (
    <div className="tlp-wrap">
      {onBack && (
        <button className="tlp-back-btn" onClick={onBack}>← Back</button>
      )}

      {/* Breadcrumb */}
      <nav className="tlp-breadcrumb">
        <span className="tlp-bc-home" onClick={onHome}>Home</span>
        <span className="tlp-bc-sep"> › </span>
        <span className="tlp-bc-current">{title}</span>
      </nav>

      {/* Collection title */}
      <h1 className="tlp-title">{title}</h1>

      {/* Filter / Sort bar */}
      <div className="tlp-toolbar">
        <div className="tlp-left-bar">
          <button className="tlp-filter-btn" onClick={() => setFilterOpen(o => !o)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15">
              <line x1="4" y1="6"  x2="20" y2="6"/>
              <line x1="4" y1="12" x2="20" y2="12"/>
              <line x1="4" y1="18" x2="20" y2="18"/>
            </svg>
            Filter
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="11" height="11">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          <span className="tlp-count">{items.length} Results</span>
        </div>

        <div className="tlp-sort-wrap">
          <button className="tlp-sort-btn" onClick={() => setSortOpen(o => !o)}>
            Sort: {sort}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="11" height="11">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          {sortOpen && (
            <ul className="tlp-sort-dropdown">
              {sortOptions.map(opt => (
                <li
                  key={opt}
                  className={`tlp-sort-opt${sort === opt ? ' active' : ''}`}
                  onClick={() => { setSort(opt); setSortOpen(false); }}
                >
                  {opt}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Filter panel */}
      {filterOpen && (
        <div className="tlp-filter-panel">
          <div className="tlp-filter-group">
            <p className="tlp-filter-heading">AVAILABILITY</p>
            <label className="tlp-filter-check">
              <input type="checkbox" checked={inStockOnly} onChange={e => setInStockOnly(e.target.checked)} /> In Stock only
            </label>
          </div>
        </div>
      )}

      {/* Product grid — 4 columns */}
      <div className="tlp-grid">
        {items.map(item => (
          <div
            key={item.id}
            className="tlp-card"
            style={{ cursor: 'pointer' }}
            onClick={() => onProductClick(item.id)}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseMove={tiltCard}
            onMouseLeave={e => { setHoveredId(null); resetTilt(e); }}
          >
            <div className="tlp-img-wrap tlp-tilt">
              {item.soldOut && <span className="tlp-sold-badge">SOLD OUT</span>}
              <img
                src={hoveredId === item.id && item.images[1] ? item.images[1] : item.images[0]}
                alt={item.name}
                className="tlp-img"
                onError={e => { e.target.style.display = 'none'; }}
              />
              {hoveredId === item.id && (
                <button className="tlp-quick-view">QUICK VIEW</button>
              )}
            </div>
            <p className={`tlp-name${item.soldOut ? ' sold' : ''}`}>{item.name}</p>
            <p className={`tlp-price${item.soldOut ? ' sold' : ''}`}>{item.price}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
