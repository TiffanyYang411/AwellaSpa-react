import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const handleCloseMenu = () => setIsMenuOpen(false);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
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

    return (
        <>
            <nav className="navbar">
                <div className="navbar-left">
                    <ul className="navbar-menu">
                        <li>
                            <button className="link-button" onClick={() => scrollToSection('brand-intro')}>關於我們</button>
                        </li>
                        <li>
                            <button className="link-button" onClick={() => scrollToSection('service-menu')}>療癒選單</button>
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
                            <button className="link-button" onClick={() => scrollToSection('gallery-section')}>靜謐拾光</button>
                        </li>
                        <li>
                            <button className="link-button" onClick={() => scrollToSection('scroll-treatment')}>療癒綻放</button>
                        </li>
                    </ul>
                </div>

                <div className="navbar-booking">
                    <Link to="/booking" className="reserve-button">我要預約</Link>
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
                    <li><button onClick={() => { scrollToSection('brand-intro'); handleCloseMenu(); }}>關於我們</button></li>
                    <li><button onClick={() => { scrollToSection('service-menu'); handleCloseMenu(); }}>療癒選單</button></li>
                    <li><button onClick={() => { scrollToSection('gallery-section'); handleCloseMenu(); }}>靜謐拾光</button></li>
                    <li><button onClick={() => { scrollToSection('scroll-treatment'); handleCloseMenu(); }}>療癒綻放</button></li>
                    <li><button onClick={() => { scrollToSection('hero-section'); handleCloseMenu(); }} className="mobile-reserve">我要預約</button></li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;


