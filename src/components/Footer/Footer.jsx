import React from 'react'
import "./Footer.css"
const Footer = () => {
    return (
        <div className="main">
            <div>
                <h2>MediPlus</h2>
                <p>Far far away, behind the <br /> word mountains, far <br /> from the countries.</p>
                <div className='media-icons'>
                    <i class="bi bi-twitter"><a href=""></a></i>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-instagram"></i>
                </div>
            </div>
            <div className='two-list'>
                <h2>Departments</h2>
                <a href=""><i class="bi bi-arrow-right">Neurology</i></a>
                <a href=""><i class="bi bi-arrow-right">Opthalmology</i></a>
                <a href=""><i class="bi bi-arrow-right">Nuclear Magnetic</i></a>
                <a href=""><i class="bi bi-arrow-right">Surgical</i></a>
                <a href=""><i class="bi bi-arrow-right">Cardiology</i></a>
                <a href=""><i class="bi bi-arrow-right">Dental</i></a>

                
            </div>
            <div className='two-list'>
                <h2>Links</h2>
                <a href=""><i class="bi bi-arrow-right">Home</i></a>
                <a href=""><i class="bi bi-arrow-right">About</i></a>
                <a href=""><i class="bi bi-arrow-right">Departaments</i></a>
                <a href=""><i class="bi bi-arrow-right">Doctors</i></a>
                <a href=""><i class="bi bi-arrow-right">Blog</i></a>
                <a href=""><i class="bi bi-arrow-right">Pricing</i></a>
                <a href=""><i class="bi bi-arrow-right">Contact</i></a>


            </div>
            <div className='two-list'>
                <h2>Services</h2>
                <a href=""><i class="bi bi-arrow-right">Emergency Services</i></a>
                <a href=""><i class="bi bi-arrow-right">Qualified Doctors</i></a>
                <a href=""><i class="bi bi-arrow-right">Outdoors Checkup</i></a>
                <a href=""><i class="bi bi-arrow-right">24 Hours Services</i></a>
               
            </div>
            <div>
                <h2>Have a Question?</h2>
                <div className='icones'>
                <i  class="bi bi-geo-alt-fill"></i>
                    <p className='metn'>203 Fake St. Mountain View, San Francisco, <br /> California, USA203 Fake St. Mountain View, <br /> San Francisco, California, USA</p>
                </div>
                <div>
                <i class="bi bi-telephone-fill"></i>
                    <a className='metn' href="">+2 392 3929 210</a>
                </div>
                <div>
                <i class="bi bi-envelope-fill"></i>
                    <a className='metn' href="">	info@yourdomain.com</a>
                </div>
            </div>
        </div>


    )
}

export default Footer
