import React, { useContext } from 'react'
import { AuthContex } from './Auth';

function Signin() {
    const { Authrized, setAuthrized } = useContext(AuthContex);
    return (
        <div>Signin
            <button onClick={() => (setAuthrized(!Authrized))}>
                {Authrized ? "SignOut" : 'SiginIn'}</button>
        </div>
    )
}

export default Signin