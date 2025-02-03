import React from 'react';
import Heading from '../heading/Heading';
import { Link } from 'react-router-dom';
import SliderShow from '../slider/Slider';
import './services.css';
import serviceshape1 from '../../Assets/serviceshape1.png';
import serviceshape2 from '../../Assets/serviceshape2.png';
import serviceshape3 from '../../Assets/serviceshape3.png';
import serviceshape4 from '../../Assets/serviceshape4.png';

export default function Services() {
  return (
    <div className="services">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-4 col-lg-7 text">
                    <div className="heading-bx">
                        <Heading ftitle="Services" stitle="We Cover A Big Variety Of Medical Services"/>
                        <p>We provide the special tips and advice’s of heath care treatment and high level of best.</p>
                    </div>
                    <div className="services-btn-bx">
                        <Link to="/service" className="service-btn">All Services</Link>
                    </div>
                </div>
                <div className="col-xl-8">
                    <SliderShow />
                </div>
            </div>
        </div>
        <div className="serviceshape">
            <img src={serviceshape1}  className='shape serviceshape1' />
            <img src={serviceshape2}  className='shape serviceshape2' />
            <img src={serviceshape3}  className='shape serviceshape3' />
            <img src={serviceshape4}  className='shape serviceshape4' />
        </div>
    </div>
  )
}
