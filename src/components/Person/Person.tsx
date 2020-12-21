import React from 'react';
import { PersonProps } from '../../interfaces';
import './Person.css';

function Person({ person }: PersonProps) {
  const altify = (name: string): string => {
    return name.split(' ').join('-').toLowerCase();
  };

  return (
    <div className="name-desc-container">
      <img className="image" src={person.avatar} alt={`${altify(person.name)}-profile-pic`} />
      <div className="content-container">
        <p className="person-name">{person.name}</p>
        <p className="person-desc">{person.description}</p>
      </div>
    </div>
  );
}

export default Person;
