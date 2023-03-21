import React from 'react';


export default function NavBar(){
    return(
      <nav className="navbar navbar-custom">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={require("./photos/logo.jpg")} width="100" height="100" alt="logo" />
            <span>.Baneto</span>
          </a>

          <a href="https://www.instagram.com/baneto.es/" className='instagram' target={'_black'}>
            <img src={require("./photos/instagram.png")} alt='instagram'/>
          </a>

        </div>
      </nav>
    );
  }