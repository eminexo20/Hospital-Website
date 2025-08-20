import React from 'react'
import "./Departament.css"
import stethos from '../../assets/stethoscope.png';

import doctorimage from '../../assets/doctorimage.webp';

const Departament = () => {
  return (
    <div>
        <section className="medical-services">
      <div className="doctor-image">
        <img  src={doctorimage} alt="Doctor shaking hands" />
      </div>
      <div className="services-grid">
        <div className="service">
        <img className='stetos' src={stethos} alt="" />
          <h3>Neurology</h3>
          <p>Far far away, behind the word mountains</p>
        </div>
        <div className="service">
        <img className='stetos' src={stethos} alt="" />

          <h3>Ophthalmology</h3>
          <p>Far far away, behind the word mountains</p>
        </div>
        <div className="service">
        <img className='stetos' src={stethos} alt="" />

          <h3>Nuclear Magnetic</h3>
          <p>Far far away, behind the word mountains</p>
        </div>
        <div className="service">
        <img className='stetos' src={stethos} alt="" />

          <h3>Surgical</h3>
          <p>Far far away, behind the word mountains</p>
        </div>
        <div className="service">
        <img className='stetos' src={stethos} alt="" />

          <h3>Cardiology</h3>
          <p>Far far away, behind the word mountains</p>
        </div>
        <div className="service">
        <img className='stetos' src={stethos} alt="" />
          
          <h3>Dental</h3>
          <p>Far far away, behind the word mountains</p>
        </div>
        <div className="service">
        <img className='stetos' src={stethos} alt="" />

          <h3>Traumatology</h3>
          <p>Far far away, behind the word mountains</p>
        </div>
        <div className="service">
        <img className='stetos' src={stethos} alt="" />

          <h3>Cardiology</h3>
          <p>Far far away, behind the word mountains</p>
        </div>
        <div className="service">
        <img className='stetos' src={stethos} alt="" />

          <h3>X-ray</h3>
          <p>Far far away, behind the word mountains</p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Departament
