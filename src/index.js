import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import Home from './Home';
import Buy from './Buy';
import Contacto from './Contacto';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="buy" element={<Buy />}/>
        <Route exact path="plateado" element={<Home />}/>
        <Route exact path="dorado" element={<Home />}/>
        <Route exact path="contacto" element={<Contacto />}/>
      </Routes>
    </Router>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
