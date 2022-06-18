import React, { useContext, useEffect } from 'react'
import { AuthContex } from './Auth';
import { useNavigate } from "react-router-dom";
import { ToContex } from './ContexApi';
import style from './Sat.module.css'

function Home() {
    let navigate = useNavigate();
    const { Authrized } = useContext(AuthContex);
    const { data,cart,setCart } = useContext(ToContex)
    console.log(data)

    useEffect(() => {
        if (Authrized === false) {
            navigate("/signin");
            console.log("hiii")

        }

    })
    const handleclick=()=>{

    }
    return (
        <div>Home
            <div className={style.map} >
                {data.map((item) => (
                    <div key={item.id}>

                        <p>{item.name}</p>
                        <p>{item.details}</p>
                        <button
                        onClick={handleclick}>Add</button>

                    </div>
                ))}
            </div>
        </div>
    )

}

export default Home