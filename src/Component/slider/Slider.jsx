import React from 'react';
import Slider from 'react-slick';
import ServiceCard from '../serviceCard/ServiceCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope,faHouseChimneyMedical,faBriefcaseMedical,faSyringe,faTruckMedical } from '@fortawesome/free-solid-svg-icons';
import './slider.css';


export default function SliderShow() {
    const settings = { 
        infinite: true,
        speed: 500, 
        slidesToShow: 3, 
        adaptiveHeight: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: null, // Remove the "Next" button
        prevArrow: null, // Remove the "Previous" button
        responsive: [
          {
              breakpoint: 995, // Adjust the breakpoint as needed
              settings: {
                  slidesToShow: 2,
              }
          },
          {
              breakpoint: 650, // Adjust the breakpoint as needed
              settings: {
                  slidesToShow: 1,
              }
          }
      ]
    };

  return (
    <div className="container">
        <Slider {...settings}> 
            <div>
              <ServiceCard icon={<FontAwesomeIcon icon={faStethoscope} className='icon1' />} title="Diagnostics" />
            </div> 
            <div>
              <ServiceCard icon={<FontAwesomeIcon icon={faHouseChimneyMedical} className='icon2' />} title="Treatment" />
            </div> 
            <div>
              <ServiceCard icon={<FontAwesomeIcon icon={faBriefcaseMedical} className='icon3' />} title="Surgery" />
            </div> 
            <div>
              <ServiceCard icon={<FontAwesomeIcon icon={faSyringe} className='icon4' />} title="Vaccine" />
            </div> 
            <div>
              <ServiceCard icon={<FontAwesomeIcon icon={faTruckMedical} className='icon5' />} title="Emergency" />
            </div> 
        </Slider> 
    </div>
  )
}
