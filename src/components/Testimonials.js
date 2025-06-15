import React from 'react';

function Testimonials() {
  const testimonialsData = [
    {
      id: 1,
      text: "Valaam has transformed the way we approach data analysis. The AI-powered insights have helped us make better decisions and grow our business.",
      author: "Sarah Johnson, CEO at TechForward"
    },
    {
      id: 2,
      text: "The integration capabilities are outstanding. We were able to connect all our existing systems with minimal effort and start seeing results immediately.",
      author: "Michael Chen, CTO at DataFlow"
    },
    {
      id: 3,
      text: "As a startup, we needed a solution that could scale with us. Valaam has been the perfect partner in our growth journey, providing powerful tools at an affordable price.",
      author: "Emily Rodriguez, Founder at AIStartup"
    }
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="section-title">What Our Clients Say</h2>
      <div className="testimonial-grid">
        {testimonialsData.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-author">{testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials; 