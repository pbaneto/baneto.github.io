import React from 'react';
import Grid from '@mui/material/Grid';
import { Link, useLocation } from "react-router-dom";
import './styles.css';
import NavBar from './NavBar';


function Modelo({modelo, color, price}){
  let photo_name = [modelo, color].join('_')
  return(
    <div className="card-custom">
      <div className='nombre-precio'>
        <Link to="/buy" className='comprate_algo' state={{modelo: modelo, color:color, price: price}}>
          <img className='img-fluid' src={require(`./photos/modelos/${photo_name}.jpg`)} alt={photo_name}/>
          Comprar
          <span className='price'>{price} €</span>
        </Link>
      </div>
    </div>
  );
}


function GridModels(color){
  var chosen_color;
  if (color.color === ""){
    chosen_color = "plata";
  }else{
    chosen_color = color.color;
  }
  return(
    <div>
      <div className='images-container'>
        <Grid container >
          <Grid item xm={12} sm={6} md={4}>
            <Modelo modelo={'aros'} color={chosen_color} price={12}/>
          </Grid>
          <Grid item xm={12} sm={6} md={4}>
            <Modelo modelo={'cactus'} color={chosen_color} price={7}/>
          </Grid>
          <Grid item xm={12} sm={6} md={4}>
            <Modelo modelo={'plumas'} color={chosen_color} price={7}/>
          </Grid>
          <Grid item xm={12} sm={6} md={4}>
            <Modelo modelo={'caras'} color={'plata'} price={10}/>
          </Grid>
          <Grid item xm={12} sm={6} md={4}>
            <Modelo modelo={'hojas'} color={'oro'} price={7}/>
          </Grid>
          <Grid item xm={12} sm={6} md={4}>
            <Modelo modelo={'colgantes'} color={'oro'} price={7}/>
          </Grid>
        </Grid>
      </div>
    </div>

  );
}


export default function Home() {
  const location = useLocation();
  var color = location.pathname.split('/')[1];

  return (
    <section>
      <NavBar />
      <GridModels color={color} />
    </section>
  );
};
