// src/components/GallerySection.jsx
// src/components/GallerySection.jsx
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

    // 圖片尺寸與間距
    const imageWidth = 500;
    const gap = 80;
    const visibleImages = 3;
    const totalVisibleWidth = visibleImages * imageWidth + (visibleImages - 1) * gap;

    // 初始整條 track 從右邊畫面外滑入
    const initialX = window.innerWidth + imageWidth;
    gsap.set(track, { x: initialX });

    const scrollLength = track.scrollWidth - totalVisibleWidth;

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

    // 圖片上下交錯滑入動畫
    setTimeout(() => {
      const galleryItems = gsap.utils.toArray('.gallery-item');
      galleryItems.forEach((item) => {
        const isUp = item.classList.contains('up');
        const initialY = isUp ? -40 : 40;

        gsap.fromTo(
          item,
          { y: initialY, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              containerAnimation: horizontalTween,
              start: 'left 90%',
              end: 'left 50%',
              scrub: true,
            },
          }
        );
      });
    }, 100);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
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










