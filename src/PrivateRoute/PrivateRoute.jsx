/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const loaction = useLocation();

  if(loading){
    return(
      <div>Loading......</div>
    )
  }
  if(user){
    return children;
  }
  return (
    <Navigate to="/login" state={{from: loaction}} replace></Navigate>
  )
}

export default PrivateRoute