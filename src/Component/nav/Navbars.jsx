import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Nav.css';
import logo from '../../Assets/logo.png'
import whitelogo from '../../Assets/whitelogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Navbars() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 50) {
              setScrolled(true);
          } else {
              setScrolled(false);
          }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);


  return (
    <Navbar expand="lg" className={scrolled ? 'nav scrolled' : 'nav'}>
      <Container>
        <Navbar.Brand href="#home">
          <img className='blacklogo' src={logo} title='logo'/>
          <img className='whitelogo' src={whitelogo} title='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Home</Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link to={'/about'}> About Us</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">FAQ's</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Booking</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Error 404</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Login / Register</NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Service Detail</NavDropdown.Item>
        
            </NavDropdown>
            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Blog Details</NavDropdown.Item>
              
            </NavDropdown>
            {/* <Nav.Link href="#home">Contact Us</Nav.Link> */}
            <Nav.Link><FontAwesomeIcon icon={faSearch} rotation={90} className='search'/></Nav.Link>
            <Nav.Link className='phone'><i className="fa-solid fa-phone"></i> (+01) 999 888 777</Nav.Link>
            <Nav.Link>
              <button> Contact US <span> <i class="fa-solid fa-chevron-right"></i> </span></button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
