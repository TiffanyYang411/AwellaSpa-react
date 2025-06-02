import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import spaTreatmentsData from '../data/spaTreatmentsData';
import TreatmentSection from '../components/TreatmentSection';
import TreatmentCategoryNav from '../components/TreatmentCategoryNav';
import "../styles/SpaTreatmentPage.css";


gsap.registerPlugin(ScrollTrigger);

function SpaTreatmentPage() {
    useEffect(() => {
  console.log('✅ 已進入 FacialTreatmentPage');
  const sections = gsap.utils.toArray('.treatment-section');

  sections.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top 80%', // ✅ 不用 pin，僅觸發 scroll 效果
      toggleActions: 'play none none none',
    });
  });
}, []);


    const handleNavClick = (index) => {
        const target = document.getElementById(`section-${index}`);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main>
            <TreatmentCategoryNav
                categories={spaTreatmentsData.map((d) => d.category)}
                onNavigate={handleNavClick}
            />

            {spaTreatmentsData.map((section, index) => (
                <TreatmentSection
                    key={index}
                    sectionId={`section-${index}`}
                    categoryData={section}
                />
            ))}
        </main>
    );
}

export default SpaTreatmentPage;
