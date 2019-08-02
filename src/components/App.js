import React, { Component } from 'react';
import PokeList from './PokeList';
import DetailView from './DetailView';
import Pokemon from '../Pokemon';
import PokeTitle from './PokeTitle';


import './styles/App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {}
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
      const pokemon = new Pokemon(data);
      this.setState({pokemon})
    })
    .catch(err => console.log(err)); 
  }

    render() {
      return (
        <div> 
          <div className="title">
            <img src = "https://www.gfxmag.com/wp-content/uploads/2016/08/pokemon-vector-logo-gotta-catch-em-all-1.png"></img>
          </div>
          <div className="App">
            <PokeTitle/>
            <PokeList handleOnClick={this.handleOnClick}/>
            <DetailView pokemon={this.state.pokemon}/>
          </div>
        </div>
      );
    }
  }

  export default App;