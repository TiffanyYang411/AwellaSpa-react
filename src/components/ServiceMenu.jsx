// ServiceMenu.jsx

import React, { useEffect, useState, useRef } from 'react';
import '../styles/ServiceMenu.css';
import '../styles/Modal.css';
import spaTreatmentsData from '../data/spaTreatmentsData';
import facialTreatmentsData from '../data/facialTreatmentsData';
import SpaModalPages from '../components/SpaModalPages';
import FacialModalPages from '../components/FacialModalPages';
import TreatmentCategoryNav from '../components/TreatmentCategoryNav';
import BookingModal from '../components/BookingModal';
import gsap from 'gsap';

function ServiceMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFacialModalOpen, setIsFacialModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [presetTreatment, setPresetTreatment] = useState(null);

  const openBooking = (treatmentName = null) => {
    setPresetTreatment(treatmentName);
    setIsBookingOpen(true);
  };

  const modalContentRef = useRef(null);

  const openModal = () => {
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.overflow = 'hidden';
    document.body.style.width = '100%';
    document.body.dataset.scrollY = scrollY;
    setIsModalOpen(true);
  };

  const openFacialModal = () => {
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.overflow = 'hidden';
    document.body.style.width = '100%';
    document.body.dataset.scrollY = scrollY;
    setIsFacialModalOpen(true);
  };

  const closeModal = () => {
    const el = modalContentRef.current;
    if (el) {
      gsap.to(el, {
        opacity: 0,
        y: 80,
        scale: 0.85,
        duration: 0.5,
        ease: 'power3.inOut',
        onComplete: () => {
          const scrollY = document.body.dataset.scrollY || '0';
          document.body.style.position = '';
          document.body.style.top = '';
          document.body.style.overflow = '';
          document.body.style.width = '';
          window.scrollTo(0, parseInt(scrollY));
          setIsModalOpen(false);
          setIsFacialModalOpen(false);
        },
      });
    } else {
      setIsModalOpen(false);
      setIsFacialModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen || isFacialModalOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isModalOpen, isFacialModalOpen]);

  useEffect(() => {
    const el = modalContentRef.current;
    if (!el) return;
    if (isModalOpen || isFacialModalOpen) {
      gsap.fromTo(
        el,
        { opacity: 0, y: 80, scale: 0.85 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out' }
      );
    }
  }, [isModalOpen, isFacialModalOpen]);

  useEffect(() => {
    const cards = document.querySelectorAll('.slide-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add('slide-in');
            el.classList.remove('slide-out-left', 'slide-out-right');
          } else {
            el.classList.remove('slide-in');
            if (el.classList.contains('slide-left')) {
              el.classList.add('slide-out-left');
            }
            if (el.classList.contains('slide-right')) {
              el.classList.add('slide-out-right');
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -40% 0px' }
    );
    cards.forEach((el) => observer.observe(el));
    const title = document.querySelector('.fade-title');
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          title.classList.add('title-in');
          title.classList.remove('title-out');
        } else {
          title.classList.remove('title-in');
          title.classList.add('title-out');
        }
      },
      { threshold: 0, rootMargin: '0px 0px -50% 0px' }
    );
    if (title) titleObserver.observe(title);
    return () => {
      cards.forEach((el) => observer.unobserve(el));
      if (title) titleObserver.unobserve(title);
    };
  }, []);

  return (
    <section id="service-menu" className="service-menu-section">
      <h2 className="service-title fade-title">OUR SERVICES</h2>
      <div className="service-card-wrapper">
        <div className="service-card slide-card slide-left">
          <h3>嚴選SPA療程</h3>
          <p className="sub-title-1">為您打造無聲的療癒語言</p>
          <p className="description">
            匯集世界各地芳療靈感與手技傳承，搭配有機植物精油與情境香氛，從背部、肩頸至頭部穴位釋壓，全方位釋放壓⼒與疲憊。這不只是一場按摩，更是一段為自己保留的靜心旅程，讓每個深層觸碰，都成為與自我對話的儀式。
          </p>
          <img src={`${import.meta.env.BASE_URL}images/spa-card.jpg`} alt="spa oil" />
          <button className="service-btn" onClick={openModal}>展開療癒旅程</button>
        </div>
        <div className="service-card slide-card slide-right">
          <h3>肌膚管理療程</h3>
          <p className="sub-title-1">讓美麗從細節開始發光</p>
          <p className="description">
            以深層清潔、膠原修護、亮白滋潤為核心，結合高效保養成分與科技⼿法如超音波導入、氧氣療法，量身打造每一吋肌膚的專屬呵護。從潔淨、修護到喚醒肌膚活力，層層堆疊，重現自然透亮的光采感。
          </p>
          <img src={`${import.meta.env.BASE_URL}images/face-card.jpg`} alt="face treatment" />
          <button className="service-btn" onClick={openFacialModal}>探索更多美好</button>
        </div>
      </div>

      {(isModalOpen || isFacialModalOpen) && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="treatment-category-nav-wrapper" onClick={(e) => e.stopPropagation()}>
            <TreatmentCategoryNav
              categories={(isModalOpen ? spaTreatmentsData : facialTreatmentsData).map((d) => d.category)}
              onNavigate={(index) => {
                setActiveIndex(index);
                const targetId = isModalOpen ? `modal-section-${index}` : `facial-modal-section-${index}`;
                const target = document.getElementById(targetId);
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              activeIndex={activeIndex}
            />
          </div>
          <div
            className="modal-content"
            ref={modalContentRef}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={closeModal} aria-label="Close">
              <svg className="close-icon" viewBox="0 0 40 40" width="40" height="40">
                <circle cx="20" cy="20" r="18" stroke="#212121" strokeWidth="1.2" fill="none" />
                <line x1="14" y1="14" x2="26" y2="26" stroke="#212121" strokeWidth="1.2" />
                <line x1="26" y1="14" x2="14" y2="26" stroke="#212121" strokeWidth="1.2" />
              </svg>
            </button>
            {isModalOpen ? (
              <SpaModalPages
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                onReserve={openBooking}
              />

            ) : (
              <FacialModalPages
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                onReserve={openBooking}
              />
            )}
          </div>
        </div>
      )}

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preSelectedTreatment={presetTreatment}
      />
    </section>
  );
}

export default ServiceMenu;




