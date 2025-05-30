// src/pages/Home.jsx
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import BrandIntro from '../components/BrandIntro';
import AboutIntro from '../components/AboutIntro';
import ServiceMenu from '../components/ServiceMenu';

function Home() {
    useEffect(() => {
        const scrollToHero = sessionStorage.getItem('scrollToHero');
        if (scrollToHero === 'true') {
            const hero = document.querySelector('#hero-section');
            if (hero) {
                setTimeout(() => {
                    hero.scrollIntoView({ behavior: 'smooth' });
                }, 300); // 避免還沒渲染完成就觸發
            }
            sessionStorage.removeItem('scrollToHero');
        }
    }, []);

    return (
        <main>
            <Hero />
            <BrandIntro /> {/* ✅ 插入品牌介紹區 */}
            <AboutIntro /> {/* ✅ 插入品牌理念圖文區 */}
            <ServiceMenu /> {/* ✅ 放在 AboutIntro 下方 */}
            {/* 後續還會加：<About />、<ServiceSection /> 等 */}
        </main>
    );
}

export default Home;

