// src/components/SpaTreatmentContent.jsx
import React from 'react';
// import '../styles/SpaTreatmentContent.css'; // 可以另外做樣式

function SpaTreatmentContent() {
  return (
    <div className="spa-treatment-content">
      <h2>芳香深層療癒 SPA</h2>
      <p>搭配有機精油與芳香療法，舒緩壓力、促進循環，並透過專業手技釋放身體緊繃感...</p>
      <ul>
        <li>療程時間：60 / 90 分鐘</li>
        <li>使用產品：法國植萃精油、熱石舒壓油</li>
        <li>適合對象：壓力大、肩頸僵硬、失眠者</li>
      </ul>
      <button className="service-btn">立即預約</button>
    </div>
  );
}

export default SpaTreatmentContent;

