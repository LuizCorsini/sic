import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';

function GuestRoute({ element: Component, ...rest }) {
  const isAuthenticated = true;

  return isAuthenticated ? (
    <Navigate to="/home" replace />
  ) : (
    <Route {...rest} element={<Home />} />
  );
};

export default GuestRoute;
