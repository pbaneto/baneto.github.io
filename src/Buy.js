import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import NavBar from './NavBar';
import { useLocation } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';


function UriPendientes(modelo){
  
  return(
    <div className="container-fluid">
      <p>
        <span>
          <Link to="/" className="uri-pendientes">Pendients</Link>
        </span>
        <span>/</span>
        <span className="uri-modelo">
          {modelo.modelo}
          </span>
      </p>
    </div>);
}


export default function Buy() {
  const location = useLocation();
  let modelo = location.state.modelo;
  let price = location.state.price;

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

  const [isShown, setIsShown] = useState(false);
  const showBuy = Event => {
    setIsShown(current => !current);
  };

  const [photos, setPhotos] = useState([
    { uri: 'modelos/' + modelo, isActive: true },
    { uri: 'ear/' + modelo + '_bn', isActive: false },
    { uri: 'ear/' + modelo + '_c', isActive: false },
  ]);

  function setActivePhoto(index){
    let newPhotos = photos.map((photo, i) => {
      if (i === index) {
        return { ...photo, isActive: true }
      }
      return { ...photo, isActive: false }
    })
    setPhotos(newPhotos)
  }

  return (
    <>
      <NavBar />
      <UriPendientes modelo={modelo}/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2"></div>

          <div className="col-md-1">
            {photos.map((photo, index) => (
              <img
                key={photo.uri}
                alt={photo.uri}
                src={require(`./photos/${photo.uri}.jpg`)} 
                className={'img-fluid'}
                onClick={() => setActivePhoto(index)}
                style={{opacity: photo.isActive ? 1 : 0.5}}
              />
            ))}
          </div>

          <div className="col-md-4">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    
              <div className="carousel-inner">

                <div className={"carousel-item" + (photos[0].isActive ? "active" : "")} >
                  <img 
                    src={require(`./photos/${photos[0].uri}.jpg`)} 
                    className='img-fluid'
                    alt='primera'/>
                </div>

                <div className={"carousel-item" + (photos[1].isActive ? "active" : "")}>
                  <img 
                    src={require(`./photos/${photos[1].uri}.jpg`)} 
                    className='img-fluid'
                    alt='segunda'/>
                </div>

                <div className={"carousel-item" + (photos[2].isActive ? "active" : "")}>
                  <img 
                    src={require(`./photos/${photos[2].uri}.jpg`)} 
                    className='img-fluid'
                    alt='tercera'/>
                </div>

              </div>

              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" ></span>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <p>PENDIENTS</p>
            <p>Bueno, bonito y barato.</p>
            <p>Envio a domicilio.</p>

            <div>
              <button id="button-buy" onClick={showBuy}>
                <img id="arrow-buy" src="https://svgshare.com/i/pUs.svg" alt="arrow_buy"
                  style={{
                    transform: isShown ? 'rotate(0deg)': 'rotate(180deg)'
                  }}/>
                <b> Compra compra!</b>
              </button>
            </div>
            {isShown && (
            <PayPalScriptProvider options={{"client-id": CLIENT_ID, "currency": "EUR" }}>
              <div className="App">
                <header className="App-header">
                  <PayPalButtons
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: price,
                                    },
                                },
                            ],
                        });
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then((details) => {
                            const name = details.payer.name.given_name;
                            alert(`Bien hecho ${name}!`);
                        });
                    }}
                />
                </header>
              </div>
            </PayPalScriptProvider>
          )}

          </div>

          <div className="col-md-2"></div>
        </div>
      </div>
    </>

  );
};