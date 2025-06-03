// TreatmentSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import TreatmentDetailCard from './TreatmentDetailCard';
import '../styles/TreatmentSection.css';

function TreatmentSection({ categoryData, sectionId, bgClass = '', onVisible }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const { category, treatments } = categoryData;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible?.(); // ✅ 有傳才執行
          setActiveIndex(0); // 每次進入畫面就展開第一個子療程
        }
      },
      {
        threshold: 0.6,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      className={`modal-treatment-section ${bgClass}`}
      id={sectionId}
      ref={sectionRef}
    >
      <div className="section-inner">
        <div className="image-column">
          <img
            src={treatments[activeIndex].image}
            alt={treatments[activeIndex].name}
            className="treatment-image"
          />
        </div>

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




