import React from 'react';
import PropTypes from 'prop-types';

function NoAuthLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}

export default NoAuthLayout;

NoAuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
