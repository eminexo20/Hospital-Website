import React, { useState } from 'react';
import './Home.css';
import qara4 from '../../assets/qara4.jpg';

const Home = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  const doctors = [
    { name: 'Dr. Robert Long', specialty: 'Cardiology', image: qara4 },
    { name: 'Dr. John Olson', specialty: 'Cardiology', image: qara4 },
  ];

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setIsConfirmed(false);
  };

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
    setIsConfirmed(false);
  };

  const handleConfirm = () => {
    if (selectedDate && selectedTime && selectedDoctor) {
      setIsConfirmed(true);
    } else {
      alert('Zəhmət olmasa tarix, vaxt və həkim seçin.');
    }
  };

  return (
    <div className="page-content">
      <section className="booking-section">
        <div className="booking-container">
          <div className="booking-left">
            <img src={qara4} alt="Doctor" className="doctor-image" />
            <h1>Outstanding High Quality Care & Patient Safety!</h1>
            <p>
              From specialty condition and treatment to everyday needs, our doctors include highly.
            </p>
            <form className="email-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" />
              <a href="/signup" className="cta-link">Get Started – It’s Free</a>
            </form>
          </div>

          <div className="booking-right">
            <div className="calendar">
              <h3>Select Date</h3>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="date-picker"
              />
            </div>

            <div className="time-slots">
              <h3>Select Time</h3>
              <div className="slots">
                {['08:30', '09:30', '10:30'].map((time) => (
                  <button
                    key={time}
                    className={`slots-button ${selectedTime === time ? 'active' : ''}`}
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="doctor-list">
              <h3>Select Doctor</h3>
              {doctors.map((doc) => (
                <div
                  key={doc.name}
                  className={`doctor-card ${selectedDoctor === doc.name ? 'active' : ''}`}
                  onClick={() => handleDoctorSelect(doc.name)}
                >
                  <img src={doc.image} alt={doc.name} className="doctor-avatar" />
                  <div className="doctor-info">
                    <strong>{doc.name}</strong>
                    <span>{doc.specialty}</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="confirm-button" onClick={handleConfirm}>
              Confirm Appointment
            </button>

            {isConfirmed && (
              <div className="appointment-summary">
                <h3>Appointment Details</h3>
                <p>📅 Date: {selectedDate}</p>
                <p>⏰ Time: {selectedTime}</p>
                <p>👨‍⚕️ Doctor: {selectedDoctor}</p>
                <p>🏥 Branch: Residency</p>
              </div>
            )}

            <div className="stats">
              <div><strong>240</strong> Qualified Doctors & Specialists</div>
              <div><strong>1,456</strong> Medical Tests Done</div>
              <div><strong>1M+</strong> Years Of Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
