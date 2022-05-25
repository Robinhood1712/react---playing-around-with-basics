import React, { Component } from 'react';
import './App.css';

import UserOutput from './UserOutput';
import UserInput from './UserInput';

class App extends Component { 

  constructor(props){
    super(props)
      this.state = {
      username: 'ade'
    }
  }
  
  

    eventChangeHandlerMethod = (event) => {
      this.setState({userName: event.target.value});
    }

    eventClickedHandler = () => {
      alert('hello');
      this.setState({userName: 'kunle'})
    }

  render() {
    return (
      <div className='App'>
        <UserInput  
          changed = {this.eventChangeHandlerMethod}
          name = {this.state.username}/>
        <UserOutput userName = {this.state.username} clicked = {this.eventClickedHandler}/> 
        <UserOutput userName = {this.state.username} />
        <button onClick={this.eventClickedHandler}> click me</button> 
        <UserOutput userName = 'ademola' clicked = {this.eventClickedHandler} />  
      </div>
    )

  }

}


export default App;



