import React, { useEffect, useRef, useState } from 'react';
import '../styles/ScrollTreatmentIntro.css';

function ScrollTreatmentIntro() {
    const backRef = useRef(null);
    const faceRef = useRef(null);
    const [isBackActive, setIsBackActive] = useState(false);
    const [isFaceActive, setIsFaceActive] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const target = entry.target;
                    const isVisible = entry.isIntersecting;

                    if (target === backRef.current) setIsBackActive(isVisible);
                    if (target === faceRef.current) setIsFaceActive(isVisible);
                });
            },
            {
                threshold: 0.6,
            }
        );

        if (backRef.current) observer.observe(backRef.current);
        if (faceRef.current) observer.observe(faceRef.current);

        return () => {
            if (backRef.current) observer.unobserve(backRef.current);
            if (faceRef.current) observer.unobserve(faceRef.current);
        };
    }, []);

    return (
        <section id="scroll-treatment" className="treatment-section">
            <div className={`treatment-block back ${isBackActive ? 'active' : ''}`} ref={backRef}>
                <img src={`${import.meta.env.BASE_URL}images/spa-scroll-1.jpg`} alt="Back treatment" className={`treatment-bg ${isBackActive ? 'show' : ''}`} />
                <div className={`treatment-dot ${isBackActive ? 'show' : ''}`} style={{ top: '70%', left: '51%' }}></div>
                <div className={`treatment-line ${isBackActive ? 'show' : ''}`}></div>
                <div className={`treatment-info ${isBackActive ? 'show' : ''}`}>
                    <h3>嚴選SPA療程</h3>
                    <p>以專業細膩的護膚技藝，為肌膚帶來由內而外的深層潔淨與修護。<br />從清除毛孔雜質、平衡肌理，到針對紋理的溫和修復，每一步皆是對肌膚的呵護與傾聽。這不只是一場護理，更是一段專屬於肌膚與時間的溫柔對話，重拾明亮與光采，展現自然細緻的恆久之美。
                    </p>
                </div>
            </div>

            <div className={`treatment-block face ${isFaceActive ? 'active' : ''}`} ref={faceRef}>
                <img src={`${import.meta.env.BASE_URL}images/spa-scroll-2.jpg`} alt="Face treatment" className={`treatment-bg ${isFaceActive ? 'show' : ''}`} />
                <div className={`treatment-dot ${isFaceActive ? 'show' : ''}`} style={{ top: '55%', left: '56%' }}></div>
                <div className={`treatment-line ${isFaceActive ? 'show' : ''}`}></div>
                <div className={`treatment-info ${isFaceActive ? 'show' : ''}`}>
                    <h3>肌膚管理療程</h3>
                    <p>在溫潤的手技與沉靜氛圍中，釋放日積月累的壓力與疲憊，讓緊繃的身心鬆開。<br />每一道按摩手法皆精心設計，循著身體脈絡流轉，不僅活絡循環、調理氣息，更引領心靈進入到更深層的靜謐。<br />
                        如同置身於遠離塵囂的秘境，讓您的身體與心靈感受到一股重啟與重生的能量。
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ScrollTreatmentIntro;


