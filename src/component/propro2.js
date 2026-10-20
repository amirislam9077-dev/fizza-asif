import { useState, useRef } from 'react';
import './propro2.css';
import Footer from './footer';

const product = {
  name: 'Starry Mirage Kaftan (D-15)',
  collection: 'NURAE',
  price: 'Rs. 74,950',
  badge: null,
  tag: 'Perfectly Hand Embellished',
  description: 'Draped in celestial grace, the Starry Mirage Kaftan is a masterpiece of hand embellishment. Crafted in a shimmering sage-grey base, the kaftan features an all-over sequin and thread work motif that catches the light with every movement. The loose silhouette with a front slit neckline and full-length sleeves makes it ideal for grand occasions. A timeless piece that bridges artistry and elegance.',
  fabric: { shirt: 'Raw Silk', dupatta: 'N/A' },
  pieces: '1pc (Kaftan)',
  color: 'Sage Grey',
  dispatch: '3 working days after Order Confirmation',
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  images: [
    'https://www.ammarakhan.com/cdn/shop/files/67_ce7863ec-27b7-46f3-bb5d-1be94d58ca44.webp',
    'https://www.ammarakhan.com/cdn/shop/files/550x550-_2.jpg',
    'https://www.ammarakhan.com/cdn/shop/files/13_2e13442e-f087-4772-8b41-54e551197bf8.jpg',
    'https://www.ammarakhan.com/cdn/shop/files/14_ed1446bd-aac3-4d2a-84ed-eccbd95d0146.jpg',
    'https://www.ammarakhan.com/cdn/shop/files/5_ddbd16c4-8266-4e55-bdf7-00c261d84ee6.jpg',
  ],
};

const recommended = [
  {
    id: 1,
    name: 'SHAHANA (D-06)',
    price: 'Rs. 74,950',
    badge: null,
    image: 'https://www.ammarakhan.com/cdn/shop/files/550x550-_2.jpg',
  },
  {
    id: 2,
    name: 'VANILLA MAGIC KAFTAN (D-13)',
    price: 'Rs. 74,950',
    badge: null,
    image: 'https://www.ammarakhan.com/cdn/shop/files/550x550-_2.jpg',
  },
  {
    id: 3,
    name: 'REGAL RUST (D-14)',
    price: 'Rs. 74,950',
    badge: null,
    image: 'https://www.ammarakhan.com/cdn/shop/files/67_ce7863ec-27b7-46f3-bb5d-1be94d58ca44.webp',
  },
  {
    id: 4,
    name: 'IVORY GREYS (D-09)',
    price: 'Rs. 74,950',
    badge: null,
    image: 'https://www.ammarakhan.com/cdn/shop/files/67_ce7863ec-27b7-46f3-bb5d-1be94d58ca44.webp',
  },
];

