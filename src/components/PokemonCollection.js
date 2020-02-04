import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    // console.log(this.props.pokemons)
    const arrayofComponents=this.props.pokemons.map(pokemonObj=><PokemonCard key={pokemonObj.id} pokemon={pokemonObj}/>)
    return (
      <Card.Group itemsPerRow={6}>

        {/* <h1>Hello From Pokemon Collection</h1> */}
        {arrayofComponents}
      </Card.Group>
    )
  }
}

export default PokemonCollection
