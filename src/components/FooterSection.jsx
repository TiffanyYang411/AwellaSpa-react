// FooterSection.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/FooterSection.css';

gsap.registerPlugin(ScrollTrigger);

function FooterSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 80%',
      onEnter: () => {
        const allElements = titleRef.current.querySelectorAll('.letter, .footer-icon');

        gsap.fromTo(
          allElements,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power2.out',
            onComplete: () => {
              gsap.to(contentRef.current, {
                opacity: 1,
                y: 0,
                duration: 1.3,
                ease: 'power8.out',
              });
            },
          }
        );

        gsap.to(footerRef.current, {
          opacity: 1,
          delay: 1.6,
          duration: 1,
        });
      },
      onLeaveBack: () => {
        gsap.set(titleRef.current.querySelectorAll('.letter, .footer-icon'), {
          opacity: 0,
          y: 30,
        });
        gsap.set(contentRef.current, { opacity: 0, y: 30 });
        gsap.set(footerRef.current, { opacity: 0 });
      },
      toggleActions: 'play none none reverse',
    });
  }, []);

  const renderSplitTitleWithIcon = () => {
    const awella = 'Awella'.split('').map((char, i) => (
      <span key={`a-${i}`} className="letter">
        {char}
      </span>
    ));

    const spa = 'Spa'.split('').map((char, i) => (
      <span key={`s-${i}`} className="letter">
        {char}
      </span>
    ));

    return (
      <>
        {awella}
        <span className="footer-icon-wrapper">
          <img
            src={`${import.meta.env.BASE_URL}images/footer-icon.png`}
            alt="Awella icon"
            className="footer-icon"
          />
        </span>
        {spa}
      </>
    );
  };

  return (
    <section className="footer-section" ref={sectionRef}>
      <div className="footer-title-wrapper">
        <div className="footer-title" ref={titleRef}>
          {renderSplitTitleWithIcon()}
        </div>
      </div>

      <div className="footer-content" ref={contentRef}>
        <h2>開啟療癒時刻</h2>
        <p>
          在這片靜謐之地，讓自己重新綻放。<br />
          Awella Spa 陪你走過放鬆與煥新的旅程，<br />
          每一刻，都是獨一無二的溫柔體驗。
        </p>
        <button className="footer-btn">我要預約</button>
      </div>

      <div className="footer-copyright" ref={footerRef}>
        © 2025 Awella Spa. All Rights Reserved.
      </div>
    </section>
  );
}

export default FooterSection;
