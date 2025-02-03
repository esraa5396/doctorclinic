import React from 'react';
import mobile from '../../Assets/mobile.png';
import girl from '../../Assets/girl.png';
import right from '../../Assets/right.png';
import setting from '../../Assets/setting.png';
import location from '../../Assets/location.png';
import like from '../../Assets/like.png';
import './appointment.css';

export default function Appointment() {
  return (
    <div className="appointment">
        <div className="container-fluid">
            <div className="inner-appointment">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-5 col-lg-6 col-md-6">
                            <form action="" className='appointment-form'>
                                <h3 className="title">Book Appointment</h3>
                                <div className="form-group">
                                    <select name="" id="" className='form-control'>
                                        <option value="">Select Department</option>
                                        <option value="">One</option>
                                        <option value="">Two</option>
                                        <option value="">Three</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select name="" id="" className='form-control'>
                                        <option value="">Select Doctor</option>
                                        <option value="">One</option>
                                        <option value="">Two</option>
                                        <option value="">Three</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="" id="" placeholder="Your Name" className='form-control'/>
                                </div>
                                <div className="form-group">
                                    <input type="number" name='' id='' placeholder='Phone Numbers' className='form-control'/>
                                </div>
                                <div className="form-group">
                                    <input type="date" name='' id='' className='form-control' />
                                </div>
                                <div className="btn-form">
                                    <button type='submit' className='btn-submit'>Appointment Now</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-xl-7 col-lg-6 col-md-6">
                            <div className="images">
                                <img src={mobile} className='mobile'/>
                                <div className="image-group">
                                    <img src={girl} className='girl' />
                                    <img src={location} className='location' />
                                    <img src={setting} className='setting' />
                                    <img src={right} className='right' />
                                    <img src={like} className='like' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
