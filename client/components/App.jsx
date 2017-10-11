import React from 'react'
import {getRobot} from '../apiClient'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
    this.updateSearch = this.updateSearch.bind(this)
    this.sendText = this.sendText.bind(this)
  }

  updateSearch (event) {
    this.setState({text:event.target.text})
    console.log(this.state)
  }

  sendText (e) {
    e.preventDefault()
    getRobot(this.state.text, (res) => {
      console.log('hello' + res)
      this.setState()
    })
  }

  render () {
    return (
      <div className='robot-form'>
        <h1>Hello! Robot!</h1>

        <form onSubmit={this.sendText}>
          <input type='text' name='search' value={this.state.text} onChange={this.updateSearch} />
          <input type="submit" value="search" />
        </form>
        <div>
          <img src="http:\/\/bit.ly\/1fQxZ6w" alt=""/>
        </div>
      </div>
    )
  }
}

export default App
