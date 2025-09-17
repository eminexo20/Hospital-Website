import React from 'react';
import image1 from '../../assets/qara1.jpg';
import image2 from '../../assets/qara2.jpg';
import image3 from '../../assets/qara3.jpg';
import image4 from '../../assets/qara4.jpg';
import image5 from '../../assets/qara5.jpg';
import image6 from '../../assets/qara6.jpg';

const testimonials = [
  {
    name: "Jeff – First Year Student",
    role: "PATIENT",
    text: "Far away, behind the word mountains, there lies a vast ocean of silence.",
    image: image1
  },
  {
    name: "Jane Doe",
    role: "PATIENT",
    text: "She lived in Bookmarksgrove, right by the coast of the Semantics.",
    image: image2
  },
  {
    name: "Ali Veli",
    role: "PATIENT",
    text: "The same place was inhabited, right by the shore of Semantics.",
    image: image3
  },
  {
    name: "Ayşe Kaya",
    role: "PATIENT",
    text: "Beyond the word mountains lies a peaceful world.",
    image: image4
  },
  {
    name: "Mehmet Can",
    role: "PATIENT",
    text: "Blind texts live in faraway places, untouched by logic.",
    image: image5
  },
  {
    name: "Elif Nur",
    role: "PATIENT",
    text: "Texts quietly dwell along the semantic shore.",
    image: image6
  },
  {
    name: "Zehra Yıldız",
    role: "PATIENT",
    text: "Texts live silently, far from meaning.",
    image: image5
  },
  {
    name: "Burak Demir",
    role: "PATIENT",
    text: "Thoughts lost among words.",
    image: image3
  },
  {
    name: "Selin Acar",
    role: "PATIENT",
    text: "A peaceful text lives by the semantic shore.",
    image: image1
  }
];

// Split testimonials into groups of 3 per slide
const chunkedTestimonials = [];
for (let i = 0; i < testimonials.length; i += 3) {
  chunkedTestimonials.push(testimonials.slice(i, i + 3));
}

const TestimonialCarousel = () => {
  return (
    <div className="carousel-container py-5 ">
      <h2 className="text-center mb-4">What Our Patients Say</h2>
      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {chunkedTestimonials.map((group, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="row justify-content-center gx-4 align-items-stretch">
                {group.map((item, idx) => (
                  <div className="col-md-4 mb-4" key={idx}>
                    <div className="card bg-light text-center h-100 p-3 d-flex flex-column justify-content-center align-items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="rounded-circle mx-auto mb-3"
                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                      />
                      <p className="fst-italic">"{item.text}"</p>
                      <h5>{item.name}</h5>
                      <span className="text-muted">{item.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
