import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <ul className="navbar-menu">
            <li><Link to="/about">關於我們</Link></li>
            <li><Link to="/treatments">療癒選單</Link></li>
          </ul>
        </div>

        <div className="navbar-center">
          <Link to="/">
            <img
              src={`${import.meta.env.BASE_URL}images/logo-white.svg`}
              alt="Awella Spa Logo"
              className="navbar-logo"
            />
          </Link>
        </div>

        <div className="navbar-right">
          <ul className="navbar-menu">
            <li><Link to="/ambience">靜謐拾光</Link></li>
            <li><Link to="/faq">常見問題</Link></li>
          </ul>
        </div>

        <div className="navbar-booking">
          <Link to="/booking" className="reserve-button">我要預約</Link>
        </div>

        <div className="hamburger-icon" onClick={handleToggleMenu}>
          ☰
        </div>
      </nav>

      {/* ✅ 遮罩背景 */}
      {isMenuOpen && <div className="menu-overlay" onClick={handleCloseMenu} />}

      {/* ✅ 側邊選單 */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={handleCloseMenu}>✕</button>
        <ul>
          <li><Link to="/about" onClick={handleCloseMenu}>關於我們</Link></li>
          <li><Link to="/treatments" onClick={handleCloseMenu}>療癒選單</Link></li>
          <li><Link to="/ambience" onClick={handleCloseMenu}>靜謐拾光</Link></li>
          <li><Link to="/faq" onClick={handleCloseMenu}>常見問題</Link></li>
          <li><Link to="/booking" onClick={handleCloseMenu} className="mobile-reserve">我要預約</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;

