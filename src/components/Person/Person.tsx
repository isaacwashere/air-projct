import React from 'react';
import { PersonProps } from '../../interfaces';
import './Person.css';

function Person({ person }: PersonProps) {
  return (
    <div className="App">
      <img src={person.avatar} />
      <p>{person.name}</p>
      <p>{person.description}</p>
    </div>
  );
}

export default Person;
