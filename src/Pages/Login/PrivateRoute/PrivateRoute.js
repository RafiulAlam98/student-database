import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Redirect, Route } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
     const {user,isLoading} = useAuth();
     if(isLoading){
          return <CircularProgress />
     }
     return (
          <Route
          {...rest}
          render={({ location }) =>
            user.email ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
          }
        />
     );
};

export default PrivateRoute;