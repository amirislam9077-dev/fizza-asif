import { useState } from 'react';
import './footer.css';

const socialPaths = {
  fb: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  pin: 'M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.22-5.17 1.22-5.17s-.31-.63-.31-1.56c0-1.46.85-2.55 1.9-2.55.9 0 1.33.67 1.33 1.48 0 .9-.58 2.26-.87 3.51-.25 1.05.52 1.9 1.54 1.9 1.85 0 3.09-2.37 3.09-5.18 0-2.14-1.44-3.74-4.05-3.74-2.95 0-4.78 2.2-4.78 4.67 0 .85.24 1.44.62 1.9.17.2.19.28.13.51-.04.17-.14.57-.18.73-.06.23-.24.31-.44.23-1.24-.51-1.82-1.88-1.82-3.41 0-2.53 2.14-5.58 6.38-5.58 3.42 0 5.66 2.48 5.66 5.14 0 3.53-1.95 6.17-4.82 6.17-.96 0-1.87-.52-2.18-1.1l-.61 2.34c-.2.76-.61 1.52-.98 2.12.74.22 1.52.34 2.33.34 5.52 0 10-4.48 10-10S17.52 2 12 2z',
  ig: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  yt: 'M23 7s-.3-1.9-1.2-2.7c-1.1-1.2-2.4-1.2-3-1.3C16.6 3 12 3 12 3s-4.6 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5.2 1 7 1 7S.7 9.1.7 11.2v1.9C.7 15.2 1 17 1 17s.3 1.9 1.2 2.7c1.1 1.2 2.6 1.1 3.3 1.2C7.6 21 12 21 12 21s4.6 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.7 1.2-2.7s.3-2.1.3-4.2v-1.9C23.3 9.1 23 7 23 7zM9.7 14.5V8.9l6.5 2.8-6.5 2.8z',
  wa: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z',
};

function SocialIcon({ icon, href }) {
  return (
    <a href={href} className="footer-social-icon" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d={socialPaths[icon]} />
      </svg>
    </a>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="footer">
      <div className="footer-top">

        {/* Col 1 — Brand */}
        <div className="footer-brand">
          <p className="footer-logo">FIZZA ASIF</p>
          <p className="footer-tagline">
            Fizza Asif is a luxury fashion house defined by timeless sophistication, glamour and elegance.
          </p>
          <div className="footer-socials">
            <SocialIcon icon="fb"  href="#" />
            <SocialIcon icon="pin" href="#" />
            <SocialIcon icon="ig"  href="#" />
            <SocialIcon icon="yt"  href="#" />
            <SocialIcon icon="wa"  href="#" />
          </div>
        </div>

        {/* Col 2 — The Brand */}
        <div className="footer-col">
          <h4 className="footer-col-title">THE BRAND</h4>
          <ul className="footer-links">
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Book an Appointment</a></li>
            <li><a href="#">Lookbook</a></li>
          </ul>
        </div>

        {/* Col 3 — Customer Care */}
        <div className="footer-col">
          <h4 className="footer-col-title">CUSTOMER CARE</h4>
          <ul className="footer-links">
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Exchange &amp; Return Policy</a></li>
            <li><a href="#">Studio Address</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Col 4 — Newsletter */}
        <div className="footer-col">
          <h4 className="footer-col-title">NEWSLETTER</h4>
          <p className="footer-newsletter-desc">
            Subscribe to receive the latest news and exclusive offers.
          </p>
          <form className="footer-newsletter" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="footer-email-input"
            />
            <button type="submit" className="footer-subscribe-btn">SUBSCRIBE</button>
          </form>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>Copyright © 2026, Fizza Asif. All rights reserved. See our terms of use and privacy notice.</p>
        <p className="footer-powered">Powered by React</p>
      </div>
    </footer>
  );
}
