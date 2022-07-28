import React, { Component } from 'react';
import Blog from './Container/containers/Blog/Blog';
import {BrowserRouter} from 'react-router-dom'
// import './App.css';


class App extends Component { 

  // constructor(props){
  //   super(props)

  //   this.componentDidMount (){
  //     console.log ('[component will mount]')
  //   }
  //   //   this.state = {
  //   //   username: 'ade'
  //   // }
  // }
  // componentDidMount (){
  //   console.log ('[component will mount]')
  // }
  
  
    render() {
      return (
        <BrowserRouter>
          <div className="App">
           <Blog />
          </div>
        </BrowserRouter>
  
      );
    }  
  }

export default App;



