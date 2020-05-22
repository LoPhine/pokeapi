import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';


function Find(props) {

  const [NomePokemon, setNomePokemon] = useState('')
  function handlePesquisa() {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
  }

  return (
    <>
      <div class="row">
        <div class="col s10">
          <div class="row valign-wrapper">
            <div class="input-field col s10">
              <i class="material-icons prefix"><img src="https://img.icons8.com/color/48/000000/pokeball--v1.png" /></i>
              <input type="text" id="autocomplete-input" className="autocomplete" placeholder="NomePokemon" value={NomePokemon} onChange={e => setNomePokemon(e.target.value)} />
              <label for="autocomplete-input">Qual é esse pokemon?</label>
            </div>
            <a class="waves-effect waves-light btn #e53935 red darken-1" id="qualPoke" onClink={handlePesquisa} >Go!</a>
          </div>
        </div>
      </div>
    </>

  )         
 

}
  // inicia o autocomplete do search
  // document.addEventListener('DOMContentLoaded', function () {
  //   axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
  //   .then(response =>{console.log(response)
  //   })
  //   var elems = document.querySelectorAll();
  //   var instances = M.Autocomplete.init(elems, axios );
  // });

export default Find;