export default function ProPro2({ onBack, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState('XS');
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const recRef = useRef(null);

  function scrollRec(dir) {
    recRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });
  }

  return (
    <div className="pp2-wrap">
      {onBack && (
        <button className="pp2-back-btn" onClick={onBack}>← Back</button>
      )}

      {/* ── Main product grid ── */}
      <div className="pp2-page">

        {/* Left — images */}
        <div className="pp2-images">
          <div className="pp2-main-imgs">
            <img
              src={product.images[0]}
              alt={product.name + ' front'}
              className="pp2-main-img"
              onError={e => { e.target.style.display = 'none'; }}
            />
            <img
              src={product.images[1]}
              alt={product.name + ' back'}
              className="pp2-main-img"
              onError={e => { e.target.style.display = 'none'; }}
            />
          </div>
          {/* Third large image full width */}
          <img
            src={product.images[2]}
            alt={product.name + ' detail'}
            className="pp2-main-img pp2-main-img--full"
            onError={e => { e.target.style.display = 'none'; }}
          />
          {/* Thumbnail strip */}
          <div className="pp2-thumbs">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`view ${i + 1}`}
                className={`pp2-thumb${activeImg === i ? ' active' : ''}`}
                onClick={() => setActiveImg(i)}
                onError={e => { e.target.style.display = 'none'; }}
              />
            ))}
          </div>
        </div>

        {/* Right — product details */}
        <div className="pp2-details">
          {product.badge && <span className="pp2-badge">{product.badge}</span>}
          <h1 className="pp2-name">{product.name}</h1>
          <p className="pp2-collection">{product.collection}</p>
          <p className="pp2-price">{product.price}</p>

          <hr className="pp2-divider" />

          <div className="pp2-tag-wrap">
            <span className="pp2-tag">{product.tag}</span>
          </div>

          {/* Size selector */}
          <div className="pp2-size-section">
            <p className="pp2-size-label">Size: <strong>{selectedSize}</strong></p>
            <div className="pp2-sizes">
              {product.sizes.map(s => (
                <button
                  key={s}
                  className={`pp2-size-btn${selectedSize === s ? ' selected' : ''}`}
                  onClick={() => setSelectedSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Size guide */}
          <a href="#size" className="pp2-size-guide">
            <span>📋</span> SIZE GUIDE
          </a>

          {/* Quantity */}
          <div className="pp2-qty">
            <button className="pp2-qty-btn" onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
            <span className="pp2-qty-val">{qty}</span>
            <button className="pp2-qty-btn" onClick={() => setQty(q => q + 1)}>+</button>
          </div>

          {/* Add to bag */}
          <button className="pp2-add-btn" onClick={() => onAddToCart && onAddToCart({ ...product, images: [product.images[activeImg], ...product.images] }, selectedSize, qty)}>ADD TO BAG</button>

          {/* WhatsApp */}
          <a
            className="newpro-wa-btn"
            href={`https://wa.me/923112059077?text=${encodeURIComponent(`Hi! I'm interested in ordering:\n\n*${product.name}*\nSize: ${selectedSize}\nQty: ${qty}\nPrice: ${product.price}\n\nPlease confirm availability.`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            ORDER ON WHATSAPP
          </a>

          {/* Buy it now */}
          <button className="pp2-buy-btn">BUY IT NOW</button>

          <hr className="pp2-divider" />

          {/* Description */}
          <p className="pp2-desc">{product.description}</p>

          <hr className="pp2-divider" />

          {/* Fabric */}
          <div className="pp2-meta">
            <p className="pp2-meta-title">Fabric:</p>
            <p className="pp2-meta-val">Shirt: {product.fabric.shirt}</p>
            {product.fabric.dupatta !== 'N/A' && (
              <p className="pp2-meta-val">Dupatta: {product.fabric.dupatta}</p>
            )}
          </div>

          <hr className="pp2-divider" />

          <div className="pp2-meta">
            <p className="pp2-meta-title">No. of Pieces:</p>
            <p className="pp2-meta-val">{product.pieces}</p>
          </div>

          <hr className="pp2-divider" />

          <div className="pp2-meta">
            <p className="pp2-meta-title">Color:</p>
            <p className="pp2-meta-val">{product.color}</p>
          </div>

          <hr className="pp2-divider" />

          <div className="pp2-meta">
            <p className="pp2-meta-title">Dispatch Time:</p>
            <p className="pp2-meta-val">{product.dispatch}</p>
          </div>
        </div>
      </div>

      {/* ── Recommended Products ── */}
      <section className="pp2-rec-section">
        <div className="pp2-rec-header">
          <h2 className="pp2-rec-title">Recommended Products</h2>
          <div className="pp2-rec-arrows">
            <button className="pp2-rec-arrow-btn" onClick={() => scrollRec(-1)} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button className="pp2-rec-arrow-btn" onClick={() => scrollRec(1)} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="pp2-rec-track" ref={recRef}>
          {recommended.map(item => (
            <div key={item.id} className="pp2-rec-card">
              <div className="pp2-rec-img-wrap">
                {item.badge && <span className="pp2-rec-badge">{item.badge}</span>}
                <img
                  src={item.image}
                  alt={item.name}
                  className="pp2-rec-img"
                  onError={e => { e.target.style.display = 'none'; }}
                />
              </div>
              <p className="pp2-rec-name">{item.name}</p>
              <p className="pp2-rec-price">{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
