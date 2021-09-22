import React, { Component } from 'react'

const Pokemon = ({avatar, name}) => (
  <figure>
    <img src={avatar} alt={name} />
    <figcaption>{name}</figcaption>
  </figure>
)


export default class AjaxApis extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      pokemons:[]
    }
  }

  componentDidMount(){
    const basicUrl="https://pokeapi.co/api/v2/pokemon/";
    fetch(basicUrl)
      .then( res => res.json())
      .then( res =>{
        console.log(res)
        res.results.forEach( pokemon => {
          fetch(pokemon.url)
            .then( infoReturned => infoReturned.json())
            .then( pokemonReturned => {
              console.log(pokemonReturned)
              const pokemonData = {
                id:pokemonReturned.id,
                name:pokemonReturned.name,
                avatar: pokemonReturned.sprites.front_default
              }

              this.setState({pokemons:[...this.state.pokemons,pokemonData]})
            })
        })
      })
  }
  render() {
    return (
      <>
        <h2>Asynchronous Requests in class components</h2>
        {this.state.pokemons.length === 0
          ?<p>Loading...</p>
          :(
            this.state.pokemons.map(({id,name,avatar}) => (
              <Pokemon key={id} avatar={avatar} name={name}/>
            ))
          )
        } 
      </>
    )
  }
}

