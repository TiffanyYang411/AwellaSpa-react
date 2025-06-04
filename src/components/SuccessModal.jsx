// SuccessModal.jsx
import React, { useEffect, useRef } from 'react';
import '../styles/SuccessModal.css';
import { gsap } from 'gsap';

function SuccessModal({ isOpen, onClose }) {
    const modalRef = useRef();
    const overlayRef = useRef();

    useEffect(() => {
        if (isOpen) {
            gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
            gsap.fromTo(modalRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 });

            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="success-modal-overlay" ref={overlayRef}>
            <div className="success-modal" ref={modalRef}>
                <h1 className="brand-title">Awella Spa</h1>
                <p className="success-title">預約成功！</p>
                <p className="success-message">我們已收到您的預約，專人將於24小時內與您聯繫。</p>
                <p className="success-code">預約編號：AWS20250613001</p>
            </div>
        </div>
    );
}

export default SuccessModal;


