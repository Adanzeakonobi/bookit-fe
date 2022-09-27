import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { MdMenu, MdClose, MdFacebook } from 'react-icons/md';
import {
  BsTwitter, BsGoogle, BsPinterest, BsInstagram,
} from 'react-icons/bs';
import '../styles/NavigationPanel.scss';

function NavigationPanel() {
  const user = useSelector((state) => state.userSessions.user);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(!['/', '/sign_up'].includes(location.pathname));
  useEffect(() => {
    if (['/login', '/signup'].includes(location.pathname)) setIsMenuOpen(false);
  }, [location]);
  return (
    <div className={`NavigationPanel ${isMenuOpen ? 'open' : ''}`}>
      <div className="nav-container">
        <MdMenu className="nav-menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        <MdClose className="nav-close-icon" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        <div className="nav-collalpse">
          <NavLink className="nav-brand" to="/main">Book.it</NavLink>
          <nav>
            <ul>
              {user.id && (
                <>
                  <li>
                    <NavLink to="/main">Vehicles</NavLink>
                  </li>
                  <li>
                    <NavLink to="/reservation">Reserve</NavLink>
                  </li>
                  <li>
                    <NavLink to="/user/reservations">My reservations</NavLink>
                  </li>
                  {user.role === 'admin' && (
                    <>
                      <li>
                        <NavLink to="/vehicle">Add vehicle</NavLink>
                      </li>
                      <li>
                        <NavLink to="/vehicles">Delete vehicle</NavLink>
                      </li>
                    </>
                  )}
                  <li>
                    <NavLink to="/logout">Logout</NavLink>
                  </li>
                </>
              )}
              {!user.id && (
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              )}
            </ul>
          </nav>
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
