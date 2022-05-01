import React, { Component } from 'react';
import './App.css';

import UserOutput from './UserOutput';
import UserInput from './UserInput';

class App extends Component { 
    state = {
      username: 'ade'
    }

    eventChangeHandlerMethod = (event) => {
      this.setState({userName: event.target.value});
    }

  render() {
    return (
      <div className='App'>
        <UserInput  
          changed = {this.eventChangeHandlerMethod}
          name = {this.state.username}/>
        <UserOutput userName = {this.state.username}/> 
        <UserOutput userName = {this.state.username}/> 
        <UserOutput userName = 'ademola'/>  
      </div>
    )
  }
}


export default App;



