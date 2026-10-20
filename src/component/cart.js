import { useState } from 'react';
import './cart.css';

export default function Cart({ items, onClose, onUpdateQty, onRemove, onCheckout }) {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsError, setTermsError] = useState(false);

  const subtotal = items.reduce((sum, item) => {
    const num = parseInt(String(item.price).replace(/[^\d]/g, ''));
    return sum + num * item.qty;
  }, 0);

  const totalQty = items.reduce((s, i) => s + i.qty, 0);

  function handleCheckout() {
    if (!termsAccepted) { setTermsError(true); return; }
    setTermsError(false);
    onCheckout && onCheckout();
  }

  return (
    <>
      <div className="cart-overlay" onClick={onClose} />

      <div className="cart-panel">

        {/* Header */}
        <div className="cart-header">
          <h2 className="cart-title">Your cart <span className="cart-count">{totalQty}</span></h2>
          <button className="cart-close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="cart-header-line" />

        {/* Items */}
        <div className="cart-items">
          {items.length === 0 ? (
            <p className="cart-empty">Your cart is empty.</p>
          ) : (
            items.map((item, idx) => {
              const unitPrice = parseInt(String(item.price).replace(/[^\d]/g, ''));
              const linePrice = unitPrice * item.qty;
              return (
                <div key={item.cartId}>
                  <div className="cart-item">
                    <div className="cart-item-img-wrap">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-item-img"
                        onError={e => { e.target.style.opacity = '0'; }}
                      />
                    </div>
                    <div className="cart-item-info">
                      <div className="cart-item-top-row">
                        <p className="cart-item-name">{(item.name || '').toUpperCase()}</p>
                        <button className="cart-item-remove" onClick={() => onRemove(item.cartId)}>Remove</button>
                      </div>
                      <p className="cart-item-size">{item.size}</p>
                      <p className="cart-item-price">
                        Rs {linePrice.toLocaleString()} <span className="cart-item-currency">PKR</span>
                      </p>
                      <div className="cart-item-qty">
                        <button onClick={() => onUpdateQty(item.cartId, item.qty - 1)}>−</button>
                        <span>{item.qty}</span>
                        <button onClick={() => onUpdateQty(item.cartId, item.qty + 1)}>+</button>
                      </div>
                    </div>
                  </div>
                  <div className="cart-item-divider" />
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-notes">
              <span className="cart-notes-plus">+</span>
              <span className="cart-notes-link">Add order notes</span>
            </div>

            <div className="cart-subtotal-row">
              <span className="cart-subtotal-label">Subtotal</span>
              <span className="cart-subtotal-val">
                Rs {subtotal.toLocaleString()} <span className="cart-subtotal-currency">PKR</span>
              </span>
            </div>

            <p className="cart-tax-note">Taxes and shipping calculated at checkout</p>

            <label className="cart-terms">
              <input
                type="checkbox"
                className="cart-terms-check"
                checked={termsAccepted}
                onChange={e => { setTermsAccepted(e.target.checked); setTermsError(false); }}
              />
              <span>I accept <span className="cart-terms-link">Terms &amp; Conditions</span></span>
            </label>

            {termsError && (
              <p className="cart-terms-error">You must accept the Terms &amp; Conditions.</p>
            )}

            <button className="cart-checkout-btn" onClick={handleCheckout}>CHECKOUT</button>
          </div>
        )}
      </div>
    </>
  );
}
