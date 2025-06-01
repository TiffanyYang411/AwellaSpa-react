import React, { useRef, useEffect } from 'react';
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

        const firstItem = track.querySelector('.gallery-item');
        const offset = firstItem?.offsetLeft || 0;
        const tweak = 0;
        const initialX = window.innerWidth - offset + tweak;
        gsap.set(track, { x: initialX });

        // ✅ 停留最後三張
        const lastFewWidth = 580 * 3;
        const scrollLength = track.scrollWidth - window.innerWidth + initialX - lastFewWidth;

        const horizontalTween = gsap.to(track, {
            x: -scrollLength,
            ease: 'none',
        });

        ScrollTrigger.create({
            animation: horizontalTween,
            trigger: section,
            start: 'top top',
            end: `+=${scrollLength}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
        });

        ScrollTrigger.refresh();

        setTimeout(() => {
            const galleryItems = gsap.utils.toArray('.gallery-item');
            galleryItems.forEach((item) => {
                const isUp = item.classList.contains('up');
                const initialY = isUp ? -40 : 40;

                gsap.fromTo(
                    item,
                    { y: initialY },
                    {
                        y: 0,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: item,
                            containerAnimation: horizontalTween,
                            start: 'left 80%',
                            end: 'left 20%',
                            scrub: true,
                        },
                    }
                );
            });
        }, 50);

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section id="gallery-section" className="gallery-section" ref={sectionRef}>
            <div className="gallery-title-bg">SERENE MOMENTS</div>
            <div className="gallery-track" ref={trackRef}>
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`gallery-item ${index % 2 === 0 ? 'up' : 'down'}`}
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}${src}`}
                            alt={`spa${index}`}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default GallerySection;








