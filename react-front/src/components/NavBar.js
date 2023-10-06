import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  
  const hasToken = localStorage.getItem("token");

  const navigate = useNavigate();

useEffect((hasToken,navigate)=>{
    if (hasToken) {
      navigate("/data");
    }
},[])


  const logOut = ()=>{
    localStorage.removeItem('token')
    navigate("/")
  }

  return (
    <div className="navbar bg-dark justify-content-start">
      {!hasToken && <Link to="/" className="nav-link m-2">Login</Link>}
      {!hasToken && <Link to="/SignUp" className="nav-link m-2">SignUp</Link>}
      <Link to="/About" className="nav-link m-2">About Us</Link>
      {hasToken && <Link to="/data" className="nav-link m-2">Data</Link>}
      {hasToken && <button onClick={logOut}>logOut</button>}
    </div>
  );
}

export default NavBar;
