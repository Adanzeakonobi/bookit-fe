import React from 'react';
import PropTypes from 'prop-types';
import NavigationPanel from '../components/NavigationPanel';

function NoAuthLayout({ children }) {
  return (
    <div className="no-auth-layout">
      <NavigationPanel />
      {children}
    </div>
  );
}

export default NoAuthLayout;

NoAuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};