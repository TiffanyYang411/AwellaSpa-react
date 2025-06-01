import React, { useEffect } from 'react';
import '../styles/ServiceMenu.css';

function ServiceMenu() {
    useEffect(() => {
  const cards = document.querySelectorAll('.slide-card'); // ✅ 移到這裡！

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
    {
      threshold: 0.3,
      rootMargin: "0px 0px -50% 0px",
    }
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
    {
      threshold: 0,
      rootMargin: "0px 0px -50% 0px",
    }
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
                {/* 左邊卡片 */}
                <div className="service-card slide-card slide-left">
                    <h3>嚴選SPA療程</h3>
                    <p className="sub-title">為您打造無聲的療癒語言</p>
                    <p className="description">
                        匯集世界各地芳療靈感與手技傳承，搭配有機植物精油與情境香氛，從背部、肩頸至頭部穴位釋壓，全方位釋放壓⼒與疲憊。這不只是一場按摩，更是一段為自己保留的靜心旅程，讓每個深層觸碰，都成為與自我對話的儀式。
                    </p>
                    <img src={`${import.meta.env.BASE_URL}images/spa-card.jpg`} alt="spa oil" />
                    <button className="service-btn">展開療癒旅程</button>
                </div>

                {/* 右邊卡片 */}
                <div className="service-card slide-card slide-right">
                    <h3>肌膚管理療程</h3>
                    <p className="sub-title">讓美麗從細節開始發光</p>
                    <p className="description">
                        以深層清潔、膠原修護、亮白滋潤為核心，結合高效保養成分與科技⼿法如超音波導入、氧氣療法，量身打造每一吋肌膚的專屬呵護。從潔淨、修護到喚醒肌膚活力，層層堆疊，重現自然透亮的光采感。
                    </p>
                    <img src={`${import.meta.env.BASE_URL}images/face-card.jpg`} alt="face treatment" />
                    <button className="service-btn">探索更多美好</button>
                </div>
            </div>
        </section>
    );
}

export default ServiceMenu;

