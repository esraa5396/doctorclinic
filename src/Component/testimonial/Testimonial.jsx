import React from 'react';
import './testimonial.css';
import Heading from '../heading/Heading';
import testimonial from '../../Assets/testimonail.png';
import doc1 from '../../Assets/doc1.jpg';
import doc2 from '../../Assets/doc2.jpg';
import doc3 from '../../Assets/doc3.jpg';
import doc4 from '../../Assets/doc4.jpg';
import doc5 from '../../Assets/doc5.jpg';
import doc6 from '../../Assets/doc6.jpg';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import testimonialshape1 from '../../Assets/testimonialshape1.png';
import testimonialshape2 from '../../Assets/testimonialshape2.png';
import testimonialshape3 from '../../Assets/testimonialshape3.png';
import testimonialshape4 from '../../Assets/testimonialshape4.png';


export default function Testimonial() {
    const settings = { 
        infinite: true,
        speed: 500, 
        slidesToShow: 1, 
        adaptiveHeight: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true
    };

  return (
    <div className="testimonial">
        <div className="container">
            <Heading ftitle="Testimonial" stitle="See What Are The Patients Saying About us"/>
            <div className="row align-items-center">
                <div className="col-lg-6 text-center">
                    <div className="image">
                        <img src={testimonial} className='bg-img' />
                        <ul>
                            <li className='doc1'>
                                <img src={doc1} className='doc1img' />
                            </li>
                            <li className='doc2'>
                                <img src={doc2} className='doc2img' />
                            </li>
                            <li className='doc3'>
                                <img src={doc3} className='doc3img' />
                            </li>
                            <li className='doc4'>
                                <img src={doc4} className='doc4img' />
                            </li>
                            <li className='doc5'>
                                <img src={doc5} className='doc5img' />
                            </li>
                            <li className='doc6'>
                                <img src={doc6} className='doc6img' />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <Slider {...settings}> 
                        <div>
                            <div className="testimonial-bx">
                                <div className="testimonial-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.</p>
                                </div>
                                <div className="client-info">
                                    <h5 className="name">John Doe</h5>
                                    <p>PATIENT</p>
                                </div>
                                <div className="quote-icon">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                </div>
                            </div>
                        </div> 
                        <div>
                            <div className="testimonial-bx">
                                <div className="testimonial-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.</p>
                                </div>
                                <div className="client-info">
                                    <h5 className="name">Ronald Richard</h5>
                                    <p>PATIENT</p>
                                </div>
                                <div className="quote-icon">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                </div>
                            </div>
                        </div> 
                    </Slider> 
                </div>
            </div>
        </div>
        <div className="testimonialshape">
            <img src={testimonialshape1} className="shape testimonialshape1" />
            <img src={testimonialshape2} className="shape testimonialshape2" />
            <img src={testimonialshape3} className="shape testimonialshape3" />
            <img src={testimonialshape4} className="shape testimonialshape4" />
        </div>
    </div>
  )
}
