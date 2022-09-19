import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { MdMenu } from 'react-icons/md';

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
                <NavLink to="/vehicles/new">Add vehicle</NavLink>
              </li>
              <li>
                <NavLink to="/vehicles">Delete vehicle</NavLink>
              </li>
            </ul>
          </Nav>
        </div>
      </div>
    </div>
  );
}

export default NavigationPanel;
