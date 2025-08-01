import React, { useEffect, useRef } from 'react';
import './About.css';
import about from '../../assets/about.jpg';
import hours from '../../assets/24-hours.png';
import ambulance from '../../assets/ambulance.png';
import stethos from '../../assets/stethoscope.png';
import doctor from '../../assets/doctor.png';





const About = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.3 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div className='about-main'>
      <div className="sec1">
        <div className='pic-div'>
          <img className='about-image' src={about} alt="" />
        </div>
        <div ref={textRef} className='scroll-text'>
          <h1>We Are <span className='span'>Mediplus</span> A <br /> Medical Clinic</h1>
          <p>A small river named Duden flows by their place and supplies it <br /> with the necessary regelialia. It is a paradisematic country, in <br /> which roasted parts of sentences fly into your mouth. It is a <br /> paradisematic country, in which roasted parts of sentences fly <br /> into your mouth.</p>
          <div className='buttons'>
            <button className='button1'>Make an appointment</button>
            <button className='button2'>Contact Us</button>
          </div>
        </div>

      </div>


      <div className="formtext">
        <div className="custom-padding">
          <div className="row">
            {/* Sol tərəf - Columnlar */}


            <div className="col-md-6">
              <h1 className='bas'>Our Services</h1>

              <div className="row row-cols-2 g-4">

                <div className="col">
                  <div>
                    <img src={ambulance} alt="" />
                  </div>
                  <div className='ttt'>
                    <h1>Emergency <br />Services</h1>
                    <p>A small river named <br /> Duden flows by their <br /> place and supplies it <br /> with the necessary <br /> regelialia.</p>
                  </div>
                </div>
                <div className="col"><div>
                  <img src={doctor} alt="" />
                </div>
                  <div className='ttt'>
                    <h1>Qualified <br /> Doctors
                    </h1>
                    <p>A small river named <br /> Duden flows by their <br /> place and supplies it <br /> with the necessary <br /> regelialia.</p>

                  </div></div>
                <div className="col"><div>
                  <img src={stethos} alt="" />
                </div>
                  <div className='ttt'>
                    <h1>
                      Outdoors <br /> Checkup</h1>
                    <p>A small river named <br /> Duden flows by their <br /> place and supplies it <br /> with the necessary <br /> regelialia.</p>

                  </div></div>
                <div className="col"><div>
                  <img src={hours} alt="" />
                </div>
                  <div className='ttt'>
                    <h1>
                      24 Hours <br /> Service</h1>
                    <p>A small river named <br /> Duden flows by their <br /> place and supplies it <br /> with the necessary <br /> regelialia.</p>

                  </div></div>
              </div>
            </div>

            {/* Sağ tərəf - Form */}
            <div className="col-md-6">
              <h2 className="mb-4 text-uppercase fw-bold consult-title">Free Consultation</h2>
              <form className="form">
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="First Name" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Last Name" />
                </div>
                <div className="mb-3">
                  <select className="form-select">
                    <option selected disabled>Select Your Services</option>
                    <option>Emergency</option>
                    <option>Check-up</option>
                    <option>Surgery</option>
                  </select>
                </div>
                <div className="mb-3">
                  <input type="tel" className="form-control" placeholder="Phone" />
                </div>
                <div className="mb-3">
                  <input type="date" className="form-control" />
                </div>
                <div className="mb-3">
                  <input type="time" className="form-control" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="4" placeholder="Message"></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-danger px-5 py-2">Appointment</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

    </div>



  );
};

export default About;
