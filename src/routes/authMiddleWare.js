/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router';
import PropTypes from 'prop-types';
import TokenManager from '../utils/tokenManger';

const AuthMiddleWare = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (isAuthProtected && !TokenManager.hasToken()) {
        return <Redirect to={{ pathname: '/login' }} />;
      }

      return (
        <Layout>
          <Component {...props} />
        </Layout>
      );
    }}
  />
);

export default AuthMiddleWare;

AuthMiddleWare.propTypes = {
  component: PropTypes.func.isRequired,
  layout: PropTypes.func.isRequired,
  isAuthProtected: PropTypes.bool.isRequired,
};
