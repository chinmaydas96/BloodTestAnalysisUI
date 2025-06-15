import React from 'react';

function Footer({ isArabic=false }) {
  const t=(en,ar)=>isArabic?ar:en;

  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <h2 className="footer-title">{t('Contact Us','اتصل بنا')}</h2>
        <p className="footer-description">
          {t("Have questions about bloodtest.ai? We're here to help.", 'هل لديك أسئلة حول bloodtest.ai؟ نحن هنا للمساعدة.')}
        </p>
        <div className="contact-info">
          <p>{t('Email','البريد الإلكتروني')}: support@bloodtest.ai</p>
          <p>{t('Phone','الهاتف')}: +1 (555) 123-4567</p>
        </div>
      </div>
      <div className="footer-links">
        <a href="#home" className="footer-link">{t('Home','الرئيسية')}</a>
        <a href="#analysis" className="footer-link">{t('Analysis','تحليل')}</a>
        <a href="#features" className="footer-link">{t('Features','المزايا')}</a>
        <a href="#testimonials" className="footer-link">{t('Testimonials','آراء')}</a>
        <a href="#contact" className="footer-link">{t('Contact','اتصال')}</a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} bloodtest.ai. {t('All rights reserved.','جميع الحقوق محفوظة.')}</p>
    </footer>
  );
}

export default Footer; 