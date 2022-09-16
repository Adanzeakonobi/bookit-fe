import { useEffect, useState } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';
import { MdMenu } from 'react-icons/md';

function NavigationPanel(props) {
  const {
    history,
  } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  useEffect(() => {
    history.listen(() => {
      if (['/', '/sign_up'].includes(history.location.pathname)) setIsMenuOpen(false);
    });
  });
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

NavigationPanel.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object,
};

NavigationPanel.defaultProps = {
  history: window.history,
};

export default withRouter(NavigationPanel);
