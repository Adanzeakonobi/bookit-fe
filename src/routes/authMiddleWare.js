import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/userSessions/userSessions';
import TokenManager from '../utils/tokenManger';
import UserObjectManager from '../utils/userObjectManager';

const AuthMiddleWare = ({
  children,
  layout: Layout,
  isAuthProtected,
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userSessions.user);

  useEffect(() => {
    if (UserObjectManager.hasUserObject() && !user.id) {
      const userObject = UserObjectManager.getUserObject();
      dispatch(setUser(userObject));
    }
  }, []);

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
