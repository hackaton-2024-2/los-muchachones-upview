import React from 'react';
import { routes } from '../../utils';
import { Navigate, Outlet } from 'react-router-dom';


const UnprotectedRoute = ({ isLoggedIn }) => {

  return isLoggedIn ? <Navigate to={routes.home.path} replace /> : <Outlet />;
};

export default UnprotectedRoute;
