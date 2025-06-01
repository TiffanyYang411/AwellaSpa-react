import React, { useEffect } from 'react';
import '../styles/BrandIntro.css';

function BrandIntro() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const el = entry.target;
                if (entry.isIntersecting) {
                    // ✅ Reset animation
                    el.classList.remove('show');
                    el.style.animation = 'none'; // ✅ 強制移除動畫
                    el.offsetHeight;             // ✅ 觸發 reflow
                    el.style.animation = '';     // ✅ 還原動畫
                    el.classList.add('show');
                } else {
                    el.classList.remove('show');
                }
            });
        }, { threshold: 0.3 });

        const fadeItems = document.querySelectorAll('.fade-in-line');
        fadeItems.forEach(item => observer.observe(item));

        return () => {
            fadeItems.forEach(item => observer.unobserve(item));
        };
    }, []);


    return (
        <section id="brand-intro" className="brand-intro-section">
            <div className="brand-intro-container">
                <div className="brand-intro-left">
                    <h2 className="title-line1 zh fade-in-line delay-1">你的美</h2>
                    <h2 className="title-line2 zh fade-in-line delay-2">值得被溫柔對待</h2>
                </div>
                <div className="brand-intro-right">
                    <p className="brand-intro-subtitle en fade-in-line delay-3">Awella Spa</p>
                    <div className="brand-intro-paragraph">
                        <p className="zh fade-in-line delay-4">將溫柔注入每一次療程</p>
                        <p className="zh fade-in-line delay-5">從專屬肌膚調理到深層放鬆</p>
                        <p className="zh fade-in-line delay-6">我們為你細心設計每一刻</p>
                        <p className="zh fade-in-line delay-7">讓你由內而外煥發亮澤</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BrandIntro;



