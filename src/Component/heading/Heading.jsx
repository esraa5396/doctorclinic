import React from 'react';
import './heading.css';

export default function Heading({ftitle, stitle}) {
  return (
    <div className='heading'>
        <div className="container">
            <h6 className='ftitle'>{ftitle}</h6>
            <h2 className='stitle'>{stitle}</h2>
        </div>
    </div>
  )
}
