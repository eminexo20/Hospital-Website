import React, { useState, useEffect } from 'react';
import './Blog.css';
import qara1 from '../../assets/qara1.jpg';
import qara2 from '../../assets/qara2.jpg';
import qara3 from '../../assets/qara3.jpg';
import qara4 from '../../assets/qara4.jpg';
import qara5 from '../../assets/qara5.jpg';
import qara6 from '../../assets/qara6.jpg';
import TestimonialCarousel from '../TestimonialCarousel/TestimonialCarousel';

const StatCounter = ({ target, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 50);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(counter);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(counter);
  }, [target]);

  return (
    <div className="stat-item">
      <h3>{count}</h3>
      <p>{label}</p>
    </div>
  );
};

const Blog = () => {
  return <>
    <div className="blog-wrapper">
      <div className="blog-header">
        <h2>About Our Healthcare Services</h2>
        <p>5100+ patients trust us</p>
        <button className="appointment-btn">Book an Appointment</button>
      </div>

      <div className="stats-container">
        <StatCounter target={30} label="Years of Experience" />
        <StatCounter target={4500} label="Happy Patients" />
        <StatCounter target={84} label="Number of Doctors" />
        <StatCounter target={300} label="Staff Members" />
      </div>

      <div>
        <h1>You Can Believe Us</h1>
      </div>
    </div>

    <div>
      <h1 className='hos-text'>
        OUR HOSPITAL IS DIFFERENT FROM OTHERS
        <p className='h-text'>-Emin Exo</p>
      </h1>
    </div>

    <div className='main-cd'>
      {[qara1, qara2, qara3, qara4, qara5, qara6].map((img, index) => (
        <div className="card" key={index}>
          <img src={img} alt="doctors" className="card-img" />
          <div className="card-content">
            <div className="card-meta">
              <span>June 9, 2019</span>
              <span>Administrator</span>
              <span>💬 3</span>
            </div>
            <h2 className="card-title">
              Not Getting Enough Sleep Is a Terrifying Thing
            </h2>
            <p className="card-text">
              Far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            <a href="#" className="card-btn">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
<div className='test-div'>
     <TestimonialCarousel />
</div>
 
  </>
};

export default Blog;
