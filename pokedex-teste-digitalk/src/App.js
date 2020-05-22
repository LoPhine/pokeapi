
import React, { useState } from 'react';

// Importando o materiaze

import 'materialize-css/dist/css/materialize.min.css';

// Importando todas as paradas que eu criei

import Header from './components/layout/Header'
import Find from './components/layout/Find'
import Card from './components/layout/Card'
import Carrosel from './components/layout/Carrosel'



function App(props){
  
    return (

      <div className="Navbar">
        {/* Esse cara aqui chama o header */}
        <Header />

        <div className="container #fffde7 yellow lighten-5">
          <div>
            <Find />
            </div>
          <div>
            <Card />
            <div className="col s10 m6 center-align">
            <h3> NOME DO POKEMON </h3>
            <div>HABILIDADE 1</div>
            <div>HABILIDADE 2</div>
            </div>
            </div>
          <div>
            <Carrosel />
          </div>
          {/* <div className="card-columns"> */}
          {/* {renderedPokemonList} */}
        </div>
      </div>

    );
  
}

export default App;
