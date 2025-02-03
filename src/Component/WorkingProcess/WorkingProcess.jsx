import React from 'react';
import Heading from '../heading/Heading';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './workingprocess.css';
import workshape1 from '../../Assets/workshape1.png';
import workshape2 from '../../Assets/workshape2.png';
import workshape3 from '../../Assets/workshape3.png';

export default function WorkingProcess() {

  return (
    <div className="working">
      <div className="container-sm">
          <Heading ftitle="Working Process" stitle="How We Works?"/>
        <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="work-bx">
                <div className="work-num-bx">
                  01
                </div>
                <div className="work-content">
                  <h5>Make Appointment</h5>
                  <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                </div>
                  <Link to="/booking" className="view-btn">View More <FontAwesomeIcon icon={faChevronRight} /></Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="work-bx active work-bx-active mb-lg-5 mt-lg-0">
                <div className="work-num-bx">
                  02
                </div>
                <div className="work-content">
                  <h5>Take Treatment</h5>
                  <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                </div>
                  <Link to="/services" className="view-btn">View More <FontAwesomeIcon icon={faChevronRight} /></Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="work-bx">
                <div className="work-num-bx">
                  03
                </div>
                <div className="work-content">
                  <h5>Registration</h5>
                  <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                </div>
                  <Link to="/contactus" className="view-btn">View More <FontAwesomeIcon icon={faChevronRight} /></Link>
              </div>
            </div>
        </div>
      </div>
      <div className="workingshape">
        <img src={workshape1} className="shape workshape1" />
        <img src={workshape2} className="shape workshape2" />
        <img src={workshape3} className="shape workshape3" />
      </div>
    </div>
  )
}
