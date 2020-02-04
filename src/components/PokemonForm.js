import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }
  handleSubmit=(e) => {
    e.preventDefault()
    // console.log(this.state)
    this.props.handleFormSubmission(this.state)
  }


  // handleSubmit=(e) => {
  //   e.preventDefault()
  //   // console.log("hello")
  //   this.props.handleNewTodo(this.state)
  // }
//value and onChange
  handleAllChange=(e) => {
    const {value, name}=e.target
    this.setState({
      [name]:value
    })
    // console.log(this.state)
  }

  render() {
    const {name,hp,frontUrl,backUrl}=this.state
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={this.handleAllChange} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={this.handleAllChange} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={frontUrl} onChange={this.handleAllChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={backUrl} onChange={this.handleAllChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
