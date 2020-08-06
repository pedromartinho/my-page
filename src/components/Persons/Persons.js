import React from 'react';
import Radium from 'radium';
import styled from 'styled-components'
import Person from './Person/Person'

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const persons = ( props ) => props.persons.map ((person, index) => {
  return <Person
    name={person.name}
    age={person.age}
    click={() => props.clicked(index)}
    key={person.id} 
    changed={(event) => props.changed(event, person.id)}
  />
});

export default Radium(persons);
