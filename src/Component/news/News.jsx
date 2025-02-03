import React from 'react';
import {cart} from '../../data';
import Heading from '../heading/Heading';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays,faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './news.css';
import newsshape1 from '../../Assets/newsshape1.png';
import newsshape2 from '../../Assets/newsshape2.png';
import newsshape3 from '../../Assets/newsshape3.png';
import newsshape4 from '../../Assets/newsshape4.png';

export default function News() {
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
    <div className="news">
        <div className="container">
            <Heading ftitle={'Latest News'} stitle={'Our Latest News'} />
            <Slider {...settings}> 
                {cart.map((singlecart) => (
                    <div>
                        <div className="blog-card">
                            <div className="blog-image">
                                <img src={singlecart.img} />
                            </div>
                            <div className="blog-info">
                                <ul>
                                    <li className='author'>
                                        <img src={singlecart.doc} />
                                        <span>{singlecart.name}</span>
                                    </li>
                                    <li className="date">
                                        <FontAwesomeIcon icon={faCalendarDays} />
                                        <span>{singlecart.date}</span>
                                    </li>
                                </ul>
                                <h5><a href='#'>{singlecart.title}</a></h5>
                                <a href='#' className="read-more">
                                    Read More
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </a>
                            </div>
                        </div>
                    </div> 
                ))}
            </Slider>
        </div>
        <div className="newsshape">
            <img src={newsshape1} className='shape newsshape1' />
            <img src={newsshape2} className='shape newsshape2' />
            <img src={newsshape3} className='shape newsshape3' />
            <img src={newsshape4} className='shape newsshape4' />
        </div>
    </div>
  )
}
