// components/SpaModalPages.jsx
import React, { useEffect, useState, useRef } from 'react';
import '../styles/SpaModalPages.css';

const pages = [
    {
        title: '芳香背部舒壓',
        subtitle: '釋放壓力的第一站',
        description: '以溫熱芳香精油深入肌理，結合放鬆手技，舒緩肩頸與背部緊繃，開啟深層療癒儀式。',
        image: 'images/spa1.jpg',
    },
    {
        title: '能量熱石按摩',
        subtitle: '溫熱石引導能量流動',
        description: '使用玄武岩熱石交替手技，促進氣血循環與肌肉放鬆，調理身心能量平衡。',
        image: 'images/spa2.jpg',
    },
    {
        title: '草本腿部排毒',
        subtitle: '輕盈每一步',
        description: '選用草本精華油與淋巴引流手法，排除水腫與老廢物質，喚醒雙腿輕盈感。',
        image: 'images/spa3.jpg',
    },
    {
        title: '頭部經絡舒壓',
        subtitle: '重啟思緒的清新按鍵',
        description: '刺激頭皮與穴位，舒緩壓力、提升睡眠品質，放鬆來自大腦的疲憊。',
        image: 'images/spa4.jpg',
    },
    {
        title: '全身平衡療癒',
        subtitle: '收攏身心，回歸平衡',
        description: '整合全身按摩手法與香氣療癒，達到內外同步淨化與深度放鬆。',
        image: 'images/spa5.jpg',
    },
];


function SpaModalPages() {
    const [current, setCurrent] = useState(0);
    const containerRef = useRef(null);
    const isScrolling = useRef(false); // ✅ 防止連續觸發
    const page = pages[current];
    if (!page) return null; // ✅ 避免 undefined 錯誤

    const handleWheel = (e) => {
        if (isScrolling.current) return;
        isScrolling.current = true;

        const direction = e.deltaY > 0 ? 1 : -1;
        const nextIndex = current + direction;

        if (nextIndex >= 0 && nextIndex < pages.length) {
            setCurrent(nextIndex);
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
    }, [current]);

    return (
        <div className="spa-pages-container" ref={containerRef}>
            <div className="spa-breadcrumb">{`${current + 1} / ${pages.length}`}</div>
            <div className="spa-page slide-up" key={current}>
                <div className="spa-page-text">
                    <h3>{page.title}</h3>
                    <h4>{page.subtitle}</h4>
                    <p>{page.description}</p>
                </div>
                <div className="spa-page-image">
                    <img src={`${import.meta.env.BASE_URL}${page.image}`} alt={page.title} />
                </div>
            </div>
        </div>
    );

}

export default SpaModalPages;

