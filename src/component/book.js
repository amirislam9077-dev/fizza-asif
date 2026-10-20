import './book.css';

export default function BookConsultation() {
  return (
    <section className="book-section">
      <div className="book-bg">
        <div className="book-overlay" />
        <div className="book-content">
          <h2 className="book-title">BOOK YOUR BRIDAL CONSULTATION</h2>
          <p className="book-desc">
            Step into the world of FIZZA ASIF Bridal Couture and discover the artistry behind
            your dream dress. Our bridal consultations are designed to offer a truly personal
            experience, where every detail, from fabric to silhouette, is curated exclusively for you.
          </p>
          <div className="book-btns">
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="book-btn">
              WHATSAPP CONSULTATION
            </a>
            <a href="#" className="book-btn">
              STUDIO APPOINTMENT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
