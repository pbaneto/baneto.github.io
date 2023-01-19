import React from 'react';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";

import './styles.css';
import NavBar from './NavBar';


function Modelo({modelo, price}){
  return(
    <div className="card-custom">
      <img className='img-fluid' src={require(`./photos/modelos/${modelo}.jpg`)} alt={modelo}/>

      <Link to="/buy" state={{modelo: modelo, price: price}}>
        Comprate algo
      </Link>
    </div>
  );
}

function GridModels(){
  return(
    <Grid container spacing={0.5}>
      <Grid item xm={12} sm={6} md={4}>
        <Modelo modelo={'aros_oro'} price={10}/>
      </Grid>
      <Grid item xm={12} sm={6} md={4}>
        <Modelo modelo={'cactus_plata1'} price={7}/>
      </Grid>
      <Grid item xm={12} sm={6} md={4}>
        <Modelo modelo={'aros_plata1'} price={10}/>
      </Grid>
      <Grid item xm={12} sm={6} md={4}>
        <Modelo modelo={'plumas_oro'} price={7}/>
      </Grid>
    </Grid>
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
