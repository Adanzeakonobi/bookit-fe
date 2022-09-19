import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { MdMenu, MdFacebook } from 'react-icons/md';
import {
  BsTwitter, BsGoogle, BsPinterest, BsInstagram,
} from 'react-icons/bs';
import '../styles/NavigationPanel.scss';

function NavigationPanel() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  useEffect(() => {
    if (['/', '/sign_up'].includes(location.pathname)) setIsMenuOpen(false);
  }, [location]);
  return (
    <div className="NavigationPanel">
      <div className={`nav-container ${isMenuOpen ? 'open' : ''}`}>
        <MdMenu className="nav-menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        <div className="nav-collalpse">
          <NavLink className="nav-brand" to="/main">Book.it</NavLink>
          <Nav>
            <ul>
              <li>
                <NavLink to="/main">Vehicles</NavLink>
              </li>
              <li>
                <NavLink to="/reservation">Reserve</NavLink>
              </li>
              <li>
                <NavLink to="/user/reservations">My reservations</NavLink>
              </li>
              <li>
                <NavLink to="/vehicle">Add vehicle</NavLink>
              </li>
              <li>
                <NavLink to="/vehicles">Delete vehicle</NavLink>
              </li>
            </ul>
          </Nav>
        </div>
        <div className="nav-social-links">
          <a href="#/">
            <BsTwitter />
          </a>
          <a href="#/">
            <MdFacebook />
          </a>
          <a href="#/">
            <BsGoogle />
          </a>
          <a href="#/">
            <BsInstagram />
          </a>
          <a href="#/">
            <BsPinterest />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavigationPanel;
