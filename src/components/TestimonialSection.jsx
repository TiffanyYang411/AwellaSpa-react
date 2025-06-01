// src/components/TestimonialSection.jsx
import React from 'react';
import '../styles/TestimonialSection.css';

function TestimonialSection() {
    const testimonials = [
        {
            name: '張O菱',
            content: '護膚療程非常專業，不只肌膚變亮，連肩膀的緊繃感都舒緩很多，超推薦！',
        },
        {
            name: '黃O珊',
            content: 'Awella 的美容師手技非常細膩，完全不馬虎，療程設計也讓我覺得很有儀式感。非常滿意的一次體驗！',
        },
        {
            name: '林O柔',
            content: '第一次體驗 Awella 的香氛SPA，整個人像被雲朵抱住一樣輕盈。連睡眠品質都變好了。',
        },
        {
            name: '劉O妍',
            content: '媽媽生活好忙，但來 Awella 是我唯一屬於自己的時間。每次來都像身心重新開機一樣，真的很想每周都來！',
        },
        {
            name: '陳O賢',
            content: '這裡的芳療精油香味好療癒，空間安靜到連呼吸都慢下來，是我週末最期待的放鬆時光。',
        },
        {
            name: '周O寧', 
            content: '每次來 Awella 都像做了一場香氛夢，從身到心都被療癒。'
        },
        
    ];

    return (
        <section className="testimonial-section">
            <h2 className="zh-title">尊榮見證</h2>
            <div className="testimonial-grid">
                {testimonials.map((item, index) => (
                    <div className={`testimonial-card card-${index + 1}`} key={index}>
                        <h3>{item.name}</h3>
                        <div className="stars">★★★★★</div>
                        <p>{item.content}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TestimonialSection;

