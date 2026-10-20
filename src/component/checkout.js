import { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './checkout.css';

delete L.Icon.Default.prototype._getIconUrl;

async function geocodeLocation(name) {
  if (!name || name.trim().length < 2) return null;
  try {
    const q = encodeURIComponent(name.trim() + ', Pakistan');
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${q}&format=json&limit=1&addressdetails=1`,
      { headers: { 'Accept-Language': 'en' } }
    );
    const data = await res.json();
    if (data && data[0]) {
      const addr = data[0].address || {};
      return {
        coords: [parseFloat(data[0].lat), parseFloat(data[0].lon)],
        city:   addr.city || addr.town || addr.village || addr.county || '',
        postal: addr.postcode || '',
      };
    }
  } catch {}
  return null;
}

async function fetchSuggestions(query) {
  if (!query || query.trim().length < 2) return [];
  try {
    const q = encodeURIComponent(query.trim() + ', Pakistan');
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${q}&format=json&limit=5&addressdetails=1`,
      { headers: { 'Accept-Language': 'en' } }
    );
    const data = await res.json();
    return data.map(item => ({
      label: item.display_name,
      short: item.display_name.split(',').slice(0, 2).join(',').trim(),
      coords: [parseFloat(item.lat), parseFloat(item.lon)],
      city:   (item.address?.city || item.address?.town || item.address?.village || item.address?.county || ''),
      postal: item.address?.postcode || '',
    }));
  } catch {}
  return [];
}

