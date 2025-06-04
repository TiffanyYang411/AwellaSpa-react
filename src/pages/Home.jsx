// src/pages/Home.jsx
import React, { useEffect } from 'react';
import '../styles/ScrollTreatmentIntro.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BrandIntro from '../components/BrandIntro';
import AboutIntro from '../components/AboutIntro';
import ServiceMenu from '../components/ServiceMenu';
import ScrollTreatmentIntro from '../components/ScrollTreatmentIntro';
import TestimonialSection from '../components/TestimonialSection';
import GallerySection from '../components/GallerySection';
import FooterSection from '../components/FooterSection';
import { useState } from 'react';
import BookingModal from '../components/BookingModal';

function Home() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [presetTreatment, setPresetTreatment] = useState(null);

    const openBookingModal = (treatment = null) => {
        setPresetTreatment(treatment);
        setIsBookingOpen(true);
    };

    useEffect(() => {
        const scrollToHero = sessionStorage.getItem('scrollToHero');
        if (scrollToHero === 'true') {
            const hero = document.querySelector('#hero-section');
            if (hero) {
                setTimeout(() => {
                    hero.scrollIntoView({ behavior: 'smooth' });
                }, 300);
            }
            sessionStorage.removeItem('scrollToHero');
        }
    }, []);

    return (
        <>
            {/* 這裡要放 Navbar 並傳入開啟預約函式 */}
            <Navbar onReserveClick={openBookingModal} />

            <main className="snap-container">
                <section className="section-snap"><Hero /></section>
                <section className="section-snap"><BrandIntro /></section>
                <section className="section-snap"><AboutIntro /></section>
                <section><ServiceMenu /></section> {/* ❌ 不 snap */}
                <section className="section-snap"><ScrollTreatmentIntro /></section>
                <section className="section-snap"><TestimonialSection /></section>
                <section id="gallery-section-wrapper">
                    <GallerySection />
                </section>
                <section><FooterSection onReserveClick={() => openBookingModal()} /></section>
            </main>

            <BookingModal
                isOpen={isBookingOpen}
                onClose={() => setIsBookingOpen(false)}
                preSelectedTreatment={presetTreatment}
            />
        </>
    );
}

export default Home;


