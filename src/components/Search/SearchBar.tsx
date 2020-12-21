import React, { ChangeEvent, useEffect, useState } from 'react';
import { Individual } from '../../interfaces';
import Person from '../Person/Person';
import { data } from '../../data';

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
    <div className="App">
      <input className="input" onChange={updateList}></input>
      {people &&
        people.map((i: Individual, index: number) => {
          return <Person person={i} key={index} />;
        })}
    </div>
  );
}

export default SearchBar;
