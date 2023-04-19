import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import NavBar from './NavBar';
import { useLocation } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'
import Footer from './Footer';

function UriPendientes(photo_name){
  let show = photo_name.photo_name.replace('_', ' ');
  return(
    <div className="container-fluid">
      <p>
        <span>
          <Link to="/" className="uri-pendientes">Pendientes</Link>
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
    <div className="photo-zoom-centrar">
      <InnerImageZoom
        src={require(`./photos/${uri.uri}.jpg`)}
        zoomScale={2}
        width={550}
        height={550}
      />
    </div>
    );
}


function RefranFooter(index_refran){

  var refranes = require('./refranes/refranes.json');

  return(
    <div className="row refran">
      <p><i><q>
        {refranes[index_refran.index_refran]}
      </q></i></p>
  </div>
  );
}



function photoUris(photo_name){
  return [{ uri: 'modelos/' + photo_name, isActive: true },
        { uri: 'ear/' + photo_name + '_bn', isActive: false },
        { uri: 'ear/' + photo_name + '_c', isActive: false },]
}


export default function Buy() {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

  const location = useLocation();
  let modelo = location.state.modelo;
  let price = location.state.price;
  let color_option = location.state.color_option;
  let index_refran = location.state.index_refran;

  const [colorActual, newColor] = useState(location.state.color);
  const changeColor = (color) => {
    newColor(color);
  }
  let photo_name = [modelo, colorActual].join('_');


  const [isShown_comprar, setIsShown_comprar] = useState(false);
  const showBuy = Event => {
    setIsShown_comprar(current => !current);
  };


  const [isShown_description, setIsShown_description] = useState(false);
  const showDescription = Event => {
    setIsShown_description(current => !current);
  };


  const [photos, setPhotos] = useState(photoUris(photo_name));
  console.log(photos)

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

          {/* Large devices */}
          <div className="col-md-1 d-none d-md-block">
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
                <div className={"carousel-item " + (photos[0].isActive ? "active" : "")} >
                  <PhotoZoom uri={photos[0].uri}/>
                </div>
                <div className={"carousel-item " + (photos[1].isActive ? "active" : "")}>
                  <PhotoZoom uri={photos[1].uri}/>
                </div>
                <div className={"carousel-item " + (photos[2].isActive ? "active" : "")}>
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

          {/* Small devices */}
          <div className="col-md-1 d-block d-md-none">
            <div className="row justify-content-center">
              {photos.map((photo, index) => (
              <div className="col-3">
                <img
                  key={photo.uri}
                  alt={photo.uri}
                  src={require(`./photos/${photo.uri}.jpg`)}
                  className={'img-fluid'}
                  onClick={() => setActivePhoto(index)}
                  style={{opacity: photo.isActive ? 1 : 0.5}}
                />
              </div>
            ))}
            </div>
          </div>

          <div className="col-md-4 description">
            <RefranFooter index_refran={index_refran}/>
            <p><b>PENDIENTES</b></p>

            <div>
              <button id="button-buy" onClick={showDescription}>
                <img id="arrow-buy" src="https://svgshare.com/i/pUs.svg" alt="arrow_buy"
                  style={{
                    transform: isShown_description ? 'rotate(0deg)': 'rotate(-90deg)'
                  }}/>
                <b> Descripción</b>
              </button>
            </div>
            {isShown_description && (
              <div>
                <p>Typical Spanish. Hechos a mano.</p>
                <p>En cuanto a los materiales, el plateado es más resistente porque es <i>acero ionxidable</i> y se queda el brillo mucho tiempo. El dorado también brilla pero se desgasta antes.</p>
                <p>Envío a domicilio.</p>

                {/* Check which color exists */}
                {color_option ?
                  <p>Elige un color:
                    <span className="color" onClick={() => changeColor('dorado')}> <u>dorado</u></span> /
                    <span className="color" onClick={() => changeColor('plateado')}> <u>plateado</u></span>
                  </p>:
                  <p>Solo hay disponibles en {colorActual}</p>}
              </div>
              )}

            <div>
              <button id="button-buy" onClick={showBuy}>
                <img id="arrow-buy" src="https://svgshare.com/i/pUs.svg" alt="arrow_buy"
                  style={{
                    transform: isShown_comprar ? 'rotate(0deg)': 'rotate(-90deg)'
                  }}/>
                <b> Comprar</b>
              </button>
            </div>
            {isShown_comprar && (
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

          {/* <div className="col-md-2"></div> */}
        </div>
      </div>
      <Footer/>
    </>

  );
};