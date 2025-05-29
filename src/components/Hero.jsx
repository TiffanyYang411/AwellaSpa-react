// Hero.jsx
import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';

const images = [
  `${import.meta.env.BASE_URL}images/hero-1.jpg`,
  `${import.meta.env.BASE_URL}images/hero-2.jpg`,
  `${import.meta.env.BASE_URL}images/hero-3.jpg`,
  `${import.meta.env.BASE_URL}images/hero-4.jpg`,
  `${import.meta.env.BASE_URL}images/hero-5.jpg`
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="hero-shade"></div> {/* ← 加這層遮罩 */}
      <div className="hero-content">
        <p className="font-en hero-subtitle">Welcome to</p>
        <h1 className="font-en hero-title">Awella Spa</h1>
        <p className="font-en hero-subtitle">“Awaken your inner goddess.”</p>
      </div>
    </section>
  );
}

export default Hero;
