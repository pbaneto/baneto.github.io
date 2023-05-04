import React from 'react';
import Grid from '@mui/material/Grid';
import { Link, useLocation } from "react-router-dom";
import './styles.css';
import NavBar from './NavBar';
import Footer from './Footer';


function Modelo({modelo, color, price, color_option}){
  let photo_name = [modelo, color].join('_')

  var refranes = require('./refranes/refranes.json');
  var index_refran = Math.floor(Math.random() * (refranes.length  + 1));

  return(
    <div className="card-custom">
      <div className='nombre-precio'>
        <Link to="/buy" className='comprate_algo' state={{modelo: modelo, color:color, price: price, color_option: color_option, index_refran: index_refran}}>
          <img className='img-fluid' src={require(`./photos/modelos/${photo_name}.jpg`)} alt={photo_name}/>
          {modelo}
          <span className='price'>{price} €</span>
        </Link>
      </div>
    </div>
  );
}


function GridModels(color){
  var chosen_color;
  if (color.color === ""){
    chosen_color = "plateado";
  }else{
    chosen_color = color.color;
  }
  return(
    <div>
      <div className='images-container'>
        <Grid container >
          <Grid item xm={12} sm={6} md={4}>
            <Modelo modelo={'aros'} color={chosen_color} price={12} color_option={true}/>
          </Grid>
          <Grid item xm={12} sm={6} md={4}>
            <Modelo modelo={'cactus'} color={chosen_color} price={7} color_option={true}/>
          </Grid>
          <Grid item xm={12} sm={6} md={4}>
            <Modelo modelo={'caras'} color={chosen_color} price={10} color_option={true}/>
          </Grid>
          <Grid item xm={12} sm={6} md={4}>
            <Modelo modelo={'plumas'} color={chosen_color} price={7} color_option={true}/>
          </Grid>
          <Grid item xm={12} sm={6} md={4}>
            <Modelo modelo={'manos'} color={chosen_color} price={7} color_option={true}/>
          </Grid>
          <Grid item xm={12} sm={6} md={4}>
            <Modelo modelo={'lunas'} color={'plateado'} price={10} color_option={false}/>
          </Grid>
          <Grid item xm={12} sm={6} md={4}>
            <Modelo modelo={'colgantes'} color={'dorado'} price={10} color_option={false}/>
          </Grid>
          <Grid item xm={12} sm={6} md={4}>
            <Modelo modelo={'hojas'} color={'dorado'} price={7} color_option={false}/>
          </Grid>
          <Grid item xm={12} sm={6} md={4}>
            <Modelo modelo={'mini aros'} color={'plateado'} price={12} color_option={false}/>
          </Grid>
          <Grid item xm={12} sm={6} md={4}>
            <Modelo modelo={'pez'} color={'plateado'} price={10} color_option={false}/>
          </Grid>
          <Grid item xm={12} sm={6} md={4}>
            <Modelo modelo={'snoopy'} color={'plateado'} price={12} color_option={false}/>
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
      <Footer/>
    </section>
  );
};
