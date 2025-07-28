import React from 'react';
import slide1 from '../../assets/images.jpg';
import clinic1 from '../../assets/clinic1.jpg';
import nurse from '../../assets/nurse.jpg';
import bayram from '../../assets/bayram.jpg';
import koredoctor from '../../assets/koredoctor.jpg';


import './Carusel.css';

const Carusel = () => {
  return (
    <div style={{ position: 'relative' }}>
      {/* Bootstrap Carousel */}
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={bayram} className="d-block" alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              
              <p>Clinic environment overview.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={koredoctor} className="d-block" alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
            
              <p>Medical team working.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={nurse} className="d-block" alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              
              <p>Advanced equipment in action.</p>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Overlay yazı hissəsi */}
      <div className="carousel-overlay">
        <h1>We are here for your Care</h1>
        <p>Trusted medical support to help you live better and healthier.</p>
        <button className="btn btn-primary">Make an Appointment</button>
      </div>
    </div>
  );
};

export default Carusel;
