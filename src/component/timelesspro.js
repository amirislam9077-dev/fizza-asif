import { useState } from 'react';
import './timelesspro.css';
import Footer from './footer';

const allProducts = [
  {
    id: 1,
    name: 'The Gold Whisper (BR-06)',
    price: 'Price on Request',
    soldOut: false,
    image: 'https://www.ammarakhan.com/cdn/shop/files/17_714dc8d2-e63c-436a-8a25-aff18f714f44.jpg',
    hoverImage: 'https://www.ammarakhan.com/cdn/shop/files/19_fef0c276-d376-4152-8433-bb0afe1d1e9f.jpg',
  },
  {
    id: 2,
    name: 'The Scarlet Heirloom (BR-03)',
    price: 'Price on Request',
    soldOut: false,
    image: 'https://www.ammarakhan.com/cdn/shop/files/13_2e13442e-f087-4772-8b41-54e551197bf8.jpg',
    hoverImage: 'https://www.ammarakhan.com/cdn/shop/files/14_ed1446bd-aac3-4d2a-84ed-eccbd95d0146.jpg',
  },
  {
    id: 3,
    name: 'A Royal Symphony (BR-07)',
    price: 'Price on Request',
    soldOut: false,
    image: 'https://www.ammarakhan.com/cdn/shop/files/5_ddbd16c4-8266-4e55-bdf7-00c261d84ee6.jpg',
    hoverImage: 'https://www.ammarakhan.com/cdn/shop/files/6_e4332ecd-892d-411b-bc88-d1c664ad6414.jpg',
  },
  {
    id: 4,
    name: 'A Radiance Eternal (BR-04)',
    price: 'Price on Request',
    soldOut: false,
    image: 'https://www.ammarakhan.com/cdn/shop/files/11_7c96fbac-9a6d-4dee-8636-6d869557fb9d.jpg',
    hoverImage: 'https://www.ammarakhan.com/cdn/shop/files/9_f19b7b78-7bc4-4586-9e54-f3f6dc7c076d.jpg',
  },
  {
    id: 5,
    name: 'Blush Reverie (BR-01)',
    price: 'Price on Request',
    soldOut: false,
    image: 'https://www.ammarakhan.com/cdn/shop/files/27_fb5fc08f-0665-43e0-b775-9ad8a3774765.jpg',
    hoverImage: 'https://www.ammarakhan.com/cdn/shop/files/28_dd84a8d6-c1f0-4302-b1ff-8b665029d0a2.jpg',
  },
  {
    id: 6,
    name: 'Veil of Dawn (BR-05)',
    price: 'Price on Request',
    soldOut: false,
    image: 'https://www.ammarakhan.com/cdn/shop/files/23_c2cf5896-56b4-40dd-b60a-f3622e5ba2b0.jpg',
    hoverImage: 'https://www.ammarakhan.com/cdn/shop/files/24_111ee237-a1aa-4e61-9787-0be12af502ea.jpg',
  },
  {
    id: 7,
    name: 'A Whisper of Dreams (BR-02)',
    price: 'Price on Request',
    soldOut: false,
    image: 'https://www.ammarakhan.com/cdn/shop/files/2_a2cc0890-cae0-455e-b892-48fbd7c98ba0.jpg',
    hoverImage: 'https://www.ammarakhan.com/cdn/shop/files/3_64fdfae4-89f4-4634-b81b-d94f43836817.jpg',
  },
];

const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest'];

export default function TimelessPro({ onBack }) {
  const [sort, setSort] = useState('Featured');
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="tlp-wrap">
      {onBack && (
        <button className="tlp-back-btn" onClick={onBack}>← Back</button>
      )}

      {/* Breadcrumb */}
      <nav className="tlp-breadcrumb">
        <span className="tlp-bc-home" onClick={onBack}>Home</span>
        <span className="tlp-bc-sep"> › </span>
        <span className="tlp-bc-current">Classic Bridal Couture '26</span>
      </nav>

      {/* Collection title */}
      <h1 className="tlp-title">Classic Bridal Couture '26</h1>

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
          <span className="tlp-count">{allProducts.length} Results</span>
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
            <label className="tlp-filter-check"><input type="checkbox" /> In Stock</label>
            <label className="tlp-filter-check"><input type="checkbox" /> Sold Out</label>
          </div>
          <div className="tlp-filter-group">
            <p className="tlp-filter-heading">COLLECTION</p>
            <label className="tlp-filter-check"><input type="checkbox" /> Bridal Couture</label>
            <label className="tlp-filter-check"><input type="checkbox" /> Luxury Formals</label>
          </div>
        </div>
      )}

      {/* Product grid — 4 columns */}
      <div className="tlp-grid">
        {allProducts.map(item => (
          <div
            key={item.id}
            className="tlp-card"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="tlp-img-wrap">
              {item.soldOut && <span className="tlp-sold-badge">SOLD OUT</span>}
              <img
                src={hoveredId === item.id ? item.hoverImage : item.image}
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
