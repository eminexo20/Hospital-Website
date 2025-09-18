import React from 'react';
import './Contact.css';
import MyMap from '../Maps/Maps'; // Yol strukturuna uyğunlaşdır

const Contact = () => {
  return (
    <div className='main-contact'>
      <div className="first-tag">
        <div className='demo1'>
          <h1>Contact US</h1>
          <p>
            Far far away, behind the word mountains, far from the countries Vokalia <br />
            and Consonantia
          </p>
          <div className='cont-one'>
            <div className="contact-card">
              <div className="icon">
                <i className="fas fa-map-signs"></i>
              </div>
              <h3 className="title">ADDRESS</h3>
              <p className="address">
                198 West 21th Street,<br />
                Suite 721 New York NY 10016
              </p>
            </div>

            <div className="contact-card">
              <div className="icon">
                <i className="fa fa-phone"></i>
              </div>
              <h3 className="title">CONTACT NUMBER</h3>
              <p className="address">+1235 2355 98</p>
            </div>

            <div className="contact-card">
              <div className="icon">
                <i className="fa fa-envelope"></i>
              </div>
              <h3 className="title">EMAIL ADDRESS</h3>
              <p className="address">info@yoursite.com</p>
            </div>

            <div className="contact-card">
              <div className="icon">
                <i className="fa fa-globe"></i>
              </div>
              <h3 className="title">WEBSITE</h3>
              <p className="address">yoursite.com</p>
            </div>
          </div>
        </div>

        <div className='demo2'>
          <Maps/>
          <div className="form-wrapper">
      <form className="contact-form">
        <input type="text" placeholder="Name" name="name" required />
        <input type="email" placeholder="E-mail" name="email" required />
        <input type="text" placeholder="Lesson" name="subject" required />
        <textarea placeholder="Mesagge" name="message" rows="5" required></textarea>
        <button type="submit">Mesaj Gönder</button>
      </form>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
