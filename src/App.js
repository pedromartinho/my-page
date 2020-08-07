import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Persons from './components/Persons/Persons'
import Cockpit from './components/Cockpit/Cockpit'
import styled from 'styled-components'



class App extends Component {

  state = {
    persons: [
      { id: 'nsdajkah1', name: "Pedro", age: 26},
      { id: 'nsdajkah2', name: "Ana", age: 25},
      { id: 'nsdajkah3', name: "Baltazar", age: 1}
    ]
  }


  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons}) 
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    
    person.name = event.target.value

    const persons =[...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render () {

    let persons = null;

    if (this.state.showPersons){
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}/>
    }

    return (
      <StyleRoot>
        <div className="App">
          <Cockpit
            persons={this.state.persons}
            alt={this.state.showPersons}
            toggled={this.togglePersonsHandler}/>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
