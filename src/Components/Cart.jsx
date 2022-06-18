import React, { useContext, useEffect } from 'react'
import { AuthContex } from './Auth';
import { useNavigate } from "react-router-dom";
import { ToContex } from './ContexApi';
import style from './Sat.module.css'
function Cart() {
    let navigate = useNavigate();
    const { Authrized } = useContext(AuthContex);
    const { data } = useContext(ToContex)
    useEffect(() => {
        if (Authrized === false) {
            navigate("/signin");

        }

    })

    return (
        <div>Cart
            <div className={style.cart}>
            {data.map((item) => (
                <div key={item.id}>

                    <p>{item.name}</p>
                    <p>{item.details}</p>
                    <button>Add</button>

                </div>
            ))}
            </div>
        </div>
    )
}

export default Cart