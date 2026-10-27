import { useState, useRef, useEffect } from 'react';
import './header.css';

// `collection` opens that collection page, `section` scrolls to that home page section
const navItems = [
  { label: 'NEW ARRIVALS', section: 'new-arrivals' },
  { label: 'AK KAFTAN', collection: 'kaftan' },
  { label: 'LUXURY PRINTS', collection: 'prints' },
  { label: 'TIMELESS BRIDAL COUTURE', section: 'timeless-bridal' },
  { label: 'BEST SELLERS', collection: 'bestsellers' },
];

const socialLinks = [
  { icon: 'fb', href: '#', title: 'Facebook' },
  { icon: 'pin', href: '#', title: 'Pinterest' },
  { icon: 'ig', href: '#', title: 'Instagram' },
  { icon: 'yt', href: '#', title: 'YouTube' },
  { icon: 'wa', href: '#', title: 'WhatsApp' },
];

function SocialIcon({ icon, href, title }) {
  const paths = {
    fb: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
    pin: 'M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.22-5.17 1.22-5.17s-.31-.63-.31-1.56c0-1.46.85-2.55 1.9-2.55.9 0 1.33.67 1.33 1.48 0 .9-.58 2.26-.87 3.51-.25 1.05.52 1.9 1.54 1.9 1.85 0 3.09-2.37 3.09-5.18 0-2.14-1.44-3.74-4.05-3.74-2.95 0-4.78 2.2-4.78 4.67 0 .85.24 1.44.62 1.9.17.2.19.28.13.51-.04.17-.14.57-.18.73-.06.23-.24.31-.44.23-1.24-.51-1.82-1.88-1.82-3.41 0-2.53 2.14-5.58 6.38-5.58 3.42 0 5.66 2.48 5.66 5.14 0 3.53-1.95 6.17-4.82 6.17-.96 0-1.87-.52-2.18-1.1l-.61 2.34c-.2.76-.61 1.52-.98 2.12.74.22 1.52.34 2.33.34 5.52 0 10-4.48 10-10S17.52 2 12 2z',
    ig: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
    yt: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-2.7A48.35 48.35 0 0 0 12 4C7 4 2.13 5.47 2.13 5.47A4.72 4.72 0 0 0 2 8.87v2.26A4.72 4.72 0 0 0 2.13 14.53S7 16 12 16s9.87-1.47 9.87-1.47A4.72 4.72 0 0 0 22 11.13V8.87a4.83 4.83 0 0 1-2.41-2.18zM10 14.5v-5l5 2.5z',
    wa: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z',
  };
  return (
    <a href={href} title={title} className="social-icon" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d={paths[icon]} />
      </svg>
    </a>
  );
}

export default function Header({ cartCount = 0, onCartOpen, onNavClick }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [annIndex, setAnnIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const searchRef = useRef(null);

  function handleNavItem(e, item) {
    e.preventDefault();
    setMenuOpen(false);
    onNavClick && onNavClick(item);
  }

  const announcements = [
    "JOLIE | LAWN PRET SS '26 | LIVE NOW",
    "FREE SHIPPING ON ORDERS ABOVE RS. 5000",
    "NEW ARRIVALS — SHOP THE LATEST COLLECTION",
  ];

  useEffect(() => {
    const t = setInterval(() => setAnnIndex(i => (i + 1) % announcements.length), 3000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    function handleScroll() { setScrolled(window.scrollY > 10); }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClick(e) {
      if (!e.target.closest('.search-wrap')) setSearchOpen(false);
      if (!e.target.closest('.site-header')) setMenuOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>

      {/* These 3 rows collapse via CSS when scrolled — no JS unmounting */}
      <div className="header-top-rows">
        <div className="announcement-bar">
          <button className="ann-arrow" onClick={() => setAnnIndex(i => (i - 1 + announcements.length) % announcements.length)}>&#8249;</button>
          <span className="ann-text">{announcements[annIndex]}</span>
          <button className="ann-arrow" onClick={() => setAnnIndex(i => (i + 1) % announcements.length)}>&#8250;</button>
        </div>
        <div className="brand-bar">
          <a href="/" className="brand-name">FIZZA ASIF</a>
          <div className="social-icons">
            {socialLinks.map(s => <SocialIcon key={s.icon} {...s} />)}
          </div>
        </div>
      </div>

      {/* Nav — always exactly 48px */}
      <nav className="nav-bar">
        {/* Hamburger — only visible on phones and tablets (see header.css) */}
        <button
          className="icon-btn menu-btn"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
              <line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        <div className="search-wrap">
          <button className="icon-btn" onClick={() => setSearchOpen(o => !o)} aria-label="Search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          {searchOpen && (
            <form className="search-box" onSubmit={e => e.preventDefault()}>
              <input ref={searchRef} type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
            </form>
          )}
        </div>

        <div className="nav-scroll-wrap">
          <ul className="nav-links">
            {navItems.map(item => (
              <li key={item.label} className="nav-item">
                <a
                  href={`#${item.section || item.collection}`}
                  className="nav-link"
                  onClick={e => handleNavItem(e, item)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-icons">
          <button className="icon-btn" aria-label="Account">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
            </svg>
          </button>
          <span className="flag" title="Pakistan">🇵🇰</span>
          <button className="icon-btn cart-btn" aria-label="Cart" onClick={onCartOpen}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {menuOpen && (
        <ul className="mobile-menu">
          {navItems.map(item => (
            <li key={item.label}>
              <a
                href={`#${item.section || item.collection}`}
                className="mobile-menu-link"
                onClick={e => handleNavItem(e, item)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
