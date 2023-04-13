import React from 'react'
import Hompage from './Hompage'
import Kidspage from './Kidspage'
import Womenspage from './Womenspage'
import Menspage from './Menspage'
import Cart from './Cart'
import Wishlist from './Wishlist'
import NotFound from './NotFound'
import Clothing from './Clothing'
import Signup from './Signup'
import ProductPage from './ProductPage'
import { Route, Routes } from 'react-router-dom'
import Address from './Address'
import Payment from './Payment'
import Success from './Success'
import PrivateRoute from '../components/PrivateRoute'
const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Hompage />} />
      <Route path='/mens' element={<Menspage />} />
      <Route path='/womens' element={<Womenspage />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/wishlist' element={
        <PrivateRoute>
          <Wishlist />
        </PrivateRoute>
      } />
      <Route path='/signup' element={<Signup />} />
      <Route path='/product/:id' element={<ProductPage />} />
      <Route path='/address' element={
        <PrivateRoute>
          <Address />
        </PrivateRoute>
      } />
      <Route path='/payment' element={
        <Payment />
      } />
      <Route path='/success' element={
        <Success />
      } />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Allroutes