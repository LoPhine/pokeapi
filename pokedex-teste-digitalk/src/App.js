import React from 'react';
import { Component } from 'react';
// Importando o materiaze
import 'materialize-css/dist/css/materialize.min.css';
// Importando o header
import Header from './Header'

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons : [],
    }    
  }

  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon";
    fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data) {
        this.setState({pokemons : data.results}, () => {})
      }
    })
    .catch(console.log)
  }

  render() {
    const {pokemons} = this.state;

    const renderedPokemonList = pokemons.map((pokemon, index) => {
      return (
        <div className="card text-center mx-auto" style={{"maxWidth" : "18rem"}} key={pokemon.id}>
          <div className="card-header"><b>{pokemon.name} : {pokemon.url}</b></div>        
        </div>  
      );
    });

    return (
      <div className="container">
        {/* Esse cara aqui chama o header */}
        <Header />
        <div className="card-columns">
          {renderedPokemonList}
        </div>
      </div>
    );
  }
}


// function App() {
//   return (
//     // Esse cara aqui chama o Header, atenção para a letras maiusculass
//     <Header />

//   )
// }


export default App;
