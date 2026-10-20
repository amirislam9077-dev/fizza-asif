import { useState, useRef } from 'react';
import './newpro.css';
import Footer from './footer';

const product = {
  name: 'Moonlit Grace (D-09)',
  collection: 'LUXURY FORMALS',
  price: 'Rs. 29,500',
  badge: 'BEST SELLER',
  tag: 'Perfectly Hand Embellished',
  description: 'Draped in celestial elegance, the Moonlit Grace is a vision in soft ivory and gold. This exquisitely crafted luxury formal features intricate hand embellishments across the neckline and hem, with delicate thread and sequin work that catches the light beautifully. The flowing silhouette and refined detailing make it a timeless choice for grand occasions and formal gatherings.',
  fabric: { shirt: 'Chiffon', dupatta: 'Blended Chiffon' },
  pieces: '2pcs (Shirt + Dupatta)',
  color: 'Ivory Gold',
  dispatch: '3 working days after Order Confirmation',
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  images: [
    'https://www.ammarakhan.com/cdn/shop/files/1_d716311c-5eb9-48ac-898d-571c5fc964f6.jpg?crop=center&format=webp&height=1425&v=1758805494&width=950',
    'https://www.ammarakhan.com/cdn/shop/files/2_70e2160f-bbc1-4167-959e-f8ef4b11d233.jpg?crop=center&format=webp&height=750&v=1758805451&width=500',
    'https://www.ammarakhan.com/cdn/shop/files/1_d716311c-5eb9-48ac-898d-571c5fc964f6.jpg?crop=center&format=webp&height=1425&v=1758805494&width=950',
    'https://www.ammarakhan.com/cdn/shop/files/2_70e2160f-bbc1-4167-959e-f8ef4b11d233.jpg?crop=center&format=webp&height=750&v=1758805451&width=500',
  ],
};

const recommended = [
  {
    id: 1,
    name: 'Floral Hush (D-07)',
    price: 'Rs. 13,950',
    badge: 'READY TO SHIP',
    image: 'https://www.ammarakhan.com/cdn/shop/files/D-07_5.webp?v=1777536463&width=1200',
  },
  {
    id: 2,
    name: 'Starry Mirage Kaftan (D-15)',
    price: 'Rs. 74,950',
    badge: null,
    image: 'https://www.ammarakhan.com/cdn/shop/files/67_ce7863ec-27b7-46f3-bb5d-1be94d58ca44.webp',
  },
  {
    id: 3,
    name: 'Blossom Glow (D-02)',
    price: 'Rs. 13,950',
    badge: 'READY TO SHIP',
    image: 'https://www.ammarakhan.com/cdn/shop/files/D-02_1.webp?v=1777536463&width=600',
  },
  {
    id: 4,
    name: 'Midnight Bloom (D-08)',
    price: 'Rs. 29,500',
    badge: null,
    image: 'https://www.ammarakhan.com/cdn/shop/files/D-08_1.webp?v=1777536463&width=600',
  },
];

