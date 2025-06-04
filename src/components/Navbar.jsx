//Navbar.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar({ onReserveClick }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [activeSection, setActiveSection] = useState('');
    const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const handleCloseMenu = () => setIsMenuOpen(false);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            // setActiveSection(id);
        }
    };

    const handleLogoClick = () => {
        if (location.pathname === '/') {
            const hero = document.querySelector('#hero-section');
            if (hero) {
                hero.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            sessionStorage.setItem('scrollToHero', 'true');
            navigate('/');
        }
    };

    // ✅ scrollSpy 功能：觀察畫面中哪個區塊正在顯示
    useEffect(() => {
        const sections = [
            'brand-intro',
            'service-menu',
            'gallery-section-wrapper',
            'scroll-treatment',
        ];

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries.filter(e => e.isIntersecting);
                if (visibleEntries.length > 0) {
                    const mostVisible = visibleEntries.reduce((prev, curr) =>
                        prev.intersectionRatio > curr.intersectionRatio ? prev : curr
                    );

                    // ✅ 加入這一段條件，避免重複觸發動畫
                    if (mostVisible.target.id !== activeSection) {
                        setActiveSection(mostVisible.target.id);
                    }
                } else {
                    if (activeSection !== '') setActiveSection('');
                }
            },
            {
                threshold: [0.2, 0.4, 0.6], // 可根據實際視覺調整
            }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            sections.forEach((id) => {
                const el = document.getElementById(id);
                if (el) observer.unobserve(el);
            });
        };
    }, [activeSection]); // ✅ 把 activeSection 放進 dependency 中



    return (
        <>
            <nav className="navbar">
                <div className="navbar-left">
                    <ul className="navbar-menu">
                        <li>
                            <button
                                className={`link-button ${activeSection === 'brand-intro' ? 'active' : ''}`}
                                onClick={() => scrollToSection('brand-intro')}
                            >
                                關於我們
                            </button>
                        </li>
                        <li>
                            <button
                                className={`link-button ${activeSection === 'service-menu' ? 'active' : ''}`}
                                onClick={() => scrollToSection('service-menu')}
                            >
                                療癒選單
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="navbar-center">
                    <button onClick={handleLogoClick} className="navbar-logo-button">
                        <img
                            src={`${import.meta.env.BASE_URL}images/logo-white.svg`}
                            alt="Awella Spa Logo"
                            className="navbar-logo"
                        />
                    </button>
                </div>

                <div className="navbar-right">
                    <ul className="navbar-menu">
                        <li>
                            <button
                                className={`link-button ${activeSection === 'scroll-treatment' ? 'active' : ''}`}
                                onClick={() => scrollToSection('scroll-treatment')}
                            >
                                療癒綻放
                            </button>
                        </li>
                        <li>
                            <button
                                className={`link-button ${activeSection === 'gallery-section-wrapper' ? 'active' : ''}`}
                                onClick={() => scrollToSection('gallery-section-wrapper')}
                            >
                                靜謐拾光
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="navbar-booking">
                    <button className="reserve-button" onClick={() => onReserveClick?.()}>
                        我要預約
                    </button>
                </div>

                <div className="hamburger-icon" onClick={handleToggleMenu}>
                    ☰
                </div>
            </nav>

            {/* 遮罩背景 */}
            {isMenuOpen && <div className="menu-overlay" onClick={handleCloseMenu} />}

            {/* 側邊選單 */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={handleCloseMenu}>✕</button>
                <ul>
                    <li>
                        <button
                            className={`link-button ${activeSection === 'brand-intro' ? 'active' : ''}`}
                            onClick={() => { scrollToSection('brand-intro'); handleCloseMenu(); }}
                        >
                            關於我們
                        </button>
                    </li>
                    <li>
                        <button
                            className={`link-button ${activeSection === 'service-menu' ? 'active' : ''}`}
                            onClick={() => { scrollToSection('service-menu'); handleCloseMenu(); }}
                        >
                            療癒選單
                        </button>
                    </li>
                    <li>
                        <button
                            className={`link-button ${activeSection === 'scroll-treatment' ? 'active' : ''}`}
                            onClick={() => { scrollToSection('scroll-treatment'); handleCloseMenu(); }}
                        >
                            療癒綻放
                        </button>
                    </li>
                    <li>
                        <button
                            className={`link-button ${activeSection === 'gallery-section-wrapper' ? 'active' : ''}`}
                            onClick={() => { scrollToSection('gallery-section-wrapper'); handleCloseMenu(); }}
                        >
                            靜謐拾光
                        </button>
                    </li>
                    <li>
                        <button className="reserve-button" onClick={() => openBookingModal()}>
                            我要預約
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;



