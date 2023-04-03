import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import NavBar from './NavBar';
import { useLocation } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'


function UriPendientes(photo_name){
  let show = photo_name.photo_name.replace('_', ' ');
  return(
    <div className="container-fluid">
      <p>
        <span>
          <Link to="/" className="uri-pendientes">Pendients</Link>
        </span>
        <span>/</span>
        <span className="uri-modelo">
          {show}
          </span>
      </p>
    </div>);
}

function PhotoZoom(uri){
  return(
    <div>
      <InnerImageZoom
        src={require(`./photos/${uri.uri}.jpg`)}
        zoomScale={2}
        width={550}
        height={550}
      />
    </div>
    );
}



export default function Buy() {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

  const location = useLocation();
  let modelo = location.state.modelo;
  let price = location.state.price;

  const [colorActual, newColor] = useState(location.state.color);
  const changeColor = (color) => {
    newColor(color);
  }
  let photo_name = [modelo, colorActual].join('_');


  const [isShown, setIsShown] = useState(false);
  const showBuy = Event => {
    setIsShown(current => !current);
  };

  function photoUris(photo_name){
    return [{ uri: 'modelos/' + photo_name, isActive: true },
            { uri: 'ear/' + photo_name + '_bn', isActive: false },
            { uri: 'ear/' + photo_name + '_c', isActive: false },]
  }

  const [photos, setPhotos] = useState(photoUris(photo_name));

  useEffect(() => {
    setPhotos(photoUris(photo_name));
  }, [photo_name])


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
      <UriPendientes photo_name={photo_name}/>
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
                  <PhotoZoom uri={photos[0].uri}/>
                </div>
                <div className={"carousel-item" + (photos[1].isActive ? "active" : "")}>
                  <PhotoZoom uri={photos[1].uri}/>
                </div>
                <div className={"carousel-item" + (photos[2].isActive ? "active" : "")}>
                  <PhotoZoom uri={photos[2].uri}/>
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
            <p><b>PENDIENTS</b></p>
            <p>Typical Spanish. Hechos a mano.</p>
            <p>Bueno, bonito y barato</p>
            <p>Envío a domicilio.</p>

            <p>Elige un color:
              <span className="color" onClick={() => changeColor('oro')}> <u>oro</u></span> /
              <span className="color" onClick={() => changeColor('plata')}> <u>plata</u></span>
            </p>

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