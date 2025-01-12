import React from 'react';
import headerimg from '../../src/Assets/doctor.7c2bc96d67d3eba1d64a.png';
import './Home.css';
import shape1 from '../../src/Assets/download (8).png';
import shape2 from '../../src/Assets/shape2.png';
import shape3 from '../../src/Assets/download (6).png';
import shape4 from '../../src/Assets/download (7).png';
import shape5 from '../../src/Assets/download (11).png';

export default function Home() {
  return (
    <header>
        <div className="container">
            <div className="row">
                <div className="text col-md-7 col-lg-7">
                    <h5>We Provide All Health Care Solution</h5>
                    <h2>Protect Your Health And Take Care To Of Your Health</h2>
                    <button>
                        <a href="#">Read More</a>
                    </button>
                </div>
                <div className="col-md-5 col-lg-5">
                    <div className="header-box">
                        <img src={headerimg} />
                        <img src={shape1} className='shape shape1' />
                        <img src={shape2} className='shape shape2' />
                        <img src={shape3} className='shape shape3' />
                        <img src={shape4} className='shape shape4' />
                        <img src={shape5} className='shape shape5' />

                    </div>
                    
                </div>
            </div>
        </div>
    </header>
  )
}
