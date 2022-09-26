import React from 'react';
import { Navigate, Outlet } from 'react-router';
import PropTypes from 'prop-types';
import TokenManager from '../utils/tokenManger';

const AuthMiddleWare = ({
  children,
  layout: Layout,
  isAuthProtected,
}) => {
  console.log(isAuthProtected);

  console.log(TokenManager.hasToken());

  if (isAuthProtected && !TokenManager.hasToken()) {
    return <Navigate to={{ pathname: '/login' }} />;
  }

  if (!isAuthProtected && TokenManager.hasToken()) {
    return <Navigate to={{ pathname: '/main' }} />;
  }

  return (
    <Layout>
      {children || <Outlet />}
    </Layout>
  );
};

export default AuthMiddleWare;

AuthMiddleWare.propTypes = {
  children: PropTypes.node.isRequired,
  layout: PropTypes.func.isRequired,
  isAuthProtected: PropTypes.bool.isRequired,
};
