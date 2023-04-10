import React from 'react';


export default function NavBar(){
  return(
    <nav className="navbar navbar-expand-lg navbar-custom">
      <a className="navbar-brand" href="/#">
        <img src={require("./photos/logo_bn.jpg")} width="100" height="100" alt="logo" />
        <span>.Baneto</span>
        </a>
      {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> */}
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" href="/oro">Oro</a>
          <a className="nav-link" href="/plata">Plata</a>
        </div>
      </div>

      <div>
        <a href="https://www.instagram.com/baneto.es/" className='instagram' target={'_black'}>
          <img src={require("./photos/instagram.png")} alt='instagram'/>
        </a>

        <a href="/" className='instagram'>
          <img alt='whatsapp' src="https://img.icons8.com/ios/50/null/whatsapp--v1.png"/>
        </a>
      </div>
    </nav>
  );
}

