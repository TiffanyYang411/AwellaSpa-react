import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import facialTreatmentsData from '../data/facialTreatmentsData';
import TreatmentSection from '../components/TreatmentSection';
import TreatmentCategoryNav from '../components/TreatmentCategoryNav';
import '../styles/FacialTreatmentPage.css';

gsap.registerPlugin(ScrollTrigger);

function FacialTreatmentPage() {
  useEffect(() => {
    console.log('✅ FacialTreatmentPage loaded');
    const sections = gsap.utils.toArray('.treatment-section');

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none',
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleNavClick = (index) => {
    const target = document.getElementById(`facial-section-${index}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="facial-page-container">
      <TreatmentCategoryNav
        categories={facialTreatmentsData.map((d) => d.category)}
        onNavigate={handleNavClick}
      />

      {facialTreatmentsData.map((section, index) => (
        <TreatmentSection
          key={index}
          sectionId={`facial-section-${index}`}
          categoryData={section}
        />
      ))}
    </main>
  );
}

export default FacialTreatmentPage;

