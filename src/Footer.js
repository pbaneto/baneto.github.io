
export default function Footer(){
    return(
      <div className='footer'>
        <div className='row'>
          <div className='col'>
            <a href="https://www.instagram.com/baneto.es/" className='instagram' target={'_black'}>
              <img src={require("./photos/instagram.png")} alt='instagram'/>
            </a>
          </div>
          <div className='col'>
            2023 © Baneto
          </div>
        </div>
      </div>
    );

  }