import React, { useRef, useEffect, useState } from 'react';
import "../styles/TreatmentDetailCard.css";

function TreatmentDetailCard({ data, isActive, onClick }) {
  const { name, time, price, steps, content, description, benefits } = data;
  const bodyRef = useRef(null);
  const [bodyHeight, setBodyHeight] = useState(0);

  useEffect(() => {
    if (isActive && bodyRef.current) {
      setBodyHeight(bodyRef.current.scrollHeight);
    } else {
      setBodyHeight(0);
    }
  }, [isActive]);

  return (
    <div className={`treatment-card ${isActive ? 'active' : ''}`}>
      <div className="card-header" onClick={onClick}>
        <h3>{name}</h3>
        <div className="card-meta">
          <span className="time-price">{time}｜{price}</span>
          <svg
            className="toggle-arrow"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#314D61"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isActive ? (
              <polyline points="18 15 12 9 6 15" />
            ) : (
              <polyline points="6 9 12 15 18 9" />
            )}
          </svg>
        </div>
      </div>

      <div
        className="card-body-wrapper"
        style={{ maxHeight: `${bodyHeight}px` }}
      >
        <div className="card-body" ref={bodyRef}>
          <div className="content-line">
            {content.map((item, idx) => (
              <span key={idx} className="tag">{item}</span>
            ))}
          </div>

          <div className="steps">
            <strong>療程步驟：</strong>
            <p>{steps.join(' → ')}</p>
          </div>

          <div className="description">
            <strong>療程描述：</strong>
            <p>{description}</p>
          </div>

          <div className="benefits">
            <strong>功效：</strong>
            <ul>
              {benefits.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </div>

          <button className="reserve-btn">我要預約</button>
        </div>
      </div>
    </div>
  );
}

export default TreatmentDetailCard;

