import { useState, useEffect, useRef } from 'react';
import Header from './component/header';
import Slider from './component/slider';
import NewArrivals from './component/new';
import Pro2 from './component/pro2';
import Collection from './component/collection';
import Product from './component/product';
import VideoSection from './component/video';
import Bridal from './component/bridal';
import BookConsultation from './component/book';
import BestSellers from './component/best';
import Timeless from './component/Timeless';
import Modern from './component/Modern';
import Footer from './component/footer';
import Cart from './component/cart';
import Checkout from './component/checkout';

function App() {
  // Navigation stack: each entry is { page, collectionKey?, productId? }
  const [history, setHistory] = useState([{ page: 'home' }]);
  const current = history[history.length - 1];
  const page = current.page;
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('cartItems');
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed.filter(i => i && i.name && i.price && i.cartId) : [];
    } catch { return []; }
  });

  useEffect(() => {
    try { localStorage.setItem('cartItems', JSON.stringify(cartItems)); } catch {}
  }, [cartItems]);

  // Scroll position of every page in the stack, so Back returns to the same spot
  const scrollPositions = useRef([]);
  const restoringScroll = useRef(false);

  function openPage(entry) {
    scrollPositions.current[history.length - 1] = window.scrollY;
    setHistory(h => [...h, entry]);
  }

  function goBack() {
    restoringScroll.current = true;
    setHistory(h => (h.length > 1 ? h.slice(0, -1) : h));
  }

  function goHome() {
    restoringScroll.current = true;
    setHistory(h => h.slice(0, 1));
  }

  const openCollection = collectionKey => openPage({ page: 'collection', collectionKey });
  const openProduct = productId => openPage({ page: 'product', productId });

  // Home page section to scroll to after the next navigation (e.g. 'new-arrivals')
  const scrollTargetId = useRef(null);

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 60);
  }

  useEffect(() => {
    if (scrollTargetId.current) {
      scrollToSection(scrollTargetId.current);
      scrollTargetId.current = null;
      restoringScroll.current = false;
      return;
    }
    const y = restoringScroll.current ? scrollPositions.current[history.length - 1] || 0 : 0;
    restoringScroll.current = false;
    window.scrollTo(0, y);
  }, [history]);

  // Header menu: { collection } opens a collection page, { section } jumps to a home page section
  function handleNavClick({ collection, section }) {
    if (collection) {
      openCollection(collection);
    } else if (history.length === 1) {
      scrollToSection(section);
    } else {
      scrollTargetId.current = section;
      setHistory(h => h.slice(0, 1));
    }
  }

  function addToCart(product, size, qty) {
    const cartId = product.name + '||' + size;
    setCartItems(prev => {
      const existing = prev.find(i => i.cartId === cartId);
      if (existing) {
        return prev.map(i =>
          i.cartId === cartId ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [...prev, {
        cartId,
        name: product.name,
        price: product.price,
        size,
        qty,
        image: product.images[0],
      }];
    });
    setCartOpen(true);
  }

  function updateQty(cartId, qty) {
    if (qty < 1) return;
    setCartItems(prev => prev.map(i => i.cartId === cartId ? { ...i, qty } : i));
  }

  function removeItem(cartId) {
    setCartItems(prev => prev.filter(i => i.cartId !== cartId));
  }

  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);

  return (
    <div style={{ paddingTop: page === 'checkout' ? '0' : '160px', overflowX: page === 'checkout' ? 'hidden' : 'visible', width: '100%' }}>
      {page !== 'checkout' && <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} onNavClick={handleNavClick} />}

      {page === 'checkout' ? (
        <Checkout items={cartItems} onBack={goBack} />
      ) : page === 'collection' ? (
        <Collection
          key={current.collectionKey}
          collectionKey={current.collectionKey}
          onBack={goBack}
          onHome={goHome}
          onProductClick={openProduct}
        />
      ) : page === 'product' ? (
        <Product
          key={current.productId}
          productId={current.productId}
          onBack={goBack}
          onAddToCart={addToCart}
          onProductClick={openProduct}
        />
      ) : (
        <>
          <Slider onCollectionClick={openCollection} />
          <NewArrivals onProductClick={openProduct} />
          <Pro2 onCollectionClick={openCollection} />
          <VideoSection />
          <Bridal onCollectionClick={() => openCollection('bridal')} onProductClick={openProduct} />
          <BookConsultation />
          <BestSellers onProductClick={openProduct} onViewAll={() => openCollection('bestsellers')} />
          <Timeless onCollectionClick={() => openCollection('newarrivals')} />
          <Modern onCollectionClick={() => openCollection('demi')} />
          <Footer />
        </>
      )}

      {cartOpen && page !== 'checkout' && (
        <Cart
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onUpdateQty={updateQty}
          onRemove={removeItem}
          onCheckout={() => { setCartOpen(false); openPage({ page: 'checkout' }); }}
        />
      )}
    </div>
  );
}

export default App;
