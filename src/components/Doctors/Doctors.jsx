import React from 'react';
import './Doctors.css';
import about from '../../assets/about.jpg';
import doctor1 from '../../assets/doctor1.jpg';
import doctor2 from '../../assets/doctor2.jpg';
import doctor3 from '../../assets/doctor3.jpg';


const doctors = [
  {
    name: 'Dr. Lloyd Wilson',
    specialty: 'Neurologist',
    description: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    img: about
  },
  {
    name: 'Emin Balammedov',
    specialty: 'Ophthalmologist',
    description: 'Passionate about heart health and patient care.',
    img: doctor1
  },
  {
    name: 'Dr. Ian Smith',
    specialty: 'Dentist',
    description: 'Passionate about heart health and patient care.',
    img: doctor2
  },
  {
    name: 'Dr. Alicia Henderson',
    specialty: 'Pediatrician',
    description: 'Passionate about heart health and patient care.',
    img: doctor3
  },
  {
    name: 'Dr. Rachel Parker',
    specialty: 'Cardiologist',
    description: 'Passionate about heart health and patient care.',
    img: doctor1
  },
  {
    name: 'Dr. Jane Smith',
    specialty: 'Cardiologist',
    description: 'Passionate about heart health and patient care.',
    img: doctor2
  },
  {
    name: 'Dr. Jane Smith',
    specialty: 'Cardiologist',
    description: 'Passionate about heart health and patient care.',
    img: doctor3
  },
  {
    name: 'Dr. Jane Smith',
    specialty: 'Cardiologist',
    description: 'Passionate about heart health and patient care.',
    img: about
  },
  {
    name: 'Dr. Jane Smith',
    specialty: 'Cardiologist',
    description: 'Passionate about heart health and patient care.',
    img: doctor1
  }
];

const Doctors = () => {
  return (
    <>
    <div className="main-doc">
      {doctors.map((doc, index) => (
        <div className="doctor-card" key={index}>
          <img src={doc.img} alt={doc.name} />

          <div className="info">
            <h3>{doc.name}</h3>
            <p className="info-p">{doc.specialty}</p>
            <p>{doc.description}</p>
            <button className="doc-btn"><a href="https://memorialhospital.az/">Book Now</a></button>
          </div>

          <div className="social-overlay">
            <div className="social-icons">
              <i className="fab fa-twitter"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-google-plus-g"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
         
        </div>
      
      ))}
    </div>
   
    </>
    
  );
};

export default Doctors;
