import React from 'react'
import {getRobot} from '../apiClient'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({text:event.target.value})
  }

  handleSubmit (e) {
    e.preventDefault()
    getRobot(this.state.text, (imageUrl) => {
      this.setState(imageUrl)
    })
  }

  render () {
    return (
      <div className='robot-form'>
        <h1>Hello! Robot!</h1>

        <form onSubmit={this.handleSubmit}>
          <input type='text' name='name' value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="search" />
        </form>
        <div>
          <img src={this.state.imageUrl} alt=""/>
        </div>
      </div>
    )
  }
}

export default App

//In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input

//Specifying the value prop on a controlled component prevents the user from changing the input unless you desire so. If you’ve specified a value but the input is still editable, you may have accidentally set value to undefined or null.

//The form was submitting and was not suppose to => check for spellling errors

//Checking to see if the api call was made check the network tab in the console browser

//adding more console.log() to check the res, also expanding the response in the console to see what was sent back

//setState look at the react tab console

//
