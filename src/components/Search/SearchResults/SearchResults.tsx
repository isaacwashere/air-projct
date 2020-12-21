import React from 'react';
import Person from '../../Person/Person';
import { Individual, SearchResultsProps } from '../../../interfaces';

function SearchResults({ results }: SearchResultsProps) {
  return (
    <div>
      {results &&
        results.map((i: Individual, index: number) => {
          return <Person person={i} key={index} />;
        })}
    </div>
  );
}

export default SearchResults;
