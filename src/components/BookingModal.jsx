import React, { useEffect, useRef, useState } from 'react';
import '../styles/BookingModal.css';
import { gsap } from 'gsap';
import SuccessModal from './SuccessModal';

function BookingModal({ isOpen, onClose, preSelectedTreatment }) {
    const [selectedTreatment, setSelectedTreatment] = useState('');
    const [selectedTime, setSelectedTime] = useState('10:00 AM');
    const [contactMethod, setContactMethod] = useState('電話聯絡');
    const [visible, setVisible] = useState(false); // 控制實際 render
    const [isSuccessOpen, setIsSuccessOpen] = useState(false); // 成功動畫跳窗
    const modalRef = useRef();
    const overlayRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSuccessOpen(true); // 顯示成功動畫
    };

    // 預設療程處理
    // 修正後的版本：只有在有預設值且 modal 是打開的狀況才套用
useEffect(() => {
    if (preSelectedTreatment && isOpen) {
        setSelectedTreatment(preSelectedTreatment);
    } else if (isOpen) {
        setSelectedTreatment('');
    }
}, [preSelectedTreatment, isOpen]);


    // 處理動畫開關
    useEffect(() => {
        if (isOpen) {
            setVisible(true);
            setTimeout(() => {
                gsap.to(overlayRef.current, { opacity: 1, duration: 0.6 });
                gsap.fromTo(
                    modalRef.current,
                    { opacity: 0, y: 40 },
                    { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }
                );
            }, 0);
        } else if (visible) {
            gsap.to(modalRef.current, {
                opacity: 0,
                y: 40,
                duration: 0.7,
                ease: 'power2.in',
            });
            gsap.to(overlayRef.current, {
                opacity: 0,
                duration: 0.6,
                onComplete: () => setVisible(false),
            });
        }
    }, [isOpen]);

    if (!visible) return null;

    return (
        <div
            className="booking-modal-overlay show"
            ref={overlayRef}
            onClick={onClose}
        >
            <div
                className="booking-modal"
                ref={modalRef}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="close-btn" onClick={onClose} aria-label="關閉預約視窗">
                    ×
                </button>
                <h2>Awella Spa 預約療程</h2>
                <p className="sub-title">喚醒感官・喚醒美麗・從這裡開始</p>
                <p className="sub-title-2">請填寫以下資料，為自己預約一段專屬於您的療癒時光</p>

                <form className="booking-form" onSubmit={handleSubmit}>
                    <div className="form-col">
                        <label>您的大名<span className="required">*</span></label>
                        <input type="text" placeholder="請輸入您的姓名" required />

                        <label>預約日期<span className="required">*</span></label>
                        <input type="date" required />

                        <label>聯絡電話<span className="required">*</span></label>
                        <input type="tel" placeholder="請輸入您的聯絡電話" required />

                        <label>電子信箱</label>
                        <input type="email" placeholder="請輸入您的電子信箱" />
                    </div>

                    <div className="form-col">
                        <label>選擇療程類別<span className="required">*</span></label>
                        <select value={selectedTreatment} onChange={(e) => setSelectedTreatment(e.target.value)} required>
                            <option value="" disabled hidden>請選擇一種療程</option>
                            <option value="神聖花植儀式SPA - 神聖花植精油SPA">神聖花植儀式SPA - 神聖花植精油SPA</option>
                            <option value="神聖花植儀式SPA - 花植能量淨化SPA">神聖花植儀式SPA - 花植能量淨化SPA</option>
                            <option value="神聖花植儀式SPA - 靜心花園冥想SPA">神聖花植儀式SPA - 靜心花園冥想SPA</option>
                            <option value="礦石能量療癒SPA - 水晶能量平衡SPA">礦石能量療癒SPA - 水晶能量平衡SPA</option>
                            <option value="礦石能量療癒SPA - 金礦豐盈祝福SPA">礦石能量療癒SPA - 金礦豐盈祝福SPA</option>
                            <option value="礦石能量療癒SPA - 靈石脈輪平衡SPA">礦石能量療癒SPA - 靈石脈輪平衡SPA</option>
                            <option value="草本芳香調理SPA - 東方草本經絡SPA">草本芳香調理SPA - 東方草本經絡SPA</option>
                            <option value="草本芳香調理SPA - 雨林植物療癒SPA">草本芳香調理SPA - 雨林植物療癒SPA</option>
                            <option value="草本芳香調理SPA - 植香脊椎調理SPA">草本芳香調理SPA - 植香脊椎調理SPA</option>
                            <option value="靜境身心療癒SPA - 森林深層靜心SPA">靜境身心療癒SPA - 森林深層靜心SPA</option>
                            <option value="靜境身心療癒SPA - 五行漢方養生SPA">靜境身心療癒SPA - 五行漢方養生SPA</option>
                            <option value="靜境身心療癒SPA - 溫感泥灸療程">靜境身心療癒SPA - 溫感泥灸療程</option>
                            <option value="沉浸式水境療癒SPA - 花浴淨化儀式">沉浸式水境療癒SPA - 花浴淨化儀式</option>
                            <option value="沉浸式水境療癒SPA - 水氧光感SPA">沉浸式水境療癒SPA - 水氧光感SPA</option>
                            <option value="沉浸式水境療癒SPA - 香氛泡浴 + 身體滋養">沉浸式水境療癒SPA - 香氛泡浴 + 身體滋養</option>
                            <option value="深層清潔系列 - 有機淨膚療程">深層清潔系列 - 有機淨膚療程</option>
                            <option value="深層清潔系列 - 抗痘煥膚療程">深層清潔系列 - 抗痘煥膚療程</option>
                            <option value="深層清潔系列 - 溫和去角質療程">深層清潔系列 - 溫和去角質療程</option>
                            <option value="保濕修護系列 - 水光補水護理">保濕修護系列 - 水光補水護理</option>
                            <option value="保濕修護系列 - 舒敏修復護理">保濕修護系列 - 舒敏修復護理</option>
                            <option value="保濕修護系列 - 玻尿酸精華導入">保濕修護系列 - 玻尿酸精華導入</option>
                            <option value="緊緻提拉系列 - 膠原彈潤拉提">緊緻提拉系列 - 膠原彈潤拉提</option>
                            <option value="緊緻提拉系列 - 金箔賦活療程">緊緻提拉系列 - 金箔賦活療程</option>
                            <option value="緊緻提拉系列 - 音波肌能拉提">緊緻提拉系列 - 音波肌能拉提</option>
                            <option value="亮白煥膚系列 - 花植亮白療程">亮白煥膚系列 - 花植亮白療程</option>
                            <option value="亮白煥膚系列 - 珍珠淨白光感護理">亮白煥膚系列 - 珍珠淨白光感護理</option>
                            <option value="亮白煥膚系列 - 酵素光亮療程">亮白煥膚系列 - 酵素光亮療程</option>
                            <option value="抗老修護系列 - 彈力賦活護理">抗老修護系列 - 彈力賦活護理</option>
                            <option value="抗老修護系列 - 晚香御齡護理">抗老修護系列 - 晚香御齡護理</option>
                            <option value="抗老修護系列 - 紫晶能量抗老儀式">抗老修護系列 - 紫晶能量抗老儀式</option>
                        </select>

                        <label>預約時間<span className="required">*</span></label>
                        <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} required>
                            <option value="10:00 AM">10:00 AM</option>
                            <option value="11:00 AM">11:00 AM</option>
                            <option value="1:00 PM">1:00 PM</option>
                            <option value="2:00 PM">2:00 PM</option>
                            <option value="3:00 PM">3:00 PM</option>
                            <option value="4:00 PM">4:00 PM</option>
                            <option value="5:00 PM">5:00 PM</option>
                            <option value="6:00 PM">6:00 PM</option>
                            <option value="7:00 PM">7:00 PM</option>
                        </select>

                        <label>偏好聯絡方式<span className="required">*</span></label>
                        <select value={contactMethod} onChange={(e) => setContactMethod(e.target.value)} required>
                            <option value="電話聯絡">電話聯絡</option>
                            <option value="Email 聯絡">Email 聯絡</option>
                            <option value="Line 聯絡">Line 聯絡</option>
                            <option value="WhatsApp 聯絡">WhatsApp 聯絡</option>
                            <option value="WeChat 聯絡">WeChat 聯絡</option>
                            <option value="Facebook Messenger 聯絡">Facebook Messenger 聯絡</option>
                        </select>

                        <label>任何個人偏好或需求</label>
                        <textarea placeholder="請輸入您的留言" />
                    </div>

                    <button type="submit" className="submit-btn">我要預約</button>
                </form>

                <SuccessModal isOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} />
            </div>
        </div>
    );
}

export default BookingModal;




