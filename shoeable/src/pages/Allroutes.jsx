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
import { Route,Routes } from 'react-router-dom'
const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Hompage/>}/>
        <Route path='/kids' element={<Kidspage/>}/>
        <Route path='/mens' element={<Menspage/>}/>
        <Route path='/womens' element={<Womenspage/>}/>
        <Route path='/clothing' element={<Clothing/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/product/:id' element={<ProductPage/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default Allroutes