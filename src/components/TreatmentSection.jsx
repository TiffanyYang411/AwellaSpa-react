import React, { useState } from 'react';
import TreatmentDetailCard from './TreatmentDetailCard';
import '../styles/TreatmentSection.css';


function TreatmentSection({ categoryData, sectionId }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { category, treatments } = categoryData;

  return (
    <section className="treatment-section" id={sectionId}>
      <div className="section-inner">
        {/* 左側圖片區（根據 activeIndex 切換） */}
        <div className="image-column">
          <img
            src={treatments[activeIndex].image}
            alt={treatments[activeIndex].name}
            className="treatment-image"
          />
        </div>

        {/* 右側文字區 */}
        <div className="info-column">
          <h2 className="category-title">{category}</h2>
          <div className="card-list">
            {treatments.map((treatment, index) => (
              <TreatmentDetailCard
                key={index}
                data={treatment}
                isActive={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TreatmentSection;