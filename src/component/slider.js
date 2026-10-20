import { useState, useEffect, useCallback } from 'react';
import './slider.css';

const BANNERS = 'https://cdn.shopify.com/s/files/1/2402/3147/collections/';

// Wide 1920x800 collection banners (no text printed on them); SHOP NOW opens `collectionKey`
const slides = [
  {
    id: 1,
    image: BANNERS + 'ak_jade_1920x800_copy_2.jpg?v=1704984396&width=1920',
    gradient: 'linear-gradient(120deg, #3a4a2e 0%, #6a7a58 100%)',
    title: 'New Arrivals',
    subtitle: 'SHOP NOW',
    collectionKey: 'newarrivals',
    align: 'left',
  },
  {
    id: 2,
    image: BANNERS + 'desktop-banner-6_8cb3201a-ba3f-46f1-ba5a-9bcb8a9219f5.jpg?v=1752747768&width=1920',
    gradient: 'linear-gradient(120deg, #5a5048 0%, #8a8070 100%)',
    title: "Bridal Couture '26",
    subtitle: 'SHOP NOW',
    collectionKey: 'bridal',
    align: 'left',
  },
  {
    id: 3,
    image: BANNERS + 'ak_collection_banner_1920x800_a374683b-d9be-4447-8734-5422b18c0d6c.jpg?v=1708079001&width=1920',
    gradient: 'linear-gradient(120deg, #3a2420 0%, #6a4438 100%)',
    title: 'Timeless Bridal Couture',
    subtitle: 'SHOP NOW',
    collectionKey: 'bridal',
    align: 'right',
  },
  {
    id: 4,
    image: BANNERS + '1920x800_LILY.jpg?v=1719394100&width=1920',
    gradient: 'linear-gradient(120deg, #6b6a5e 0%, #a0a090 100%)',
    title: 'Luxury Prints',
    subtitle: 'SHOP NOW',
    collectionKey: 'prints',
    align: 'right',
  },
];

export default function Slider({ onCollectionClick }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [failedImages, setFailedImages] = useState({});

  const goTo = useCallback((index) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 600);
  }, [animating]);

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <div className="slider">
      <div
        className={`slide ${animating ? 'fade' : ''}`}
        style={{ background: slide.gradient }}
      >
        {!failedImages[slide.id] && (
          <img
            src={slide.image}
            alt={slide.title}
            className="slide-img"
            onError={() => setFailedImages(p => ({ ...p, [slide.id]: true }))}
          />
        )}
        <div className="slide-overlay" />
        <div className={`slide-content align-${slide.align}`}>
          <h2 className="slide-title">{slide.title}</h2>
          <a
            href={`#${slide.collectionKey}`}
            className="slide-cta"
            onClick={e => { e.preventDefault(); onCollectionClick && onCollectionClick(slide.collectionKey); }}
          >
            {slide.subtitle}
          </a>
        </div>
      </div>

      <button className="slider-arrow left" onClick={prev} aria-label="Previous">&#8249;</button>
      <button className="slider-arrow right" onClick={next} aria-label="Next">&#8250;</button>

      <div className="slider-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
