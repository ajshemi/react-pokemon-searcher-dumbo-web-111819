import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state={
    front:true
  }
  handleToggle=() => {
    // console.log("toggle me")
    // console.log({this.props.sprites})
    
    this.setState({
      front:!this.state.front
    })
    // return console.log(this.state.front)
   
  }
  render() {
    // console.log(this.props.pokemon)
    const {name,stats,sprites}=this.props.pokemon
    // console.log(name,stats)
    let hpStat=stats.find((element) => element.name === 'hp')
    // console.log(name,hpStat)
    return (
      <Card>
        <div>
          <div onClick={this.handleToggle} className="image">
            <img src={this.state.front? sprites.front :sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name/*POKEMON NAME HERE*/}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {`${hpStat.value} ${hpStat.name}`}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
