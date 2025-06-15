import React from 'react';

function Testimonials({ isArabic=false }) {
  const t=(en,ar)=>isArabic?ar:en;
  const testimonials = [
    {
      text: t("bloodtest.ai helped me understand my lab results quickly. I was able to identify areas of concern and discuss them with my doctor.",
      "ساعدني bloodtest.ai على فهم نتائج المختبر بسرعة. تمكنت من تحديد مجالات القلق ومناقشتها مع طبيبي."),
      author: t("Sarah M., Patient","سارة م.، مريضة")
    },
    {
      text: t("As a healthcare provider, I recommend bloodtest.ai to my patients. It helps them understand their results and come prepared with informed questions.",
      "بصفتي مقدم رعاية صحية، أوصي بـ bloodtest.ai لمرضاي. يساعدهم على فهم نتائجهم والمجيء مستعدين بأسئلة مستنيرة."),
      author: t("Dr. James Wilson, MD","د. جيمس ويلسون")
    },
    {
      text: t("The trend analysis feature has been invaluable for monitoring my cholesterol levels over time. I can clearly see how my lifestyle changes are making a difference.",
      "كانت ميزة تحليل الاتجاه ذات قيمة كبيرة لمراقبة مستويات الكوليسترول لدي مع مرور الوقت. أستطيع أن أرى بوضوح كيف تُحدث تغييرات نمط حياتي فرقًا."),
      author: t("Michael T., Patient","مايكل ت.، مريض")
    }
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="section-title">{t('What Our Users Say','ماذا يقول مستخدمونا')}</h2>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-author">{testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials; 