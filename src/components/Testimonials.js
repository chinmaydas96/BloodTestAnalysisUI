import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      text: "bloodtest.ai helped me understand my lab results quickly. I was able to identify areas of concern and discuss them with my doctor.",
      author: "Sarah M., Patient"
    },
    {
      text: "As a healthcare provider, I recommend bloodtest.ai to my patients. It helps them understand their results and come prepared with informed questions.",
      author: "Dr. James Wilson, MD"
    },
    {
      text: "The trend analysis feature has been invaluable for monitoring my cholesterol levels over time. I can clearly see how my lifestyle changes are making a difference.",
      author: "Michael T., Patient"
    }
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="section-title">What Our Users Say</h2>
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