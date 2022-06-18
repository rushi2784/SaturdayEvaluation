import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';
export const ToContex = createContext();


export const ToProvider = ({ children }) => {
    const [data, setdata] = useState([])
    const [cart, setCart] = useState(0);
    // const IncrementCount = (id) => {
    //     let newCart=cart;
    //     for (let i = 0; i < newCart.length; i++) {
          
    //         if (newCart[i].id === id) {
    //             newCart[i].count++;
    //             setCart(newCart);

    //             break;
    //         }
    //     }
    // }


       
useEffect(() => {
        const getdata = async () => {
            let res = await axios.get("http://localhost:8080/data")

            setdata(res.data)
        };
        getdata();
    }, [])
    return <ToContex.Provider value={{ data ,cart,setCart}} >
        {children}
    </ToContex.Provider>
}

