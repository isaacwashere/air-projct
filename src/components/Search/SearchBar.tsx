import React, { ChangeEvent, useEffect, useState } from 'react';
import { Individual } from '../../interfaces';
import Person from '../Person/Person';
import { data } from '../../data';
import './SearchBar.css';

function SearchBar() {
  const [people, setPeople] = useState<Individual[]>();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const updateList = (e: ChangeEvent<HTMLInputElement>) => {
    if (!people) return;

    const text = e.target.value.toLowerCase().trim();
    const newPeople = data.filter((person: Individual) => {
      return person.name.toLowerCase().includes(text);
    });

    setSearchTerm(text);
    if (newPeople.length >= 1) setPeople(newPeople);
  };

  useEffect(() => {
    setPeople(data);
  }, []);

  return (
    <div className="search-bar">
      <div className="search-input-container">
        <input
          autoFocus
          className="input"
          onChange={updateList}
          placeholder="Type a name..."
        ></input>
        <div className="results-amount">
          {people && searchTerm ? `${people.length} results found for ${searchTerm}` : ''}
        </div>
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
