import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import MainSearch from '../Searches/MainSearch/MainSearch';
import Browse from '../Browse/Browse';
import Game from '../Game/Game';
import League from '../League/League';

import Results from '../Results/Results';

function App() {
  const [leagues, setLeagues] = useState([]);
  const [games, setGames] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [lastSearch, setLastSearch] = useState('');
  const [newResults, setResults] = useState([]);
  
  useEffect(() => {
    getLeagues();
    getGames();
  }, []);

  function getLeagues() {
    const url = 'https://recessapi.herokuapp.com/leagues/?format=json';
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setLeagues(response);
      })
      .catch(console.error);
  }

  function getGames() {
    const url = 'https://recessapi.herokuapp.com/games/?format=json';
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setGames(response);
      })
      .catch(console.error);
  }

  function handleChange(event) {
    event.preventDefault();
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let results = leagues.concat(games);
    const searchedResults = results.filter(
      result =>
        (result !== undefined &&
          result.name.toLowerCase().includes(searchString.toLowerCase())) ||
        result.city.toLowerCase().includes(searchString.toLowerCase())
    );
    setResults(searchedResults);
    setLastSearch(searchString);
  }

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <>
                <MainSearch
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  searchString={searchString}
                  lastSearch={lastSearch}
                />
                <Browse leagues={leagues} games={games} />
              </>
            );
          }}
        />
        <Route
          path={`/results/${lastSearch}`}
          render={() => {
            return <Results lastSearch={lastSearch} newResults={newResults} />;
          }}
        />
        <Route
          exact
          path="/league/:id"
          render={routerProps => {
            return (
              <>
                <League match={routerProps.match} games={games} />
              </>
            );
          }}
        />
        <Route
          exact
          path="/league/game/:id"
          render={routerProps => {
            return (
              <>
                <Game match={routerProps.match} />
              </>
            );
          }}
        />
       
      </Switch>
 
    </div>
  );
}

export default App;
