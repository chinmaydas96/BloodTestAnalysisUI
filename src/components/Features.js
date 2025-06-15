import React from 'react';

function Features({ isArabic=false }) {
  const t=(en,ar)=>isArabic?ar:en;

  const features = [
    {
      title: t('Fast Analysis','تحليل سريع'),
      description: t('Get results in seconds, not days. Our AI processes your blood test data instantly.','احصل على النتائج في ثوانٍ وليس أيامًا. يعالج الذكاء الاصطناعي بيانات فحص الدم على الفور.'),
      icon: '⚡'
    },
    {
      title: t('Accurate Results','نتائج دقيقة'),
      description: t('Our AI has been trained on millions of blood test results to provide highly accurate analyses.','تم تدريب الذكاء الاصطناعي لدينا على ملايين نتائج فحوصات الدم لتقديم تحليلات دقيقة للغاية.'),
      icon: '✓'
    },
    {
      title: t('Easy to Understand','سهل الفهم'),
      description: t('Complex medical terms translated into easy-to-understand language with actionable insights.','مصطلحات طبية معقدة مترجمة إلى لغة سهلة الفهم مع رؤى قابلة للتنفيذ.'),
      icon: '📊'
    },
    {
      title: t('Trend Analysis','تحليل الاتجاه'),
      description: t('Track changes in your blood test results over time to monitor your health progress.','تابع التغييرات في نتائج فحوصات الدم بمرور الوقت لمراقبة تقدم صحتك.'),
      icon: '📈'
    },
    {
      title: t('Secure & Private','آمن وخاص'),
      description: t('Your health data is encrypted and never shared with third parties.','يتم تشفير بياناتك الصحية ولا تتم مشاركتها أبدًا مع أطراف ثالثة.'),
      icon: '🔒'
    },
    {
      title: t('24/7 Availability','متوفر 24/7'),
      description: t('Access your blood test analysis anytime, anywhere, from any device.','يمكنك الوصول إلى تحليل فحوصات الدم في أي وقت ومن أي مكان ومن أي جهاز.'),
      icon: '🌐'
    }
  ];

  return (
    <section className="features-section" id="features">
      <h2 className="section-title">{t('Key Features','الميزات الرئيسية')}</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features; 