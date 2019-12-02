import React from 'react';
import AppLayout from './components/layouts/AppLayout'
import LoginLayout from './components/layouts/LoginLayout'
import { Route } from 'react-router-dom';

export const LoginLayoutRoute = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={matchProps => (
        <LoginLayout>
          <Component {...matchProps} />
        </LoginLayout>
      )} />
    )
  };
  
export const AppLayoutRoute = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={matchProps => (
        <AppLayout>
          <Component {...matchProps} />
        </AppLayout>
      )} />
    )
  };
  

