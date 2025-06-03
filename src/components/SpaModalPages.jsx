// components/SpaModalPages.jsx
import React, { useState, useEffect, useRef } from 'react';
import spaTreatmentsData from '../data/spaTreatmentsData';
import '../styles/SpaModalPages.css';

function SpaModalPages() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [expandedTreatmentIndex, setExpandedTreatmentIndex] = useState(0);
  const containerRef = useRef(null);
  const isScrolling = useRef(false);

  const currentCategory = spaTreatmentsData[currentCategoryIndex];
  const treatments = currentCategory.treatments;

  const handleWheel = (e) => {
    if (isScrolling.current) return;
    isScrolling.current = true;

    const direction = e.deltaY > 0 ? 1 : -1;
    const nextIndex = currentCategoryIndex + direction;

    if (nextIndex >= 0 && nextIndex < spaTreatmentsData.length) {
      setCurrentCategoryIndex(nextIndex);
      setExpandedTreatmentIndex(0); // 切換大類時預設展開第一個
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 800);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentCategoryIndex]);

  return (
    <div className="spa-modal-container" ref={containerRef}>
      <div className="spa-breadcrumbs">
        {spaTreatmentsData.map((cat, index) => (
          <button
            key={index}
            className={index === currentCategoryIndex ? 'active' : ''}
            onClick={() => {
              setCurrentCategoryIndex(index);
              setExpandedTreatmentIndex(0);
            }}
          >
            {cat.category}
          </button>
        ))}
      </div>

      <div className="spa-page-content">
        <h2 className="category-title">{currentCategory.category}</h2>
        <div className="spa-content-body">
          <div className="spa-image">
            <img src={treatments[expandedTreatmentIndex].image} alt={treatments[expandedTreatmentIndex].name} />
          </div>

          <div className="spa-treatment-list">
            {treatments.map((treat, idx) => (
              <div key={idx} className="spa-treatment-item">
                <div
                  className={`spa-treatment-header ${idx === expandedTreatmentIndex ? 'expanded' : ''}`}
                  onClick={() => setExpandedTreatmentIndex(idx)}
                >
                  <h3>{treat.name}</h3>
                  <span>{treat.time} ｜ {treat.price}</span>
                </div>

                {idx === expandedTreatmentIndex && (
                  <div className="spa-treatment-detail">
                    <p className="content-line">{treat.content.join(' ')}</p>
                    <p><strong>療程步驟：</strong>{treat.steps.join(' → ')}</p>
                    <p><strong>療程描述：</strong>{treat.description}</p>
                    <p><strong>功效：</strong>{treat.benefits.join('、')}</p>
                    <button className="spa-book-btn">我要預約</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpaModalPages;



