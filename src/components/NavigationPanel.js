import { Nav } from 'react-bootstrap';
import { MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';

function NavigationPanel() {
  return (
    <div className="NavigationPanel">
      <div className="nav-container">
        <MdMenu className="nav-menu-icon" />
        <div className="nav-collalpse">
          <Link className="nav-brand" to="/main">Book.it</Link>
          <Nav>
            <ul>
              <li>
                <Link to="/main">Vehicles</Link>
              </li>
              <li>
                <Link to="/reservation">Reserve</Link>
              </li>
              <li>
                <Link to="/user/reservations">My reservations</Link>
              </li>
              <li>
                <Link to="/vehicles/new">Add vehicle</Link>
              </li>
              <li>
                <Link to="/vehicles">Delete vehicle</Link>
              </li>
            </ul>
          </Nav>
        </div>
      </div>
    </div>
  );
}

export default NavigationPanel;
