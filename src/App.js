import React, { Component } from 'react'
import Person from './Component/Person';
import Bio from './Component/Bio';
class App extends Component {

  constructor(props) {
   
    super(props)
    this.state = {
      isvisible: false
};
  }
  
  togglevisibility = () => {
    this.setState({
    isvisible : !this.state.isvisible
    })
}

  render() {
    return (
      <div className="App">
    <Bio/>
        <button className="visibility-btn" onClick={this.togglevisibility}>
          {this.state.isvisible ? 'Hide Person' : 'Show Person'}
        </button>
        {this.state.isvisible && <Person />}
      </div>
    )
  }
}

export default App

