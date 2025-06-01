import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/GallerySection.css';

gsap.registerPlugin(ScrollTrigger);

const images = [
    'images/spa1.jpg',
    'images/spa2.jpg',
    'images/spa3.jpg',
    'images/spa4.jpg',
    'images/spa5.jpg',
    'images/spa6.jpg',
];

function GallerySection() {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const track = trackRef.current;
        const scrollLength = track.scrollWidth - window.innerWidth;

        // 設定橫向滑動動畫
        const horizontalTween = gsap.to(track, {
            x: -scrollLength,
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: () => `+=${scrollLength}`,
                scrub: true,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            },
        });

        // 等主動畫註冊後，再補 reveal 動畫
        setTimeout(() => {
            gsap.utils.toArray('.gallery-item').forEach((item, i) => {
                gsap.fromTo(
                    item,
                    { x: 100, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: item,
                            containerAnimation: horizontalTween.scrollTrigger,
                            start: 'left center',
                            end: 'left center',
                            scrub: true,
                        },
                    }
                );
            });
        }, 50);

        ScrollTrigger.refresh();
    }, []);

    return (
        <section className="gallery-section" ref={sectionRef}>
            <div className="gallery-title-bg">SERENE MOMENTS</div>
            <div className="gallery-track" ref={trackRef}>
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`gallery-item ${index % 2 === 0 ? 'up' : 'down'}`}
                    >
                        <img src={`${import.meta.env.BASE_URL}${src}`} alt={`spa${index}`} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default GallerySection;







