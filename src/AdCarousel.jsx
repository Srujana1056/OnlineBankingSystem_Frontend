import React, { useEffect, useMemo, useRef, useState, memo, useCallback } from 'react';

// Simple ad carousel supporting images, videos and links
const AdCarousel = memo(function AdCarousel() {
  const ads = useMemo(() => ([
    { type: 'image', src: '/vite.svg', title: 'Open Zero-Balance Salary Account', cta: 'Open Now', href: '/accounts/salary' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?q=80&w=800&auto=format&fit=crop', title: 'Instant Personal Loan up to ₹5L', cta: 'Apply Personal Loan', href: '/personal-loan' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1605901309584-818e25960a8b?q=80&w=800&auto=format&fit=crop', title: 'High-Return Fixed Deposits', cta: 'Book FD', href: '/accounts/term-deposit' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=800&auto=format&fit=crop', title: 'Secure Digital Banking', cta: 'Try Now', href: '/digital/credit' },
  ]), []);

  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % ads.length);
    }, 6000);
    return () => clearInterval(intervalRef.current);
  }, [ads.length]);

  const prev = useCallback(() => setIndex(prev => (prev - 1 + ads.length) % ads.length), [ads.length]);
  const next = useCallback(() => setIndex(prev => (prev + 1) % ads.length), [ads.length]);

  const active = ads[index];

  return (
    <div className="ad-carousel">
      <div className="ad-media">
        {active.type === 'image' && (
          <img src={active.src} alt={active.title} className="ad-img" />
        )}
        {active.type === 'video' && (
          <video className="ad-video" src={active.src} autoPlay muted loop playsInline />
        )}
      </div>
      <div className="ad-overlay">
        <h2 className="banner-title">{active.title}</h2>
        <a href={active.href} className="ad-cta-button">{active.cta}</a>
      </div>
      <div className="ad-controls">
        <button className="ad-nav" onClick={prev}>‹</button>
        <div className="ad-dots">
          {ads.map((_, i) => (
            <button
              key={i}
              className={i === index ? 'ad-dot active' : 'ad-dot'}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <button className="ad-nav" onClick={next}>›</button>
      </div>
    </div>
  );
});

export default AdCarousel;


