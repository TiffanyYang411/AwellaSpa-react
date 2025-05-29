// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';

function Home() {
  return (
    <main>
      <Hero />
      {/* 後續還會加：<Navbar />、<About />、<ServiceSection /> 等 */}
    </main>
  );
}

export default Home;
