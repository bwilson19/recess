import React from 'react';
import './App.css';
import Header from '../Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainSearch from '../Searches/MainSearch/MainSearch';
import Browse from '../Browse/Browse'

function App() {
  return (
    <div className="App">
     <Header/>
  
     <MainSearch />
 
     <Browse />
    </div>
  );
}

export default App;
