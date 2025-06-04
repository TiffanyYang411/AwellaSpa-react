// components/FacialModalPages.jsx
import React from 'react';
import facialTreatmentsData from '../data/facialTreatmentsData';
import TreatmentSection from './TreatmentSection';
import '../styles/TreatmentSection.css';
import '../styles/Modal.css';

function FacialModalPages({ activeIndex, setActiveIndex, onReserve }) {
    return (
        <div className="modal-section-wrapper">
            <div className="spa-treatment-modal-content"> {/* 保留 class 名以套用共用樣式 */}
                {facialTreatmentsData.map((section, index) => (
                    <TreatmentSection
                        key={index}
                        sectionId={`facial-modal-section-${index}`}
                        categoryData={section}
                        bgClass={`bg-style-facial-${index}`}
                        onVisible={() => setActiveIndex(index)}
                        onReserve={onReserve}
                    />
                ))}
            </div>
        </div>
    );
}

export default FacialModalPages;
