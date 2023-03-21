import React from 'react';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";

import './styles.css';
import NavBar from './NavBar';


function Modelo({modelo, color, price}){
  let photo_name = [modelo, color].join('_')
  return(
    <div className="card-custom">
      <img className='img-fluid' src={require(`./photos/modelos/${photo_name}.jpg`)} alt={photo_name}/>
      <div className='nombre-precio'>
          <Link to="/buy" className='comprate_algo' state={{modelo: modelo, color:color, price: price}}>
            Comprar {modelo}
          </Link>
          <span className='price'>{price} €</span>
      </div>
    </div>
  );
}

function GridModels(){
  return(
    <div className='images-container'>
      <Grid container>
        <Grid item xm={12} sm={6} md={4}>
          <Modelo modelo={'aros'} color={'oro'} price={10}/>
        </Grid>
        <Grid item xm={12} sm={6} md={4}>
          <Modelo modelo={'cactus'} color={'plata'} price={7}/>
        </Grid>
        <Grid item xm={12} sm={6} md={4}>
          <Modelo modelo={'plumas'} color={'plata'} price={10}/>
        </Grid>
      </Grid>
    </div>
  );
}


export default function Home() {
  return (
    <section>
      <NavBar />
      <GridModels />
    </section>
  );
};
