import React from 'react';


export default function NavBar(){
    return(
      <nav className="navbar navbar-custom">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={require("./photos/logo_bn.jpg")} width="100" height="100" alt="logo" />
            <span>.Baneto</span>
          </a>

          <div>
            <a href="https://www.instagram.com/baneto.es/" className='instagram' target={'_black'}>
              <img src={require("./photos/instagram.png")} alt='instagram'/>
            </a>

            <a href="/" className='instagram'>
              <img alt='whatsapp' src="https://img.icons8.com/ios/50/null/whatsapp--v1.png"/>
            </a>
          </div>
        </div>
      </nav>
    );
  }