/* Custom drop-pin SVG icon */
function makePinIcon() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="48" viewBox="0 0 36 48">
      <filter id="shadow" x="-40%" y="-20%" width="180%" height="160%">
        <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="rgba(0,0,0,0.35)"/>
      </filter>
      <g filter="url(#shadow)">
        <path d="M18 2C10.27 2 4 8.27 4 16c0 10.5 14 30 14 30s14-19.5 14-30C32 8.27 25.73 2 18 2z"
          fill="#8a6a4a"/>
        <circle cx="18" cy="16" r="6" fill="#fff" opacity="0.9"/>
        <circle cx="18" cy="16" r="3" fill="#8a6a4a"/>
      </g>
    </svg>`;
  return L.divIcon({
    html: svg,
    className: '',
    iconSize: [36, 48],
    iconAnchor: [18, 46],
    popupAnchor: [0, -46],
  });
}

function LeafletMap({ pinCoords, pinLabel, isSearching }) {
  const mapRef      = useRef(null);
  const mapInstance = useRef(null);
  const markerRef   = useRef(null);
  const circleRef   = useRef(null);

  useEffect(() => {
    if (mapInstance.current) return;

    mapInstance.current = L.map(mapRef.current, {
      center: [24.8607, 67.0011],
      zoom: 13,
      zoomControl: false,
      attributionControl: true,
    });

    /* CartoDB Positron — clean minimal tiles */
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(mapInstance.current);

    /* Zoom control bottom-right */
    L.control.zoom({ position: 'bottomright' }).addTo(mapInstance.current);

    /* Pulse circle */
    circleRef.current = L.circleMarker([24.8607, 67.0011], {
      radius: 18,
      color: '#8a6a4a',
      fillColor: '#8a6a4a',
      fillOpacity: 0.15,
      weight: 1.5,
      opacity: 0.5,
      className: 'map-pulse-circle',
    }).addTo(mapInstance.current);

    /* Drop pin */
    markerRef.current = L.marker([24.8607, 67.0011], { icon: makePinIcon() })
      .addTo(mapInstance.current)
      .bindPopup('<b>Karachi</b>', { className: 'map-popup', closeButton: false })
      .openPopup();

    return () => { mapInstance.current.remove(); mapInstance.current = null; };
  }, []);

  useEffect(() => {
    if (!mapInstance.current || !pinCoords) return;

    /* First zoom out slightly, then fly in — gives a cinematic effect */
    const map = mapInstance.current;
    const currentZoom = map.getZoom();

    markerRef.current.setLatLng(pinCoords)
      .setPopupContent(`<b>${pinLabel}</b>`)
      .openPopup();
    circleRef.current.setLatLng(pinCoords);

    if (currentZoom > 10) {
      map.flyTo(pinCoords, 15, {
        animate: true,
        duration: 1.6,
        easeLinearity: 0.25,
      });
    } else {
      map.flyTo(pinCoords, 15, { animate: true, duration: 2, easeLinearity: 0.2 });
    }
  }, [pinCoords, pinLabel]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div ref={mapRef} className="co-mapbox" />
      {isSearching && (
        <div className="co-map-loading">
          <div className="co-map-spinner" />
          <span>Finding location…</span>
        </div>
      )}
    </div>
  );
}

export default function Checkout({ items, onBack }) {
  const [email, setEmail]         = useState('');
  const [phone, setPhone]         = useState('');
  const [emailNews, setEmailNews] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName]   = useState('');
  const [address, setAddress]     = useState('');
  const [apartment, setApartment] = useState('');
  const [city, setCity]           = useState('');
  const [postal, setPostal]       = useState('');
  const [country, setCountry]     = useState('Pakistan');
  const [discount, setDiscount]   = useState('');
  const [sending, setSending]     = useState(false);
  const [sent, setSent]           = useState(false);
  const [sendError, setSendError] = useState('');
  const [location, setLocation]         = useState('');
  const [pinCoords, setPinCoords]       = useState([24.8607, 67.0011]);
  const [pinLabel, setPinLabel]         = useState('Karachi');
  const [isSearching, setIsSearching]   = useState(false);
  const [suggestions, setSuggestions]   = useState([]);
  const [showSugg, setShowSugg]         = useState(false);
  const suggRef                         = useRef(null);

  useEffect(() => {
    const search = location.trim();
    if (!search) { setSuggestions([]); setShowSugg(false); return; }
    const timer = setTimeout(async () => {
      const results = await fetchSuggestions(search);
      setSuggestions(results);
      setShowSugg(results.length > 0);
    }, 350);
    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    const search = location.trim();
    if (!search) return;
    const timer = setTimeout(async () => {
      setIsSearching(true);
      const result = await geocodeLocation(search);
      setIsSearching(false);
      if (result) {
        setPinCoords(result.coords);
        setPinLabel(search);
        if (result.city)   setCity(result.city);
        if (result.postal) setPostal(result.postal);
      }
    }, 600);
    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    function handleClick(e) {
      if (suggRef.current && !suggRef.current.contains(e.target)) {
        setShowSugg(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function selectSuggestion(s) {
    setLocation(s.short);
    setSuggestions([]);
    setShowSugg(false);
    setPinCoords(s.coords);
    setPinLabel(s.short);
    if (s.city)   setCity(s.city);
    if (s.postal) setPostal(s.postal);
  }

  const subtotal = items.reduce((sum, item) => {
    const num = parseInt(String(item.price).replace(/[^\d]/g, ''));
    return sum + num * item.qty;
  }, 0);
  const totalQty = items.reduce((s, i) => s + i.qty, 0);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setSendError('');

    const itemLines = items.map(item => {
      const unit = parseInt(String(item.price).replace(/[^\d]/g, ''));
      return `${item.name} (${item.size}) x${item.qty}  →  Rs ${(unit * item.qty).toLocaleString()}`;
    }).join('\n');

    const templateParams = {
      to_email:    'amirislam9077@gmail.com',
      customer:    `${firstName} ${lastName}`.trim() || 'Customer',
      email:       email,
      phone:       phone ? `+92 ${phone}` : '—',
      country,
      address:     address || '—',
      apartment:   apartment || '—',
      city:        city || '—',
      postal:      postal || '—',
      location:    location || '—',
      items_list:  itemLines,
      total_qty:   totalQty,
      subtotal:    `Rs ${subtotal.toLocaleString()}.00`,
      discount:    discount || '—',
    };

    try {
      const res = await fetch('/api/send-order', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(templateParams),
      });
      const data = await res.json();
      if (data.ok) {
        setSent(true);
      } else {
        setSendError('Failed to send. Please try again.');
      }
    } catch (err) {
      setSendError('Failed to send. Please try again.');
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="co-page">

      {/* Top bar */}
      <div className="co-topbar">
        <button className="co-back-btn" onClick={onBack}>← Back</button>
        <span className="co-logo" onClick={onBack}>FIZZA ASIF</span>
        <button className="co-topbar-icon" onClick={onBack} aria-label="Back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="24" height="24">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
        </button>
      </div>

      {/* Map — full width */}
      <div className="co-map-section">
        <LeafletMap pinCoords={pinCoords} pinLabel={pinLabel} isSearching={isSearching} />

        {/* Search box on top of map */}
        <div className="co-map-search-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="#8a6a4a" strokeWidth="2.2" width="16" height="16" style={{flexShrink:0}}>
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            <circle cx="12" cy="9" r="2.5"/>
          </svg>
          <input
            className="co-map-search-input"
            type="text"
            placeholder="Search city (e.g. Lahore, Karachi...)"
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
          {location && (
            <button className="co-map-clear" onClick={() => setLocation('')}>✕</button>
          )}
        </div>
      </div>

      {/* Form + Order summary */}
      <div className="co-body">

        {/* Left */}
        <div className="co-left">
          <h1 className="co-checkout-heading">Checkout</h1>
          <form className="co-form" onSubmit={handleSubmit}>

            <div className="co-section">
              <div className="co-section-header">
                <h2 className="co-section-title">Contact</h2>
                <span className="co-signin-link">Sign in</span>
              </div>
              <input className="co-input" type="email" placeholder="Email"
                value={email} onChange={e => setEmail(e.target.value)} />
              <div className="co-phone-field">
                <span className="co-phone-prefix">+92</span>
                <input className="co-input co-input-phone" type="tel"
                  placeholder="Phone number"
                  value={phone} onChange={e => setPhone(e.target.value)} />
              </div>
              <label className="co-check-row">
                <input type="checkbox" checked={emailNews}
                  onChange={e => setEmailNews(e.target.checked)} />
                <span>Email me with news and offers</span>
              </label>
            </div>

            <div className="co-section">
              <h2 className="co-section-title">Delivery</h2>

              <div className="co-country-box">
                <span className="co-country-lbl">Country/Region</span>
                <select className="co-country-select" value={country}
                  onChange={e => setCountry(e.target.value)}>
                  <option>Pakistan</option>
                  <option>United Arab Emirates</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Australia</option>
                </select>
                <svg className="co-country-arrow" viewBox="0 0 12 8" width="12" height="8" fill="none">
                  <path d="M1 1l5 5 5-5" stroke="#666" strokeWidth="1.5"/>
                </svg>
              </div>

              <div className="co-row2">
                <input className="co-input" type="text" placeholder="First name"
                  value={firstName} onChange={e => setFirstName(e.target.value)} />
                <input className="co-input" type="text" placeholder="Last name"
                  value={lastName} onChange={e => setLastName(e.target.value)} />
              </div>

              <div className="co-location-wrap" ref={suggRef}>
                <div className="co-location-field">
                  <svg className="co-location-pin" viewBox="0 0 24 24" fill="none" stroke="#8a6a4a" strokeWidth="2" width="15" height="15">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                  <input
                    className="co-input co-input-loc"
                    type="text"
                    placeholder="Location (e.g. Lahore, Karachi...)"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    onFocus={() => suggestions.length > 0 && setShowSugg(true)}
                    autoComplete="off"
                  />
                </div>
                {showSugg && suggestions.length > 0 && (
                  <ul className="co-suggestions">
                    {suggestions.map((s, i) => (
                      <li key={i} className="co-sugg-item" onMouseDown={() => selectSuggestion(s)}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#8a6a4a" strokeWidth="1.8" width="13" height="13" style={{flexShrink:0,marginTop:1}}>
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                          <circle cx="12" cy="9" r="2.5"/>
                        </svg>
                        <div className="co-sugg-text">
                          <span className="co-sugg-short">{s.short}</span>
                          <span className="co-sugg-full">{s.label}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <input className="co-input" type="text" placeholder="Address"
                value={address} onChange={e => setAddress(e.target.value)} />

              <input className="co-input" type="text"
                placeholder="Apartment, suite, etc. (optional)"
                value={apartment} onChange={e => setApartment(e.target.value)} />

              <div className="co-row2">
                <input className="co-input" type="text" placeholder="City"
                  value={city} onChange={e => setCity(e.target.value)} />
                <input className="co-input" type="text" placeholder="Postal code (optional)"
                  value={postal} onChange={e => setPostal(e.target.value)} />
              </div>
            </div>

            <button className="co-btn-submit" type="submit" disabled={sending}>
              {sending ? 'Sending…' : 'Continue to shipping'}
            </button>

            {sent && (
              <div className="co-sent-msg">
                ✓ Order details sent to amirislam9077@gmail.com
              </div>
            )}
            {sendError && (
              <div className="co-error-msg">{sendError}</div>
            )}
          </form>
        </div>

        {/* Right */}
        <div className="co-right">
          <div className="co-items">
            {items.map(item => {
              const unitPrice = parseInt(String(item.price).replace(/[^\d]/g, ''));
              const linePrice = unitPrice * item.qty;
              return (
                <div key={item.cartId} className="co-item">
                  <div className="co-item-img-wrap">
                    <img src={item.image} alt={item.name} className="co-item-img"
                      onError={e => { e.target.style.opacity = '0'; }} />
                    <span className="co-item-badge">{item.qty}</span>
                  </div>
                  <div className="co-item-info">
                    <p className="co-item-name">{item.name}</p>
                    <p className="co-item-size">{item.size}</p>
                  </div>
                  <p className="co-item-price">Rs {linePrice.toLocaleString()}.00</p>
                </div>
              );
            })}
          </div>

          <div className="co-hr" />

          <div className="co-discount">
            <input className="co-discount-input" type="text"
              placeholder="Discount code or gift card"
              value={discount} onChange={e => setDiscount(e.target.value)} />
            <button className="co-apply-btn">Apply</button>
          </div>

          <div className="co-hr" />

          <div className="co-totals">
            <div className="co-total-row">
              <span className="co-total-lbl">Subtotal · {totalQty} item{totalQty !== 1 ? 's' : ''}</span>
              <span className="co-total-val">Rs {subtotal.toLocaleString()}.00</span>
            </div>
            <div className="co-total-row">
              <span className="co-total-lbl">Shipping</span>
              <span className="co-free">FREE</span>
            </div>
          </div>

          <div className="co-hr" />

          <div className="co-grand">
            <span className="co-grand-lbl">Total</span>
            <div className="co-grand-right">
              <span className="co-grand-cur">PKR</span>
              <span className="co-grand-val">Rs {subtotal.toLocaleString()}.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
