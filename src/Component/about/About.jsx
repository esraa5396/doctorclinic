import React from 'react';
import './about.css';
import pic1 from '../../Assets/pic1.jpg';
import pic2 from '../../Assets/pic2.jpg';
import pic3 from '../../Assets/pic3.jpg';
import Heading from '../heading/Heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckMedical,faStethoscope,faBedPulse,faSyringe } from '@fortawesome/free-solid-svg-icons'
import aboutshape1 from '../../Assets/aboutshape1.png';
import aboutshape2 from '../../Assets/aboutshape2.png';
import aboutshape3 from '../../Assets/aboutshape3.png';
import aboutshape4 from '../../Assets/aboutshape4.png';


export default function About() {
  return (
    <div className="about">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 mb-30">
                    <div className="image">
                        <ul>
                            <li className='pic1'>
                                <img src={pic1} className='aboutpic1' />
                            </li>
                            <li className='pic2'>
                                <img src={pic2} className='aboutpic2' />
                            </li>
                            <li className='pic3'>
                                <img src={pic3} className='aboutpic3' />
                            </li>
                            <li className='pic4'>
                                <div className="ex-bx">
                                    20
                                    <span>Year Experirnce</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 mb-30">
                    <div className="heading-bx">
                        <Heading ftitle="About Us" stitle="The Great Place Of Medical Hospital Center"/>
                        <p>We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-sm-6">
                            <div className="feature feature1">
                                <div className="feature-icon feature-icon1">
                                    <FontAwesomeIcon icon={faTruckMedical} />
                                </div>
                                <div className="feature-content">
                                    <h4>Emergency Help</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <div className="feature feature2">
                                <div className="feature-icon feature-icon2">
                                    <FontAwesomeIcon icon={faStethoscope} />
                                </div>
                                <div className="feature-content">
                                    <h4>Qualified Doctors</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <div className="feature feature3">
                                <div className="feature-icon feature-icon3">
                                    <FontAwesomeIcon icon={faBedPulse} />
                                </div>
                                <div className="feature-content">
                                    <h4>Best Professional</h4>
                                </div>
                            </div>                        
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <div className="feature feature4">
                                <div className="feature-icon feature-icon4">
                                    <FontAwesomeIcon icon={faSyringe} />
                                </div>
                                <div className="feature-content">
                                    <h4>Medical Treatment</h4>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <button className='readmore'>Read More</button>
                </div>
            </div>
        </div>
        <div className="aboutshape">
            <img src={aboutshape1} className='shape aboutshape1' />
            <img src={aboutshape2} className='shape aboutshape2' />
            <img src={aboutshape3} className='shape aboutshape3' />
            <img src={aboutshape4} className='shape aboutshape4' />
        </div>
    </div>
  )
}
