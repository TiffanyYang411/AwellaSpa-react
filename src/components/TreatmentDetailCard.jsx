import React from 'react';
import "../styles/TreatmentDetailCard.css";


function TreatmentDetailCard({ data, isActive, onClick }) {
  const { name, time, price, steps, content, description, benefits } = data;

  return (
    <div className={`treatment-card ${isActive ? 'active' : ''}`}>      
      <div className="card-header" onClick={onClick}>
        <h3>{name}</h3>
        <span className="time-price">{time}｜{price}</span>
      </div>

      {isActive && (
        <div className="card-body">
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
      )}
    </div>
  );
}

export default TreatmentDetailCard;
