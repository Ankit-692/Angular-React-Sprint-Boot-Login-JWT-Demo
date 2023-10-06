import React from "react";
import { useNavigate } from "react-router-dom";

function SignUp(){

    const navigate = useNavigate()

    if(localStorage.getItem('token')){
        navigate("/data")
    }

    return(
        <>
            <h1>Sign Up</h1>
        </>
    )
}


export default SignUp;