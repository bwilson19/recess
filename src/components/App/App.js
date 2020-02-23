import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import MainSearch from '../Searches/MainSearch/MainSearch';
import Browse from '../Browse/Browse';
import Game from '../Game/Game'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <>
                <MainSearch /> <Browse /><Game/>
              </>
            );
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
