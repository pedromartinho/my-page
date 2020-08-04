import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Pedro", age: 25},
      { name: "Ana", age: 25}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 52},
        { name: 'Catarina', age: 52}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Mac', age: 11},
        { name: event.target.value, age: 11}
      ]
    })
  }

  render () {
    return (
      <div className="App">
        <h1>Hi there, refresh!</h1>
        <button onClick={this.switchNameHandler.bind(this, 'Martinho')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Martinho!')}
          >Ola</Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
        >Ola</Person>
      </div>
    );
  }
}

export default App;
