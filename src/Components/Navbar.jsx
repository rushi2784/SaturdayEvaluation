import React from 'react'
import style from './Sat.module.css'
function Navbar() {
    return (
        <div className={style.nav}>
            <div className={style.flex}>
                <p>Navbar</p>
                <p>Home</p>
                <p>Signin</p>
            </div>

            <i style={{ color: 'white' }} class="fa-solid fa-cart-shopping fa-2x"></i>
        </div>
    )
}

export default Navbar
