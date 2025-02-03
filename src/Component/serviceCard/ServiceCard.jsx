import React from 'react';
import { Link } from 'react-router-dom';
import './servicecard.css';
import PropTypes from 'prop-types';


export default function ServiceCard({icon,title}) {
  return (
    <div className="feature-bx">
        <div className="imgbx">
          {icon}
        </div>
        <h3 className="title">{title}</h3>
        <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
        <div className="btn">
          <Link to="/service" className="view-more">View More</Link>
        </div>
    </div>
  )
}

ServiceCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};
