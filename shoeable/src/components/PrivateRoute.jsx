import React, { Children } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom'
import { useDisclosure } from '@chakra-ui/react';
import Signup from '../pages/Signup';
const PrivateRoute = ({children}) => {
  const {state,dispatch} = useContext(AuthContext);
  const {onOpen } = useDisclosure();
  if(!state.isAuth){
    return <Signup/>
  }
  return children
}

export default PrivateRoute