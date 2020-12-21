import React, { ChangeEvent, useEffect, useState } from 'react';
import { Individual } from '../../interfaces';
import Person from '../Person/Person';
import { data } from '../../data';
import './SearchBar.css';

function SearchBar() {
  const [people, setPeople] = useState<Individual[]>();

  const updateList = (e: ChangeEvent<HTMLInputElement>) => {
    if (!people) return;

    const text = e.target.value.toLowerCase();
    const newPeople = people.filter((person: Individual) => {
      return person.name.toLowerCase().includes(text);
    });

    if (newPeople.length >= 1) setPeople(newPeople);
    if (!text) setPeople(data);
  };

  useEffect(() => {
    setPeople(data);
  }, []);

  return (
    <div className="search-bar">
      <div className="search-input-container">
        <input className="input" onChange={updateList} placeholder="Type a name..."></input>
      </div>
      <div className="results-container">
        {people &&
          people.map((i: Individual, index: number) => {
            return <Person person={i} key={index} />;
          })}
      </div>
    </div>
  );
}

export default SearchBar;
