// SpaModalPages.jsx
import React from 'react';
import spaTreatmentsData from '../data/spaTreatmentsData';
import TreatmentSection from './TreatmentSection';
import '../styles/TreatmentSection.css';
import '../styles/Modal.css';

function SpaModalPages({ activeIndex, setActiveIndex }) {
  return (
    <div className="modal-section-wrapper">
      <div className="spa-treatment-modal-content">
        {spaTreatmentsData.map((section, index) => (
          <TreatmentSection
            key={index}
            sectionId={`modal-section-${index}`}
            categoryData={section}
            bgClass={`bg-style-${index}`}
            onVisible={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default SpaModalPages;






