// SpaModalPages.jsx
import React from 'react';
import spaTreatmentsData from '../data/spaTreatmentsData';
import TreatmentSection from './TreatmentSection';
import TreatmentCategoryNav from './TreatmentCategoryNav';
import '../styles/TreatmentSection.css';
import '../styles/Modal.css'; // ✅ 確保有引入

function SpaModalPages() {
  const handleNavClick = (index) => {
    const target = document.getElementById(`modal-section-${index}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="modal-section-wrapper"> {/* ✅ 這層是關鍵 */}
      <div className="spa-treatment-modal-content">
        <TreatmentCategoryNav
          categories={spaTreatmentsData.map((d) => d.category)}
          onNavigate={handleNavClick}
        />
        {spaTreatmentsData.map((section, index) => (
          <TreatmentSection
            key={index}
            sectionId={`modal-section-${index}`}
            categoryData={section}
            bgClass={`bg-style-${index}`}
          />
        ))}
      </div>
    </div>
  );
}

export default SpaModalPages;




