import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import Auth from './auth';

const PrivateRoute = ({component: Component,isready,deals,createNew, ...rest}) => {
  console.log(Auth);
  return (
    <Route
      {...rest}
      render={props =>
        Auth.getAuthenticated() === true ? (
          <Component  isready={isready} createNew={createNew} deals={deals}  {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