export default function LuxuryPro({ onBack, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState('XS');
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const recRef = useRef(null);

  function scrollRec(dir) {
    recRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });
  }

  return (
    <div className="newpro-wrap">
      {onBack && (
        <button className="newpro-back-btn" onClick={onBack}>← Back</button>
      )}

      <div className="newpro-page">

        {/* Left — images */}
        <div className="newpro-images">
          <div className="newpro-main-imgs">
            <img
              src={product.images[0]}
              alt={product.name + ' front'}
              className="newpro-main-img"
              onError={e => { e.target.style.display = 'none'; }}
            />
            <img
              src={product.images[1]}
              alt={product.name + ' back'}
              className="newpro-main-img"
              onError={e => { e.target.style.display = 'none'; }}
            />
          </div>
          <img
            src={product.images[2]}
            alt={product.name + ' detail'}
            className="newpro-main-img newpro-main-img--full"
            onError={e => { e.target.style.display = 'none'; }}
          />
          <div className="newpro-thumbs">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`view ${i + 1}`}
                className={`newpro-thumb${activeImg === i ? ' active' : ''}`}
                onClick={() => setActiveImg(i)}
                onError={e => { e.target.style.display = 'none'; }}
              />
            ))}
          </div>
        </div>

        {/* Right — product details */}
        <div className="newpro-details">
          <span className="newpro-badge">{product.badge}</span>
          <h1 className="newpro-name">{product.name}</h1>
          <p className="newpro-collection">{product.collection}</p>
          <p className="newpro-price">{product.price}</p>

          <hr className="newpro-divider" />

          <div className="newpro-tag-wrap">
            <span className="newpro-tag">{product.tag}</span>
          </div>

          <div className="newpro-size-section">
            <p className="newpro-size-label">Size: <strong>{selectedSize}</strong></p>
            <div className="newpro-sizes">
              {product.sizes.map(s => (
                <button
                  key={s}
                  className={`newpro-size-btn${selectedSize === s ? ' selected' : ''}`}
                  onClick={() => setSelectedSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <a href="#size" className="newpro-size-guide">
            <span>📋</span> SIZE GUIDE
          </a>

          <div className="newpro-qty">
            <button className="newpro-qty-btn" onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
            <span className="newpro-qty-val">{qty}</span>
            <button className="newpro-qty-btn" onClick={() => setQty(q => q + 1)}>+</button>
          </div>

          <button className="newpro-add-btn" onClick={() => onAddToCart && onAddToCart({ ...product, images: [product.images[activeImg], ...product.images] }, selectedSize, qty)}>ADD TO BAG</button>

          <a
            className="newpro-wa-btn"
            href={`https://wa.me/923112059077?text=${encodeURIComponent(`Hi! I'm interested in ordering:\n\n*${product.name}*\nSize: ${selectedSize}\nQty: ${qty}\nPrice: ${product.price}\n\nPlease confirm availability.`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            ORDER ON WHATSAPP
          </a>

          <button className="newpro-buy-btn">BUY IT NOW</button>

          <hr className="newpro-divider" />

          <p className="newpro-desc">{product.description}</p>

          <hr className="newpro-divider" />

          <div className="newpro-meta">
            <p className="newpro-meta-title">Fabric:</p>
            <p className="newpro-meta-val">Shirt: {product.fabric.shirt}</p>
            <p className="newpro-meta-val">Dupatta: {product.fabric.dupatta}</p>
          </div>

          <hr className="newpro-divider" />

          <div className="newpro-meta">
            <p className="newpro-meta-title">No. of Pieces:</p>
            <p className="newpro-meta-val">{product.pieces}</p>
          </div>

          <hr className="newpro-divider" />

          <div className="newpro-meta">
            <p className="newpro-meta-title">Color:</p>
            <p className="newpro-meta-val">{product.color}</p>
          </div>

          <hr className="newpro-divider" />

          <div className="newpro-meta">
            <p className="newpro-meta-title">Dispatch Time:</p>
            <p className="newpro-meta-val">{product.dispatch}</p>
          </div>
        </div>
      </div>

      {/* Recommended */}
      <section className="rec-section">
        <div className="rec-header">
          <h2 className="rec-title">Recommended Products</h2>
          <div className="rec-arrows">
            <button className="rec-arrow-btn" onClick={() => scrollRec(-1)} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button className="rec-arrow-btn" onClick={() => scrollRec(1)} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
        <div className="rec-track" ref={recRef}>
          {recommended.map(item => (
            <div key={item.id} className="rec-card">
              <div className="rec-img-wrap">
                {item.badge && <span className="rec-badge">{item.badge}</span>}
                <img
                  src={item.image}
                  alt={item.name}
                  className="rec-img"
                  onError={e => { e.target.style.display = 'none'; }}
                />
              </div>
              <p className="rec-name">{item.name}</p>
              <p className="rec-price">{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
