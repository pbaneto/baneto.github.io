import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from './NavBar';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Checkout from './Checkout';


function FirstPhoto({modelo}){
  return(
    <img src={require(`./photos/modelos/${modelo}.jpg`)} alt="primera" id="primera" className="img-fluid"/>
  );
}

function SecondPhoto({modelo}){
  return(
    <img src={require(`./photos/ear/${modelo}_bn.jpg`)} alt="segunda" id="segunda" className="img-fluid"/>
  );
}

function ThirdPhoto({modelo}){
  return(
    <img src={require(`./photos/ear/${modelo}_c.jpg`)} alt="tercera" id="tercera" className="img-fluid"/>
  );
}


export default function Buy() {
  const location = useLocation();
  let modelo = location.state.modelo;
  // let price = location.state.price;

  const CLIENT_ID = 'test';

  return (
    <>
      <NavBar />
      <div classNameName="container-fluid">
        <div className="row">
          <div className="col-md-2"></div>

          <div className="col-md-1">
            <div className="row">
              <FirstPhoto modelo={modelo}/>
            </div>
            <div className="row">
              <SecondPhoto modelo={modelo}/>
            </div>
            <div className="row">
              <ThirdPhoto modelo={modelo}/>
            </div>
          </div>

          <div className="col-md-4">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <FirstPhoto modelo={modelo}/>
                </div>
                <div className="carousel-item">
                  <SecondPhoto modelo={modelo}/>
                </div>
                <div className="carousel-item">
                  <ThirdPhoto modelo={modelo}/>
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

            {/* <div>
              <button className="button-buy">
                <img id="arrow-buy" src="https://svgshare.com/i/pUs.svg" alt="arrow_buy"/>
                Comprar ya!
              </button>
            </div> */}

            <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
            <div className="App">
              <header className="App-header">
                <p>
                  Buy an atom!
                </p>
              <Checkout />
              </header>
            </div>
            </PayPalScriptProvider>

            {/* <div id="paypal-button-container"></div> */}
            <script
              src="https://www.paypal.com/sdk/js?client-id=&currency=EUR"
              data-sdk-integration-source="button-factory"
            ></script>
          </div>

          <div className="col-md-2"></div>
        </div>
      </div>
    </>

  );
};