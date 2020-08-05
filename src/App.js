import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person'

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
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'blank'
      }
    }

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id} 
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}

        </div>
        )
        style.backgroundColor = 'red'
        style[':hover'] = {
          backgroundColor: 'salmon',
          color: 'blank'
        }
    }

    let classes = [];
    if (this.state.persons.length <= 2){
      classes.push('red');
    }
    if (this.state.persons.length <= 1){
      classes.push('bold');
    }


    return (
      <div className="App">
        <h1>Hi there, refresh!</h1>
        <p className={classes.join(' ')}>I'm a paragraph</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}
        >Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
