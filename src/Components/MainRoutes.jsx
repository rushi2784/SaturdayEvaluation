import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Home from './Home'
import Navbar from './Navbar'
import Signin from './Signin'
function MainRoutes() {
    return (

        <Routes>
            <Route path='/' element={<Navbar />} />
            <Route path='/home' element={<Home />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/cart' element={<Cart />} />

        </Routes>

    )
}

export default MainRoutes
