import React from 'react';
import Radium from 'radium';
import styled from 'styled-components'
import './Cockpit.css';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red': 'green'};
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon': 'lightgreen'};
    color: black;
  }
`;

const cockpit = ( props ) => {

  let classes = [];
  if (props.persons.length <= 2){
    classes.push('red');
  }
  if (props.persons.length <= 1){
    classes.push('bold');
  }
  return (
    <div>
      <h1>Hi there, refresh!</h1>
      <p className={classes.join(' ')}>I'm a paragraph</p>
      <StyledButton alt={props.alt}
        onClick={props.toggled}
      >Toggle Persons</StyledButton>
    </div>
    
  );
}

export default Radium(cockpit);
