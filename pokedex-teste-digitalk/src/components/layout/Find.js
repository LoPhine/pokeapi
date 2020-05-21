import React, { Component } from 'react'
import styled from 'styled-components'


const Find = () => {

        return (

            <div class="row">
            <div class="col s10">
              <div class="row valign-wrapper">
                <div class="input-field col s10">
                  <i class="material-icons prefix mdi-search"><img src="https://img.icons8.com/color/48/000000/pokeball--v1.png"/></i>
                  <input type="text" id="autocomplete-input" class="autocomplete" />
                  <label for="autocomplete-input">Quem é esse pokémon?</label>
                </div>     
                <a class="waves-effect waves-light btn #e53935 red darken-1">Go!</a>           
              </div>             
            </div>            
          </div>
        )
    
}

export default Find;
