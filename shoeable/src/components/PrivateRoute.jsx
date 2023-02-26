import React, { Children } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom'
const PrivateRoute = ({children}) => {
  const [state,dispatch] = useContext(AuthContext);
  if(state.isAuth){
    return <Navigate to={"/"}/>
  }
  return children
}

export default PrivateRoute