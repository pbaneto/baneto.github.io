import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';


export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
    <div className="container-fluid">
      <img src={require("./photos/logo_bn.jpg")} width="100" height="100" alt="logo" />
      <a className="navbar-brand navbar-name" href="/">.Baneto</a>
      <button className="navbar-toggler toggler-custom" type="button" onClick={handleNavToggle}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item li-custom">
            <Link to='/dorado' className='link-custom'>Dorado</Link>
          </li>
          <li className="nav-item li-custom">
            <Link to='/plateado' className='link-custom'>Plateado</Link>
          </li>
          <li className="nav-item li-custom">
            <Link to='/contacto' className='link-custom'>Sobre Baneto</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}
