import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        {/* Brend və sosial media */}
        <div>
          <h2>MediPlus</h2>
          <p>
            Far far away, behind the <br />
            word mountains, far <br />
            from the countries.
          </p>
          <div className="media-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>

        {/* Departments */}
        <div className="two-list">
          <h2>Departments</h2>
          <a href="/departments/neurology"><i className="bi bi-arrow-right"></i> Neurology</a>
          <a href="/departments/opthalmology"><i className="bi bi-arrow-right"></i> Opthalmology</a>
          <a href="/departments/nuclear-magnetic"><i className="bi bi-arrow-right"></i> Nuclear Magnetic</a>
          <a href="/departments/surgical"><i className="bi bi-arrow-right"></i> Surgical</a>
          <a href="/departments/cardiology"><i className="bi bi-arrow-right"></i> Cardiology</a>
          <a href="/departments/dental"><i className="bi bi-arrow-right"></i> Dental</a>
        </div>

        {/* Sayt linkləri */}
        <div className="two-list">
          <h2>Links</h2>
          <a href="/"><i className="bi bi-arrow-right"></i> Home</a>
          <a href="/about"><i className="bi bi-arrow-right"></i> About</a>
          <a href="/departments"><i className="bi bi-arrow-right"></i> Departments</a>
          <a href="/doctors"><i className="bi bi-arrow-right"></i> Doctors</a>
          <a href="/blog"><i className="bi bi-arrow-right"></i> Blog</a>
          <a href="/pricing"><i className="bi bi-arrow-right"></i> Pricing</a>
          <a href="/contact"><i className="bi bi-arrow-right"></i> Contact</a>
        </div>

        {/* Xidmətlər */}
        <div className="two-list">
          <h2>Services</h2>
          <a href="/services/emergency"><i className="bi bi-arrow-right"></i> Emergency Services</a>
          <a href="/services/doctors"><i className="bi bi-arrow-right"></i> Qualified Doctors</a>
          <a href="/services/checkup"><i className="bi bi-arrow-right"></i> Outdoors Checkup</a>
          <a href="/services/24hours"><i className="bi bi-arrow-right"></i> 24 Hours Services</a>
        </div>

        {/* Əlaqə bölməsi */}
        <div className="have1-div">
          <h2>Have a Question?</h2>
          <div className="icones">
            <i className="bi bi-geo-alt-fill"></i>
            <p className="metn">
              203 Fake St. Mountain View, San Francisco, <br />
              California, USA
            </p>
          </div>
          <div className="icones">
            <i className="bi bi-telephone-fill"></i>
            <a className="metn" href="tel:+23923929210">+2 392 3929 210</a>
          </div>
          <div className="icones">
            <i className="bi bi-envelope-fill"></i>
            <a className="metn" href="mailto:info@yourdomain.com">info@yourdomain.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
