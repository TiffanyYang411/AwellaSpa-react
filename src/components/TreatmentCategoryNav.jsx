// TreatmentCategoryNav.jsx
import React from 'react';
import '../styles/TreatmentCategoryNav.css';


function TreatmentCategoryNav({ categories, onNavigate, activeIndex }) {
  return (
    <nav className="treatment-nav">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`nav-button ${activeIndex === index ? 'active' : ''}`}
          onClick={() => onNavigate(index)}
        >
          {category}
        </button>
      ))}
    </nav>
  );
}

export default TreatmentCategoryNav;
