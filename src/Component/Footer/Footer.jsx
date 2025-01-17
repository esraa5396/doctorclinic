import React from 'react';
import logo from '../../Assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import facebook from '../../Assets/facebook.png';
import twitter from '../../Assets/twitter.png';
import instgram from '../../Assets/instgram.png';
import linkedin from '../../Assets/linkedin.png';
import './Footer.css';
import fshape2 from '../../Assets/fshape2.png';
import fshape3 from '../../Assets/fshape3.png';
import fshape4 from '../../Assets/fshape4.png';
import fshape5 from '../../Assets/download (5).png';

export default function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 col-12 contact">
                    <img src={logo} className='footerlogo' />
                    <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
                    <div className="footer-contact">
                        <div className="footer-icon">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className="footer-text">
                            <h6>Contact Us</h6>
                            <h4>+01 123 456 789</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-6 links">
                    <h2 className='title'>Quick Links</h2>
                    <ul className='list'>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Booking</a></li>
                        <li><a href="#">Faq's</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Our Team</a></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-6 service">
                    <h2 className='title'>Our Services</h2>
                    <ul className='list'>
                        <li><a href="#">Dental Care</a></li>
                        <li><a href="#">Cardiac Clinic</a></li>
                        <li><a href="#">Massege Therapy</a></li>
                        <li><a href="#">Cardiology</a></li>
                        <li><a href="#">Precise Diagnosis</a></li>
                        <li><a href="#">Ambulance Services</a></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-12 subscribe">
                    <h2 className='title'>Subscribe</h2>
                    <form action="">
                        <input type="email" name="" id="" placeholder='Email Address' />
                        <button type="submit">Subscribe Now</button>
                    </form>
                    <ul className='social'>
                        <li><a href="#"><img src={facebook} /></a></li>
                        <li><a href="#"><img src={twitter} /></a></li>
                        <li><a href="#"><img src={instgram} /></a></li>
                        <li><a href="#"><img src={linkedin} /></a></li>
                    </ul>
                </div>
            </div>
            <div className="shape">
                <img src={fshape2} className='fshape fshape2' />
                <img src={fshape3} className='fshape fshape3' />
                <img src={fshape4} className='fshape fshape4' />
                <img src={fshape5} className='fshape fshape5' />
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <p>Copyright © 2023 Design & Developed by <a href='#'>ThemeTrades</a></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
