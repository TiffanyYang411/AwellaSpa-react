// AboutIntro.jsx
import React, { useEffect } from 'react';
import '../styles/AboutIntro.css';

function AboutIntro() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, { threshold: 0.3 });

    const fadeElements = document.querySelectorAll('.fade-in-img, .fade-in-text');
    fadeElements.forEach(el => observer.observe(el));

    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="about-intro"
      className="about-intro-section"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}images/about-bg.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="about-intro-images">
        <div className="img-wrapper img1-wrapper fade-in-img">
          <img src={`${import.meta.env.BASE_URL}images/about-1.png`} alt="Spa honey towel" className="about-img img1" />
        </div>
        <div className="img-wrapper img3-wrapper fade-in-img">
          <img src={`${import.meta.env.BASE_URL}images/about-3.png`} alt="Bathroom view" className="about-img img3" />
        </div>
        <div className="img-wrapper img2-wrapper fade-in-img">
          <img src={`${import.meta.env.BASE_URL}images/about-2.png`} alt="Woman with lace shadow" className="about-img img2" />
        </div>
      </div>

      <div className="about-intro-text shifted-text fade-in-text">
        <h2 className="zh-title updated-zh-title intro-title shifted-title">
          <span className="font-en intro-title-en" style={{ fontSize: '40px', fontWeight: 'bold', letterSpacing: '0em' }}>
            Awella Spa
          </span>
          <span className="font-zh intro-title-zh" style={{ fontSize: '40px', fontWeight: '500', letterSpacing: '0.06em', marginLeft: '3px' }}>
            以療癒之名
          </span>
        </h2>
        <h3
          className="zh-title updated-zh-title intro-subtitle"
          style={{ fontSize: '40px', fontWeight: '500', lineHeight: '200%', letterSpacing: '0.06em' }}
        >
          爲你的美麗細心呵護
        </h3>
        <p
          className="zh-body updated-zh-body intro-body lowered-block"
          style={{ fontSize: '24px', fontWeight: '400', lineHeight: '160%', letterSpacing: '0.06em' }}
        >
          我們相信，美麗源於內在的平衡與細緻呵護。<br />
          從深層舒緩的全身按摩、頭部紓壓療程，<br />
          到修護肌膚光采的臉部護理與芳香療癒，<br />
          每一個療程，皆以純淨成分與專業技藝為基礎，<br />
          量身定制，溫柔回應不同肌膚與身心的需求。<br />
          無論是釋放身體的疲憊、喚醒沉睡的膚質，<br />
          或是尋得心靈片刻的安然，<br />
          我們以細膩的手法，喚醒身體深處的能量，<br />
          讓美麗從容綻放於生活之中。
        </p>
      </div>
    </section>
  );
}

export default AboutIntro;







