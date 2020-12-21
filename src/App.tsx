import React from 'react';
import './App.css';
import SearchBar from './components/Search/SearchBar';

function App() {
  return (
    <div className="App">
      <div className="outer-bar">
        <h3 className="outer-bar-text">Air</h3>
      </div>
      <div className="content">
        <div className="header-container">
          <h1 className="header-title">The Person Finder</h1>
          <p className="header-text">
            If you just can't find someone and need to know what they look like, you've come to the
            right place! Just type the name of the person you are looking for below into the search
            box!
          </p>
        </div>
        <div className="main-search-container">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default App;
