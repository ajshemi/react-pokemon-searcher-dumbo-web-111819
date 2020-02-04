import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state={
    pokemons:[],
    searchTerm:''
  }
  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(response=>response.json())
    .then(pojos=>{this.setState({
      pokemons:pojos
      })
    })
  }
  // onChange=(e) => {
  //   this.props.handleOnChange(e.target.value)
  // }
  handleSearch=() => {
    const {searchTerm} = this.state;
    const lowercasedFilter = searchTerm.toLowerCase();
    // console.log(searchTerm)
    const filteredData = this.state.pokemons.filter(element=> element.name.toLowerCase().includes(lowercasedFilter)
    );
    return filteredData
    
  }

  handleOnChange=(e) => {
    // console.log(e.target.value)
    this.setState({
      searchTerm:e.target.value
    })
    
  }
  handleFormSubmisssion=(e) => {
    let copiedObj={
    // id:this.state.pokemons.length+1,
    name: e.name,
    stats: [{value:parseInt(e.hp,10), name:"hp"}],
    sprites:{
      front: e.frontUrl,
      back: e.backUrl
    }
  }
    fetch('http://localhost:3000/pokemon',{
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(
      copiedObj)
    })
    .then(response=>response.json())
    .then(pojo=>this.setState({
      pokemons:[...this.state.pokemons,pojo]
    }))


    
    //send the newObj to backend, take the responseObj from the backend to update setState. To update  setState append the response objt to the copy  of the current tate
    // console.log(copiedObj)

    // this.setState({
    //   pokemons:[...this.state.pokemons,copiedObj]
    //   })
    
  }
  
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleFormSubmission={this.handleFormSubmisssion}/>
        <br />
        <Search value={this.state.searcTerm} onChange={this.handleOnChange/*() => console.log('🤔')*/} />
        <br />
        <PokemonCollection pokemons={this.handleSearch()}/>
      </Container>
    )
  }
}

export default PokemonPage
//pass down value and onChange to child Search.js
//the collection of pokemons to render is being handled by handleSearch
//handleOnChange just takes in the event and set the searchTerm to the event.target