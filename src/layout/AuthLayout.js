import React from 'react';
import PropTypes from 'prop-types';
import NavigationPanel from '../components/NavigationPanel';

function AuthLayout({ children }) {
  return (
    <div className="auth-layout">
      <NavigationPanel />
      {children}
    </div>
  );
}

export default AuthLayout;

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
