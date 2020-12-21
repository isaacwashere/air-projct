import React, { ChangeEvent, useEffect, useState } from 'react';
import { Individual } from '../../interfaces';
import Person from '../Person/Person';
import { data } from '../../data';
import './SearchBar.css';

function SearchBar() {
  const [people, setPeople] = useState<Individual[]>();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Individual[]>();

  const updateList = (e: ChangeEvent<HTMLInputElement>) => {
    if (!people) return;

    const text = e.target.value.toLowerCase().trim();
    const newPeople = people.filter((person: Individual) => {
      return person.name.toLowerCase().includes(text);
    });

    setSearchTerm(text);
    newPeople.length >= 1 ? setSearchResults(newPeople) : setSearchResults(people);
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
          {searchResults?.length !== people?.length && searchTerm
            ? `${searchResults?.length} results found for ${searchTerm}`
            : 'Please enter a name to search for'}
        </div>
      </div>
      <div className="results-container">
        {searchResults
          ? searchResults.map((i: Individual, index: number) => {
              return <Person person={i} key={index} />;
            })
          : people?.map((i: Individual, index: number) => {
              return <Person person={i} key={index} />;
            })}
      </div>
    </div>
  );
}

export default SearchBar;
