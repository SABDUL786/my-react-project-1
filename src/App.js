import React, { Component } from 'react';
import './App.css';
import Userinput from './Userinput/Userinput';
import Useroutput from './Useroutput/Useroutput';


class App extends Component {

  state = {
        username :'ABDUL'
      }
   

  usernameChangeHandler = (event) => {
    this.setState =({
      username :event.target.value
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Welcome to My React 1st Assignments for Syntax</h1>

        <Userinput 
        changed = {this.usernameChangeHandler} 
        name = {this.state.username}/>

        <Useroutput userName = {this.state.username}/>
        <Useroutput userName = {this.state.username}/>
    
      </div>
    );
  }
  
}

export default App;