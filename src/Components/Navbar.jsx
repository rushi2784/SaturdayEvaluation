import React from 'react'
import style from './Sat.module.css'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div className={style.nav}>
            <div className={style.flex}>
                <p>Navbar</p>
                <Link to='/'>Home</Link>
                <Link to='/signin'>Signin</Link>

            </div>

            <Link to='/cart'>  <i style={{ color: 'white' }} className="fa-solid fa-cart-shopping fa-2x"></i>   </Link>
        </div>
    )
}

export default Navbar
