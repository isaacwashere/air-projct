import React from 'react';
import { PersonProps } from '../../interfaces';
import './Person.css';

function Person({ person }: PersonProps) {
  return (
    <div className="person-container">
      <div className="image-container">
        <img className="image" src={person.avatar} />
      </div>
      <div className="name-desc-container">
        <p className="person-name">{person.name}</p>
        <p className="person-desc">{person.description}</p>
      </div>
    </div>
  );
}

export default Person;
